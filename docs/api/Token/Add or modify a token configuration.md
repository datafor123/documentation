---
title: Add or modify a token configuration
permalink: /api/Token/Add or modify a token configuration/
tags: ["api","Authentication","Token"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/token/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user's type must be **Administrator**.

---

### **Request Example**

```json
{
  "name": "ERP",
  "token_name": "token",
  "secret": "abcd",
  "expire": 86400,
  "fieldmap": {
    "username": "loginname",
    "name": "name",
    "email": "email"
  },
  "algorithm": "HS256",
  "enable": "1",
  "inituser": "1",
  "initroles": [
    "SYS_Reader"
  ]
}
```

### **Body Request Schema**

| Name           | Type       | Required | Description                                        |
|---------------|------------|---------:|--------------------------------------------------|
| `name`        | string     | **Yes**  | Application name (must be unique, no special characters) |
| `token_name`  | string     | **Yes**  | Parameter name storing the token in the URL (default: `token`) |
| `secret`      | string     | **Yes**  | Public key used for authentication              |
| `expire`      | integer    | **Yes**  | Expiration time in seconds                      |
| `fieldmap`    | object     | **Yes**  | Field mapping for token attributes              |
| ├── `username` | string     | **Yes**  | Mapped username field                           |
| ├── `name`     | string     | **Yes**  | Mapped name field                               |
| ├── `email`    | string     | **Yes**  | Mapped email field                              |
| `algorithm`   | string     | **Yes**  | Token encryption algorithm (`HS256`, `HS384`, `HS512`, etc.) |
| `enable`      | string     | **Yes**  | Whether token authentication is enabled (`1` for true, `0` for false) |
| `inituser`    | string     | **Yes**  | Whether to initialize a user (`1` for true, `0` for false) |
| `initroles`   | [string]   | **Yes**  | Initial roles assigned (e.g., `SYS_Reader`) |
| `initpwd`     | string     | No       | Default password for automatically created users if not empty |

---

## **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | Request was successful | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description                          |
|-----------|---------|---------:|--------------------------------------|
| `msg`     | string  | No       | Response message                     |
| `success` | boolean | **Yes**  | Indicates whether the request was successful |

