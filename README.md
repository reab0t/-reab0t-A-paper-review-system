# 论文评审系统

基于微服务架构的论文投稿和评审管理平台。

## 项目结构

```
.
├── backend/                        # 后端服务
│   ├── common/                    # 公共工具和模型
│   │   ├── pom.xml               # 公共模块Maven配置
│   │   └── src/
│   │       ├── main/
│   │       │   ├── java/         # Java源文件
│   │       │   └── resources/    # 配置文件
│   ├── gateway/                   # API网关服务
│   │   ├── pom.xml               # 网关服务Maven配置
│   │   └── src/
│   │       ├── main/
│   │       │   ├── java/
│   │       │   │   └── com/paper/review/gateway/
│   │       │   │       ├── GatewayApplication.java    # 网关启动类
│   │       │   │       └── config/
│   │       │   │           └── CorsConfig.java        # 跨域配置
│   │       │   └── resources/
│   │       │       └── application.yml                # 网关配置文件
│   ├── paper-service/            # 论文管理服务
│   │   └── src/
│   │       ├── main/
│   │       │   ├── java/
│   │       │   └── resources/
│   ├── review-service/           # 评审管理服务
│   │   └── src/
│   │       ├── main/
│   │       │   ├── java/
│   │       │   └── resources/
│   └── user-service/             # 用户管理服务
│       └── src/
│           ├── main/
│           │   ├── java/
│           │   └── resources/
├── frontend/                      # 前端应用
│   ├── src/
│   │   ├── modules/              # 功能模块
│   │   │   ├── paper/           # 论文管理模块
│   │   │   │   ├── api.ts       # API调用
│   │   │   │   ├── store.ts     # 状态管理
│   │   │   │   └── types.ts     # 类型定义
│   │   │   └── review/          # 评审管理模块
│   │   ├── router/              # 路由配置
│   │   ├── views/               # 视图组件和页面
│   │   │   ├── papers/         # 论文相关视图
│   │   │   └── reviews/        # 评审相关视图
│   │   └── utils/              # 工具函数
│   └── public/                  # 静态资源
├── docs/                        # 文档
│   ├── API.md                  # API文档
│   └── development.md          # 开发指南
├── config/                     # 配置文件
│   ├── prometheus/            # Prometheus监控配置
│   │   └── prometheus.yml    # Prometheus主配置文件
│   └── logstash/             # Logstash日志配置
│       ├── logstash.yml      # Logstash主配置文件
│       └── pipeline/         # Logstash管道配置
│           └── logstash.conf # 日志处理管道配置
├── .github/                   # GitHub配置
│   └── workflows/            # GitHub Actions工作流
│       └── ci.yml           # CI/CD配置文件
└── docker-compose.yml        # Docker编排配置文件
```

## 新增配置文件说明

### 1. Docker编排配置
`docker-compose.yml` 包含了所有服务的容器配置：
- Nacos：服务发现和配置中心
- MySQL：数据库服务
- Redis：缓存服务
- MinIO：对象存储服务
- RabbitMQ：消息队列服务
- ELK：日志收集和分析
- Prometheus + Grafana：监控系统

### 2. CI/CD配置
`.github/workflows/ci.yml` 定义了持续集成和部署流程：
- 自动构建：前端和后端代码
- 自动测试：单元测试和集成测试
- 自动部署：开发环境和生产环境

### 3. 监控配置
`config/prometheus/prometheus.yml` 配置了监控目标：
- Spring Boot应用监控
- 服务器资源监控
- 容器监控
- 自定义指标采集

### 4. 日志配置
`config/logstash/` 下的配置文件：
- `logstash.yml`：Logstash基础配置
- `pipeline/logstash.conf`：日志处理管道配置
  - 收集应用日志
  - 解析日志格式
  - 存储到Elasticsearch

### 5. 网关服务
`backend/gateway/` 下的主要文件：
- `GatewayApplication.java`：网关启动类
- `CorsConfig.java`：跨域配置
- `application.yml`：网关路由和服务配置

## 技术栈

