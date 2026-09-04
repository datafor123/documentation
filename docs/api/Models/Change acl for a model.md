---
title: Change acl for a model
permalink: /api/Models/Change acl for a model/
tags:
  - api
  - Models
description: null
createTime: 2026/09/01 22:03:26
---

### **Method**
`PUT`

### **Request URL**
```html
/datafor/plugin/datafor-modeler/api/datasource/analysis/Demo/acl
```  

### **Authorization**
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

### **Content Type**
`application/json`

---

### **Preconditions**
- The current user **must** have administrative privileges for the model.

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
      "permissions": 4
    },
    {
      "recipient": "Administrator",
      "tenantPath": null,
      "modifiable": false,
      "recipientType": 1,
      "permissions": 4
    },
    {
      "recipient": "SYS_Reader",
      "recipientType": 1,
      "modifiable": "true",
      "permissions": 0
    },
    {
      "recipient": "SYS_Creator",
      "recipientType": 1,
      "modifiable": "true",
      "permissions": 0
    }
  ],
  "id": "9de1ca48-8144-4a15-b846-b8ed170576e8",
  "owner": "admin",
  "tenantPath": null,
  "ownerType": 0,
  "entriesInheriting": false
}
```

| Name                 | Location | Type     | Required | Description |
|----------------------|----------|----------|----------|-------------|
| `body`              | body     | object   | No       | ACL configuration payload. |
| ├── `aces`          | body     | [object] | **Yes**  | A list of access control entries. |
| │   ├── `recipient` | body     | string   | **Yes**  | The user or role receiving the permission. |
| │   ├── `tenantPath` | body    | null     | No       | Tenant path (if applicable). |
| │   ├── `modifiable` | body    | boolean  | **Yes**  | Whether the permission can be modified. |
| │   ├── `recipientType` | body | integer  | **Yes**  | The type of recipient (e.g., user or role). |
| │   ├── `permissions` | body   | integer  | **Yes**  | Permission level assigned. |
| ├── `id`            | body     | string   | **Yes**  | Unique identifier of the ACL entry. |
| ├── `owner`         | body     | string   | **Yes**  | Owner of the model. |
| ├── `tenantPath`    | body     | null     | No       | Tenant path (if applicable). |
| ├── `ownerType`     | body     | integer  | **Yes**  | Type of owner. |
| ├── `entriesInheriting` | body | boolean  | **Yes**  | Whether permissions inherit from parent entries. |

---

### **Enum Values**

| Name            | Value |
|----------------|-------|
| `permissions`  | `1`   |
| `permissions`  | `2`   |
| `permissions`  | `3`   |
| `permissions`  | `4`   |

---

### **Response Examples**

```json
{
  "success": true,
  "responseCode": 200
}
```  

---

### **HTTP Responses**

| HTTP Status Code | Meaning | Description | Data Schema |
|------------------|---------|-------------|-------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The request was successful. | Inline |

---

### **Response Data Schema (HTTP 200)**

| Name          | Type    | Required | Description |
|--------------|---------|----------|-------------|
| `success`    | boolean | **Yes**  | Indicates whether the request was successful. |
| `msg`        | string  | No       | Response message (if applicable). |
| `responseCode` | integer | No     | HTTP response code. |