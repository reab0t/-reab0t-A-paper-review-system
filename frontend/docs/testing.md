# 测试文档

## 概述

本项目包含完整的测试套件，包括单元测试和E2E测试。

## 测试类型

### 1. 单元测试 (Unit Tests)

使用 **Vitest** 进行单元测试，测试组件、工具函数和API接口。

#### 运行单元测试

```bash
# 运行所有单元测试
npm run test:unit

# 运行单元测试并显示UI界面
npm run test:unit:ui

# 运行单元测试并生成覆盖率报告
npm run test:unit:coverage
```

#### 单元测试文件结构

```
src/
├── components/
│   ├── auth/
│   │   └── __tests__/
│   │       └── LoginForm.test.ts
│   └── paper/
│       └── __tests__/
│           └── PaperList.test.ts
├── api/
│   └── __tests__/
│       └── auth.test.ts
└── test/
    └── setup.ts
```

### 2. E2E测试 (End-to-End Tests)

使用 **Cypress** 进行E2E测试，测试完整的用户流程。

#### 运行E2E测试

```bash
# 打开Cypress测试界面
npm run test:e2e

# 在无头模式下运行E2E测试
npm run test:e2e:headless

# 在CI环境中运行E2E测试（自动启动服务器）
npm run test:e2e:ci
```

#### E2E测试文件结构

```
cypress/
├── e2e/
│   ├── login.cy.ts
│   └── paper-list.cy.ts
├── support/
│   ├── commands.ts
│   └── e2e.ts
└── cypress.config.ts
```

## 测试覆盖率

运行覆盖率测试：

```bash
npm run test:unit:coverage
```

覆盖率报告将生成在 `coverage/` 目录下。

## 自定义命令

Cypress提供了以下自定义命令：

- `cy.login(username, password)` - 登录用户
- `cy.clearLocalStorage()` - 清除本地存储
- `cy.waitForPageLoad()` - 等待页面加载完成

## 测试最佳实践

### 单元测试

1. **测试组件渲染** - 确保组件正确渲染
2. **测试用户交互** - 测试点击、输入等用户操作
3. **测试API调用** - Mock API响应，测试成功和失败情况
4. **测试表单验证** - 测试表单验证逻辑
5. **测试计算属性** - 测试computed属性的计算逻辑

### E2E测试

1. **测试用户流程** - 测试完整的用户操作流程
2. **测试页面导航** - 确保页面跳转正确
3. **测试数据加载** - 测试数据加载和显示
4. **测试错误处理** - 测试错误情况的处理
5. **测试响应式设计** - 在不同屏幕尺寸下测试

## 持续集成

在CI/CD流程中运行测试：

```yaml
# GitHub Actions 示例
- name: Run tests
  run: |
    npm install
    npm run test:all
```

## 故障排除

### 常见问题

1. **测试环境问题**
   - 确保安装了所有依赖：`npm install`
   - 检查Node.js版本兼容性

2. **Cypress问题**
   - 确保开发服务器正在运行
   - 检查端口配置

3. **Vitest问题**
   - 检查测试文件路径
   - 确保测试文件命名正确

### 调试技巧

1. **使用 `console.log`** 在测试中添加调试信息
2. **使用 Cypress 的 `cy.debug()`** 暂停测试执行
3. **使用 Vitest 的 `--reporter=verbose`** 获取详细输出

## 添加新测试

### 添加单元测试

1. 在对应组件目录下创建 `__tests__` 文件夹
2. 创建测试文件，命名格式：`ComponentName.test.ts`
3. 编写测试用例

### 添加E2E测试

1. 在 `cypress/e2e/` 目录下创建测试文件
2. 命名格式：`feature-name.cy.ts`
3. 编写测试用例

## 测试数据

测试数据应该：
- 使用Mock数据，不依赖真实API
- 数据应该简洁且有意义
- 包含边界情况和错误情况 