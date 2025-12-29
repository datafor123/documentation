---
title: Delete a user
permalink: /api/Users/Delete a user/
tags: ["api","Users"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/delete
```

**Authorization**  
Use of this API requires authentication. The current user's user type must be **Administrator**.

**Content Type**  
`application/x-www-form-urlencoded`

---

### **Request Example**

```yaml
username: dev
```

### **Parameters Schema**

| Name            | Location | Type     | Required | Description                         |
|-----------------|----------|----------|----------|-------------------------------------|
| body            | body     | object   | no       | none                                |
| ├── username    | body     | string   | yes      | The username of the user to delete. |

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
| `username`| string | **No**  | none         | The username of the deleted user. |