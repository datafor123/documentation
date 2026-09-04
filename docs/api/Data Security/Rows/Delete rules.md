---
title: Delete rules
permalink: /api/Data Security/Rows/Delete rules/
tags:
  - api
  - Data Security
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/auth/row/deleteBatch
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

**Preconditions**
- The current user’s type **cannot** be `SYS_Reader`.
- The current user must have **administrative privileges** for the connection.

---

### **Parameters Schema**

| Name      | Location | Type   | Required | Description |
|-----------|----------|--------|----------|-------------|
| **body**  | body     | array  | Yes      | List of rule objects |
| ├── `id`  | body     | string | Yes      | Rule ID |
| ├── `dbconn` | body | string | Yes      | Database connection name |

---

### **Request Example**

```json
[
  {
    "id": "b096f367be994cf9bf9080c72120df3e",
    "dbconn": "Demo"
  }
]
```

---

## **Response Examples**

```json
{
  "code": "200",
  "data": [
    {
      "msg": "success",
      "dbconn": "Demo",
      "success": true,
      "id": "b096f367be994cf9bf9080c72120df3e"
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name       | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `code`    | string  | Yes      | Response status code |
| `data`    | array   | Yes      | List of deleted rules |
| ├── `msg` | string  | No       | Response message |
| ├── `dbconn` | string | No    | Database connection name |
| ├── `success` | boolean | Yes | Deletion success status |
| ├── `id` | string  | Yes      | Rule ID |
| `success` | boolean | Yes      | Request success status |