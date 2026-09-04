---
title: Query LDAP config
permalink: /api/Extension Plugins/LDAP/Query LDAP config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - LDAP
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-ldap/api/application/query
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
1. The `datafor-ldap` plugin must be installed.
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
{}
```

This API does not require any body parameters.

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
    "user_base": "cn=${username},dc=imysh,dc=com",
    "administrator": "cn=admin,dc=imysh,dc=com",
    "inituser": "1",
    "initial": "com.sun.jndi.ldap.LdapCtxFactory",
    "enable": "0",
    "config": "{\"user\":{\"ObjectClass\":\"organizationalPerson\"}}",
    "url": "ldap://127.0.0.1:389",
    "authtype": "simple",
    "desc": "dev"
  },
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | LDAP configuration retrieved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema (HTTP 200)**

| Name           | Type      | Required | Description |
|---------------|----------|----------|-------------|
| `code`        | string   | No       | Response status code. |
| `data`        | object   | Yes      | LDAP configuration details. |
| `initroles`   | [string] | Yes      | List of initial roles assigned to users. |
| `user_base`   | string   | Yes      | LDAP user base distinguished name (DN). |
| `inituser`    | string   | Yes      | Enable LDAP user initialization (`1` = true, `0` = false). |
| `initial`     | string   | Yes      | Initial LDAP context factory. |
| `enable`      | string   | Yes      | Enable LDAP authentication (`1` = true, `0` = false). |
| `config`      | string   | Yes      | LDAP user configuration settings. |
| `url`         | string   | Yes      | LDAP server URL. |
| `authtype`    | string   | Yes      | LDAP authentication type (`simple`, `DIGEST-MD5`, etc.). |
| `administrator` | string | No       | LDAP administrator DN (if applicable). |
| `desc`        | string   | No       | Description of the LDAP configuration. |
| `success`     | boolean  | Yes      | `true` if the request was successful, `false` otherwise. |
| `msg`         | string   | No       | Message string (if any error occurs). |