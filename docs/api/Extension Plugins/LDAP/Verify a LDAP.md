---
title: Verify a LDAP
permalink: /api/Extension Plugins/LDAP/Verify a LDAP/
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
/plugin/datafor-ldap/api/application/verifyConfig
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
  "dn": "cn=admin,dc=imysh,dc=com",
  "url": "ldap://127.0.0.1:389",
  "authtype": "simple",
  "secret": "123456"
}
```

---

### **Body Parameters Schema**

| Name        | Location | Type    | Required | Description |
|------------|----------|---------|----------|-------------|
| `initial`  | body     | string  | Yes      | Initial LDAP context factory class name. Example: `com.sun.jndi.ldap.LdapCtxFactory` |
| `dn`       | body     | string  | Yes      | Distinguished Name (DN) used for authentication. Example: `cn=admin,dc=imysh,dc=com` |
| `url`      | body     | string  | Yes      | LDAP server URL. Example: `ldap://127.0.0.1:389` |
| `authtype` | body     | string  | Yes      | LDAP authentication type. Example: `simple` or `none` |
| `secret`   | body     | string  | Yes      | LDAP administrator password. |

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
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | LDAP configuration verified successfully. |
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