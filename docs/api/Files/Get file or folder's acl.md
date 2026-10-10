---
title: Get file or folder's ACL
permalink: /api/Files/Get file or folder's acl/
tags:
  - api
  - Files
description: Read the access control list of a report, file, or folder.
createTime: 2026/09/01 22:03:26
---
Returns the access control list (ACL) of a repository item: its owner, whether it inherits from the parent folder, and each grant.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/repo/files/acl` |
| Permission | **Read** on the item |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | Yes | Repository path, for example `/public/Sales/Revenue.datafor`. The colon form `:public:Sales:Revenue.datafor` is also accepted. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/acl" \
  --data-urlencode "pathId=/public/Sales/Revenue.datafor"
```

```json
{
  "id": "11111111-2222-3333-4444-555555555555",
  "owner": "admin",
  "ownerType": 0,
  "tenantPath": null,
  "entriesInheriting": false,
  "aces": [
    { "recipient": "admin", "recipientType": 0, "permissions": [0, 1, 2, 3, 4], "modifiable": true, "tenantPath": null },
    { "recipient": "Reader", "recipientType": 2, "permissions": [0], "modifiable": true, "tenantPath": null },
    { "recipient": "Administrator", "recipientType": 1, "permissions": [4], "modifiable": false, "tenantPath": null }
  ]
}
```

| Field | Description |
| --- | --- |
| `owner`, `ownerType` | Owner name; `ownerType` 0 = user, 1 = role. |
| `entriesInheriting` | `true` when the item uses its parent folder's ACL. The `aces` then show the effective, inherited grants. |
| `aces[].recipient` | User, role, or user type name. |
| `aces[].recipientType` | 0 = user, 1 = role, 2 = user type (Administrator, Creator, Reader and similar). |
| `aces[].permissions` | 0 = Read, 1 = Edit, 2 = Delete, 3 = Manage permissions, 4 = Full control. |
| `aces[].modifiable` | `false` for locked grants, such as the Administrator role, that cannot be changed. |

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "responseCode": 410}` | The path does not exist or the caller cannot read it. |

Related: [Access Control List](/documentation/System/Access-Control-List/), [Change ACLs for files](/api/Files/Change%20acl%20for%20files/)
