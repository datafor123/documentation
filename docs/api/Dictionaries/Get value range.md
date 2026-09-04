---
title: Get value range
permalink: /api/Dictionaries/Get value range/
tags:
  - api
  - Dictionaries
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/dict/data
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

### **Parameters Schema**

| Name      | Location | Type   | Required | Description |
|-----------|----------|--------|----------|-------------|
| **body**  | body     | object | No       | None |
| ├── `id`  | body     | string | No       | Dictionary ID |
| ├── `name`| body     | string | No       | Dictionary name |

---

### **Request Example**

```json
{
  "id": "dev",
  "name": ""
}
```

---

## **Response Example**

```json
{
  "msg": "",
  "data": [
    {
      "warehouse_class_id": 1,
      "description": "Small Independent"
    },
    {
      "warehouse_class_id": 2,
      "description": "Medium Independent"
    },
    {
      "warehouse_class_id": 3,
      "description": "Large Independent"
    },
    {
      "warehouse_class_id": 4,
      "description": "Small Owned"
    },
    {
      "warehouse_class_id": 5,
      "description": "Medium Owned"
    },
    {
      "warehouse_class_id": 6,
      "description": "Large Owned"
    }
  ],
  "success": true,
  "config": {
    "dbconn": "foodmart",
    "default": "1",
    "update_time": "2024-08-06 10:20:17.532",
    "expire": "86400",
    "name": "dev",
    "id": "dev",
    "detail": "select warehouse_class_id,description from foodmart.warehouse_class",
    "type": "2",
    "update_by": "admin",
    "add_time": "2024-08-06 10:16:32.634"
  }
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name       | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `msg`     | string | No       | Response message |
| `data`    | array  | Yes      | List of dictionary values |
| ├── `warehouse_class_id` | integer  | Yes  | Warehouse class ID |
| ├── `description` | string  | Yes  | Warehouse class description |
| `success` | boolean | Yes     | Indicates if the operation was successful |
| `config`  | object  | Yes     | Dictionary configuration details |
| ├── `dbconn`      | string  | No  | Database connection name |
| ├── `default`     | string  | No  | Default value |
| ├── `update_time` | string  | No  | Last update timestamp |
| ├── `expire`      | string  | No  | Expiration time in seconds |
| ├── `name`        | string  | Yes | Dictionary name |
| ├── `id`          | string  | Yes | Dictionary ID |
| ├── `detail`      | string  | No  | Dictionary details (SQL query or values) |
| ├── `type`        | string  | Yes | `1` for list, `2` for SQL |
| ├── `update_by`   | string  | No  | Last updated by user |
| ├── `add_time`    | string  | No  | Creation timestamp |