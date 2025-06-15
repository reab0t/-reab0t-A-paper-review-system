# API 文档

## 接口规范

### 基础URL
- 开发环境：`http://localhost:8080/api`
- 测试环境：`https://test-api.paper-review.com/api`
- 生产环境：`https://api.paper-review.com/api`

### 请求格式
- Content-Type: `application/json`
- 字符编码：`UTF-8`

### 响应格式
```json
{
  "code": 200,          // 状态码
  "message": "success", // 提示信息
  "data": {}           // 响应数据
}
```

### 状态码说明
- 200: 成功
- 400: 请求参数错误
- 401: 未授权
- 403: 权限不足
- 404: 资源不存在
- 500: 服务器错误

## 用户服务接口

### 用户注册
```http
POST /user/register
```

请求参数：
```json
{
  "username": "string",    // 用户名
  "password": "string",    // 密码
  "email": "string",      // 邮箱
  "role": "string"        // 角色：AUTHOR/REVIEWER/ADMIN
}
```

响应示例：
```json
{
  "code": 200,
  "message": "注册成功",
  "data": {
    "userId": "123",
    "username": "test_user"
  }
}
```

### 用户登录
```http
POST /user/login
```

请求参数：
```json
{
  "username": "string",  // 用户名
  "password": "string"   // 密码
}
```

响应示例：
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiJ9...",
    "userInfo": {
      "userId": "123",
      "username": "test_user",
      "role": "AUTHOR"
    }
  }
}
```

## 论文服务接口

### 提交论文
```http
POST /paper/submit
```

请求参数：
```json
{
  "title": "string",      // 论文标题
  "abstract": "string",   // 摘要
  "keywords": ["string"], // 关键词
  "file": "binary"        // 论文文件（PDF）
}
```

响应示例：
```json
{
  "code": 200,
  "message": "提交成功",
  "data": {
    "paperId": "456",
    "status": "PENDING"
  }
}
```

### 获取论文列表
```http
GET /paper/list?page=1&size=10
```

响应示例：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 100,
    "papers": [{
      "paperId": "456",
      "title": "示例论文",
      "author": "test_user",
      "submitTime": "2024-01-01 12:00:00",
      "status": "PENDING"
    }]
  }
}
```

## 评审服务接口

### 分配评审专家
```http
POST /review/assign
```

请求参数：
```json
{
  "paperId": "string",     // 论文ID
  "reviewerId": "string"   // 评审专家ID
}
```

响应示例：
```json
{
  "code": 200,
  "message": "分配成功",
  "data": {
    "reviewId": "789",
    "status": "ASSIGNED"
  }
}
```

### 提交评审意见
```http
POST /review/submit
```

请求参数：
```json
{
  "reviewId": "string",    // 评审ID
  "score": 85,            // 评分
  "comments": "string",    // 评审意见
  "recommendation": "ACCEPT/REJECT/REVISE"  // 建议
}
```

响应示例：
```json
{
  "code": 200,
  "message": "提交成功",
  "data": {
    "reviewId": "789",
    "status": "COMPLETED"
  }
}
```

## 错误处理

### 参数验证错误
```json
{
  "code": 400,
  "message": "参数错误",
  "data": {
    "errors": [{
      "field": "username",
      "message": "用户名不能为空"
    }]
  }
}
```

### 认证错误
```json
{
  "code": 401,
  "message": "未登录或token已过期",
  "data": null
}
```

### 权限错误
```json
{
  "code": 403,
  "message": "没有操作权限",
  "data": null
}
```

## 注意事项

1. 所有请求需要在Header中携带token：
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
```

2. 文件上传接口使用multipart/form-data格式

3. 分页接口统一使用page和size参数：
- page：页码，从1开始
- size：每页条数，默认10

4. 时间格式统一使用：YYYY-MM-DD HH:mm:ss

5. 所有接口都有访问频率限制，默认：
- 普通接口：60次/分钟
- 上传接口：10次/分钟 