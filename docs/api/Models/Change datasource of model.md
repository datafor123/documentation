---
title: Change datasource of model
permalink: /api/Models/Change datasource of model/
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
/plugin/datafor-modeler/api/mondrian/changeParameters
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/x-www-form-urlencoded`

---

### **Preconditions**
- The current user’s type **cannot** be `SYS_Reader`.
- The current user **must** have administrative privileges for the model.
- The current user **must** have read privileges for the connection.

---

### **Request Example**

```yaml
parameters: DataSource=Demo;EnableXmla=false;Provider=mondrian;overwrite=true
catalogName: Demo
```

| Name          | Location | Type   | Required | Description |
|--------------|----------|--------|----------|-------------|
| `parameters` | body     | string | No       | Connection parameters, formatted as key-value pairs (e.g., `DataSource=Demo;EnableXmla=false`). |
| `catalogName` | body    | string | No       | The model schema name, which will replace the name in the XML. |

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