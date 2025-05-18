import os
import sys
from datetime import datetime, timezone
from dateutil import parser
import requests
from github import Github

# ─── 환경 변수 로드 ─────────────────────────────────────
TOKEN   = os.getenv("GITHUB_TOKEN")
OWNER   = os.getenv("OWNER")
REPO    = os.getenv("REPO")
PRJ_NUM = int(os.getenv("PROJECT_NUMBER", "1"))
if not all([TOKEN, OWNER, REPO]):
    print("필수 환경변수가 설정되지 않았습니다.", file=sys.stderr)
    sys.exit(1)

# ─── GraphQL 엔드포인트 준비 ─────────────────────────────
API_URL = "https://api.github.com/graphql"
HEADERS = {"Authorization": f"bearer {TOKEN}"}

def fetch_project_items(cursor=None):
    """프로젝트 v2 아이템을 페이지별로 가져오기"""
    after = f', after: "{cursor}"' if cursor else ""
    query = f"""
    query {{
      repository(owner: "{OWNER}", name: "{REPO}") {{
        projectV2(number: {PRJ_NUM}) {{
          items(first: 100{after}) {{
            pageInfo {{ hasNextPage endCursor }}
            nodes {{
              content {{ ... on Issue {{ number }} }}
              fieldValues(first: 10) {{
                nodes {{
                  __typename
                  ... on ProjectV2ItemFieldDateValue {{
                    projectField {{ name }}
                    dateValue
                  }}
                }}
              }}
            }}
          }}
        }}
      }}
    }}
    """
    resp = requests.post(API_URL, json={"query": query}, headers=HEADERS)
    resp.raise_for_status()
    return resp.json()["data"]["repository"]["projectV2"]["items"]

def collect_items():
    """모든 프로젝트 아이템(issue 번호, End date)을 수집"""
    items = []
    cursor = None
    while True:
        data = fetch_project_items(cursor)
        for node in data["nodes"]:
            issue_num = node["content"]["number"]
            end_date = None
            for fv in node["fieldValues"]["nodes"]:
                if (fv.get("__typename") == "ProjectV2ItemFieldDateValue" and
                    fv["projectField"]["name"] == "End date"):
                    end_date = fv["dateValue"]
                    break
            items.append((issue_num, end_date))
        if not data["pageInfo"]["hasNextPage"]:
            break
        cursor = data["pageInfo"]["endCursor"]
    return items

# ─── PyGithub 세팅 ───────────────────────────────────────
gh   = Github(TOKEN)
repo = gh.get_repo(f"{OWNER}/{REPO}")
today = datetime.now(timezone.utc).date()

def ensure_label(name, color="ededed"):
    """라벨이 없으면 생성, 있으면 반환"""
    try:
        return repo.get_label(name)
    except:
        return repo.create_label(name=name, color=color)

def main():
    items = collect_items()
    for num, end_iso in items:
        if not end_iso:
            continue

        end_date = parser.isoparse(end_iso).date()
        delta = (end_date - today).days
        issue = repo.get_issue(num)

        # 기한 지난 이슈: 기존 D- 라벨 모두 제거
        if delta < 0:
            for lbl in issue.labels:
                if lbl.name.startswith("D-") or lbl.name.lower() == "d-day":
                    issue.remove_from_labels(lbl)
            continue

        # 붙일 라벨 결정
        label = "D-day" if delta == 0 else f"D-{delta}"

        # 기존 잘못된 라벨 제거
        for lbl in issue.labels:
            if (lbl.name.startswith("D-") or lbl.name.lower() == "d-day") and lbl.name != label:
                issue.remove_from_labels(lbl)

        # 라벨 생성(없을 경우)
        try:
            repo.get_label(label)
        except:
            color = "ea4a5a" if delta == 0 else "0e8a16"
            ensure_label(label, color=color)

        # 라벨 추가
        if label not in [l.name for l in issue.labels]:
            issue.add_to_labels(label)
            print(f"Issue #{num} → {label}")

if __name__ == "__main__":
    main()
