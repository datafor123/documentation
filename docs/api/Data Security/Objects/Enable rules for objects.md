---
title: Enable rules for objects
permalink: /api/Data Security/Objs/Enable rules for objects/
tags:
  - api
  - Data Security
description: Enable or disable one or more Table & column access policies.
createTime: 2026/09/01 22:03:26
---
Turns Table & column access policies on or off. Disabling keeps the policy but removes it from effective access. Enabling re-validates the stored policy first.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/obj/enableBatch` |
| Permission | **Full control** on each policy's connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | array | Yes | `[{"id": "...", "dbconn": "...", "enable": "1"}]`. `enable` is `1` to activate, `0` to deactivate. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/obj/enableBatch" \
  -H "Content-Type: application/json" \
  -d '[ { "id": "371063d227944c5386fbe81faf8c3bc0", "dbconn": "Sales DW", "enable": "1" } ]'
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    { "id": "371063d227944c5386fbe81faf8c3bc0", "dbconn": "Sales DW", "enable": "1", "success": true }
  ]
}
```

## Errors

Per entry in `data`, with `success: false`:

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `id cannot be empty` / `dbconn cannot be empty` / `enable cannot be empty` / `enable must be 0 or 1` | A field is missing or invalid. |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |
| `400` | Validation message | Enabling failed because a stored table, column, or subject is no longer valid. |

Related: [Data Security](/documentation/Datasource/Data-Security/)
