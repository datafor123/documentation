---
title: Get value range
permalink: /api/Parameters/Get value range/
tags:
  - api
  - Parameters
description: null
createTime: 2026/09/01 22:03:26
---

### **Method**
`POST`

### **Request URL**
```html
/plugin/datafor-modeler/api/parameter/data
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/x-www-form-urlencoded`

---

### **Request Example**

```yaml
id: dev
name: ""
```

| Name   | Location | Type   | Required | Description |
|--------|----------|--------|----------|-------------|
| `id`   | body     | string | No       | The identifier of the parameter. |
| `name` | body     | string | No       | The name of the parameter. |

---

### **Response Examples**

```json
{
  "msg": "",
  "data": [],
  "success": true,
  "config": {
    "default": "3",
    "update_time": "2024-08-06 09:37:28.374",
    "datatype": "2",
    "name": "dev",
    "id": "dev",
    "detail": "[{\"name\":\"dev\",\"value\":\"a\"},{\"name\":\"dev\",\"value\":\"b\"}]",
    "source": "1",
    "type": "3",
    "update_by": "admin",
    "add_time": "2024-08-06 09:30:37.061",
    "desc": "for develop"
  }
}
```  

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data Schema |
|------------------|---------|-------------|-------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name          | Type        | Required | Description |
|--------------|------------|----------|-------------|
| `msg`        | string      | **Yes**  | Response message. |
| `data`       | [string]    | **Yes**  | Retrieved value range. |
| `success`    | boolean     | **Yes**  | Indicates whether the request was successful. |
| `config`     | object      | **Yes**  | Configuration details of the parameter. |
| ├── `default`     | string  | **Yes**  | Default value of the parameter. |
| ├── `update_time` | string  | **Yes**  | Last update timestamp. |
| ├── `datatype`    | string  | **Yes**  | Data type of the parameter. |
| ├── `name`        | string  | **Yes**  | Name of the parameter. |
| ├── `id`          | string  | **Yes**  | Identifier of the parameter. |
| ├── `detail`      | string  | **Yes**  | JSON string containing parameter details. |
| ├── `source`      | string  | **Yes**  | Source identifier. |
| ├── `type`        | string  | **Yes**  | Type identifier of the parameter. |
| ├── `update_by`   | string  | **Yes**  | User who last updated the parameter. |
| ├── `add_time`    | string  | **Yes**  | Timestamp of parameter creation. |
| ├── `desc`        | string  | **Yes**  | Description of the parameter. |