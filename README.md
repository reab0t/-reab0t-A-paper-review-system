# 论文评审系统 (A-Paper Review System)

基于 Spring Cloud 微服务架构构建的分布式论文评审系统。

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

## 技术栈

### 后端技术栈
- Spring Cloud（微服务框架）
  - Spring Boot（基础框架）
  - Spring Cloud Gateway（网关服务）
  - Spring Cloud Netflix（服务注册与发现）
  - Spring Cloud Config（配置中心）
- MySQL（关系型数据库）
- Redis（缓存服务）
- Maven（项目构建工具）

### 前端技术栈
- Vue 3（前端框架）
- Element Plus（UI组件库）
- Vite（构建工具）
- TypeScript（类型安全的 JavaScript）

### 运维技术栈
- Docker（容器化部署）
- Docker Compose（容器编排）
- Git（版本控制）
- Maven（依赖管理）

## 快速开始

### 环境要求
- JDK 21 
- Maven 3.9.10 
- Docker 和 Docker Compose
- Node.js 16 
- MySQL 8.0 

### 开发环境搭建
1. 克隆项目代码：
```bash
git clone https://github.com/reab0t/-reab0t-A-paper-review-system.git
```

2. 构建后端服务：
```bash
cd backend
mvn clean install
```

3. 使用 Docker Compose 启动服务：
```bash
docker-compose up -d
```

4. 启动前端开发服务器：
```bash
cd frontend
npm install
npm run dev
```

## 项目管理规范

### Git 工作流程
1. 从 develop 分支创建功能分支：
```bash
git checkout -b feature/功能名称
```

2. 提交变更：
```bash
git add .
git commit -m "feat: 你的提交信息"
```

3. 推送变更并创建 Pull Request 到 develop 分支

### 分支管理策略
- `main`: 生产环境分支
- `develop`: 开发集成分支
- `feature/*`: 功能开发分支
- `hotfix/*`: 生产环境紧急修复分支
- `release/*`: 发布候选分支

### 提交信息规范
```
<类型>(<范围>): <主题>

<内容描述>
```

提交类型说明：
- feat: 新功能开发
- fix: 错误修复
- docs: 文档更新
- style: 代码格式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建或工具相关

## 参与贡献
详细的贡献指南请参考 [CONTRIBUTING.md](CONTRIBUTING.md)

## 团队分工

| 成员 | 角色 | 职责分工 | 技术重点 |
|------|------|----------|-----------|
| 靳磊 | 项目组长 | 项目管理与系统架构设计 | • Spring Cloud 微服务架构设计与治理<br>• Docker容器化部署<br>• Git版本控制<br>• 项目文档管理 |
| 傅依琳 | 前端架构师 | 前端架构设计与实现 | • Vue 3.0框架<br>• Element Plus UI组件库<br>• TypeScript<br>• Vue Router路由管理<br>• Pinia状态管理<br>• npm包管理 |
| 赵湄灵 | 核心开发 | 认证授权与用户管理模块 | • Spring Boot 3.2.x<br>• Spring Security安全框架<br>• JWT令牌认证<br>• MyBatis持久层框架<br>• MySQL数据库设计<br>• Redis缓存 |
| 王誉晗 | 功能开发 | 论文管理与评审模块 | • Spring Boot 3.2.x<br>• Spring Cloud Gateway网关<br>• MyBatis-Plus增强工具<br>• MySQL数据库<br>• MinIO文件存储 |
| 袁太仙 | 运维开发 | 消息通知与运维支持 | • Spring Boot 3.2.x<br>• WebSocket即时通讯<br>• RabbitMQ消息队列<br>• ELK日志系统<br>• Prometheus监控 |