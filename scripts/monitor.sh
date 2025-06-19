#!/bin/bash

# 监控系统资源
echo "系统资源监控:"
echo "------------------------"
free -h
df -h
top -bn1 | head -n 10

# 监控服务状态
echo "------------------------"
echo "服务状态监控:"
echo "------------------------"
docker ps -a

# 监控日志
echo "------------------------"
echo "最近10条应用日志:"
echo "------------------------"
tail -n 10 /app/paper-review/logs/app.log