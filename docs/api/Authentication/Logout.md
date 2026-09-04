---
title: Logout
permalink: /api/Authentication/Logout/
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
/Logout
```

**Description**  
Logs the user out of the application and responds with a redirect (302) to a specified location.

**Content Type**  
No request body is typically used with a `GET` request.

---

## **Response Examples**

**302 Response**  
The server responds with an HTTP 302 (Found) and redirects the user (e.g., to `/datafor/index.jsp`).

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description                       | Data schema |
|------------------|-------------------------------------------------------------------------|-----------------------------------|------------|
| 302              | [Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)             | Location `/datafor/index.jsp`     | Inline     |

### **Headers**

**Request Headers**
- **Cookie**: Session cookie to identify the user’s session.

**Response Headers**
- **Location**: The URL the client is redirected to after logout (e.g., `/datafor/index.jsp`).

