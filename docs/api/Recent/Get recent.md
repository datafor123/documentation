---
title: Get recent
permalink: /api/Recent/Get recent/
tags:
  - api
  - Recent
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/user-settings/recent
```

**Authorization**  
Authentication is required to use this API. For details on the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

---

## **Description**
This API retrieves a list of recently accessed items for the current user. It provides quick access to previously viewed resources.

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
[
  {
    "fullPath": "/public/workshop.datafor",
    "lastUse": 1722219194406,
    "title": "workshop"
  }
]
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `fullPath` | string  | **Yes**  | The absolute path of the accessed resource. |
| `lastUse`  | integer | **Yes**  | The timestamp (in milliseconds) of the last access. |
| `title`    | string  | **Yes**  | The display name of the accessed resource. |
