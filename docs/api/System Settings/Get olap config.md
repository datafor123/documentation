---
title: Get olap config
permalink: /api/System Settings/Get olap config/
tags:
  - api
  - System Settings
description: Read the query engine settings, such as query timeout, row limit and concurrent queries.
createTime: 2026/09/01 22:03:26
---

Returns the settings of the analysis (OLAP) engine, with their current values. The editable ones are those on **Settings › Data › Query engine**.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/modeler/olap/config/meta` |
| Permission | Any signed-in user |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `editable` | query | string | No | `true` returns only the settings shown on the Query engine page; `false` only the others. Leave it out for all. |

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor/api/modeler/olap/config/meta?editable=true"
```

```json
{
  "success": true,
  "msg": "success",
  "data": [
    {
      "code": "mondrian.rolap.queryTimeout",
      "name": "QueryTimeout",
      "type": "Integer",
      "value": "300",
      "defaults": "0",
      "range": "",
      "editable": true,
      "desc": "the timeout value (in seconds) for queries"
    },
    {
      "code": "mondrian.olap.NullMemberCaption",
      "name": "NullMemberCaption",
      "type": "String",
      "value": "",
      "defaults": "",
      "range": "",
      "editable": true,
      "desc": "how a null member value is represented in the result output"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `code` | Property name. Pass it to [Set olap config](/api/System%20Settings/Set%20olap%20config/). |
| `name` | Short name. |
| `type` | `String`, `Integer` or `Boolean`. |
| `value` | Current value, as a string. |
| `defaults` | The engine's built-in default. Datafor ships its own values for several settings, so `value` can differ from `defaults` on a new installation. |
| `range` | Allowed values, comma-separated, when the setting has a fixed list. |
| `editable` | `true` for the settings shown on the Query engine page. |
| `desc` | Description. Some entries also have `zhdesc`, a Chinese description. |

The editable settings:

| `code` | Query engine field |
| --- | --- |
| `mondrian.olap.InfinityRepresentation` | **Show infinity as** |
| `mondrian.olap.NullMemberCaption` | **Show empty members as** |
| `mondrian.query.limit` | **Max concurrent queries** |
| `mondrian.result.limit` | **Max result rows** (0 = no limit) |
| `mondrian.rolap.queryTimeout` | **Query timeout (seconds)** (0 = no timeout) |
| `mondrian.rolap.aggregates.Use`, `mondrian.rolap.aggregates.Read` | **UseAggregates**, **ReadAggregates** |

## Errors

If the settings cannot be read, `success` is `false` and `msg` has the reason.

Related: [Query Engine](/documentation/System/Query-Engine/)
