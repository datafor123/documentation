---
title: Query White Label Config
permalink: /api/Extension Plugins/White Label/Query white label config/
tags:
  - api
  - Extension Plugins
  - White Label
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/core/wl/query
```

**Authorization**  
No authentication required.

**Content Type**  
`application/json`

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "code": "200",
  "data": {
    "main_subtitle": "Simplify Insights, Amplify Growth",
    "enable_start": "true",
    "login_copyright": "Copyright@ 2025 company",
    "enable_help": "true",
    "main_title": "product"
  },
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | White label configuration retrieved successfully. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema**

| Name                        | Type    | Required | Description |
|-----------------------------|---------|----------|-------------|
| `code`                      | string  | **Yes**  | Response status code. |
| `data`                      | object  | **Yes**  | White label configuration data. |
| **» main_subtitle**          | string  | **Yes**  | Subtitle displayed below the main title. |
| **» enable_start**           | string  | **Yes**  | Whether the start page is enabled (`true` or `false`). |
| **» login_copyright**        | string  | **Yes**  | Copyright text displayed on the login page. |
| **» enable_help**            | string  | **Yes**  | Whether the help feature is enabled (`true` or `false`). |
| **» main_title**             | string  | **Yes**  | Main title displayed in the UI. |
| `success`                   | boolean | **Yes**  | `true` if the request was successful. |