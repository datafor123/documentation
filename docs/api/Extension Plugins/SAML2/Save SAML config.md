---
title: Save SAML Configuration
permalink: /api/Extension Plugins/SAML2/Save SAML config/
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
/plugin/datafor-saml/api/application/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
1. The **datafor-saml** plugin must be installed.
2. The current user's type must be **Administrator**.

---

## **Params**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `Cookie`     | header   | string  | Yes      | Session cookie for authentication. |
| `Content-Type` | header | string  | Yes      | Must be `application/json`. |

---

### **Request Example**

```json
{
  "idp_sso_url": "https://login.microsoftonline.com/1fdff6f1-4338-4212-bdc7-4544f8c9b2f6/saml2",
  "idp_entity_id": "https://sts.windows.net/1fdff6f1-4338-4212-bdc7-4544f8c9b2f6/",
  "idp_certificate": "-----BEGIN CERTIFICATE-----\nMIIC1DCXXXXXXnCyii\n-----END CERTIFICATE-----\n",
  "sp_entity_id": "bi",
  "allowed_clock_skew": 2,
  "message_lifetime": "2",
  "fieldmap": {
    "username": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
    "name": "http://schemas.microsoft.com/identity/claims/displayname",
    "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
  },
  "enable": "1",
  "inituser": "1",
  "initpwd": "password",
  "initroles": [
    "SYS_Reader"
  ],
  "ignoreList": [
    "/plugin/datafor-modeler/api"
  ],
  "includeList": [
    "/datafor/console"
  ]
}
```

| Name                 | Location | Type     | Required | Description |
|----------------------|----------|---------|----------|-------------|
| `idp_sso_url`       | body     | string  | Yes      | **Identity Provider (IdP) SSO URL** (The `Location` attribute in the `<SingleSignOnService>` element). |
| `idp_entity_id`     | body     | string  | Yes      | **Identity Provider (IdP) Entity ID** (The `entityID` attribute in the `<EntityDescriptor>` element). |
| `idp_certificate`   | body     | string  | Yes      | **Public certificate** used by Looker to verify the IdP response signature (`<KeyDescriptor use="signing"><KeyInfo><X509Data><X509Certificate>` section). |
| `sp_entity_id`      | body     | string  | Yes      | **Service Provider (SP) Entity ID** (also referred to as IdP Audience). |
| `allowed_clock_skew` | body     | integer | Yes      | The allowed time offset in seconds (default `0`). Some IdPs may require this to account for clock differences between the IdP and SP. |
| `message_lifetime`  | body     | string  | No       | Time in seconds for how long the SAML assertion remains valid. |
| `enable`            | body     | string  | Yes      | `1` (enabled) or `0` (disabled). Default is `0`. |
| `inituser`          | body     | string  | Yes      | `1` (enabled) or `0` (disabled). Default is `0`. |
| `initpwd`           | body     | string  | Yes      | Password for the initial user (`inituser`). Cannot be empty if `inituser` is set to `1`. |
| `initroles`         | body     | array   | Yes      | List of roles assigned to the initial user. |
| `ignoreList`        | body     | array   | Yes      | List of URLs to ignore (use `contains` to match). |
| `includeList`       | body     | array   | Yes      | List of URLs to include (use `contains` to match). |
| `fieldmap`          | body     | object  | Yes      | Mapping of SAML attributes to user fields. |
| ├─ `username`       | body     | string  | Yes      | Attribute for the username. |
| ├─ `name`           | body     | string  | Yes      | Attribute for the user's full name. |
| └─ `email`          | body     | string  | Yes      | Attribute for the user's email. |

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
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | SAML configuration saved successfully. |
| 400              | Bad Request                                             | Invalid request or missing parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 500              | Internal Server Error                                   | Unexpected server error. |