---
title: Query an alert
permalink: /api/Alert/Query an alert/
tags:
  - api
  - Alert
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/alert/detail
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Preconditions**
- The current user must have **read** privileges for the alert.

**Content Type**  
No request body is typically sent with a GET request.

---

### **Parameters Schema**

| Name    | Location | Type   | Required | Description                      |
|---------|----------|--------|----------|----------------------------------|
| **name**| query    | string | No       | Alert name to be queried         |

*(Although an empty body `{}` is shown, this endpoint primarily uses the `name` query parameter.)*

---

## **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description     |
|-----------|---------|----------|-----------------|
| `msg`     | string  | No       | Message string  |
| `success` | boolean | Yes      | Request status  |