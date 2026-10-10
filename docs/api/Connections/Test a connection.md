---
title: Test a connection
permalink: /api/Connections/Test a connection/
tags:
  - api
  - Connections
description: Check that Datafor can open a database connection with the given settings.
createTime: 2026/09/01 22:03:26
---
Opens a connection with the given settings and reports whether it worked. Nothing is saved.

| | |
| --- | --- |
| Method and path | `PUT /plugin/datafor-modeler/api/connection/test` |
| Permission | For a new connection, the same as [Add a connection](/api/Connections/Add%20a%20connection/). For a saved connection (same `name`), **Edit** on it and the Creator or Administrator user type. |
| Content type | `application/json` |

## Parameters

The body has the same fields as [Add a connection](/api/Connections/Add%20a%20connection/). For a saved connection, leave `password` empty to test with the stored password.

## Example

```bash
curl -u admin:password -X PUT \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/test" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sales DW",
    "databaseType": { "name": "PostgreSQL", "shortName": "POSTGRESQL" },
    "accessType": "NATIVE",
    "hostname": "db.example.com",
    "databasePort": "5432",
    "databaseName": "sales",
    "username": "report_reader",
    "password": "db-password",
    "attributes": { "PORT_NUMBER": "5432" }
  }'
```

```json
{ "name": "Sales DW", "success": true }
```

`success` is `false` when the database could not be reached or rejected the login.

## Errors

Permission errors use real HTTP status codes, with a body of `{"success": false, "msg": "..."}`.

| HTTP status | `msg` starts with | When |
| --- | --- | --- |
| `400` | (message) | The body is empty. |
| `403` | `CONNECTION_WRITE_FORBIDDEN` | The caller lacks Edit on the saved connection. |
| `403` | `CONNECTION_CREATE_FORBIDDEN` | The caller's user type cannot create content. |
| `403` | `LOCAL_CONNECTION_ADMIN_ONLY` | A non-administrator targeted the repository server, an embedded engine, JNDI, or an unrecognized target. |
| `403` | `INTERNAL_CONNECTION_FORBIDDEN` | The name or JNDI name is one of Datafor's internal data sources. |
| `500` | `database connection operation failed` | The driver could not be loaded or another server error occurred. |

Related: [JDBC Driver Management](/documentation/Datasource/JDBC-Driver-Management/)
