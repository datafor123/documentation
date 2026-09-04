---
title: Recaption a file or folder
permalink: /api/Files/Recaption a file or folder/
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
/plugin/datafor-modeler/api/repo/files/recaption
```

**Authorization**  
The current user must have administrator authority over the folder or file.

**Content Type**  
`application/json`

---

### **Request Example**

```json
{
  "pathId": "/public/workshop.datafor",
  "newName": "workshop3"
}
```

### **Params**

| Name      | Location | Type   | Required | Description |
|-----------|----------|--------|----------|-------------|
| `pathId`  | body    | string | **Yes**  | The full path of the file or folder to rename. |
| `newName` | body    | string | **Yes**  | The new name for the file or folder. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "code": 200,
  "success": true
}
```

#### ❌ **Failure Response**
```json
{
  "code": 403,
  "success": false,
  "message": "Insufficient permissions"
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | File or folder renamed successfully. |
| 400              | Bad Request                                             | Invalid parameters provided. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks permission to rename the file or folder. |
| 404              | Not Found                                               | Specified file or folder not found. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|-----------|---------|----------|-------------|
| `code`    | integer | **Yes**  | HTTP status code of the response. |
| `success` | boolean | **Yes**  | Indicates whether the request was successful. |
| `message` | string  | No       | Additional information about the response (if applicable). |