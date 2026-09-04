---
title: Search
permalink: /api/Files/Search/
tags:
  - api
  - Files
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/repo/files/search
```

**Authorization**  
The current user must have read access to the files or folders.

**Content Type**  
`application/json`

---

## **Query Parameters**

| Name  | Location | Type   | Required | Description                     |
|-------|----------|--------|----------|---------------------------------|
| `word` | query   | string | No       | The keyword to search for. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "file": {
    "name": "public",
    "id": "44153c42-e4c4-4cce-8ca7-f9025ea7e1ab",
    "createdDate": "1636119568448",
    "folder": true,
    "path": "/public",
    "title": "Public"
  },
  "children": [
    {
      "file": {
        "name": "workshop.datafor",
        "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
        "createdDate": "1722844149655",
        "creatorId": "admin",
        "fileSize": 322,
        "folder": false,
        "path": "/public/workshop.datafor",
        "title": "workshop",
        "description": "workshop"
      },
      "children": []
    }
  ]
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                            |
|------------------|---------------------------------------------------------|----------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Search executed successfully.         |
| 400              | Bad Request                                             | Invalid search query.                 |
| 401              | Unauthorized                                            | Authentication required.              |
| 403              | Forbidden                                               | User lacks permission to search.      |
| 500              | Internal Server Error                                   | Unexpected error occurred.            |

---

## **Response Data Schema**

| Name      | Type     | Required | Description                           |
|-----------|---------|----------|---------------------------------------|
| `file`    | object  | **Yes**  | Root folder or file in the search results. |
| `name`    | string  | **Yes**  | Name of the file or folder. |
| `id`      | string  | **Yes**  | Unique identifier of the file or folder. |
| `createdDate` | string | **Yes** | Timestamp when the file or folder was created. |
| `folder`  | boolean | **Yes**  | `true` if it's a folder, `false` if it's a file. |
| `path`    | string  | **Yes**  | Full path of the file or folder. |
| `title`   | string  | No       | Title of the file or folder. |
| `children` | array  | No       | List of child files or folders. |