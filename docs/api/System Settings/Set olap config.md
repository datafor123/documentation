---
title: Set olap config
permalink: /api/System Settings/Set olap config/
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
/plugin/datafor/api/modeler/olap/config/updateBatch
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

**Preconditions**
- The current user's type must be **Administrator**.

---

### **Request Example**
```json
[
  {
    "code": "mondrian.olap.NullMemberCaption",
    "value": "#null"
  }
]
```

### **Body Parameters Schema**

| Name   | Type   | Required | Description                              |
|--------|--------|---------:|------------------------------------------|
| `code` | string | **Yes**  | Configuration code identifier           |
| `value` | string | **Yes**  | New value for the specified configuration |

---

## **Response Examples**

```json
{
  "msg": "success",
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
| `msg`     | string  | No       | Response message                     |
| `success` | boolean | **Yes**  | Indicates whether the request was successful |