### 后端技术栈
- Java 21
- Spring Boot
- Spring Cloud
- PostgreSQL
- Maven

### 前端技术栈
- Vue 3
- TypeScript
- Vite
- Vue Router
- Element Plus

## 项目访问

- 代码仓库：https://github.com/reab0t/-reab0t-A-paper-review-system
- 开发环境：https://github.com/reab0t/-reab0t-A-paper-review-system/deployments/Development
  - 状态：[![Development Status](https://github.com/reab0t/-reab0t-A-paper-review-system/actions/workflows/dev-deploy.yml/badge.svg?branch=develop)](https://github.com/reab0t/-reab0t-A-paper-review-system/actions)

- 测试环境：https://github.com/reab0t/-reab0t-A-paper-review-system/deployments/Testing
  - 状态：[![Testing Status](https://github.com/reab0t/-reab0t-A-paper-review-system/actions/workflows/test-deploy.yml/badge.svg?branch=test)](https://github.com/reab0t/-reab0t-A-paper-review-system/actions)

- 生产环境：https://github.com/reab0t/-reab0t-A-paper-review-system/deployments/Production
  - 状态：[![Production Status](https://github.com/reab0t/-reab0t-A-paper-review-system/actions/workflows/prod-deploy.yml/badge.svg?branch=main)](https://github.com/reab0t/-reab0t-A-paper-review-system/actions)

> 注：环境部署状态可在 GitHub Actions 中查看。具体配置请访问仓库的 Settings -> Environments 页面。

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

## 模块详细说明
## 模块详细说明

### Backend Services
### 后端服务

#### Common Module 公共模块
- Shared entities 共享实体
- Utility classes 工具类
- Common configurations 公共配置
- Base exceptions 基础异常类

#### Paper Service 论文服务
- Paper submission 论文提交
- Paper lifecycle management 论文生命周期管理
- File storage integration 文件存储集成
- Version control 版本控制

#### Review Service 评审服务
- Review assignment 评审分配
- Review process management 评审流程管理
- Feedback collection 反馈收集
- Review statistics 评审统计

#### User Service 用户服务
- Authentication 认证
- Authorization 授权
- Profile management 档案管理
- Role management 角色管理

### Frontend Modules
### 前端模块

#### Paper Module 论文模块
- Paper submission interface 论文提交界面
- Paper list and details 论文列表和详情
- Status tracking 状态追踪
- File upload/download 文件上传下载

#### Review Module 评审模块
- Review dashboard 评审仪表板
- Review form 评审表单
- Review history 评审历史
- Statistics visualization 统计可视化

## Development Guide
## 开发指南

### Backend Development
### 后端开发

```bash
# Start specific service 启动特定服务
cd backend/paper-service
mvn spring-boot:run

# Run tests 运行测试
mvn test

# Package service 打包服务
mvn package
```

### Frontend Development
### 前端开发

```bash
# Start development server 启动开发服务器
cd frontend
npm run dev

# Run unit tests 运行单元测试
npm run test:unit

# Build for production 生产环境构建
npm run build
```

## API Documentation
## API文档

See [API.md](docs/API.md) for detailed API documentation.
详细的API文档请参见 [API.md](docs/API.md)。

## Database Schema
## 数据库架构

### Paper Collection 论文集合
```typescript
interface Paper {
  id: string;              // Paper ID 论文ID
  title: string;           // Paper title 论文标题
  abstract: string;        // Abstract 摘要
  authors: string[];       // Author list 作者列表
  status: PaperStatus;     // Current status 当前状态
  submissionDate: Date;    // Submission date 提交日期
  lastModified: Date;      // Last modified date 最后修改日期
}
```

### Review Collection 评审集合
```typescript
interface Review {
  id: string;              // Review ID 评审ID
  paperId: string;         // Referenced paper 关联论文
  reviewerId: string;      // Reviewer ID 评审人ID
  comments: string;        // Review comments 评审意见
  score: number;           // Review score 评分
  status: ReviewStatus;    // Review status 评审状态
  createdAt: Date;        // Creation date 创建日期
}
```



