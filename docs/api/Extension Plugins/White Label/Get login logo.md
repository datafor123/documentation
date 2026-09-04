---
title: Get Login Logo
permalink: /api/Extension Plugins/White Label/Get login logo/
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
/plugin/datafor/api/core/wl/wl_logo.png
```

**Authorization**  
No authentication required.

**Content Type**  
`image/png`

---

**Description**  
Retrieves the login page logo used in the white labeling configuration.

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
Returns the login logo image file in `.png` format.

```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Login logo retrieved successfully. |
| 404              | Not Found                                               | Logo file not found. |
| 500              | Internal Server Error                                   | Unexpected server error. |