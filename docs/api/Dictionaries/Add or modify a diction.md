---
title: Add or modify a dictionary
permalink: /api/Dictionaries/Add or modify a dictionary/
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
/plugin/datafor-modeler/api/dict/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

### **Parameters Schema**

| Name         | Location | Type   | Required | Description |
|-------------|----------|--------|----------|-------------|
| **body**    | body     | object | Yes      | Request payload |
| ├── `id`        | body | string  | No  | Leave empty for add, provide ID for update |
| ├── `name`      | body | string  | Yes | Dictionary name |
| ├── `datatype`  | body | string  | Yes | `1` for NUMBER, `2` for STRING |
| ├── `type`      | body | string  | Yes | `1` for list, `2` for SQL |
| ├── `dbconn`    | body | string  | No  | Database connection name |
| ├── `default`   | body | string  | No  | Default value |
| ├── `detail`    | body | string  | No  | String array or SQL query |
| ├── `expire`    | body | integer | No  | Expiration time in seconds |

---

### **Request Example**

```json
{
  "id": "dev",
  "name": "dev",
  "datatype": "2",
  "type": "2",
  "dbconn": "foodmart",
  "default": "1",
  "detail": "select warehouse_class_id,description from foodmart.warehouse_class",
  "expire": 86400
}
```

---

## **Response Example**

```json
{
  "msg": "success",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description |
|----------|--------|----------|-------------|
| `msg`    | string | No       | Response message |
| `success` | boolean | Yes      | Indicates if the operation was successful |

