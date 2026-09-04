---
title: Save CAS config
permalink: /api/Extension Plugins/Cas/Save CAS config/
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
/plugin/datafor-cas/api/update
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
3. Currently, the system only supports authentication via **JASIG CAS**.

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
  "center_url": "http://127.0.0.1:8080/cas",
  "logout_url": "http://127.0.0.1:8080/cas/logout",
  "login_url": "http://127.0.0.1:8080/cas/login",
  "enable": "1",
  "inituser": "1",
  "initpwd": "password",
  "type": "jasig",
  "ignoreList": [
    "/plugin/datafor-modeler/api",
    "/Login"
  ],
  "includeList": [
    "/plugin/datafor-secure/api"
  ]
}
```

---

### **Body Parameters Schema**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `center_url` | body     | string  | Yes      | CAS server base URL. |
| `logout_url` | body     | string  | No       | CAS logout URL (default: `center_url/logout`). |
| `login_url`  | body     | string  | No       | CAS login URL (default: `center_url/login`). |
| `enable`     | body     | string  | Yes      | Enable CAS authentication (`1` = true, `0` = false). |
| `inituser`   | body     | string  | Yes      | Enable CAS user initialization (`1` = true, `0` = false, default: `0`). |
| `initpwd`    | body     | string  | No       | Default password for newly initialized users. |
| `type`       | body     | string  | Yes      | CAS type (`jasig`, currently the only supported type). |
| `ignoreList` | body     | [string] | No      | List of paths to be ignored from CAS authentication (uses `contains` matching). |
| `includeList` | body     | [string] | Yes     | List of paths to be included in CAS authentication (uses `contains` matching). |

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | CAS configuration saved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |