---
title: Query CAS config
permalink: /api/Extension Plugins/Cas/Query CAS config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - Cas
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-cas/api/query
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
1. The `datafor-cas` plugin must be installed.
2. The current user's user type **must be** `Administrator`.

---

## **Params**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `Cookie`     | header   | string  | Yes      | Session cookie for authentication. |
| `Content-Type` | header | string  | Yes      | Must be set to `application/json`. |

---

### **Request Example**

```json
{
  "logout_url": "https://127.0.0.1:8443/cas/logout",
  "login_url": "https://127.0.0.1:8443/cas/login",
  "enable": "1",
  "inituser": "1",
  "initpwd": "password"
}
```

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "code": "200",
  "data": {
    "initroles": [
      "SYS_Reader"
    ],
    "logout_url": "http://127.0.0.1:8080/cas/logout",
    "center_url": "http://127.0.0.1:8080/cas",
    "login_url": "http://127.0.0.1:8080/cas/login",
    "inituser": "1",
    "initpwd": "password",
    "enable": "0",
    "ignoreList": [
      "/plugin/datafor-modeler/api",
      "/Login"
    ],
    "type": "jasig"
  },
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | CAS configuration retrieved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |