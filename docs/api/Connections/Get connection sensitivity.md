---
title: Get connection sensitivity
permalink: /api/Connections/Get connection sensitivity/
tags:
  - api
  - Connections
description: Show a connection's target type, whether it is sensitive, and whether the caller may use custom or raw SQL on it.
createTime: 2026/10/10 10:00:00
---
Returns how Datafor classifies a connection's target and what SQL the caller may run on it. Use it before submitting custom SQL to avoid `SQL_FRAGMENT_FORBIDDEN` and `SQL_EXECUTE_FORBIDDEN` errors.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/connection/sensitivity` |
| Permission | **Read** on the connection |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Connection name. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/sensitivity" \
  --data-urlencode "name=Sales DW"
```

```json
{
  "success": true,
  "targetType": "REMOTE",
  "sensitive": false,
  "reason": null,
  "customSqlAllowed": true,
  "rawSqlAllowed": true
}
```

| Field | Description |
| --- | --- |
| `targetType` | `REMOTE` (another database server), `LOCAL` (the server that holds the Datafor repository), `EMBEDDED` (DuckDB, SQLite, MS Access, CSV running inside Datafor), `UPLOAD_DATASET` (file dataset), `JNDI`, `UNKNOWN`, or `INTERNAL`. |
| `sensitive` | `true` when the connection's account can reach the Datafor repository, or the target always counts as sensitive (embedded, JNDI, unknown). |
| `reason` | Why the connection is sensitive, or `null`. |
| `customSqlAllowed` | Whether the caller may use SQL fragments: SQL views, SQL preview, `where` conditions, column expressions, row access conditions. |
| `rawSqlAllowed` | Whether the caller may run raw SQL. Needs Full control on the connection and a permitted target. |

For administrators, `customSqlAllowed` is always `true`, and `rawSqlAllowed` is `true` except on internal and file dataset connections.

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "msg": "CONNECTION_READ_FORBIDDEN: ..."}` | The caller lacks Read on the connection. |
| `{"success": false, "msg": "..."}` | The connection does not exist. |

Related: [Data connections: targets and custom SQL](/documentation/System/Permission-Evaluation-Overview/#data-connections-targets-and-custom-sql)
