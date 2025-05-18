APP_PID=$(pgrep -f 'java -jar.*\.jar')

if [ -z "$APP_PID" ]; then
  echo "[❌] Spring Boot 앱이 실행 중이지 않습니다."
  exit 1
else
  echo "[✅] Spring Boot 앱을 정지합니다. (PID: $APP_PID)"
  kill $APP_PID
fi