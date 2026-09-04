---
title: Upload files
permalink: /api/Files/Upload files/
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
/plugin/datafor-modeler/api/repo/files/import
```

**Authorization**  
The current user must have write permissions in the target directory.

**Content Type**  
`multipart/form-data`

---

### **Request Example**

```yaml
importDir: /public
fileUpload: file://D:\temp\schema-Demo.zip
smart: "true"
```

| Name         | Location | Type   | Required | Description |
|-------------|----------|--------|----------|-------------|
| `importDir` | body     | string | No       | Default is `/public`. If empty, the file is uploaded to the root directory. |
| `fileUpload` | body     | binary | **Yes**  | The file to upload. |
| `smart`     | body     | boolean | No       | Default is `true`. If `true`, new files or directories inherit the uploader's administrator ACL, but existing files retain their ACL. |

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

| HTTP Status Code | Meaning                                                 | Description                                    |
|------------------|---------------------------------------------------------|------------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | File uploaded successfully.                    |
| 400              | Bad Request                                             | Invalid request format or missing parameters. |
| 401              | Unauthorized                                            | Authentication required.                      |
| 403              | Forbidden                                               | User lacks permission to upload.              |
| 500              | Internal Server Error                                   | Unexpected error occurred.                    |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `success` | boolean | **Yes**  | `true` if the upload was successful, `false` otherwise. |