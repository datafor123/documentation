---
title: Add or modify a model
permalink: /api/Models/Add or modify a model/
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
/plugin/datafor-modeler/api/mondrian/postAnalysis
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/json`

---  

### **Preconditions**
- The current user’s type **cannot** be `SYS_Reader`.

---  

### **Parameters Schema**

| Name              | Location | Type   | Required | Description |
|------------------|----------|--------|----------|-------------|
| `body`           | body     | object | No       | Request payload containing model analysis data. |
| ├── `parameters` | body     | string | No       | Additional parameters, formatted as key-value pairs (e.g., `DataSource=Demo;EnableXmla=false`). |
| ├── `catalogName` | body     | string | No       | Replaces the name in the XML. If empty, the XML root name is used. |
| ├── `catalogCaption` | body  | string | No       | Replaces the caption in the XML. If empty, the XML root caption is used. |
| ├── `notUpdateAcl` | body   | string | No       | Determines whether ACL updates should be skipped. Default is `false`. |
| ├── `uploadAnalysis` | body  | string (binary) | Yes | The model XML file to be uploaded. |
| ├── `overwrite` | body     | string | No       | Determines overwrite behavior: set to `false` for initial save, `true` for confirming save when the name already exists. |

---

### **Response Examples**

```json
{
  "success": true,
  "status": 3
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
| `success` | boolean | **Yes**  | Indicates whether the request was successful. |
| `status`  | integer | No       | The status code of the operation. |