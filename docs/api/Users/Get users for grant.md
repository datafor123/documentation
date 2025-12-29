---
title: Get users for grant
permalink: /api/Users/Get users for grant/
tags: ["api","Users"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/user/speciallist
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

### **Parameters Schema**

| Name       | Location | Type     | Required | Description |
|------------|----------|----------|----------|-------------|
| `start`    | query    | integer  | no       | The starting point of the list (pagination). |
| `count`    | query    | integer  | no       | The number of records to retrieve. |
| `withRole` | query    | string   | no       | Filters users by a specific role. |
| `orderBy`  | query    | string   | no       | Specifies the order of the returned data. |
| `enabled`  | query    | string   | no       | Filters users by their enabled status (`1` = enabled, `0` = disabled). |
| `withEdit` | query    | string   | no       | Filters users based on whether they have edit permissions. |

---

### **Response Examples**

```json
{
  "data": {
    "total": 2,
    "list": [
      {
        "canEdit": true,
        "dept": "IT",
        "name": "administrator",
        "username": "admin",
        "usertype": "Administrator"
      },
      {
        "canEdit": true,
        "dept": "IT",
        "name": "demo",
        "username": "demo",
        "usertype": "SYS_Creator"
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

| Name           | Type    | Required | Description                            |
|----------------|---------|----------|----------------------------------------|
| `data`         | object  | Yes      | Contains response data.                |
| ├── `total`    | integer | Yes      | Total number of users available.       |
| ├── `list`     | [object]| Yes      | List of users.                         |
| ├── └── `canEdit` | boolean | Yes   | Whether the user can edit their details. |
| ├── └── `dept` | string  | Yes      | Department of the user.                |
| ├── └── `email`| string  | No       | Email address of the user.             |
| ├── └── `enabled` | string | Yes    | User's enabled status (`1` = enabled, `0` = disabled). |
| ├── └── `mobile` | string | No      | Mobile number of the user.             |
| ├── └── `name`  | string  | Yes      | User's name.                           |
| ├── └── `rolesList` | [object] | Yes  | List of roles assigned to the user.    |
| ├── └── └── `rolename` | string  | Yes  | Role name assigned to the user.        |
| ├── └── └── `type` | string   | Yes   | Type of the role (e.g., "2").          |
| ├── └── `title` | string  | No       | Title of the user.                     |
| ├── └── `username` | string | Yes    | User's username.                       |
| ├── └── `usertype` | string | Yes    | The type of user (e.g., `Administrator`, `SYS_Creator`). |
| `success`       | boolean | Yes      | Overall success status of the request. |
