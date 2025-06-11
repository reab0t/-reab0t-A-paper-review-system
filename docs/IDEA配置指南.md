# IDEA 开发环境配置指南

## 1. 基础设置

### 1.1 推荐版本
- IntelliJ IDEA 2023.3 或更高版本
- Ultimate Edition（推荐，支持更多企业级特性）

### 1.2 必要插件
1. **Spring Boot Assistant**
   - Spring Boot 配置文件提示
   - Spring Boot Actuator 支持
   - 自动配置报告

2. **Lombok Plugin**
   - 自动处理 Lombok 注解
   - 代码简化支持

3. **MapStruct Support**
   - MapStruct 对象映射支持
   - 自动补全和错误检测

4. **SonarLint**
   - 实时代码质量检查
   - 安全漏洞检测
   - 代码规范提示

5. **Git Integration**
   - Git 版本控制集成
   - 分支管理
   - 提交历史查看

6. **Maven Helper**
   - 依赖冲突检测
   - 依赖树可视化
   - 多模块项目管理

7. **JPA Buddy**
   - JPA 实体类生成
   - 数据库表映射
   - Repository 方法生成

8. **Database Navigator**
   - 数据库连接管理
   - SQL 编辑器
   - 表结构可视化

### 1.3 代码风格设置
1. **导入 Google Java Style**
   - 下载 `intellij-java-google-style.xml`
   - 导入到 IDEA 设置中
   - 设置为项目默认格式化规则

2. **编码设置**
   ```
   File -> Settings -> Editor -> File Encodings
   - Global Encoding: UTF-8
   - Project Encoding: UTF-8
   - Default encoding for properties files: UTF-8
   ```

3. **自动导入设置**
   ```
   File -> Settings -> Editor -> General -> Auto Import
   - Add unambiguous imports on the fly: 启用
   - Optimize imports on the fly: 启用
   ```

## 2. 项目配置

### 2.1 JDK 配置
1. 配置 JDK 21
   ```
   File -> Project Structure -> Project
   - Project SDK: 21 (Eclipse Temurin version)
   - Project language level: 21
   ```

2. 模块 SDK 设置
   ```
   File -> Project Structure -> Modules
   - 确保所有模块使用 JDK 21
   ```

### 2.2 Maven 配置
1. **Maven 设置**
   ```
   File -> Settings -> Build, Execution, Deployment -> Build Tools -> Maven
   - Maven home path: 配置 Maven 3.9.10
   - User settings file: 指向自定义 settings.xml
   - Local repository: 配置本地仓库路径
   ```

2. **Runner 配置**
   ```
   - VM Options: -Xmx2g -XX:MaxPermSize=512m
   - JRE: JDK 21
   ```

### 2.3 Spring Boot 配置
1. **运行配置**
   - 为每个微服务创建单独的运行配置
   - 配置环境变量和 JVM 参数
   - 设置正确的工作目录

2. **开发工具配置**
   ```
   - 启用 Spring Boot 开发工具
   - 配置自动重启
   - 设置 LiveReload
   ```

## 3. 调试配置

### 3.1 远程调试
1. **配置远程调试连接**
   ```
   Run -> Edit Configurations -> + -> Remote JVM Debug
   - Name: Remote Debug
   - Host: localhost
   - Port: 5005
   ```

2. **Docker 环境调试**
   - 配置 Docker 容器远程调试端口
   - 设置断点和调试参数

### 3.2 HTTP 客户端
1. **配置 HTTP Client**
   - 创建环境配置文件
   - 设置变量和认证信息
   - 保存常用请求

2. **测试端点**
   - 创建 HTTP 请求文件
   - 设置环境变量
   - 运行和调试请求

## 4. 版本控制配置

### 4.1 Git 设置
1. **配置 Git**
   ```
   File -> Settings -> Version Control -> Git
   - Path to Git executable: 配置 Git 路径
   - 配置 GitHub 账号
   ```

2. **提交模板**
   - 配置提交消息模板
   - 设置提交前检查项
   - 启用 Commit 钩子

### 4.2 代码审查
1. **配置 Code Review 工具**
   - 启用 Space/Code With Me
   - 设置代码审查提醒
   - 配置审查规则

## 5. 性能优化

### 5.1 IDEA 性能设置
1. **内存设置**
   ```
   Help -> Change Memory Settings
   - Maximum heap size: 4096 MB（或更高）
   ```

2. **缓存和索引**
   - 定期清理系统缓存
   - 优化索引设置
   - 配置文件监视限制

### 5.2 编译设置
1. **Compiler 配置**
   ```
   File -> Settings -> Build, Execution, Deployment -> Compiler
   - Build process heap size: 2048
   - Shared build process VM options: -Xmx2g
   ```

2. **并行编译**
   - 启用并行编译
   - 配置编译线程数
   - 设置自动构建选项

## 6. 团队共享设置

### 6.1 共享配置
1. **导出设置**
   - 代码风格设置
   - 检查配置
   - 运行配置

2. **版本控制**
   - `.idea` 文件夹配置
   - 工作空间配置
   - 运行配置

### 6.2 团队规范
1. **代码模板**
   - 类文件模板
   - 方法注释模板
   - 版权信息模板

2. **检查配置**
   - 启用团队统一的代码检查
   - 配置警告级别
   - 设置排除规则 