---
title: Download models
permalink: /api/Models/Download models/
tags:
  - api
  - Models
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/datasource/analysis/catalogs/downloadList
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user needs **read privileges** to the models.

---

### **Parameters Schema**

| Name      | Location | Type   | Required | Description |
|-----------|---------|--------|----------|-------------|
| `body`    | body    | object | **No**   | The request payload containing the list of models to download. |
| ├── `nameList` | body | array of strings | **No** | A list of model names to be downloaded. |

### **Request Example**

```yaml
nameList: ["Demo"]
```

---

### **Response Examples**

#### **200 Response**
```json
{
  "msg": "success",
  "data": [
    {
      "name": "Demo",
      "status": "available"
    }
  ],
  "success": true
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data schema |
|------------------|---------|-------------|-------------|
| `200`           | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful, and the response contains model download details. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | **Yes**  | Message indicating the status of the request (e.g., `"success"`). |
| `data`    | array   | **Yes**  | The list of models available for download. |
| ├── `name` | string | **Yes**  | The name of the model. |
| ├── `status` | string | **Yes**  | The availability status of the model. |
| `success` | boolean | **Yes**  | A boolean flag indicating whether the request was processed successfully. |
