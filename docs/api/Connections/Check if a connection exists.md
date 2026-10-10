---
title: Check if a connection exists
permalink: /api/Connections/Check if a connection exists/
tags:
  - api
  - Connections
description: Check whether a data connection name is in use and readable by the caller.
createTime: 2026/10/10 10:00:00
---
Reports whether a data connection with the given name exists and the caller can read it.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/connection/checkexists` |
| Permission | Any signed-in user |
| Content type | none (query string) |

`exists` is `false` both when no connection has the name and when the caller cannot read it, so a `false` does not guarantee that [Add a connection](/api/Connections/Add%20a%20connection/) will accept the name.

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Connection name. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/checkexists" \
  --data-urlencode "name=Sales DW"
```

```json
{ "success": true, "exists": true }
```

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "msg": "..."}` | The check failed, for example in a shared-link session. |

Related: [Get connections](/api/Connections/Get%20connections/)
