---
title: Get rule list for objects
permalink: /api/Data Security/Objs/Get rule list for objects/
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
/plugin/datafor-modeler/api/auth/obj/query
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
| ├── `id`       | body     | string   | No       | Rule ID |
| ├── `dbconn`   | body     | string   | No       | Database connection name |
| ├── `enable`   | body     | string   | No       | Rule enabled status |
| ├── `withGranted` | body  | boolean  | No       | Include granted list |
| ├── `withConfig` | body   | boolean  | No       | Include config list |
| ├── `schema`   | body     | string   | No       | Database schema |
| ├── `tbname`   | body     | string   | No       | Table name |
| ├── `type`     | body     | string   | No       | Rule type |

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
  "msg": "success",
  "code": "200",
  "data": [
    {
      "dbconn": "foodmart",
      "update_time": "2024-09-10 10:41:05.611",
      "add_by": "admin",
      "enable": "1",
      "editable": "1",
      "id": "d8a0528c5c614146b683f49ff29a0b00",
      "update_by": "admin",
      "configList": [
        {
          "schema": "foodmart",
          "visible": "1",
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
          "tbname": "time_by_day",
          "colname": "the_year",
          "obj_key": "\"foodmart\".\"time_by_day\".\"the_year\"",
          "obj_type": "2"
        }
      ],
      "add_time": "2024-09-10 10:41:05.611",
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

| Name         | Type     | Required | Description |
|-------------|---------|----------|-------------|
| `msg`       | string  | Yes      | Response message |
| `code`      | string  | Yes      | Response code |
| `data`      | array   | Yes      | List of rules |
| ├── `dbconn`  | string  | Yes      | Database connection name |
| ├── `update_time` | string | No  | Last update timestamp |
| ├── `add_by` | string | No      | Rule creator |
| ├── `enable` | string | Yes     | Rule enabled status |
| ├── `editable` | string | Yes   | Edit permission |
| ├── `id` | string | Yes         | Rule ID |
| ├── `update_by` | string | No   | Last updated by |
| ├── `configList` | array  | Yes  | List of rule configurations |
| │ ├── `schema` | string | Yes   | Database schema |
| │ ├── `grantedList` | array | Yes | List of granted users/roles |
| │ │ ├── `name` | string | Yes  | User or role name |
| │ │ ├── `type` | string | Yes  | "0" for user, "1" for role |
| │ ├── `tbname` | string | Yes  | Table name |
| │ ├── `colname` | string | No  | Column name (if applicable) |
| │ ├── `obj_key` | string | Yes  | Object key |
| │ ├── `obj_type` | string | Yes  | "1" for table, "2" for column |
| │ ├── `visible` | string | Yes  | "1" for visible, "0" for invisible |
| ├── `add_time` | string | No    | Rule creation timestamp |
| ├── `desc` | string | No        | Rule description |
| `success`   | boolean | Yes      | Request success status |