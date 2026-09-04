---
title: Get grantedList for a rule
permalink: /api/Data Security/Rows/Get grantedList for a rule/
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
/plugin/datafor-modeler/api/auth/row/granted/query
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

| Name         | Location | Type   | Required | Description |
|-------------|----------|--------|----------|-------------|
| **body**    | body     | object | Yes      | Request payload |
| ├── `group_id` | body | string | Yes      | Rule group ID |
| ├── `dbconn`   | body | string | Yes      | Database connection name |

---

### **Request Example**

```json
{
  "group_id": "b096f367be994cf9bf9080c72120df3e",
  "dbconn": "Demo"
}
```

---

## **Response Examples**

```json
{
  "msg": "success",
  "code": "200",
  "data": [
    {
      "group_id": "b096f367be994cf9bf9080c72120df3e",
      "name": "admin",
      "type": "0"
    },
    {
      "group_id": "b096f367be994cf9bf9080c72120df3e",
      "name": "Administrator",
      "type": "1"
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

| Name        | Type     | Required | Description |
|------------|---------|----------|-------------|
| `msg`      | string  | No       | Response message |
| `code`     | string  | No       | Response status code |
| `data`     | array   | Yes      | List of granted users and roles |
| ├── `group_id` | string | Yes   | Rule group ID |
| ├── `name` | string  | Yes      | User or role name |
| ├── `type` | string  | Yes      | `0` for user, `1` for role |
| `success`  | boolean | Yes      | Request success status |