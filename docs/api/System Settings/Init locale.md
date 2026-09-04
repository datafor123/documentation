---
title: Init locale
permalink: /api/System Settings/Init locale/
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
/plugin/datafor/api/core/initLocale
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

**Preconditions**
- This API should be called immediately after login to initialize the locale settings.

---

### **Request Example**

```yaml
clientLocale: zh-CN

```

### Parameters

| Name           | Location | Type   | Required | Description                 |
|---------------|----------|--------|----------|-----------------------------|
| body          | body     | object | no       | Request body                |
| ├── clientLocale | body     | string | no       | Locale setting in BCP47 format |

---

## **Response Examples**

```json
{
  "islogged": true,
  "locale": "en-US",
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
| `islogged` | boolean | No       | Indicates if the user is logged in  |
| `locale`  | string  | **Yes**  | The effective locale after initialization |
| `success` | boolean | **Yes**  | Indicates whether the request was successful |

