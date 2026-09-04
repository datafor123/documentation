---
title: Login
permalink: /api/Authentication/Login/
tags:
  - api
  - Authentication
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/j_spring_security_check
```

**Description**  
This endpoint allows a user to log in. Upon successful login, the server responds with a 302 redirect to the specified location.

**Content Type**  
Typically `application/x-www-form-urlencoded` when submitting form data (though it is uncommon to send a request body with `GET`).

---

### **Parameters Schema**

| Name          | Location | Type   | Required | Description                                         |
|---------------|----------|--------|----------|-----------------------------------------------------|
| **j_username**| body     | string | No       | The username for login (e.g., `admin`)             |
| **j_password**| body     | string | No       | The password for login (e.g., `password`)          |

### **Request Example**
```
j_username: admin
j_password: password
```

---

## **Response Examples**

**302 Response**  
The server responds with an HTTP 302 (Found) and redirects the user.

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                                 | Description                       | Data schema |
|------------------|-----------------------------------------------------------------------------------------|-----------------------------------|------------|
| 302              | [Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)                             | Redirect to `/datafor`            | Inline     |

### **Headers**

**Request Headers**
- **Cookie**: Session cookie for identifying the user’s session.

**Response Headers**
- **Location**: The URL the client is redirected to (e.g., `/datafor` if login is successful).