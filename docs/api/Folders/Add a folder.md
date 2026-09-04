---
title: Add a folder
permalink: /api/Folders/Add a folder/
tags:
  - api
  - Folders
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/repo/dirs/add
```

**Authorization**  
The current user must have administrator authority over the parent folder.

**Content Type**  
`application/json`

---

### **Request Example**

```json
{
  "aces": [
    {
      "recipient": "admin",
      "tenantPath": null,
      "modifiable": true,
      "recipientType": 0,
      "permissions": [
        4
      ]
    }
  ],
  "id": null,
  "owner": "admin",
  "tenantPath": null,
  "ownerType": 0,
  "entriesInheriting": false
}
```

| Name                  | Location | Type     | Required | Description |
|-----------------------|----------|---------|----------|-------------|
| `pathId`             | query     | string  | No       | Parent folder path where the new folder will be created. |
| `body`               | body      | object  | No       | JSON payload for folder creation. |
| `aces`               | body      | array   | **Yes**  | List of access control entries (ACL). |
| `recipient`          | body      | string  | No       | User or role receiving permissions. |
| `tenantPath`         | body      | null    | No       | Tenant path (if applicable). |
| `modifiable`         | body      | boolean | No       | Whether the ACL is modifiable. |
| `recipientType`      | body      | integer | No       | Type of recipient (e.g., user or role). |
| `permissions`        | body      | array   | No       | List of permission levels assigned. |
| `id`                | body      | null    | No       | Folder ID (set to `null` for new folder). |
| `owner`             | body      | string  | **Yes**  | Owner of the folder. |
| `tenantPath`        | body      | null    | No       | Tenant path (if applicable). |
| `ownerType`         | body      | integer | **Yes**  | Owner type identifier. |
| `entriesInheriting` | body      | boolean | **Yes**  | Whether the folder inherits permissions from its parent. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "code": 200,
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                                     |
|------------------|---------------------------------------------------------|-------------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Folder created successfully.                    |
| 400              | Bad Request                                             | Invalid request format or missing parameters.  |
| 401              | Unauthorized                                            | Authentication required.                        |
| 403              | Forbidden                                               | User lacks the required permissions.           |
| 500              | Internal Server Error                                   | Unexpected error occurred.                      |

---

## **Response Data Schema**

| Name      | Type    | Required | Description |
|-----------|--------|----------|-------------|
| `code`    | integer | No       | HTTP response code. |
| `success` | boolean | **Yes**  | `true` if the folder was successfully created, `false` otherwise. |