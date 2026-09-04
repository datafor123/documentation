---
title: Get file or folder's ACL
permalink: /api/Files/Get file or folder's acl/
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
/plugin/datafor-modeler/api/repo/files/acl
```

**Authorization**  
The current user must have appropriate permissions to access ACL information.

**Content Type**  
`application/json`

---

## **Query Parameters**

| Name    | Location | Type   | Required | Description |
|---------|----------|--------|----------|-------------|
| `pathId` | query   | string | No       | The ID of the file or folder to retrieve ACL information. |

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "aces": [
    {
      "recipient": "admin",
      "tenantPath": null,
      "modifiable": true,
      "recipientType": 0,
      "permissions": [4]
    },
    {
      "recipient": "Administrator",
      "tenantPath": null,
      "modifiable": false,
      "recipientType": 1,
      "permissions": [4]
    }
  ],
  "id": "2f5a2686-50ed-4104-a459-a300013ac2ca",
  "owner": "admin",
  "tenantPath": null,
  "ownerType": 0,
  "entriesInheriting": false
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description |
|------------------|---------------------------------------------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | ACL information retrieved successfully. |
| 400              | Bad Request                                             | Invalid parameters provided. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks permission to access ACL. |
| 404              | Not Found                                               | File or folder not found. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**

| Name                | Type      | Required | Description |
|---------------------|----------|----------|-------------|
| `aces`             | array     | **Yes**  | List of access control entries. |
| `aces.recipient`   | string    | **Yes**  | Name of the user or role. |
| `aces.tenantPath`  | null      | **Yes**  | Tenant path (if applicable). |
| `aces.modifiable`  | boolean   | **Yes**  | Indicates if permissions can be modified. |
| `aces.recipientType` | integer | **Yes**  | Type of recipient (e.g., user or role). |
| `aces.permissions` | array     | **Yes**  | List of permission levels assigned. |
| `id`               | string    | **Yes**  | Unique ID of the file or folder. |
| `owner`            | string    | **Yes**  | Owner of the file or folder. |
| `tenantPath`       | null      | **Yes**  | Tenant path information (if applicable). |
| `ownerType`        | integer   | **Yes**  | Type of the owner. |
| `entriesInheriting` | boolean  | **Yes**  | Indicates if ACL entries inherit from a parent. |