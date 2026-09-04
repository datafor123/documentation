---
title: Get file tree
permalink: /api/Files/Get file tree/
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
/plugin/datafor-modeler/api/repo/files/tree
```

**Authorization**  
The current user must have appropriate permissions to access file structures.

**Content Type**  
`application/json`

---

## **Query Parameters**

| Name        | Location | Type   | Required | Description |
|------------|----------|--------|----------|-------------|
| `pathId`   | query   | string | No       | The ID of the folder to retrieve the file tree from. |
| `showHidden` | query   | string | No       | Whether to include hidden files and folders. |

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
    "hidden": false,
    "title": "Public"
  },
  "children": [
    {
      "file": {
        "name": "workshop.datafor",
        "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
        "createdDate": "1722844149655",
        "fileSize": 322,
        "folder": false,
        "path": "/public/workshop.datafor",
        "hidden": false,
        "title": "workshop"
      },
      "children": []
    }
  ]
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | File tree retrieved successfully. |
| 400              | Bad Request                                             | Invalid parameters provided. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks permission to access file tree. |
| 404              | Not Found                                               | Folder not found. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name                | Type      | Required | Description |
|---------------------|----------|----------|-------------|
| `file`             | object    | **Yes**  | Root folder details. |
| `file.name`        | string    | **Yes**  | Name of the folder. |
| `file.id`          | string    | **Yes**  | Unique ID of the folder. |
| `file.createdDate` | string    | **Yes**  | Creation timestamp. |
| `file.folder`      | boolean   | **Yes**  | Indicates if the entity is a folder. |
| `file.path`        | string    | **Yes**  | Full path of the folder. |
| `file.hidden`      | boolean   | **Yes**  | Indicates if the folder is hidden. |
| `file.title`       | string    | **Yes**  | Display title of the folder. |
| `children`         | array     | **Yes**  | List of child folders and files. |
| `children.file`    | object    | **Yes**  | File or folder details. |
| `children.file.name` | string  | **Yes**  | Name of the file or folder. |
| `children.file.id`   | string  | **Yes**  | Unique ID of the file or folder. |
| `children.file.createdDate` | string | **Yes**  | Creation timestamp. |
| `children.file.fileSize` | integer | No   | File size in bytes (null for folders). |
| `children.file.folder` | boolean | **Yes**  | Indicates if it is a folder. |
| `children.file.path`   | string  | **Yes**  | Full path of the file or folder. |
| `children.file.hidden` | boolean | **Yes**  | Indicates if the file or folder is hidden. |
| `children.file.title`  | string  | **Yes**  | Display title of the file or folder. |
| `children.children`    | array   | No      | Nested child elements (if any). |