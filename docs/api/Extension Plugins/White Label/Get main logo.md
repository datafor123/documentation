---
title: Get Main Logo
permalink: /api/Extension Plugins/White Label/Get main logo/
tags: ["api","Extension Plugins","White Label"]
description:
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/core/wl/wl_main.png
```

**Authorization**  
No authentication required.

**Content Type**  
`image/png`

---

**Description**  
Retrieves the main logo used in the white labeling configuration.

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
Returns the main logo image file in `.png` format.

```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Main logo retrieved successfully. |
| 404              | Not Found                                               | Logo file not found. |
| 500              | Internal Server Error                                   | Unexpected server error. |