-- 创建数据库
CREATE DATABASE IF NOT EXISTS paper_review DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE paper_review;

-- 用户表
CREATE TABLE IF NOT EXISTS `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '用户ID',
    `username` VARCHAR(50) NOT NULL COMMENT '用户名',
    `password` VARCHAR(100) NOT NULL COMMENT '密码',
    `email` VARCHAR(100) NOT NULL COMMENT '邮箱',
    `real_name` VARCHAR(50) COMMENT '真实姓名',
    `phone` VARCHAR(20) COMMENT '手机号',
    `avatar` VARCHAR(255) COMMENT '头像URL',
    `role` VARCHAR(20) NOT NULL COMMENT '角色：ADMIN/REVIEWER/AUTHOR',
    `status` TINYINT NOT NULL DEFAULT 1 COMMENT '状态：0-禁用，1-启用',
    `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_username` (`username`),
    UNIQUE KEY `uk_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 论文表
CREATE TABLE IF NOT EXISTS `paper` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '论文ID',
    `title` VARCHAR(255) NOT NULL COMMENT '论文标题',
    `abstract` TEXT COMMENT '摘要',
    `keywords` VARCHAR(255) COMMENT '关键词',
    `author_id` BIGINT NOT NULL COMMENT '作者ID',
    `file_url` VARCHAR(255) NOT NULL COMMENT '论文文件URL',
    `status` VARCHAR(20) NOT NULL COMMENT '状态：DRAFT/SUBMITTED/REVIEWING/ACCEPTED/REJECTED',
    `submit_time` DATETIME COMMENT '提交时间',
    `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    KEY `idx_author_id` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='论文表';

-- 评审分配表
CREATE TABLE IF NOT EXISTS `review_assignment` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '分配ID',
    `paper_id` BIGINT NOT NULL COMMENT '论文ID',
    `reviewer_id` BIGINT NOT NULL COMMENT '评审人ID',
    `status` VARCHAR(20) NOT NULL COMMENT '状态：PENDING/ACCEPTED/REJECTED/COMPLETED',
    `deadline` DATE NOT NULL COMMENT '截止日期',
    `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_paper_reviewer` (`paper_id`, `reviewer_id`),
    KEY `idx_reviewer_id` (`reviewer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评审分配表';

-- 评审意见表
CREATE TABLE IF NOT EXISTS `review_comment` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '评审意见ID',
    `assignment_id` BIGINT NOT NULL COMMENT '评审分配ID',
    `score` INT NOT NULL COMMENT '评分（1-5）',
    `comment` TEXT NOT NULL COMMENT '评审意见',
    `recommendation` VARCHAR(20) NOT NULL COMMENT '建议：ACCEPT/MINOR_REVISION/MAJOR_REVISION/REJECT',
    `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    KEY `idx_assignment_id` (`assignment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评审意见表';

-- 消息通知表
CREATE TABLE IF NOT EXISTS `notification` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '通知ID',
    `user_id` BIGINT NOT NULL COMMENT '接收用户ID',
    `title` VARCHAR(100) NOT NULL COMMENT '通知标题',
    `content` TEXT NOT NULL COMMENT '通知内容',
    `type` VARCHAR(20) NOT NULL COMMENT '类型：SYSTEM/REVIEW/PAPER',
    `read_status` TINYINT NOT NULL DEFAULT 0 COMMENT '读取状态：0-未读，1-已读',
    `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (`id`),
    KEY `idx_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='消息通知表';

-- 添加外键约束
ALTER TABLE `paper`
ADD CONSTRAINT `fk_paper_author` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);

ALTER TABLE `review_assignment`
ADD CONSTRAINT `fk_assignment_paper` FOREIGN KEY (`paper_id`) REFERENCES `paper` (`id`),
ADD CONSTRAINT `fk_assignment_reviewer` FOREIGN KEY (`reviewer_id`) REFERENCES `user` (`id`);

ALTER TABLE `review_comment`
ADD CONSTRAINT `fk_comment_assignment` FOREIGN KEY (`assignment_id`) REFERENCES `review_assignment` (`id`);

ALTER TABLE `notification`
ADD CONSTRAINT `fk_notification_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

-- 插入管理员账号
INSERT INTO `user` (`username`, `password`, `email`, `real_name`, `role`, `status`)
VALUES ('admin', '$2a$10$X/hX6J2POXuZKzJqB7V48O9FGS3XqZoXQV3zqUlNeONPEYI0iZK2a', 'admin@example.com', '系统管理员', 'ADMIN', 1); 