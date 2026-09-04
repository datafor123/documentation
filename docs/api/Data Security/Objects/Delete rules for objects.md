---
title: Delete rules for objects
permalink: /api/Data Security/Objs/Delete rules for objects/
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
/plugin/datafor-modeler/api/auth/obj/deleteBatch
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
| **body** | body     | array[object] | Yes      | List of object rules to delete |

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
      "dbconn": "foodmart",
      "success": true,
      "id": "b60195a71b1140359e3fbec61f3344cd"
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
| `code`     | string  | Yes      | HTTP response code         |
| `data`     | array   | Yes      | List of deleted objects    |
| ├── `msg`  | string  | No       | Success message            |
| ├── `dbconn` | string | No      | Database connection name   |
| ├── `success` | boolean | Yes   | Indicates if the deletion was successful |
| ├── `id`   | string  | Yes      | ID of the deleted rule     |
| `success`  | boolean | Yes      | Overall request success status |