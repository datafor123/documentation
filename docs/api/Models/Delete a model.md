---
title: Delete a model
permalink: /api/Models/Delete a model/
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
/plugin/datafor-modeler/api/datasource/analysis/{catalog}/remove
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

---

### **Preconditions**
- The current user **must** have administrative privileges for the model.

---

### **Parameters Schema**

| Name     | Location | Type   | Required | Description |
|----------|----------|--------|----------|-------------|
| `catalog` | path    | string | **Yes**  | The name of the model to be deleted. |

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