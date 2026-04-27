---
title: Delete a token configuration
permalink: /api/Token/Delete a token configuration/
tags: ["api","Authentication","Token"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
`/plugin/datafor-modeler/api/token/delete`
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

```yaml
name: ERP
```

### **Params**

| Name | Location | Type   | Required | Description |
|------|----------|--------|----------|-------------|
| body | body     | object | no       | Token deletion payload |
| » name | body   | string | no       | The name of the token to delete |

---

## **Response Examples**

```json
{
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description     | Data schema |
|------------------|-------------------------------------------------------------------------|-----------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | Request successful | Inline     |

### **Response Data Schema (HTTP 200)**

| Name    | Type    | Required | Restrictions | Title      | Description        |
|---------|---------|---------:|--------------|------------|--------------------|
| `success` | boolean | **Yes**  | none         | Success    | Indicates success (true/false) |
| `msg`     | string  | No       | none         | Message    | Error message if applicable |