---
title: Restful Logout
permalink: /api/Authentication/Restful Logout/
tags:
  - api
  - Authentication
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/extension/auth/logout
```

**Description**  
Logs the user out of the application, returning a JSON response indicating the result.

**Content Type**  
No request body is typically used with a `GET` request.

---

## **Response Examples**

```json
{
  "code": "200",
  "success": true
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description                      |
|-----------|---------|----------|----------------------------------|
| `code`    | string  | Yes      | Code indicating the response (e.g., `"200"`) |
| `success` | boolean | Yes      | Whether the logout was successful          |
