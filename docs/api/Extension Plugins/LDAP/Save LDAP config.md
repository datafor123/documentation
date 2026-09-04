---
title: Save LDAP config
permalink: /api/Extension Plugins/LDAP/Save LDAP config/
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
/plugin/datafor-ldap/api/application/update
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
{
  "initial": "com.sun.jndi.ldap.LdapCtxFactory",
  "administrator": "cn=admin,dc=imysh,dc=com",
  "secret": "123456",
  "url": "ldap://127.0.0.1:389",
  "authtype": "simple",
  "user_base": "cn=${username},dc=imysh,dc=com",
  "enable": "1",
  "inituser": "1",
  "initroles": [
    "SYS_Reader"
  ],
  "desc": "dev"
}
```

---

### **Body Parameters Schema**

| Name            | Location | Type      | Required | Description |
|----------------|----------|-----------|----------|-------------|
| `initial`      | body     | string    | Yes      | Initial LDAP context factory class name. Example: `com.sun.jndi.ldap.LdapCtxFactory` |
| `url`          | body     | string    | Yes      | LDAP server URL. Example: `ldap://127.0.0.1:389` |
| `authtype`     | body     | string    | Yes      | LDAP authentication type. Example: `simple` or `none` |
| `user_base`    | body     | string    | Yes      | LDAP user base distinguished name (DN). Example: `cn=${username},dc=imysh,dc=com` |
| `enable`       | body     | string    | Yes      | Enable LDAP authentication (`1` = true, `0` = false) |
| `inituser`     | body     | string    | Yes      | Enable initial user creation (`1` = true, `0` = false) |
| `initroles`    | body     | [string]  | Yes      | List of initial roles assigned to users. |
| `administrator` | body    | string    | No       | LDAP administrator distinguished name (DN). Example: `cn=admin,dc=imysh,dc=com` |
| `secret`      | body     | string    | No       | LDAP administrator password. This is used for authentication testing only. |
| `desc`        | body     | string    | No       | Description of the LDAP configuration. |

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
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | LDAP configuration saved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description |
|-----------|---------|----------|-------------|
| `msg`     | string  | No       | Message string (if any error occurs). |
| `success` | boolean | Yes      | `true` if the request was successful, `false` otherwise. |