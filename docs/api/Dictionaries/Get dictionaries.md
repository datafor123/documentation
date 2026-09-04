---
title: Get dictionaries
permalink: /api/Dictionaries/Get dictionaries/
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
/plugin/datafor/api/modeler/dict/query
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
| **body**  | body     | object | No       | Empty object `{}` |

---

### **Request Example**

```json
{}
```

---

## **Response Example**

```json
{
  "msg": "",
  "data": [
    {
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

| Name       | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `msg`     | string | No       | Response message |
| `data`    | array  | Yes      | List of dictionaries |
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
| `success` | boolean | Yes     | Indicates if the operation was successful |

