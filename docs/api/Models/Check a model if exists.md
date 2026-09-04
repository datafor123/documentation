---
title: Check a model if exists
permalink: /api/Models/Check a model if exists/
tags:
  - api
  - Models
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/mondrian/checkexists
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

---

### **Parameters Schema**

| Name  | Location | Type   | Required | Description |
|-------|---------|--------|----------|-------------|
| `name` | query | string | **No** | The name of the model to check if it exists. |

---

### **Response Examples**

#### **200 Response**
```json
{
  "success": true,
  "exists": true
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data schema |
|------------------|---------|-------------|-------------|
| `200`           | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful, and the response indicates whether the model exists. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `success` | boolean | **Yes**  | A boolean flag indicating whether the request was processed successfully. |
| `exists`  | boolean | **Yes**  | A boolean flag indicating whether the specified model exists (`true` if it exists, `false` otherwise). |