---
title: Save White Label Config
permalink: /api/Extension Plugins/White Label/Save white label config/
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
/plugin/datafor-whitelabel/api/update
```

**Authorization**  
The current user must have **Administrator** privileges.

**Content Type**  
`application/json`

---

## **Preconditions**
1. The `datafor-whitelabel` plugin must be installed.
2. The current user’s type must be **Administrator**.

---

### **Request Example**

```yaml
login_title: Access and manage your instances from this account
login_copyright: Copyright ©2025 company All rights reserved.
main_title: Datafor Visualization and Analysis
main_subtitle: Discover the value of data, help your business smarter
enable_help: "1"
enable_start: "1"
wl_logo: file://D:\images\wl_logo.png
wl_main: file://D:\images\wl_main.png
wl_favicon: file://D:\images\wl_favicon.ico
wl_main_small: file://D:\images\wl_main_small.png
```

---

## **Params**

| Name               | Location | Type              | Required | Description                      |
|--------------------|----------|------------------|----------|----------------------------------|
| `login_title`      | body     | string           | No       | Login page title.               |
| `login_copyright`  | body     | string           | No       | Copyright text on login page.   |
| `main_title`       | body     | string           | No       | Main title displayed in the UI. |
| `main_subtitle`    | body     | string           | No       | Subtitle below the main title.  |
| `enable_help`      | body     | string           | No       | `1` (true) or `0` (false).      |
| `enable_start`     | body     | string           | No       | `1` (true) or `0` (false).      |
| `wl_logo`         | body     | string (binary)  | No       | Path to the login page logo (PNG). |
| `wl_main`         | body     | string (binary)  | No       | Path to the main logo (PNG).    |
| `wl_favicon`      | body     | string (binary)  | No       | Path to the favicon (ICO).      |
| `wl_main_small`   | body     | string (binary)  | No       | Path to the small main logo (PNG). |

---

## **Response Examples**

### ✅ Success Response (200 OK)
```json
{
  "msg": "success",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Configuration saved successfully. |
| 400              | Bad Request                                             | Invalid request format or parameters. |
| 500              | Internal Server Error                                   | Unexpected server error. |

---

## **Response Data Schema**

| Name       | Type    | Required | Description |
|------------|--------|----------|-------------|
| `msg`      | string | No       | Response message. |
| `success`  | boolean | **Yes**  | `true` if the request was successful. |