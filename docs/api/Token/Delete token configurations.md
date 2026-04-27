---
title: Delete token configurations
permalink: /api/Token/Delete token configurations/
tags: ["api","Authentication","Token"]
description: 
---

Thanks for clarifying! Based on your preference, here’s the revised API documentation:

---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/token/deleteBatch
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user's user type **must** be `Administrator`.

---

### Parameters

```json
[
  "ERP",
  "OA"
]
```

---

## **Response Examples**

```json
{
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name     | Type    | Required | Restrictions | Description       |
|----------|---------|----------|--------------|-------------------|
| `success`| boolean | **Yes**  | none         | Indicates if the deletion was successful (`true` or `false`). |
| `msg`    | string  | No       | none         | Error message, if applicable. |

---

Is this aligned with your preferred format? Let me know if you'd like to make any further tweaks!