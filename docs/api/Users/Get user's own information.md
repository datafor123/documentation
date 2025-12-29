---
title: Get user's own information
permalink: /api/Users/Get user's own information/
tags: ["api","Users"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/user/detail
```

**Authorization**  
The current user must be authenticated to access their own information.

**Content Type**  
`application/x-www-form-urlencoded`

---

### **Response Examples**

```json
{
  "data": {
    "user": {
      "dept": "IT",
      "email": "administrator@x.com",
      "enabled": "1",
      "mobile": "1",
      "name": "administrator",
      "password": "5f4dcc3b5aa765d61d8327deb882cf99",
      "title": "administrator",
      "username": "admin"
    }
  },
  "success": true
}
```

---

### **Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Responses Data Schema (HTTP 200)**

| Name            | Type    | Required | Restrictions     | Description                    |
|-----------------|---------|----------|------------------|--------------------------------|
| `data`          | object  | **Yes**  | none             | Contains user details.         |
| `» user`        | object  | **Yes**  | none             | Contains user's personal info. |
| `»» dept`       | string  | **No**   | none             | The user's department.         |
| `»» email`      | string  | **No**   | none             | The user's email address.      |
| `»» enabled`    | string  | **Yes**  | none             | The user's account status.     |
| `»» mobile`     | string  | **No**   | none             | The user's mobile number.      |
| `»» name`       | string  | **Yes**  | none             | The user's full name.          |
| `»» password`   | string  | **Yes**  | MD5 hash         | The user's password (hashed).  |
| `»» title`      | string  | **No**   | none             | The user's title.              |
| `»» username`   | string  | **Yes**  | none             | The user's username.           |
| `success`       | boolean | **Yes**  | none             | Whether the operation was successful. |
