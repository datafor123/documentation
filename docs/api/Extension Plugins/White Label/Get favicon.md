---
title: Get Favicon
permalink: /api/Extension Plugins/White Label/Get favicon/
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
/plugin/datafor/api/core/wl/wl_favicon.ico
```

**Authorization**  
No authentication required.

**Content Type**  
`image/x-icon`

---

**Description**  
Retrieves the favicon used in the white labeling configuration.

By default, favicon files are stored in the following directory:
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
Returns the favicon image file in `.ico` format.

```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Favicon retrieved successfully. |
| 404              | Not Found                                               | Favicon file not found. |
| 500              | Internal Server Error                                   | Unexpected server error. |