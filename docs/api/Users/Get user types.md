---
title: Get user types
permalink: /api/Users/Get user types/
tags: ["api","Users"]
description: 
---


**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/roles/types
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

---

### **Response Examples**

```json
{
  "data": {
    "total": 3,
    "success": true,
    "list": [
      {
        "authority": "SYS_Reader"
      },
      {
        "authority": "SYS_Creator"
      },
      {
        "authority": "Administrator"
      }
    ]
  },
  "success": true
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning                                                                  | Description | Data Schema |
|------------------|--------------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | none        | Inline      |

---

### **Response Data Schema (HTTP 200)**

| Name        | Type    | Required | Description                            |
|-------------|---------|----------|----------------------------------------|
| `data`      | object  | Yes      | Contains response data.                |
| ├── `total` | integer | Yes      | Total number of user types available.  |
| ├── `success` | boolean | Yes      | Indicates whether the request was successful. |
| ├── `list`   | [object] | Yes      | List of available user types.           |
| ├── └── `authority` | string  | Yes  | Name of the user authority type (e.g., `SYS_Reader`). |
| `success`   | boolean | Yes      | Overall success status of the request. |
