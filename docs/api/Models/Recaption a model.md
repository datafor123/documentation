---
title: Recaption a model
permalink: /api/Models/Recaption a model/
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
/plugin/datafor-modeler/api/mondrian/recaption
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/x-www-form-urlencoded`

---  

### **Preconditions**
- The current user **must** have administrative privileges for the model.

---  

### **Request Example**

```yaml
catalogName: toDel3_11111
catalogCaption: toDel
```

| Name              | Location | Type   | Required | Description |
|------------------|----------|--------|----------|-------------|
| `catalogName`   | body     | string | No       | The name of the model to be updated. |
| `catalogCaption` | body     | string | No       | The new caption for the model. |

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