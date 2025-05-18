#!/bin/bash

APP_NAME=${1:-likelion_backend}

# 실행 중인 Spring Boot 앱 프로세스 확인
APP_PID=$(pgrep -f 'java -jar.*\.jar')

if [ -z "$APP_PID" ]; then
  echo "[❌] Spring Boot 앱이 실행 중이지 않습니다."
  exit 1
else
  echo "[✅] Spring Boot 앱이 정상 실행 중입니다. (PID: $APP_PID)"
  echo "------- 앱 실행 상태 (최근 로그) ---------"
  tail -n 20 ~/deploy/logs/$APP_NAME.log
fi
