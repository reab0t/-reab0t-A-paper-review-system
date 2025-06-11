# Contributing to Paper Review System

We love your input! We want to make contributing to Paper Review System as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the docs/ with any necessary documentation.
3. The PR may be merged once you have the sign-off of two other developers.

## Code Style Guidelines

### Frontend

- Use TypeScript for all new code
- Follow Vue 3 Composition API patterns
- Use async/await for asynchronous operations
- Write meaningful component and variable names
- Add comments for complex logic
- Follow the existing project structure

### Backend

- Follow Java code conventions
- Write unit tests for new features
- Use meaningful names for classes and methods
- Document public APIs
- Keep methods focused and concise
- Use dependency injection

## Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## 项目贡献指南

## 团队成员与职责

### 小组成员分工
| 成员 | 角色 | 职责分工 | 技术重点 |
|------|------|----------|-----------|
| 靳磊 | 项目组长 | 项目管理与系统架构设计 | - Spring Cloud 微服务架构设计与治理<br>- Docker容器化部署<br>- Git版本控制<br>- 项目文档管理 |
| 傅依琳 | 前端架构师 | 前端架构设计与实现 | - Vue 3.0框架<br>- Element Plus UI组件库<br>- TypeScript<br>- Vue Router路由管理<br>- Pinia状态管理<br>- npm包管理 |
| 赵湄灵 | 核心开发 | 认证授权与用户管理模块 | - Spring Boot 3.2.x<br>- Spring Security安全框架<br>- JWT令牌认证<br>- MyBatis持久层框架<br>- MySQL数据库设计<br>- Redis缓存 |
| 王誉晗 | 功能开发 | 论文管理与评审模块 | - Spring Boot 3.2.x<br>- Spring Cloud Gateway网关<br>- MyBatis-Plus增强工具<br>- MySQL数据库<br>- MinIO文件存储 |
| 袁太仙 | 运维开发 | 消息通知与运维支持 | - Spring Boot 3.2.x<br>- WebSocket即时通讯<br>- RabbitMQ消息队列<br>- ELK日志系统<br>- Prometheus监控 |

## 开发环境要求

- JDK 21
- Maven 3.9.10
- Docker 和 Docker Compose
- Node.js 16
- MySQL 8.0

## 分支管理

### 分支命名规范

- `main`: 主分支，用于生产环境部署
- `develop`: 开发分支，所有特性开发完成后合并到此分支
- `feature/*`: 特性分支，如 `feature/user-login`
- `hotfix/*`: 紧急修复分支，如 `hotfix/login-bug`
- `release/*`: 发布分支，如 `release/v1.0.0`

### 工作流程

1. 从 `develop` 分支创建新的特性分支
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

2. 在特性分支上开发并提交代码
3. 完成开发后，提交 Pull Request 到 `develop` 分支
4. 代码审查通过后合并到 `develop` 分支

## CI/CD 流程说明

### 持续集成 (CI)

#### 1. 代码提交检查
- 提交到任何分支时触发基础检查
- 包含代码风格检查、编译检查
- 运行单元测试和集成测试

#### 2. 质量控制
- SonarQube 代码质量分析
  - 代码覆盖率检查
  - 代码异味检测
  - 安全漏洞扫描
  - 重复代码检查

#### 3. 构建流程
- 后端服务构建
  - Maven 构建并打包
  - Docker 镜像构建
- 前端项目构建
  - npm 依赖安装
  - TypeScript 类型检查
  - 生产环境构建

### 持续部署 (CD)

#### 1. 开发环境 (Development)
- 触发条件：`develop` 分支代码更新
- 自动部署到开发服务器
- 部署后自动运行集成测试

#### 2. 预发布环境 (Staging)
- 触发条件：`release/*` 分支代码更新
- 自动部署到预发布服务器
- 运行完整的端到端测试
- 性能测试和压力测试

#### 3. 生产环境 (Production)
- 触发条件：`main` 分支代码更新
- 需要手动确认部署
- 自动化部署流程
- 部署后的健康检查

### 监控和告警

#### 1. 应用监控
- Prometheus 收集应用指标
- Grafana 展示监控面板
- 自定义告警规则

#### 2. 日志管理
- ELK 日志收集和分析
  - Elasticsearch 存储日志
  - Logstash 日志处理
  - Kibana 日志可视化

#### 3. 性能监控
- JVM 性能监控
- 数据库性能监控
- 接口响应时间监控

## 代码提交规范

### Commit Message 格式
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型
- `feat`: 新功能开发
- `fix`: 错误修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建或工具相关

### 示例
```
feat(user-service): 实现用户注册功能

- 添加用户注册接口
- 实现邮箱验证
- 添加密码加密

相关任务: #123
```

## 代码审查规范

### 审查重点
1. 代码质量
   - 代码可读性
   - 代码复用性
   - 性能考虑
2. 安全性
   - 输入验证
   - 权限控制
   - 敏感信息处理
3. 测试覆盖
   - 单元测试
   - 集成测试
   - 边界条件测试

### 审查流程
1. 提交者自查
2. 至少一名团队成员审查
3. 必要时进行多轮审查
4. 所有问题解决后合并

## 文档维护

### 文档类型
1. 接口文档 (Swagger/OpenAPI)
2. 架构设计文档
3. 部署文档
4. 用户使用手册

### 更新要求
- 代码变更时同步更新相关文档
- 定期审查文档准确性
- 保持文档版本一致性

## 代码规范

### Java 代码规范
- 使用 Google Java Style Guide
- 类名使用 PascalCase
- 方法名和变量名使用 camelCase
- 常量使用大写字母和下划线
- 每个类都应该有文档注释

### Vue 代码规范
- 使用 ESLint + Prettier
- 组件名使用 PascalCase
- Props 名称使用 camelCase
- 事件名称使用 kebab-case
- 组件文件使用 PascalCase

## PR 提交流程

1. 确保代码符合规范并通过测试
2. 更新相关文档
3. 创建 Pull Request
4. 填写 PR 描述模板
5. 请求至少一位团队成员审查
6. 解决审查意见
7. 等待 CI 通过
8. 合并代码

## 问题反馈

如遇到问题，请通过以下方式反馈：
1. 提交 Issue
2. 在 Issue 中详细描述问题
3. 添加相关标签
4. 指定负责人 