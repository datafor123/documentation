---
title: Modify a connection
permalink: /api/Connections/Modify a connection/
tags:
  - api
  - Connections
description: Update or rename an existing data connection.
createTime: 2026/09/01 22:03:26
---
Updates an existing data connection. The body replaces the stored settings. Send the connection's `id` to rename it; without `id`, the connection is matched by `name`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/connection/update` |
| Permission | **Edit** on the connection and the Creator or Administrator user type. The new target follows the same rules as [Add a connection](/api/Connections/Add%20a%20connection/). |
| Content type | `application/json` |

## Parameters

The body has the same fields as [Add a connection](/api/Connections/Add%20a%20connection/), plus:

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | body | string | No | The connection's ID from [Get a connection](/api/Connections/Get%20a%20connection/). Required to rename. |
| `password` | body | string | No | Leave empty to keep the stored password. [Get a connection](/api/Connections/Get%20a%20connection/) never returns it. |

The simplest way to build the body is to read the connection, change the fields you need, and send it back.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/update" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "11111111-2222-3333-4444-555555555555",
    "name": "Sales DW",
    "databaseType": { "name": "PostgreSQL", "shortName": "POSTGRESQL" },
    "accessType": "NATIVE",
    "hostname": "db2.example.com",
    "databasePort": "5432",
    "databaseName": "sales",
    "username": "report_reader",
    "password": "",
    "attributes": { "PORT_NUMBER": "5432" }
  }'
```

```json
{ "success": true, "code": "200" }
```

## Errors

HTTP 200 with `success: false`, `code` `"500"`, and the reason in `msg`.

| `msg` starts with | When |
| --- | --- |
| `CONNECTION_WRITE_FORBIDDEN` | The caller lacks Edit on the connection, or its user type cannot create content. |
| `LOCAL_CONNECTION_ADMIN_ONLY` | A non-administrator pointed the connection at a target only administrators may use, or tried to change a file dataset connection. |
| `INTERNAL_CONNECTION_FORBIDDEN` | The name or JNDI name is one of Datafor's internal data sources. |
| Other text | The connection does not exist, or the update failed. |

Related: [Configuring a MySQL data source](/documentation/Datasource/Configuring-MySQL-Data-Source/)
