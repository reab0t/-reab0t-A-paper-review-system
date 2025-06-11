# API文档

## 1. 接口规范

### 1.1 基本信息
- 基础路径：`/api/v1`
- 请求方式：REST风格
- 数据格式：JSON
- 字符编码：UTF-8
- 时间格式：ISO 8601（YYYY-MM-DDTHH:mm:ss.sssZ）

### 1.2 认证方式
- 使用JWT（JSON Web Token）认证
- Token在Header中通过Bearer方式传递
- 格式：`Authorization: Bearer <token>`

### 1.3 响应格式
```json
{
    "code": 200,           // 状态码
    "message": "success",  // 提示信息
    "data": {             // 响应数据
        // 具体数据字段
    }
}
```

### 1.4 错误码说明
| 错误码 | 说明 | 处理建议 |
|--------|------|----------|
| 200 | 成功 | - |
| 400 | 请求参数错误 | 检查请求参数 |
| 401 | 未认证 | 检查Token |
| 403 | 无权限 | 检查用户权限 |
| 404 | 资源不存在 | 检查请求路径 |
| 500 | 服务器错误 | 联系管理员 |

## 2. 用户服务接口

### 2.1 用户注册
- 请求路径：`POST /users/register`
- 请求参数：
```json
{
    "username": "string",     // 用户名
    "password": "string",     // 密码
    "email": "string",       // 邮箱
    "fullName": "string",    // 姓名
    "role": "string"         // 角色（AUTHOR/REVIEWER/ADMIN）
}
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "userId": "string",
        "username": "string",
        "email": "string",
        "fullName": "string",
        "role": "string",
        "createdTime": "string"
    }
}
```

### 2.2 用户登录
- 请求路径：`POST /users/login`
- 请求参数：
```json
{
    "username": "string",
    "password": "string"
}
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "token": "string",
        "refreshToken": "string",
        "expiresIn": 3600
    }
}
```

## 3. 论文服务接口

### 3.1 提交论文
- 请求路径：`POST /papers`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```json
{
    "title": "string",           // 论文标题
    "abstract": "string",        // 摘要
    "keywords": ["string"],      // 关键词
    "authors": ["string"],       // 作者列表
    "file": "binary"            // 论文文件（PDF）
}
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "paperId": "string",
        "title": "string",
        "status": "SUBMITTED",
        "createdTime": "string"
    }
}
```

### 3.2 获取论文列表
- 请求路径：`GET /papers`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```
page: 页码（默认1）
size: 每页数量（默认10）
status: 论文状态（可选）
keyword: 搜索关键词（可选）
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "total": 100,
        "pages": 10,
        "current": 1,
        "records": [
            {
                "paperId": "string",
                "title": "string",
                "authors": ["string"],
                "status": "string",
                "createdTime": "string"
            }
        ]
    }
}
```

## 4. 评审服务接口

### 4.1 分配评审人
- 请求路径：`POST /reviews/assign`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```json
{
    "paperId": "string",
    "reviewerIds": ["string"]
}
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "reviewId": "string",
        "paperId": "string",
        "reviewers": [
            {
                "userId": "string",
                "fullName": "string"
            }
        ],
        "status": "ASSIGNED",
        "createdTime": "string"
    }
}
```

### 4.2 提交评审意见
- 请求路径：`POST /reviews/{reviewId}/submit`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```json
{
    "score": {
        "originality": 1-5,     // 原创性
        "relevance": 1-5,       // 相关性
        "quality": 1-5,         // 质量
        "clarity": 1-5          // 清晰度
    },
    "comments": "string",       // 评审意见
    "recommendation": "string"  // 建议（ACCEPT/REJECT/REVISE）
}
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "reviewId": "string",
        "paperId": "string",
        "reviewerId": "string",
        "score": {
            "originality": 5,
            "relevance": 5,
            "quality": 5,
            "clarity": 5
        },
        "comments": "string",
        "recommendation": "string",
        "status": "COMPLETED",
        "submittedTime": "string"
    }
}
```

## 5. 通知服务接口

### 5.1 获取通知列表
- 请求路径：`GET /notifications`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```
page: 页码（默认1）
size: 每页数量（默认10）
type: 通知类型（可选）
read: 是否已读（可选）
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "total": 100,
        "pages": 10,
        "current": 1,
        "records": [
            {
                "notificationId": "string",
                "type": "string",
                "title": "string",
                "content": "string",
                "read": false,
                "createdTime": "string"
            }
        ]
    }
}
```

### 5.2 标记通知已读
- 请求路径：`PUT /notifications/{notificationId}/read`
- 请求头：`Authorization: Bearer <token>`
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "notificationId": "string",
        "read": true,
        "readTime": "string"
    }
}
```

## 6. 文件服务接口

### 6.1 上传文件
- 请求路径：`POST /files/upload`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```
file: 文件（multipart/form-data）
type: 文件类型（PAPER/ATTACHMENT）
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "fileId": "string",
        "fileName": "string",
        "fileType": "string",
        "fileSize": 1024,
        "url": "string",
        "uploadTime": "string"
    }
}
```

### 6.2 下载文件
- 请求路径：`GET /files/{fileId}/download`
- 请求头：`Authorization: Bearer <token>`
- 响应结果：文件流

## 7. 统计分析接口

### 7.1 获取论文统计
- 请求路径：`GET /statistics/papers`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```
startDate: 开始日期（可选）
endDate: 结束日期（可选）
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "total": 100,
        "submitted": 50,
        "underReview": 30,
        "accepted": 15,
        "rejected": 5,
        "byMonth": [
            {
                "month": "2024-01",
                "count": 20
            }
        ]
    }
}
```

### 7.2 获取评审统计
- 请求路径：`GET /statistics/reviews`
- 请求头：`Authorization: Bearer <token>`
- 请求参数：
```
startDate: 开始日期（可选）
endDate: 结束日期（可选）
```
- 响应结果：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "total": 100,
        "completed": 80,
        "pending": 20,
        "averageScore": 4.5,
        "byReviewer": [
            {
                "reviewerId": "string",
                "reviewerName": "string",
                "count": 10
            }
        ]
    }
}
``` 