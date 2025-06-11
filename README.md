# 论文评审系统

## 项目简介
论文评审系统是一个基于Spring Cloud微服务架构的论文投稿和评审管理平台。系统支持论文在线投稿、专家分配、在线评审、结果反馈等完整的论文评审流程。

## 项目访问

- 代码仓库：https://github.com/reab0t/-reab0t-A-paper-review-system
- 开发环境：https://github.com/reab0t/-reab0t-A-paper-review-system/deployments/Development
  - 状态：[![Development Status](https://github.com/reab0t/-reab0t-A-paper-review-system/actions/workflows/dev-deploy.yml/badge.svg?branch=develop)](https://github.com/reab0t/-reab0t-A-paper-review-system/actions)

- 测试环境：https://github.com/reab0t/-reab0t-A-paper-review-system/deployments/Testing
  - 状态：[![Testing Status](https://github.com/reab0t/-reab0t-A-paper-review-system/actions/workflows/test-deploy.yml/badge.svg?branch=test)](https://github.com/reab0t/-reab0t-A-paper-review-system/actions)

- 生产环境：https://github.com/reab0t/-reab0t-A-paper-review-system/deployments/Production
  - 状态：[![Production Status](https://github.com/reab0t/-reab0t-A-paper-review-system/actions/workflows/prod-deploy.yml/badge.svg?branch=main)](https://github.com/reab0t/-reab0t-A-paper-review-system/actions)

> 注：环境部署状态可在 GitHub Actions 中查看。具体配置请访问仓库的 Settings -> Environments 页面。

## 项目结构

```
A-paper-review-system/
├── backend/                        # 后端服务（Maven 多模块工程）
│   ├── common/                     # 公共模块（实体类、工具类等）
│   ├── gateway/                    # API 网关服务（Spring Cloud Gateway）
│   ├── user-service/              # 用户管理服务
│   ├── paper-service/             # 论文管理服务
│   └── review-service/            # 评审管理服务
├── frontend/                       # 前端项目（Vue 3）
├── db/                            # 数据库脚本
└── docker/                        # Docker 配置文件
```

## 团队成员与技术栈

### 靳磊（组长）- 架构设计和项目管理
- **职责**：
  - 项目整体架构设计
  - 微服务架构规划
  - 开发流程管理
  - 技术选型与决策
  - CI/CD流程设计

- **技术栈**：
  - Spring Cloud 微服务架构
  - Docker容器化部署
  - GitHub Actions自动化
  - ELK日志系统
  - Prometheus + Grafana监控

### 傅依琳 - 前端架构
- **职责**：
  - 前端架构设计
  - 组件库开发
  - 性能优化
  - 前端工程化
  - UI/UX设计

- **技术栈**：
  - Vue 3.0 + TypeScript
  - Element Plus
  - Vite构建工具
  - Pinia状态管理
  - Vitest单元测试
  - Cypress E2E测试

### 赵湄灵 - 认证授权与用户管理
- **职责**：
  - 用户认证系统
  - 权限管理模块
  - 安全策略实现
  - 用户服务开发
  - 数据库设计

- **技术栈**：
  - Spring Security
  - JWT认证
  - MyBatis-Plus
  - Redis缓存
  - MySQL数据库

### 王誉晗 - 论文管理与评审
- **职责**：
  - 论文管理模块
  - 评审流程实现
  - 文件存储服务
  - API网关开发
  - 服务集成

- **技术栈**：
  - Spring Cloud Gateway
  - MinIO对象存储
  - RabbitMQ消息队列
  - JPA持久层
  - RESTful API设计

### 袁太仙 - 运维和消息通知
- **职责**：
  - 系统部署维护
  - 消息通知系统
  - 监控告警
  - 性能优化
  - 自动化运维

- **技术栈**：
  - Docker Compose
  - ELK日志平台
  - Prometheus监控
  - RabbitMQ
  - Shell脚本

## 技术栈详解

### 后端技术栈
```
Spring Cloud 微服务
├── Spring Boot 3.2.0（基础框架）
├── Spring Cloud Gateway（网关服务）
├── Spring Security + JWT（认证授权）
├── Spring Cloud Config（配置中心）
└── Spring Cloud Netflix（服务发现）

数据存储与缓存
├── MySQL 8.0（关系型数据库）
├── Redis 6.2（缓存服务）
├── MinIO（对象存储）
└── MyBatis-Plus/JPA（ORM框架）

消息与异步
├── RabbitMQ 3.9（消息队列）
└── WebSocket（实时通信）

监控与日志
├── ELK Stack（日志收集）
├── Prometheus（监控系统）
└── Grafana（可视化面板）
```

### 前端技术栈
```
核心框架
├── Vue 3.0
├── TypeScript
└── Element Plus

工程化工具
├── Vite（构建工具）
├── ESLint（代码检查）
└── Prettier（代码格式化）

状态管理
├── Pinia（状态管理）
└── Vue Router（路由管理）

测试工具
├── Vitest（单元测试）
└── Cypress（E2E测试）
```

### 运维技术栈
```
容器化部署
├── Docker
└── Docker Compose

持续集成/部署
├── GitHub Actions
└── Shell Scripts

监控与日志
├── ELK Stack
├── Prometheus
└── Grafana

自动化运维
├── Ansible
└── Jenkins
```

## 系统架构

### 架构图
```
                        [Nginx反向代理]
                              |
                   [Spring Cloud Gateway]
                    /         |          \
        [用户服务]     [论文服务]    [评审服务]
            |            |             |
        [MySQL]       [MinIO]      [RabbitMQ]
            \            |             /
             ----[Redis缓存服务]----
                        |
              [ELK日志收集系统]
                        |
            [Prometheus + Grafana监控]
```

### 模块说明
- `gateway`: API网关服务
- `common`: 公共模块
- `user-service`: 用户服务
- `paper-service`: 论文服务
- `review-service`: 评审服务

## 功能特性

### 用户管理
- [x] 用户注册与登录
- [x] 角色权限管理
- [x] 个人信息维护

### 论文管理
- [x] 在线投稿
- [x] 论文存储
- [x] 状态跟踪
- [x] 修改与撤回

### 评审流程
- [x] 专家分配
- [x] 在线评审
- [x] 意见反馈
- [x] 结果通知

### 系统管理
- [x] 评审配置
- [x] 统计分析
- [x] 日志审计
- [x] 系统监控

## 快速开始

### 环境要求
- JDK 21（Eclipse Temurin）
- Maven 3.9.10
- Node.js 16.x
- Docker最新稳定版
- Docker Compose最新稳定版

### 开发环境搭建

1. 克隆项目
```bash
git clone https://github.com/reab0t/-reab0t-A-paper-review-system.git
cd paper-review-system
```

2. 后端服务启动
```bash
# 编译项目
mvn clean install

# 启动服务
mvn spring-boot:run
```

3. 前端开发环境
```bash
# 安装依赖
cd frontend
npm install

# 启动开发服务器
npm run dev
```

### 生产环境部署

1. 构建镜像
```bash
docker-compose build
```

2. 启动服务
```bash
docker-compose up -d
```

## 项目文档

- [开发规范](docs/开发规范.md)
- [API文档](docs/API文档.md)
- [部署文档](docs/部署文档.md)
- [贡献指南](docs/贡献指南.md)

## 开发进度

### 已完成功能
- [x] 用户认证与授权
- [x] 论文上传与管理
- [x] 评审流程管理
- [x] 消息通知系统
- [x] 统计分析功能

### 开发中功能
- [ ] 评审专家推荐
- [ ] 论文查重集成
- [ ] 移动端适配
- [ ] 国际化支持

### 计划功能
- [ ] AI辅助评审
- [ ] 区块链存证
- [ ] 实时协作
- [ ] 知识图谱

## 版本历史

### v1.0.0 (2024-01-01)
- 完成基础架构搭建
- 实现核心业务流程
- 支持基本评审功能

### v1.1.0 (进行中)
- 优化评审流程
- 增加数据分析
- 提升系统性能

## 贡献代码

1. Fork 项目
2. 创建功能分支
3. 提交代码
4. 发起 Pull Request

详见 [贡献指南](docs/贡献指南.md)



