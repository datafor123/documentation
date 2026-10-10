---
title: Change ACLs for files
permalink: /api/Files/Change acl for files/
tags:
  - api
  - Files
description: Replace the access control list of one or more reports, files, or folders.
createTime: 2026/10/10 10:00:00
---
Replaces the access control list (ACL) of a repository item. The ACL you send replaces the current one; read it first with [Get file or folder's ACL](/api/Files/Get%20file%20or%20folder's%20acl/), change it, and send it back.

| | |
| --- | --- |
| Method and path | `PUT /plugin/datafor-modeler/api/repo/files/acl` |
| Permission | **Full control** on the item |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | query | string | Yes | Repository path, for example `/public/Sales`. |
| `owner` | body | string | Yes | Owner user or role name. |
| `ownerType` | body | integer | No | 0 = user, 1 = role. |
| `entriesInheriting` | body | boolean | Yes | `true` to use the parent folder's ACL; `aces` is then ignored. `false` to apply `aces`. |
| `aces` | body | array | Yes | Grants. Each has `recipient`, `recipientType` (0 = user, 1 = role, 2 = user type), `permissions` and `modifiable`. |
| `aces[].permissions` | body | integer array | Yes | The highest level counts and implies the lower ones: 0 = Read, 1 = Edit, 2 = Delete, 3 = Manage permissions, 4 = Full control. `[2]` is stored as `[0, 1, 2]`. |
| `aces[].modifiable` | body | boolean | Yes | Send `true`. Entries with `false` (locked grants as returned by the GET) are dropped before saving. |

User and role names must not contain `# , + " \ < >`.

## Example

Give the role `Sales` Read and the user `alice` Edit on a folder:

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/acl?pathId=/public/Sales" \
  -H "Content-Type: application/json" \
  -d '{
    "owner": "admin",
    "ownerType": 0,
    "entriesInheriting": false,
    "aces": [
      { "recipient": "admin", "recipientType": 0, "permissions": [4], "modifiable": true },
      { "recipient": "Sales", "recipientType": 1, "permissions": [0], "modifiable": true },
      { "recipient": "alice", "recipientType": 0, "permissions": [1], "modifiable": true }
    ]
  }'
```

```json
{ "success": true, "responseCode": 200 }
```

### Several items at once

`PUT /plugin/datafor-modeler/api/repo/files/aclBatch` takes a JSON object that maps each path to an ACL in the format above. Each item is reported separately:

```json
{
  "success": true,
  "data": [ { "/public/Sales": "200" }, { "/public/Finance": "401" } ]
}
```

## Errors

These endpoints report errors in `responseCode` (a number) with HTTP 200.

| `responseCode` | When |
| --- | --- |
| `400` | The body is not a valid ACL (`msg` has the parser error). |
| `401` | `owner` or a `recipient` is empty or contains an invalid character. |
| `410` | The path does not exist. |
| `500` | The repository rejected the change, for example because the caller lacks Full control. |

Related: [Access Control List](/documentation/System/Access-Control-List/), [Permission Evaluation Overview](/documentation/System/Permission-Evaluation-Overview/)
