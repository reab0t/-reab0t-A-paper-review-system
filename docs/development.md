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