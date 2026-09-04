---
title: Download folders and files
permalink: /api/Files/Download folders and files/
tags:
  - api
  - Files
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/repo/files/downloadList
```

**Authorization**  
The current user must have read access to the specified folder or file.

**Content Type**  
`application/json`

---

### **Request Example**

```json
{
  "pathList": ["/public/ivan.datafor"]
}
```

---

## **Params**

| Name       | Location | Type   | Required | Description |
|------------|----------|--------|----------|-------------|
| `body`     | body     | object | No       | JSON payload containing file paths to download. |
| `pathList` | body     | array  | No       | List of file or folder paths to download. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Request successful, file(s) ready for download. |
| 400              | Bad Request                                             | Invalid input provided. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks required permissions. |
| 404              | Not Found                                               | File or folder not found. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `success` | boolean | **Yes**  | `true` if the request was successful, otherwise `false`. |