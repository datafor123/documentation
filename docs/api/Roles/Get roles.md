---
title: Get roles
permalink: /api/Roles/Get roles/
tags:
  - api
  - Roles
description: List the roles of the current tenant, optionally filtered by name or type.
createTime: 2026/09/01 22:03:26
---

Lists the roles of the current tenant: the user types and the business roles.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/roles/list` |
| Permission | Any signed-in user |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `roleName` | query | string | No | Search text. Each space-separated word must occur in the role name (case-insensitive). |
| `type` | query | string | No | `0` for business roles only, `2` for user types only. |

## Example

```bash
curl -u admin:password -G "http://localhost:28080/datafor/plugin/datafor-modeler/api/roles/list" \
  --data-urlencode "type=0"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "success": true,
    "total": 2,
    "list": [
      {"authority": "Sales", "loadDate": 1722866372000, "type": "0"},
      {"authority": "Finance", "description": "Finance team", "loadDate": 1722866390000, "type": "0"}
    ]
  }
}
```

| Field | Description |
| --- | --- |
| `authority` | Role name. |
| `description` | Description, when one is stored. |
| `loadDate` | Creation time, in milliseconds since 1970-01-01 UTC. |
| `type` | `0` business role, `2` user type (`Administrator`, `SYS_Creator`, `SYS_Reader`). |

## Errors

| `code` | When |
| --- | --- |
| `"500"` | The role table could not be read. |

If the query itself fails, the response may still have `"success": true` with `data.success` `false` and `data.msg`.

Related: [Add a role](/api/Roles/Add%20a%20role/), [Get user types](/api/Users/Get%20user%20types/)
