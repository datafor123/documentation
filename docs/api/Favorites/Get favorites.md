---
title: Get favorites
permalink: /api/Favorites/Get favorites/
tags:
  - api
  - Favorites
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/user-settings/favorites
```

**Authorization**  
This API requires authentication.

**Content Type**  
`application/json`

---

## **Response Examples**

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

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Request successful. |
| 401              | Unauthorized                                            | Authentication required. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name       | Type    | Required | Description |
|------------|--------|----------|-------------|
| `fullPath` | string | **Yes**  | The full path of the favorite item. |
| `lastUse`  | integer | **Yes**  | Timestamp of the last use. |
| `title`    | string | **Yes**  | Title of the favorite item. |