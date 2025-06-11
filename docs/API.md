# API Documentation

## Base URLs

- Development: `http://localhost:8080`
- Production: `https://api.paper-review.com`

## Authentication

All API requests require authentication using JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Paper Management API

### Get Papers

```http
GET /api/papers
```

Query Parameters:
- `status` (optional): Filter by paper status
- `page` (optional): Page number (default: 1)
- `size` (optional): Page size (default: 10)

### Submit Paper

```http
POST /api/papers
```

Request Body:
```json
{
  "title": "string",
  "abstract": "string",
  "authors": ["string"],
  "keywords": ["string"],
  "file": "binary"
}
```

## Review Management API

### Get Reviews

```http
GET /api/reviews
```

Query Parameters:
- `paperId` (optional): Filter by paper ID
- `status` (optional): Filter by review status
- `page` (optional): Page number (default: 1)
- `size` (optional): Page size (default: 10)

### Submit Review

```http
POST /api/reviews
```

Request Body:
```json
{
  "paperId": "string",
  "score": number,
  "comments": "string",
  "recommendation": "ACCEPT | REJECT | REVISE"
}
```

## User Management API

### User Authentication

```http
POST /api/auth/login
```

Request Body:
```json
{
  "email": "string",
  "password": "string"
}
```

Response:
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "role": "string"
  }
}
```

## Error Responses

All endpoints may return the following error responses:

- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

Error Response Body:
```json
{
  "error": "string",
  "message": "string",
  "timestamp": "string"
}
``` 