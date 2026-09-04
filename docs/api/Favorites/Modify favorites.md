---
title: Modify favorites
permalink: /api/Favorites/Modify favorites/
tags:
  - api
  - Favorites
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user-settings/favorites
```

**Authorization**  
This API requires authentication.

**Content Type**  
`application/json`

---

### **Request Example**

```json
[
  {
    "fullPath": "/public/workshop.datafor",
    "title": "workshop",
    "lastUse": 1722844154850
  }
]
```

---

## **Params**

| Name       | Location | Type          | Required | Description |
|------------|----------|---------------|----------|-------------|
| `body`     | body     | array[object] | No       | Array of favorite items to modify. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "data": "[{\"fullPath\":\"/public/workshop.datafor\",\"title\":\"workshop\",\"lastUse\":1722844154850}]",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Request successful. |
| 400              | Bad Request                                             | Invalid input provided. |
| 401              | Unauthorized                                            | Authentication required. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `data`    | string | **Yes**  | JSON string of modified favorites. |
| `success` | boolean | **Yes**  | `true` if modification is successful, otherwise `false`. |