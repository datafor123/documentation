---
title: Change datasource of model
permalink: /api/Models/Change datasource of model/
tags:
  - api
  - Models
description: Point an analysis model at another data connection or change its settings.
createTime: 2026/09/01 22:03:26
---
Changes a published model's settings, most often the data connection it queries. The schema itself is not changed.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/mondrian/changeParameters` |
| Permission | **Edit** on the model and **Read** on the new connection. Setting `useAuth=false` needs Full control on the connection. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `catalogName` | form | string | Yes | Model name. |
| `parameters` | form | string | Yes | All settings as `key=value` pairs separated by `;`, for example `DataSource=Sales DW;EnableXmla=false`. Settings you leave out are removed, so send the full string. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/mondrian/changeParameters" \
  --data-urlencode "catalogName=SalesModel" \
  --data-urlencode "parameters=DataSource=Sales DW Replica;EnableXmla=false"
```

```json
{ "success": true, "msg": "success" }
```

## Errors

HTTP 200 with `success: false` and `msg` starting with `error occured:`.

| `msg` contains | When |
| --- | --- |
| `Edit Denied` | The caller lacks Edit on the model. |
| `Connection READ permission is required: <connection>` | The caller cannot read the new connection. |
| `Connection MANAGE permission is required to disable data policies` | `useAuth=false` without Full control on the connection. |
| `SQL_FRAGMENT_FORBIDDEN:<connection>` | The model contains SQL and the caller may not use SQL fragments on the new connection. |

Related: [Get models](/api/Models/Get%20models/), [Analysis models: default ACL and data source Read](/documentation/System/Permission-Evaluation-Overview/#analysis-models-default-acl-and-data-source-read)
