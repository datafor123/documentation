---
title: Change ACLs for connections
permalink: /api/Connections/Change acl for connections/
tags:
  - api
  - Connections
description: Read or replace who can use, edit, delete, or manage a data connection.
createTime: 2026/09/01 22:03:26
---
Replaces the access control list (ACL) of a data connection. Read on a connection lets a user build models on it; Full control is needed for raw SQL and for managing its data security rules.

| | |
| --- | --- |
| Method and path | `PUT /plugin/datafor-modeler/api/connection/acl` |
| Permission | **Full control** on the connection |
| Content type | `application/json` |

To read the current ACL, call `GET /plugin/datafor-modeler/api/connection/acl?name=<connection>` (also Full control). It returns the same structure as [Get file or folder's ACL](/api/Files/Get%20file%20or%20folder's%20acl/), or `{"success": false, "responseCode": 410}` when the caller cannot manage the connection.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Connection name. |
| `owner` | body | string | Yes | Owner user name. |
| `ownerType` | body | integer | No | 0 = user, 1 = role. |
| `entriesInheriting` | body | boolean | Yes | Send `false`. |
| `aces` | body | array | Yes | Grants: `recipient`, `recipientType` (0 = user, 1 = role, 2 = user type), `permissions` (0 = Read, 1 = Edit, 2 = Delete, 3 = Manage permissions, 4 = Full control; the highest value implies the lower ones) and `modifiable: true`. |

## Example

Keep Full control for the owner and give the role `Sales` Read:

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/acl?name=Sales%20DW" \
  -H "Content-Type: application/json" \
  -d '{
    "owner": "admin",
    "ownerType": 0,
    "entriesInheriting": false,
    "aces": [
      { "recipient": "admin", "recipientType": 0, "permissions": [4], "modifiable": true },
      { "recipient": "Sales", "recipientType": 1, "permissions": [0], "modifiable": true }
    ]
  }'
```

```json
{ "success": true, "responseCode": 200 }
```

### Several connections at once

`PUT /plugin/datafor-modeler/api/connection/aclBatch` takes a JSON object that maps each connection name to an ACL. The response maps each name to a status string:

```json
{ "Sales DW": "200", "Finance": "500" }
```

## Errors

HTTP 200. On failure the response has a `responseCode` (a number) and no `success: true`.

| Response | When |
| --- | --- |
| `{"success": false, "msg": "invalid format"}` | The body is not a valid ACL. |
| `{"responseCode": 410}` | The connection does not exist. |
| `{"responseCode": 500}` | The caller lacks Full control, or the change failed. |

Related: [Access Control List](/documentation/System/Access-Control-List/), [Data connections: targets and custom SQL](/documentation/System/Permission-Evaluation-Overview/#data-connections-targets-and-custom-sql)
