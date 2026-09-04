---
title: Execute an alert by name
permalink: /api/Alert/Execute an alert by name/
tags:
  - api
  - Alert
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/alert/execute
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

**Preconditions**
- The current user must have **read** privileges for the alert.

---

### **Parameters Schema**

| Name    | Location | Type   | Required | Description                         |
|---------|----------|--------|----------|-------------------------------------|
| **name**| body     | string | No       | Name of the alert to be executed    |

### **Request Example**
```
name: alert1
```

---

## **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description    |
|-----------|---------|----------|----------------|
| `msg`     | string  | No       | Message string |
| `success` | boolean | Yes      | Request status |