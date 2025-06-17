# IDEA 配置指南

## 目录
- [基础设置](#基础设置)
- [插件安装](#插件安装)
- [代码模板](#代码模板)
- [快捷键设置](#快捷键设置)
- [版本控制](#版本控制)
- [调试配置](#调试配置)
- [代码规范](#代码规范)

## 基础设置

### 1. 项目JDK配置
1. 打开 `File -> Project Structure`
2. 在 `Project` 选项中设置：
   - Project SDK: JDK 21
   - Project language level: 21
   - Project compiler output: `项目路径/target`

### 2. Maven配置
1. 打开 `File -> Settings -> Build, Execution, Deployment -> Build Tools -> Maven`
2. 设置：
   - Maven home path: `Maven安装路径`
   - User settings file: `settings.xml路径`
   - Local repository: `本地仓库路径`

### 3. 编码设置
1. 打开 `File -> Settings -> Editor -> File Encodings`
2. 设置：
   - Global Encoding: UTF-8
   - Project Encoding: UTF-8
   - Default encoding for properties files: UTF-8
   - 勾选 `Transparent native-to-ascii conversion`

### 4. 自动导入设置
1. 打开 `File -> Settings -> Editor -> General -> Auto Import`
2. 勾选：
   - `Add unambiguous imports on the fly`
   - `Optimize imports on the fly`

## 插件安装

### 1. 必装插件
- Lombok：简化Java代码
- Spring Boot Assistant：Spring Boot开发助手
- Maven Helper：Maven依赖管理
- SonarLint：代码质量检查
- GitToolBox：Git增强工具
- Alibaba Java Coding Guidelines：阿里巴巴Java开发规范

### 2. 推荐插件
- JRebel：热部署工具
- MyBatisX：MyBatis增强工具
- RestfulTool：RESTful接口开发工具
- Translation：翻译插件
- Key Promoter X：快捷键提示
- Rainbow Brackets：彩虹括号

### 3. 插件配置
```
# SonarLint配置
1. 打开 Settings -> Tools -> SonarLint
2. 配置SonarQube服务器连接
3. 设置自动分析规则

# Lombok配置
1. 打开 Settings -> Build -> Compiler -> Annotation Processors
2. 勾选 Enable annotation processing

# JRebel配置
1. 激活JRebel
2. 配置要监控的目录
3. 设置自动编译选项
```

## 代码模板

### 1. 类注释模板
```java
/**
 * ${NAME}
 *
 * @author ${USER}
 * @version ${VERSION}
 * @date ${DATE} ${TIME}
 */
```

### 2. 方法注释模板
```java
/**
 * ${DESCRIPTION}
 *
 * @param ${PARAM} ${PARAM_DESC}
 * @return ${RETURN_DESC}
 * @throws ${THROWS} ${THROWS_DESC}
 */
```

### 3. Live Templates
```java
// 测试方法模板
@Test
public void test$METHOD$() {
    // Given
    $GIVEN$
    
    // When
    $WHEN$
    
    // Then
    $THEN$
}

// 日志模板
private static final Logger log = LoggerFactory.getLogger($CLASS$.class);
```

## 快捷键设置

### 1. 常用快捷键
```
# 编辑
- Ctrl + Space：基本代码补全
- Ctrl + Shift + Space：智能代码补全
- Alt + Insert：生成代码
- Ctrl + O：重写方法
- Ctrl + I：实现方法
- Ctrl + Alt + L：格式化代码
- Ctrl + Alt + O：优化导入

# 导航
- Ctrl + N：查找类
- Ctrl + Shift + N：查找文件
- Ctrl + Alt + B：跳转到实现
- Ctrl + B：跳转到声明
- Alt + F7：查找使用
- Ctrl + F12：文件结构

# 重构
- Shift + F6：重命名
- Ctrl + Alt + M：提取方法
- Ctrl + Alt + V：提取变量
- Ctrl + Alt + C：提取常量
- Ctrl + Alt + F：提取字段

# 调试
- F7：步入
- F8：步过
- F9：恢复程序
- Alt + F8：评估表达式
```

### 2. 自定义快捷键
```
# 添加自定义快捷键
1. 打开 Settings -> Keymap
2. 搜索需要设置的操作
3. 右键选择 Add Keyboard Shortcut
4. 设置快捷键组合
```

## 版本控制

### 1. Git配置
```
# 基本配置
1. 打开 Settings -> Version Control -> Git
2. 设置Git可执行文件路径
3. 配置GitHub账号

# 提交模板
1. 打开 Settings -> Version Control -> Commit
2. 设置提交消息模板：
   feat(scope): description
   
   [body]
   
   [footer]
```

### 2. 分支管理
```
# 分支操作
1. Alt + 9：打开Git工具窗口
2. 右键分支进行操作：
   - New Branch：新建分支
   - Checkout：切换分支
   - Merge：合并分支
   - Delete：删除分支
```

## 调试配置

### 1. 远程调试
```
# 配置远程调试
1. 打开 Run -> Edit Configurations
2. 点击 + 号，选择 Remote JVM Debug
3. 配置：
   - Name: Remote Debug
   - Host: 远程服务器IP
   - Port: 调试端口
```

### 2. Spring Boot调试
```
# 配置Spring Boot应用
1. 打开 Run -> Edit Configurations
2. 点击 + 号，选择 Spring Boot
3. 配置：
   - Main class: 启动类
   - Program arguments: 启动参数
   - Environment variables: 环境变量
```

### 3. 断点设置
```
# 断点类型
- Line Breakpoint：行断点
- Method Breakpoint：方法断点
- Exception Breakpoint：异常断点
- Field Watchpoint：字段断点

# 断点条件
1. 右键断点
2. 设置条件：
   - Condition：条件表达式
   - Log：日志输出
   - Pass count：通过次数
```

## 代码规范

### 1. 代码风格
```
# 导入代码风格
1. 打开 Settings -> Editor -> Code Style
2. 选择 Import Scheme
3. 导入团队统一的代码风格文件

# 常用设置
- 缩进：4个空格
- 行宽：120字符
- 换行符：Unix格式
```

### 2. 检查配置
```
# 配置检查规则
1. 打开 Settings -> Editor -> Inspections
2. 配置检查级别：
   - ERROR：错误
   - WARNING：警告
   - WEAK WARNING：弱警告
   - INFO：信息

# 自定义规则
1. 创建自定义检查配置
2. 设置规则范围和严重程度
3. 导出配置文件共享
```

### 3. 实时模板
```
# 配置实时模板
1. 打开 Settings -> Editor -> Live Templates
2. 添加自定义模板：
   - Abbreviation：缩写
   - Description：描述
   - Template text：模板内容
   - Applicable contexts：适用上下文
```

## 性能优化

### 1. 内存设置
```
# 修改IDEA内存
1. 打开 Help -> Edit Custom VM Options
2. 设置参数：
   -Xms1024m
   -Xmx4096m
   -XX:ReservedCodeCacheSize=512m
```

### 2. 缓存清理
```
# 清理系统缓存
1. 打开 File -> Invalidate Caches
2. 选择要清理的缓存类型
3. 重启IDEA
```

### 3. 插件管理
```
# 优化插件
1. 禁用不常用插件
2. 及时更新插件版本
3. 删除无用插件
``` 