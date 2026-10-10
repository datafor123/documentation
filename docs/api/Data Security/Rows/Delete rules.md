---
title: Delete rules
permalink: /api/Data Security/Rows/Delete rules/
tags:
  - api
  - Data Security
description: Delete one or more Row access policies.
createTime: 2026/09/01 22:03:26
---
Deletes Row access policies with their conditions and subjects. Each policy is reported separately.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/row/deleteBatch` |
| Permission | **Full control** on each policy's connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | array | Yes | Policies to delete: `[{"id": "...", "dbconn": "..."}]`. |

Locked policies (`editable` `0`) are not deleted.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/row/deleteBatch" \
  -H "Content-Type: application/json" \
  -d '[ { "id": "8699a11df24c49ddab9451e249ff2c97", "dbconn": "Sales DW" } ]'
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    { "id": "8699a11df24c49ddab9451e249ff2c97", "dbconn": "Sales DW", "success": true, "msg": "success" }
  ]
}
```

## Errors

Per entry in `data`, with `success: false`:

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `id cannot be empty` / `dbconn cannot be empty` | A field is missing. |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |
| (none) | Database error | The delete failed. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
