---
title: Delete folders or files
permalink: /api/Files/Delete folders or files/
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
/plugin/datafor-modeler/api/repo/files/deleteBatch
```

**Authorization**  
The current user must have administrator privileges for the folder or file.

**Content Type**  
`text/plain`

---

### **Request Example**

```
3be29d39-1504-424b-8115-be940e7c9145,3be29d39-1504-424b-8115-be940e7c9146
```

---

## **Params**

| Name   | Location | Type   | Required | Description |
|--------|----------|--------|----------|-------------|
| `body` | body     | string | No       | Comma-separated list of file or folder IDs to delete. |

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
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Request successful. |
| 400              | Bad Request                                             | Invalid input provided. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks required permissions. |
| 404              | Not Found                                               | File or folder not found. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `success` | boolean | **Yes**  | `true` if deletion was successful, otherwise `false`. |