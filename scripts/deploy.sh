#!/bin/bash

set -e

echo "开始部署应用..."
cd /app/paper-review

# 拉取最新代码
git pull

# 构建并启动容器
docker compose down
docker compose pull
docker compose up -d

echo "部署完成！"