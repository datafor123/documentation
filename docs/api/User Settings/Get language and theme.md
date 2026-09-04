---
title: Get language and theme
permalink: /api/User Settings/Get language and theme/
tags:
  - api
  - User Settings
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/user-settings/display
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

### **Response Examples**

```json
[
  {
    "id": "language",
    "value": "en"
  },
  {
    "id": "theme",
    "value": "light"
  }
]
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name            | Type     | Required | Restrictions | Description       |
|-----------------|----------|----------|--------------|-------------------|
| `id`            | string   | **Yes**  | none         | The identifier of the setting (`language` or `theme`). |
| `value`         | string   | **Yes**  | none         | The value of the setting (e.g., `en` for language, `light` for theme). |

---

### **Enum Values**

| Name | Value    |
|------|----------|
| `id` | `language` |
| `id` | `theme`    |
