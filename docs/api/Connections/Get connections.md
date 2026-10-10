---
title: Get connections
permalink: /api/Connections/Get connections/
tags:
  - api
  - Connections
description: List the data connections the caller can read, optionally with the caller's permissions on each.
createTime: 2026/09/01 22:03:26
---
Lists the data connections the caller can read. Passwords are never returned.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/connection/list` |
| Permission | Any signed-in user; connections without Read are left out |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `includeInfo` | query | boolean | No | Default `true`: return each connection's full settings, as in [Get a connection](/api/Connections/Get%20a%20connection/). `false`: return only `name`. |
| `includeSys` | query | boolean | No | Default `false`. Include Datafor's system connections. |
| `isUploadDataset` | query | boolean | No | `true`: only file dataset connections. `false`: only database connections. Omit for both. |
| `includeAccessMap` | query | boolean | No | Default `false`. Add `accessMap`: which of the `permissions` the caller has on each connection. |
| `permissions` | query | string | No | Default `0\|1\|2\|4` (Read, Edit, Delete, Full control). |
| `runuser` | query | string | No | Administrators only: list the connections as this user would see them. |
| `runrole` | query | string | No | Administrators only: list the connections as a member of this role would see them. Ignored when `runuser` is set. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/list" \
  --data-urlencode "includeInfo=false" \
  --data-urlencode "includeAccessMap=true"
```

```json
{
  "success": true,
  "databaseConnections": [
    {
      "name": "Sales DW",
      "isUploadDataset": false,
      "isSystem": false,
      "accessMap": [
        { "name": "0", "value": "true" },
        { "name": "1", "value": "true" },
        { "name": "2", "value": "false" },
        { "name": "4", "value": "false" }
      ]
    }
  ]
}
```

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "msg": "... can not run as other else"}` | `runuser` or `runrole` was sent by a non-administrator. |
| `{"success": false, "msg": "..."}` | The list could not be read. |

Related: [Supported databases](/documentation/Datasource/Supported-Databases/)
