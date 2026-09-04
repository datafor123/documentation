---
title: Query SAML config
permalink: /api/Extension Plugins/SAML2/Query SAML config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - SAML2
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-saml/api/application/query
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
1. The `datafor-saml` plugin must be installed.
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

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "code": "200",
  "data": {
    "idp_entity_id": "https://sts.windows.net/dff6f1-4338-4212-bdc7-4544f8c9b2f6/",
    "initroles": [
      "SYS_Reader"
    ],
    "fieldmap": {
      "name": "http://schemas.microsoft.com/identity/claims/displayname",
      "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
      "username": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
    },
    "includeList": [
      "/datafor/console"
    ],
    "idp_sso_url": "https://login.microsoftonline.com/dff6f1-4338-4212-bdc7-4544f8c9b2f6/saml2",
    "ignoreList": [
      "/plugin/datafor-modeler/api"
    ],
    "initpwd": "",
    "sp_entity_id": "bi",
    "allowed_clock_skew": 2,
    "idp_certificate": "-----BEGIN CERTIFICATE-----\nMI.....uAe0vzQ94DSLPpp2CoryL/4Tla67zlKsq1EbPTVELngkT6D22q1VQ29ivUEr\nS6OVVx93CK/8CZXnCyii\n-----END CERTIFICATE-----\n",
    "inituser": "1",
    "enable": "1"
  },
  "success": true
}
```

---

## **Response Data Schema (HTTP 200)**

| Name                    | Type     | Required | Description |
|-------------------------|---------|----------|-------------|
| `code`                 | string  | No       | HTTP response code. |
| `data`                 | object  | Yes      | SAML configuration data. |
| ├── `idp_entity_id`     | string  | Yes      | Identity Provider (IdP) Entity ID. |
| ├── `initroles`         | array   | Yes      | List of initial roles assigned to users. |
| ├── `fieldmap`         | object  | Yes      | Field mappings for SAML attributes. |
| │   ├── `name`         | string  | Yes      | Field mapping for user display name. |
| │   ├── `email`        | string  | Yes      | Field mapping for user email. |
| │   ├── `username`     | string  | Yes      | Field mapping for username. |
| ├── `includeList`       | array   | Yes      | List of paths that require authentication. |
| ├── `idp_sso_url`      | string  | Yes      | Identity Provider Single Sign-On (SSO) URL. |
| ├── `ignoreList`       | array   | Yes      | List of paths to be ignored from authentication. |
| ├── `initpwd`          | string  | No       | Initial user password. |
| ├── `sp_entity_id`     | string  | Yes      | Service Provider (SP) Entity ID. |
| ├── `allowed_clock_skew` | integer | No      | Allowed clock skew (in seconds). |
| ├── `idp_certificate`  | string  | Yes      | IdP X.509 certificate. |
| ├── `inituser`         | string  | Yes      | Whether to initialize user creation (`1` = enabled, `0` = disabled). |
| ├── `enable`           | string  | Yes      | Whether SAML authentication is enabled (`1` = enabled, `0` = disabled). |
| `success`              | boolean | Yes      | `true` if the request was successful, `false` otherwise. |
| `msg`                  | string  | No       | Response message (if any error occurs). |

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | SAML configuration retrieved successfully. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |