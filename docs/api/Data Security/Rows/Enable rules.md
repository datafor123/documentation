---
title: Enable rules
permalink: /api/Data Security/Rows/Enable rules/
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
/plugin/datafor-modeler/api/auth/row/enableBatch
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
| ├── `enable` | body | string | Yes      | `1` to enable, `0` to disable |

---

### **Request Example**

```json
[
  {
    "id": "b096f367be994cf9bf9080c72120df3e",
    "dbconn": "Demo",
    "enable": "0"
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
      "msg": "",
      "dbconn": "Demo",
      "enable": "0",
      "success": true,
      "id": "a5ca4426d3774d92a320f8c10b0d7d2b"
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
| `data`    | array   | Yes      | List of enabled/disabled rules |
| ├── `msg` | string  | No       | Response message |
| ├── `dbconn` | string | No    | Database connection name |
| ├── `enable` | string | No    | `1` for enabled, `0` for disabled |
| ├── `success` | boolean | No | Enable/disable success status |
| ├── `id` | string  | No      | Rule ID |
| `success` | boolean | Yes      | Request success status |