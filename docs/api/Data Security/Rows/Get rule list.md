---
title: Get rule list
permalink: /api/Data Security/Rows/Get rule list/
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
/plugin/datafor-modeler/api/auth/row/query
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
| ├── `id`          | body | string  | No  | Rule ID (leave empty to fetch all) |
| ├── `dbconn`      | body | string  | No  | Database connection name |
| ├── `enable`      | body | string  | No  | Filter by enable status |
| ├── `editable`    | body | string  | No  | Editable status |
| ├── `withGranted` | body | boolean | No  | Whether to include granted user/role list |
| ├── `withConfig`  | body | boolean | No  | Whether to include config list |

---

### **Request Example**

```json
{
  "id": "3a95ade7937743d6a04d27db8d4c69a3",
  "dbconn": "Demo",
  "schema": "public",
  "tbname": "time_dim",
  "enable": "1",
  "withGranted": true,
  "type": "1"
}
```

---

## **Response Examples**

```json
{
  "code": "200",
  "data": [
    {
      "grantedList": [
        {
          "name": "admin",
          "type": "0"
        },
        {
          "name": "Administrator",
          "type": "1"
        }
      ],
      "dbconn": "Demo",
      "update_time": "2025-02-26 17:29:35.872",
      "add_by": "admin",
      "enable": "1",
      "editable": "1",
      "id": "8699a11df24c49ddab9451e249ff2c97",
      "update_by": "admin",
      "add_time": "2025-02-26 17:29:35.872",
      "desc": "test"
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
| `code`     | string  | No       | Response status code |
| `data`     | array   | Yes      | List of rule objects |
| ├── `grantedList` | array | No  | List of granted users/roles |
| │ ├── `name` | string | Yes  | User or role name |
| │ ├── `type` | string | Yes  | `0` for user, `1` for role |
| ├── `dbconn` | string | No  | Database connection name |
| ├── `update_time` | string | No  | Last update timestamp |
| ├── `add_by` | string | No  | Rule creator |
| ├── `enable` | string | No  | Enable status (`1` for enabled) |
| ├── `editable` | string | No  | Editable status (`1` for editable) |
| ├── `id` | string | No  | Rule ID |
| ├── `update_by` | string | No  | Last updated by |
| ├── `add_time` | string | No  | Creation timestamp |
| ├── `desc` | string | No  | Rule description |
| `success`  | boolean | Yes      | Request success status |
| `msg`      | string  | No       | Response message |