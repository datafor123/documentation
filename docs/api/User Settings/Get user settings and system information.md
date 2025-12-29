---
title: Get user settings and system information
permalink: /api/User Settings/Get user settings and system information/
tags: ["api","User Settings"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/extension/auth/fetchUser
```

**Authorization**  
Authentication is **not required** to use this API.

---

### **Response Examples**

```json
{
  "ver": "C",
  "code": 200,
  "__LOAD_VARIABLE__": "1740013039357",
  "plugins": [
    "datafor-modeler",
    "datafor-backup",
    "datafor"
  ],
  "roles": [
    "Administrator",
    "Authenticated"
  ],
  "lic": {
    "valid": true,
    "licenseType": "O",
    "hasLicense": false,
    "expire": 1742969448711
  },
  "canEdit": true,
  "serverNameFull": "http://localhost:28080/datafor/",
  "contextPath": "/datafor/",
  "locale": "en",
  "localeList": [
    "en",
    "es",
    "zh"
  ],
  "islogged": true,
  "username": "admin"
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name                 | Type      | Required | Restrictions | Description           |
|----------------------|-----------|----------|--------------|-----------------------|
| `ver`                | string    | **Yes**  | none         | Version of the response. |
| `code`               | integer   | **Yes**  | none         | Status code of the response. |
| `__LOAD_VARIABLE__`  | string    | **Yes**  | none         | A load variable for tracking. |
| `plugins`            | [string]  | **Yes**  | none         | List of enabled plugins. |
| `roles`              | [string]  | **Yes**  | none         | List of roles assigned to the user. |
| `lic`                | object    | **Yes**  | none         | License information. |
| ├── `valid`          | boolean   | **Yes**  | none         | Whether the license is valid. |
| ├── `licenseType`    | string    | **Yes**  | none         | Type of the license (e.g., `O`). |
| ├── `hasLicense`     | boolean   | **Yes**  | none         | Whether the user has a license. |
| ├── `expire`         | integer   | **Yes**  | none         | Expiration timestamp of the license. |
| `canEdit`            | boolean   | **Yes**  | none         | Whether the user can edit settings. |
| `serverNameFull`     | string    | **Yes**  | none         | Full server URL. |
| `contextPath`        | string    | **Yes**  | none         | Context path of the server. |
| `locale`             | string    | **No**   | none         | User's current locale (returned when logged). |
| `localeList`         | [string]  | **No**   | none         | List of available locales (BCP47). |
| `islogged`           | boolean   | **Yes**  | none         | Whether the user is logged in. |
| `username`           | string    | **Yes**  | none         | Username of the logged-in user. |
| `ai-enable`          | boolean   | **No**   | none         | Indicates if the AI feature is enabled.|
| `ai-service-url`     | string    | **No**   | none         | The URL of the AI service endpoint.  |
---

### **Enum Values**

| Name | Value  |
|------|--------|
| `ver`| `C`, `F` |
