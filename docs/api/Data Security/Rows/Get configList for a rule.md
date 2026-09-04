---
title: Get configList for a rule
permalink: /api/Data Security/Rows/Get configList for a rule/
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
/plugin/datafor-modeler/api/auth/row/config/query
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
      "schema": "public",
      "dbconn": "Demo",
      "tbname": "time_dim",
      "group_id": "b096f367be994cf9bf9080c72120df3e",
      "id": "d3a7e82ddd6d4126bcd749a6f1876e30",
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
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
| `data`     | array   | Yes      | List of configuration rules |
| ├── `schema` | string | No      | Database schema |
| ├── `dbconn` | string | No      | Database connection name |
| ├── `tbname` | string | No      | Table name |
| ├── `group_id` | string | No   | Rule group ID |
| ├── `id` | string  | No       | Configuration rule ID |
| ├── `rows` | string  | No       | Row filter condition in JSON format |
| ├── `sql` | string  | No       | SQL condition |
| `success`  | boolean | Yes      | Request success status |