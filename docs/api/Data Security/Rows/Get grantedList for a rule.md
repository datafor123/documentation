---
title: Get grantedList for a rule
permalink: /api/Data Security/Rows/Get grantedList for a rule/
tags:
  - api
  - Data Security
description: Return the users, roles, and user types a Row access policy applies to.
createTime: 2026/09/01 22:03:26
---
Returns the subjects (**Applies to**) of one Row access policy. [Get rule list](/api/Data%20Security/Rows/Get%20rule%20list/) with `withGranted: true` returns the same data for several policies at once.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/row/granted/query` |
| Permission | **Full control** on the connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `dbconn` | body | string | Yes | Connection name. |
| `group_id` | body | string | Yes | Policy ID. |
| `type` | body | string | No | Only subjects of this type: `0` user, `1` role, `2` user type. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/row/granted/query" \
  -H "Content-Type: application/json" \
  -d '{ "dbconn": "Sales DW", "group_id": "8699a11df24c49ddab9451e249ff2c97" }'
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    { "group_id": "8699a11df24c49ddab9451e249ff2c97", "name": "Store Managers", "type": "1" },
    { "group_id": "8699a11df24c49ddab9451e249ff2c97", "name": "alice", "type": "0" }
  ]
}
```

## Errors

| `code` | `msg` | When |
| --- | --- | --- |
| `400` | `dbconn cannot be empty` / `group_id cannot be empty` | A required field is missing. |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
