---
title: Query System Config
permalink: /api/System Settings/Query System Config/
tags:
  - api
  - System Settings
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/system/settings/query
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Response Examples**

```json
{
  "code": "200",
  "data": {
    "locale-country": "",
    "cors-requests-allowed": "true",
    "cors-requests-exposed-headers": "",
    "cors-requests-allowed-domains": "http://test.com, http://localhost:28080, http://localhost:63342, https://aws.datafor.com.cn:448, http://117.144.48.146:48480, https://login.microsoftonline.com, null",
    "cors-requests-allowed-methods": "GET,HEAD,POST",
    "cors-requests-allow-credentials": "true",
    "fully-qualified-server-url": "http://localhost:28080/datafor/",
    "allowRegister": "true",
    "cors-requests-allowed-headers": "CONTENT-TYPE,X-CSRF-TOKEN",
    "locale-language": "",
    "cors-root-config-is-abstract": "false"
  },
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
| `data`    | object  | **Yes**  | System configuration settings        |
| `success` | boolean | **Yes**  | Indicates whether the request was successful |

#### **Data Object Schema**

| Name                                      | Type    | Required | Description                                      |
|-------------------------------------------|---------|---------:|--------------------------------------------------|
| `locale-country`                          | string  | **Yes**  | Country-specific locale setting                 |
| `cors-requests-allowed`                   | string  | **Yes**  | Whether CORS requests are allowed               |
| `cors-requests-exposed-headers`           | string  | **Yes**  | Headers exposed in CORS requests                |
| `cors-requests-allowed-domains`           | string  | **Yes**  | Allowed domains for CORS requests               |
| `cors-requests-allowed-methods`           | string  | **Yes**  | Allowed HTTP methods for CORS requests          |
| `cors-requests-allow-credentials`         | string  | **Yes**  | Whether credentials are allowed in CORS requests |
| `fully-qualified-server-url`              | string  | **Yes**  | Fully qualified server URL                      |
| `allowRegister`                           | string  | **Yes**  | Whether user registration is allowed            |
| `cors-requests-allowed-headers`           | string  | **Yes**  | Headers allowed in CORS requests                |
| `locale-language`                         | string  | **Yes**  | Language-specific locale setting                |
| `cors-root-config-is-abstract`            | string  | **Yes**  | Whether the CORS root configuration is abstract |

