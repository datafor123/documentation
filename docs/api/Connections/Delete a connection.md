---
title: Delete a connection
permalink: /api/Connections/Delete a connection/
tags:
  - api
  - Connections
description: Delete a data connection by name.
createTime: 2026/09/01 22:03:26
---
Deletes a data connection. Models that use it stop working until they are pointed at another connection with [Change datasource of model](/api/Models/Change%20datasource%20of%20model/).

| | |
| --- | --- |
| Method and path | `DELETE /plugin/datafor-modeler/api/connection/deletebyname` |
| Permission | **Delete** on the connection and the Creator or Administrator user type |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Connection name. |

## Example

```bash
curl -u admin:password -X DELETE -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/deletebyname" \
  --data-urlencode "name=Sales DW"
```

```json
{ "success": true, "code": "200" }
```

## Errors

HTTP 200 with `success: false`, `code` `"500"`, and the reason in `msg`.

| `msg` starts with | When |
| --- | --- |
| `CONNECTION_DELETE_FORBIDDEN` | The caller lacks Delete on the connection, or the connection does not exist. |
| `INTERNAL_CONNECTION_FORBIDDEN` | The connection is one of Datafor's internal data sources. |

Related: [Access Control List](/documentation/System/Access-Control-List/)
