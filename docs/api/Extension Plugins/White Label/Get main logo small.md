---
title: Get Main Logo Small
permalink: /api/Extension Plugins/White Label/Get main logo small/
tags:
  - api
  - Extension Plugins
  - White Label
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/core/wl/wl_main_small.png
```

**Authorization**  
No authentication required.

**Content Type**  
`image/png`

---

**Description**  
Retrieves the small version of the main logo, which is displayed when the menu bar is hidden.

By default, logo files are stored in the following directory:
```
pentaho-solutions\system\datafor\ui\images\
```
When the **White Label Tool** is configured, the files are stored in:
```
pentaho-solutions\system\datasource\whitelabel
```

---

## **Response Examples**

### ✅ Success Response (200 OK)
Returns the small main logo image file in `.png` format.

```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Small main logo retrieved successfully. |
| 404              | Not Found                                               | Logo file not found. |
| 500              | Internal Server Error                                   | Unexpected server error. |