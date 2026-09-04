---
title: Download backup zip
permalink: /api/Extension Plugins/Backup/Download backup zip/
tags:
  - api
  - Extension Plugins
  - Backup
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-backup/api/log/download
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user's user type **must be** `Administrator`.

---

## **Params**

| Name    | Location | Type   | Required | Description |
|---------|----------|--------|----------|-------------|
| `id`    | query   | string | Yes      | The unique backup identifier (e.g., `Backup_2023.10.27-10.59.45.850+0800`). |
---

## **Response Examples**

### ✅ Success Response (200 OK)
The response will contain a downloadable **ZIP file**.

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Backup file download successful. |
| 400              | Bad Request                                             | Invalid request parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User does not have permission. |
| 404              | Not Found                                               | The specified backup file does not exist. |
| 500              | Internal Server Error                                   | Unexpected server error. |
