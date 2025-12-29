---
title: Get roles
permalink: /api/Roles/Get roles/
tags: ["api","Roles"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/roles/list
```

**Authorization**  
Authentication is **required** to use this API.

---

## **Description**
This API retrieves a list of roles available in the system. Roles define user permissions and access levels.

---

## **Query Parameters**

| Name  | Location | Type   | Required | Description |
|-------|----------|--------|----------|-------------|
| `type` | query   | string | No       | The type of roles to filter (optional). |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "data": {
    "total": 1,
    "success": true,
    "list": [
      {
        "authority": "DEV",
        "loadDate": "2024-08-05T14:59:32",
        "type": "0"
      }
    ]
  },
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

### **Response Data Schema (HTTP 200)**

| Name         | Type     | Required | Description |
|-------------|---------|----------|-------------|
| `data`      | object  | **Yes**  | Contains the roles list. |
| ├── `total` | integer | **Yes**  | The total number of roles. |
| ├── `list`  | array   | **Yes**  | A list of role objects. |
| │   ├── `authority`  | string  | No       | The name of the role. |
| │   ├── `loadDate`   | string  | No       | The date when the role was created or updated. |
| │   ├── `type`       | string  | No       | The role type. |
| `success`   | boolean | **Yes**  | Indicates whether the request was successful. |

---

## **Enum Values**

| Name  | Value |
|-------|-------|
| `type` | `0` |
| `type` | `2` |
