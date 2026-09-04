---
title: Upgrade a model
permalink: /api/Models/Upgrade a model/
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
/plugin/datafor-modeler/api/mondrian/upgrade
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/json`

---

### **Upgrading Model from Version 4.0 to 4.1**

#### **New Features in Version 4.1**
- Support for specifying join types
- Support for one-to-many and many-to-many relationships

---

### **Preconditions**
- The current user **must** have administrative privileges for the model.

---

### **Request Example**

```json
{
  "xml": "<?xml version=\"1.0\"?><Schema name=\"Demo\" metamodelVersion=\"4.0\" ... </Schema>"
}
```

| Name    | Location | Type   | Required | Description |
|---------|----------|--------|----------|-------------|
| `body`  | body     | object | No       | Request payload containing the model schema XML. |
| ├── `xml` | body | string | **Yes**  | The XML representation of the model to be upgraded. |

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