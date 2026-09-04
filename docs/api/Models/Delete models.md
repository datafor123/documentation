---
title: Delete models
permalink: /api/Models/Delete models/
tags:
  - api
  - Models
description: null
createTime: 2026/09/01 22:03:26
---

### **Method**
`POST`

### **Request URL**
```html
/plugin/datafor-modeler/api/datasource/analysis/deleteBatch
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/json`

---

### **Preconditions**
- The current user **must** have administrative privileges for the models.

---

### **Request Example**

```json
[
  "Demo1",
  "Demo2"
]
```

| Name  | Location | Type          | Required | Description |
|-------|----------|---------------|----------|-------------|
| `body` | body     | array[string] | No       | A list of model names to be deleted. |

---

### **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```  

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data Schema |
|------------------|---------|-------------|-------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | No       | Response message. |
| `success` | boolean | **Yes**  | Indicates whether the request was successful. |