TASKKILL /F /IM rclone.exe /T
cd /d %~dp0
rclone.exe rcd --rc-serve --rc-web-gui-no-open-browser  --rc-user=gui --rc-pass=XXXX --rc-files="./build" -vv