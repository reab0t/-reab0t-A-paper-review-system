#!/bin/bash

set -e

BACKUP_DIR="/backup/paper-review/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# 备份数据库
echo "开始备份数据库..."
docker exec paper-review-mysql mysqldump -u root -proot paper_review > $BACKUP_DIR/db_backup.sql

# 备份日志
echo "开始备份日志..."
cp -r /app/paper-review/logs $BACKUP_DIR/

# 压缩备份
echo "压缩备份文件..."
tar -czvf $BACKUP_DIR.tar.gz $BACKUP_DIR

# 清理旧备份
find /backup/paper-review/ -type f -name "*.tar.gz" -mtime +7 -exec rm {} \;

echo "备份完成！备份文件: $BACKUP_DIR.tar.gz"