---
title: Get Users
permalink: /api/Users/Get Users/
tags: ["api","Users"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/user/list
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

---

### **Preconditions**
- The current user's user type must be `Administrator`.

---

### **Parameters Schema**

| Name       | Location | Type     | Required | Description |
|------------|----------|----------|----------|-------------|
| `start`    | query    | integer  | no       | The starting point of the list (pagination). |
| `count`    | query    | integer  | no       | The number of records to retrieve. |
| `withRole` | query    | string   | no       | Filters users by a specific role. |
| `orderBy`  | query    | string   | no       | Specifies the order of the returned data. |

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
        "email": "administrator@x.com",
        "enabled": "1",
        "mobile": "",
        "name": "administrator",
        "roles": "",
        "rolesList": [
          {
            "rolename": "Administrator",
            "type": "2"
          }
        ],
        "title": "administrator",
        "username": "admin",
        "usertype": "Administrator"
      },
      {
        "canEdit": true,
        "dept": "IT",
        "email": "demo@x.com",
        "enabled": "1",
        "mobile": "",
        "name": "demo",
        "roles": "",
        "rolesList": [
          {
            "rolename": "SYS_Creator",
            "type": "2"
          }
        ],
        "title": "IT",
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
| ├── └── `dept` | string  | No       | Department of the user.                |
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
