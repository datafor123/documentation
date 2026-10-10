---
title: Change acl for a model
permalink: /api/Models/Change acl for a model/
tags:
  - api
  - Models
description: Read or replace who can use, edit, delete, or manage an analysis model.
createTime: 2026/09/01 22:03:26
---
Replaces the access control list (ACL) of an analysis model. Users also need **Read** on the model's connection to query it.

| | |
| --- | --- |
| Method and path | `PUT /plugin/datafor-modeler/api/datasource/analysis/{catalog}/acl` |
| Permission | **Full control** on the model |
| Content type | `application/json` |

To read the current ACL, call `GET /plugin/datafor-modeler/api/datasource/analysis/{catalog}/acl`. It returns the structure described in [Get file or folder's ACL](/api/Files/Get%20file%20or%20folder's%20acl/).

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `catalog` | path | string | Yes | Model name (not the display name), URL-encoded. |
| `owner` | body | string | No | Owner user name. Default: the caller. |
| `ownerType` | body | integer | No | 0 = user, 1 = role. |
| `entriesInheriting` | body | boolean | Yes | Send `false`. |
| `aces` | body | array | Yes | Grants. Each has `recipient`, `recipientType`, `permissions` and `modifiable`. |
| `aces[].recipientType` | body | integer | Yes | 0 = user, 1 = role, 2 = user type. |
| `aces[].permissions` | body | integer array | Yes | 0 = Read, 1 = Edit, 2 = Delete, 3 = Manage permissions, 4 = Full control. The highest value implies the lower ones. |
| `aces[].modifiable` | body | boolean | Yes | Send `true`; entries with `false` are dropped. |

## Example

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/datasource/analysis/SalesModel/acl" \
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

### Several models at once

`PUT /plugin/datafor-modeler/api/datasource/analysis/acl` takes a JSON object that maps each model name to an ACL. The response maps each name to a status string, for example `{"SalesModel": "200", "Finance": "410"}`.

## Errors

HTTP 200 with `success: false` and a numeric `responseCode`.

| `responseCode` | When |
| --- | --- |
| `400` | The body is not a valid ACL. |
| `401` | Access denied. |
| `410` | The model does not exist. |
| `500` | The change failed, for example because the caller lacks Full control. |

Related: [Access Control List](/documentation/System/Access-Control-List/), [Analysis models: default ACL and data source Read](/documentation/System/Permission-Evaluation-Overview/#analysis-models-default-acl-and-data-source-read)
