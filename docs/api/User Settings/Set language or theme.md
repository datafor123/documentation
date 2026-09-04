---
title: Set language or theme
permalink: /api/User Settings/Set language or theme/
tags:
  - api
  - User Settings
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user-settings/display
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

### **Request Example**

```json
[
  {
    "id": "language",
    "value": "en"
  },
  {
    "id": "theme",
    "value": "light"
  }
]
```

### **Parameters Schema**

| Name            | Location | Type         | Required | Description |
|-----------------|----------|--------------|----------|-------------|
| body            | body     | array[object]| no       | none        |
| ├── id          | body     | string       | yes      | The setting ID (e.g., `language`, `theme`) |
| ├── value       | body     | string       | yes      | The value for the setting (e.g., `en`, `light`) |

---

### **Response Examples**

```json
{
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name     | Type    | Required | Restrictions | Description |
|----------|---------|----------|--------------|-------------|
| `success`| boolean | **Yes**  | none         | Whether the operation was successful. |
