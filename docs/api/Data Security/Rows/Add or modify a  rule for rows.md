---
title: Add or modify a rule for rows
permalink: /api/Data Security/Rows/Add or modify a rule for rows/
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
/plugin/datafor-modeler/api/auth/row/update
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

| Name            | Location | Type     | Required | Description |
|----------------|----------|----------|----------|-------------|
| **body**       | body     | object   | Yes      | Request payload |
| ├── `id`       | body     | string   | Yes      | Leave empty for add, provide value for modification |
| ├── `dbconn`   | body     | string   | Yes      | Database connection name |
| ├── `enable`   | body     | string   | Yes      | Rule enabled status |
| ├── `desc`     | body     | string   | Yes      | Rule description |
| ├── `configList` | body   | array    | Yes      | List of rule configurations |
| │ ├── `schema` | body     | string   | Yes      | Database schema |
| │ ├── `tbname` | body     | string   | Yes      | Table name |
| │ ├── `rows`   | body     | string   | No       | Row-level condition in JSON format |
| │ ├── `sql`    | body     | string   | No       | SQL condition for row-level security |
| ├── `grantedList` | body  | array    | Yes      | List of granted users/roles |
| │ ├── `name`   | body     | string   | Yes      | User or role name |
| │ ├── `type`   | body     | string   | Yes      | "0" for user, "1" for role |

---

### **Request Example**

```json
{
  "dbconn": "Demo",
  "enable": "1",
  "desc": "test",
  "configList": [
    {
      "schema": "public",
      "tbname": "time_dim",
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
    }
  ],
  "grantedList": [
    {
      "name": "admin",
      "type": "0"
    },
    {
      "name": "Power User",
      "type": "1"
    }
  ]
}
```

---

## **Response Examples**

```json
{
  "msg": "success",
  "endQuote": "\"",
  "success": true,
  "id": "8699a11df24c49ddab9451e249ff2c97",
  "startQuote": "\""
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name         | Type     | Required | Description |
|-------------|---------|----------|-------------|
| `msg`       | string  | No       | Response message |
| `endQuote`  | string  | No       | End quote character |
| `success`   | boolean | Yes      | Request success status |
| `id`        | string  | Yes      | Rule ID |
| `startQuote` | string | No       | Start quote character |