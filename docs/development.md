# Development Guidelines
# 开发规范

## Code Style
## 代码风格

### Backend
### 后端

#### Java Code Style
#### Java代码风格

1. Naming Conventions 命名规范
   - Classes: PascalCase 类名：大驼峰
   - Methods: camelCase 方法名：小驼峰
   - Variables: camelCase 变量名：小驼峰
   - Constants: UPPER_SNAKE_CASE 常量名：大写下划线

2. Package Structure 包结构
   ```
   com.review
   ├── controller    # REST controllers REST控制器
   ├── service      # Business logic 业务逻辑
   ├── repository   # Data access 数据访问
   ├── model       # Domain models 领域模型
   └── config      # Configurations 配置
   ```

3. Exception Handling 异常处理
   - Use custom exceptions 使用自定义异常
   - Proper exception hierarchy 合适的异常层级
   - Global exception handler 全局异常处理

### Frontend
### 前端

#### TypeScript/Vue Style
#### TypeScript/Vue风格

1. Component Structure 组件结构
   ```vue
   <template>
     <!-- Template content 模板内容 -->
   </template>
   
   <script setup lang="ts">
   // Imports 导入
   // State 状态
   // Methods 方法
   </script>
   
   <style scoped>
   /* Styles 样式 */
   </style>
   ```

2. Naming Conventions 命名规范
   - Components: PascalCase 组件名：大驼峰
   - Props: camelCase 属性名：小驼峰
   - Events: kebab-case 事件名：短横线
   - Files: PascalCase.vue 文件名：大驼峰

## Git Workflow
## Git工作流

1. Branch Naming 分支命名
   - feature/xxx: New features 新功能
   - fix/xxx: Bug fixes Bug修复
   - refactor/xxx: Code refactoring 代码重构
   - docs/xxx: Documentation 文档

2. Commit Message Format 提交信息格式
   ```
   type(scope): subject

   body

   footer
   ```
   
   Types 类型:
   - feat: New feature 新功能
   - fix: Bug fix Bug修复
   - docs: Documentation 文档
   - style: Code style 代码风格
   - refactor: Code refactoring 代码重构
   - test: Tests 测试
   - chore: Build/dependencies 构建/依赖

## Testing Guidelines
## 测试规范

### Backend Tests
### 后端测试

1. Unit Tests 单元测试
   - Test each service method 测试每个服务方法
   - Mock dependencies 模拟依赖
   - Test edge cases 测试边界情况

2. Integration Tests 集成测试
   - Test API endpoints 测试API端点
   - Test database operations 测试数据库操作
   - Test service interactions 测试服务交互

### Frontend Tests
### 前端测试

1. Unit Tests 单元测试
   - Test components 测试组件
   - Test utilities 测试工具函数
   - Test store actions 测试状态管理

2. E2E Tests 端到端测试
   - Test user flows 测试用户流程
   - Test critical paths 测试关键路径
   - Test form submissions 测试表单提交

## Documentation
## 文档

1. Code Documentation 代码文档
   - JSDoc for JavaScript/TypeScript JavaScript/TypeScript使用JSDoc
   - Javadoc for Java Java使用Javadoc
   - Clear inline comments 清晰的行内注释

2. API Documentation API文档
   - OpenAPI/Swagger specification OpenAPI/Swagger规范
   - Request/Response examples 请求/响应示例
   - Error codes and descriptions 错误码和描述

## Review Process
## 评审流程

1. Code Review Checklist 代码评审清单
   - Code style compliance 代码风格符合性
   - Test coverage 测试覆盖率
   - Documentation completeness 文档完整性
   - Performance considerations 性能考虑
   - Security concerns 安全考虑

2. Review Process 评审流程
   - Create pull request 创建拉取请求
   - Request reviews 请求评审
   - Address feedback 处理反馈
   - Merge after approval 批准后合并

# 开发指南

## 目录
- [环境要求](#环境要求)
- [开发环境搭建](#开发环境搭建)
- [项目启动](#项目启动)
- [开发流程](#开发流程)
- [代码提交规范](#代码提交规范)

## 环境要求

### 后端环境
- JDK 21
- Maven 3.9+
- Docker Desktop
- IDE推荐：IntelliJ IDEA

### 前端环境
- Node.js 20+
- npm 10+
- IDE推荐：Visual Studio Code

### 中间件要求
- MySQL 8.0
- Redis 7.0
- Nacos 2.2.3
- MinIO
- RabbitMQ 3.12
- ELK Stack 8.11.1
- Prometheus + Grafana

## 开发环境搭建

### 1. 克隆项目
```bash
git clone https://github.com/reab0t/-reab0t-A-paper-review-system.git
cd -reab0t-A-paper-review-system
```

### 2. 启动基础服务
```bash
# 启动所有必需的服务容器
docker-compose up -d
```

### 3. 后端服务启动
```bash
# 进入后端目录
cd backend

# 编译安装
mvn clean install

# 启动服务（按顺序）
mvn spring-boot:run -pl gateway
mvn spring-boot:run -pl user-service
mvn spring-boot:run -pl paper-service
mvn spring-boot:run -pl review-service
```

### 4. 前端服务启动
```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 开发流程

### 1. 分支管理
- `main`: 主分支，用于生产环境
- `develop`: 开发分支，用于开发环境
- `feature/*`: 功能分支，用于新功能开发
- `bugfix/*`: 修复分支，用于修复问题
- `release/*`: 发布分支，用于版本发布

### 2. 开发步骤
1. 从 `develop` 分支创建新的功能分支
2. 在功能分支上进行开发
3. 完成开发后提交 Pull Request
4. 代码审查通过后合并到 `develop` 分支
5. 定期将 `develop` 分支合并到 `main` 分支发布

### 3. 代码审查
- 所有代码变更必须通过 Pull Request 提交
- 至少需要一名其他开发者审查通过
- 确保通过所有自动化测试
- 符合代码规范要求

## 代码提交规范

### 提交信息格式
```
<类型>(<范围>): <主题>

<详细描述>

<footer>
```

### 类型说明
- `feat`: 新功能
- `fix`: 修复Bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 示例
```
feat(user): 添加用户登录功能

- 实现用户名密码登录
- 添加JWT token生成
- 增加登录接口单元测试

Closes #123
```

## 调试说明

### 后端服务调试
1. 在IDEA中配置远程调试
2. 设置断点
3. 使用Postman或Swagger测试接口

### 前端调试
1. 使用Vue DevTools
2. 使用浏览器开发者工具
3. 配置ESLint进行代码检查

## 测试要求

### 单元测试
- 后端：JUnit 5 + Mockito
- 前端：Vitest

### 集成测试
- 后端：TestContainers
- 前端：Cypress

### 测试覆盖率要求
- 后端：行覆盖率 > 80%
- 前端：组件测试覆盖率 > 70% 