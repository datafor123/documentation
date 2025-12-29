---
title: Add or modify a user
permalink: /api/Users/Add or modify a user/
tags: ["api","Users"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/insertOrUpdate
```

**Authorization**  
Use of this API requires authentication. The current user's user type must be **Administrator**, or they must be updating their own information.

**Content Type**  
`application/x-www-form-urlencoded`

---

### **Request Example**

```yaml
username: dev
password: dev
roles: dev&test
name: developer
mobile: "12345678910"
email: a@a.com
dept: IT
title: Manager
usertype: SYS_Creator
enabled: "1"
```

### **Parameters Schema**

| Name            | Location | Type     | Required | Description                                 |
|-----------------|----------|----------|----------|---------------------------------------------|
| body            | body     | object   | no       | none                                        |
| ├── username    | body     | string   | yes      | The username of the user.                  |
| ├── password    | body     | string   | no       | The password for the user.                 |
| ├── roles       | body     | string   | no       | Use `&` to separate multiple roles.        |
| ├── name        | body     | string   | yes      | The name of the user.                      |
| ├── mobile      | body     | string   | no       | The mobile number of the user.             |
| ├── email       | body     | string   | yes      | The email address of the user.             |
| ├── dept        | body     | string   | no       | The department the user belongs to.        |
| ├── title       | body     | string   | no       | The title of the user.                     |
| ├── usertype    | body     | string   | yes      | The type of user (e.g., SYS_Creator).      |
| ├── enabled     | body     | string   | yes      | Whether the user is enabled (1 for enabled, 0 for disabled). |

#### Enum

| Name    | Value |
|---------|-------|
| enabled | 0     |
| enabled | 1     |

---

### **Response Examples**

```json
{
  "success": true,
  "username": "dev"
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
| `username`| string | **No**  | none         | The username of the added or modified user. |