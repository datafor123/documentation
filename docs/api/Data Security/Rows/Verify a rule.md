---
title: Verify a rule
permalink: /api/Data Security/Rows/Verify a rule/
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
/plugin/datafor-modeler/api/auth/row/verify
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
| ├── `dbconn`      | body | string  | Yes  | Database connection name |
| ├── `configList`  | body | array   | Yes  | List of rule configurations |
| │ ├── `schema` | body | string | Yes  | Schema name |
| │ ├── `tbname` | body | string | Yes  | Table name |
| │ ├── `rows`   | body | string | No   | JSON formatted rule condition |
| │ ├── `sql`    | body | string | Yes  | SQL condition |

---

### **Request Example**

```json
{
  "dbconn": "Demo",
  "configList": [
    {
      "schema": "public",
      "tbname": "time_dim",
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
    }
  ]
}
```

---

## **Response Examples**

### **Error Response Example**
```json
{
  "dbconn": "Demo",
  "configList": [
    {
      "schema": "public",
      "msg": "org.postgresql.util.PSQLException: Unterminated identifier started at position 40 in SQL select * from \"public\".\"time_dim\" where \"YEAR=2005. Expected \" char",
      "tbname": "time_dim",
      "success": false,
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR=2005"
    }
  ]
}
```

### **Success Response Example**
```json
{
  "dbconn": "Demo",
  "configList": [
    {
      "schema": "public",
      "tbname": "time_dim",
      "data": [
        {
          "MONTH_KEY": 200501,
          "YEAR": 2005,
          "QUARTER_KEY": 20051,
          "DAY_KEY": 20050101,
          "DAY_DATE": "2005-01-01 00:00:00.0"
        }
      ],
      "meta": [
        {
          "typeDesc": "Integer",
          "comments": "DAY_KEY",
          "originalColumnType": 4,
          "originalNullable": 0,
          "length": 9,
          "type": 5,
          "originalColumnTypeName": "int4",
          "originalPrecision": 10,
          "originalSigned": true,
          "name": "DAY_KEY",
          "originalScale": 0,
          "storageType": 0,
          "originName": "DAY_KEY"
        }
      ],
      "success": true,
      "rows": "{\"field\":\"YEAR\",\"operator\":\"=\",\"value\":2005}",
      "sql": "\"YEAR\"=2005"
    }
  ]
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
| `dbconn`   | string  | Yes      | Database connection name |
| `configList` | array  | Yes      | List of rule verification results |
| ├── `schema` | string | No      | Schema name |
| ├── `msg`    | string | No      | Error message (if any) |
| ├── `tbname` | string | No      | Table name |
| ├── `success` | boolean | No   | Whether the verification was successful |
| ├── `rows`   | string  | No      | JSON formatted rule condition |
| ├── `sql`    | string  | No      | SQL condition |
| ├── `data`   | array  | No      | Retrieved data if verification passes |
| ├── `meta`   | array  | No      | Column metadata for retrieved data |

