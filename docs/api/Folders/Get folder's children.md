---
title: Get folder's children
permalink: /api/Folders/Get folder's children/
tags:
  - api
  - Folders
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/repo/files/children
```

**Authorization**  
The current user must have read authority over the folder.

---

## **Query Parameters**

| Name               | Location | Type           | Required | Description |
|--------------------|----------|---------------|----------|-------------|
| `pathId`          | query    | array[string] | No       | The ID of the folder whose children are being queried. |
| `showHidden`      | query    | string        | No       | Whether to show hidden files. |
| `filter`          | query    | string        | No       | Filter criteria for files or folders. |
| `includeAccessMap` | query    | string        | No       | Whether to include access permissions. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
[
  {
    "name": "dev",
    "id": "46bf3cfb-c101-42fa-af63-3eae8c57f8c8",
    "createdDate": "1722912636753",
    "fileSize": -1,
    "folder": true,
    "path": "/public/dev",
    "hidden": false,
    "title": "dev",
    "locale": "zh",
    "pathTitle": "/Public/dev",
    "accessMap": [
      { "name": "0", "value": "true" },
      { "name": "1", "value": "true" },
      { "name": "2", "value": "true" },
      { "name": "4", "value": "true" }
    ]
  },
  {
    "name": "workshop.datafor",
    "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
    "createdDate": "1722844149655",
    "lastModifiedDate": "1722846462016",
    "fileSize": 322,
    "folder": false,
    "path": "/public/workshop.datafor",
    "hidden": false,
    "title": "workshop3",
    "locale": "zh",
    "pathTitle": "/Public/workshop3",
    "accessMap": [
      { "name": "0", "value": "true" },
      { "name": "1", "value": "true" },
      { "name": "2", "value": "true" },
      { "name": "4", "value": "true" }
    ]
  }
]
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                              |
|------------------|---------------------------------------------------------|------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Folder's children retrieved successfully. |
| 400              | Bad Request                                             | Invalid request format or missing parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks the required permissions. |
| 404              | Not Found                                               | Specified folder does not exist. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name               | Type           | Required | Description |
|--------------------|---------------|----------|-------------|
| `name`            | string        | Yes      | Name of the file or folder. |
| `id`              | string        | Yes      | Unique identifier of the file or folder. |
| `createdDate`     | string        | Yes      | Creation timestamp. |
| `lastModifiedDate` | string        | No       | Last modified timestamp. |
| `fileSize`        | integer       | Yes      | Size of the file in bytes. |
| `folder`         | boolean       | Yes      | `true` if it is a folder, `false` if it is a file. |
| `path`            | string        | Yes      | Path of the file or folder. |
| `hidden`         | boolean       | Yes      | Whether the file or folder is hidden. |
| `title`          | string        | Yes      | Display title of the file or folder. |
| `locale`         | string        | No       | Locale setting for the file or folder. |
| `pathTitle`      | string        | Yes      | Path title for display purposes. |
| `accessMap`      | array[object] | No       | Access permissions for the file or folder. |
| `accessMap[].name`  | string     | Yes      | Permission name. |
| `accessMap[].value` | string     | Yes      | Permission value (`true` or `false`). |

