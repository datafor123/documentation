---
title: Enable rules for objects
permalink: /api/Data Security/Objs/Enable rules for objects/
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
/plugin/datafor-modeler/api/auth/obj/enableBatch
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

| Name     | Location | Type           | Required | Description |
|----------|----------|---------------|----------|-------------|
| **body** | body     | array[object] | Yes      | List of object rules to enable/disable |

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

| Name       | Type    | Required | Description                |
|------------|---------|----------|----------------------------|
| `code`     | string  | No       | HTTP response code         |
| `data`     | array   | Yes      | List of enabled/disabled objects |
| ├── `msg`  | string  | No       | Message (if any)           |
| ├── `dbconn` | string | No      | Database connection name   |
| ├── `enable` | string | No      | "1" for enabled, "0" for disabled |
| ├── `success` | boolean | No    | Indicates if the operation was successful |
| ├── `id`   | string  | No       | ID of the updated rule     |
| `success`  | boolean | Yes      | Overall request success status |