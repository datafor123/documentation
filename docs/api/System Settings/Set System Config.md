---
title: Set System Config
permalink: /api/System Settings/Set System Config/
tags:
  - api
  - System Settings
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/system/settings/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

**Preconditions**
- Not all configuration keys need to be set; you can choose specific ones to update.

---

### **Request Example**

```json
{
  "locale-country": "",
  "cors-requests-allowed": "true",
  "cors-requests-exposed-headers": "",
  "cors-requests-allowed-domains": "http://test.com, http://localhost:28080, http://localhost:63342, https://login.microsoftonline.com, null",
  "cors-requests-allowed-methods": "GET,HEAD,POST",
  "cors-requests-allow-credentials": "true",
  "fully-qualified-server-url": "http://localhost:28080/datafor/",
  "allowRegister": "true",
  "cors-requests-allowed-headers": "CONTENT-TYPE,X-CSRF-TOKEN",
  "locale-language": "",
  "cors-root-config-is-abstract": "false"
}
```

---

### **Body Parameters Schema**

| Name                                      | Type   | Required | Description                                      |
|-------------------------------------------|--------|---------:|--------------------------------------------------|
| `locale-country`                          | string | No       | **Do not use**                                   |
| `cors-requests-allowed`                   | string | No       | Indicates whether CORS requests are allowed     |
| `cors-requests-exposed-headers`           | string | No       | Headers exposed in CORS responses               |
| `cors-requests-allowed-domains`           | string | No       | Allowed domains for CORS requests               |
| `cors-requests-allowed-methods`           | string | No       | Allowed HTTP methods for CORS requests          |
| `cors-requests-allow-credentials`         | string | No       | Indicates whether credentials are allowed in CORS requests |
| `fully-qualified-server-url`              | string | No       | Fully qualified server URL                      |
| `allowRegister`                           | string | No       | Indicates whether user registration is allowed  |
| `cors-requests-allowed-headers`           | string | No       | Headers allowed in CORS requests                |
| `locale-language`                         | string | No       | **Do not use**                                   |
| `cors-root-config-is-abstract`            | string | No       | Indicates whether the CORS root configuration is abstract |

---

## **Response Examples**

```json
{
  "code": "200",
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
| `code`    | string  | No       | Response status code                |
| `success` | boolean | **Yes**  | Indicates whether the request was successful |
