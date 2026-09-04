---
title: Get parameters
permalink: /api/Parameters/Get parameters/
tags:
  - api
  - Parameters
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/parameter/query
```

**Authorization**  
Authentication is required to use this API. For details on the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API retrieves query parameters stored in the system, including metadata such as data type, default values, and update timestamps.

---

### **Body Parameters Schema**
| Name  | Location | Type   | Required | Description |
|-------|----------|--------|----------|-------------|
| `body` | body    | object | No       | Request body (empty object expected). |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "msg": "",
  "data": [
    {
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
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

### **Response Data Schema (HTTP 200)**

| Name         | Type      | Required | Description |
|-------------|----------|----------|-------------|
| `msg`       | string   | No       | Response message (empty if no error). |
| `data`      | array    | **Yes**  | List of query parameters. |
| ├── `default`    | string  | No       | The default value of the parameter. |
| ├── `update_time` | string  | No       | The last update timestamp of the parameter. |
| ├── `datatype`    | string  | No       | The data type of the parameter. |
| ├── `name`        | string  | No       | The parameter name. |
| ├── `id`          | string  | No       | The unique identifier of the parameter. |
| ├── `detail`      | string  | No       | JSON string containing detailed parameter values. |
| ├── `source`      | string  | No       | The data source of the parameter. |
| ├── `type`        | string  | No       | The type identifier of the parameter. |
| ├── `update_by`   | string  | No       | The user who last updated the parameter. |
| ├── `add_time`    | string  | No       | The timestamp when the parameter was added. |
| ├── `desc`        | string  | No       | A description of the parameter. |
| `success`    | boolean  | **Yes**  | Indicates whether the request was successful. |

---