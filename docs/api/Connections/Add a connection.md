---
title: Add a connection
permalink: /api/Connections/Add a connection/
tags:
  - api
  - Connections
description: Create a JDBC data connection; the creator gets Full control on it.
createTime: 2026/09/01 22:03:26
---
Creates a data connection. The new connection's ACL gives the caller Full control and nobody else access; share it with [Change ACLs for connections](/api/Connections/Change%20acl%20for%20connections/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/connection/add` |
| Permission | Creator or Administrator user type. Only administrators can create connections to the server that holds the Datafor repository, to engines running inside Datafor (DuckDB, SQLite, MS Access, CSV), to JNDI data sources, or to targets Datafor cannot identify. |
| Content type | `application/json` |

Test the settings first with [Test a connection](/api/Connections/Test%20a%20connection/).

## Parameters

The body is a connection object. The fields most integrations need:

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | body | string | Yes | Connection name, unique on the server. Leading and trailing spaces are removed. |
| `databaseType` | body | object | Yes | Database type, at least `name` and `shortName`, for example `{"name": "PostgreSQL", "shortName": "POSTGRESQL"}`. See [Supported databases](/documentation/Datasource/Supported-Databases/). |
| `accessType` | body | string | Yes | `NATIVE` for JDBC. `JNDI` (administrators only) uses `databaseName` as the JNDI name. |
| `hostname` | body | string | Yes | Database host. |
| `databasePort` | body | string | Yes | Port. |
| `databaseName` | body | string | Yes | Database name (or service name, depending on the database). |
| `username`, `password` | body | string | No | Database account. Use an account without rights on the Datafor repository database. |
| `attributes` | body | object | No | String key–value pairs: `PORT_NUMBER` (same as `databasePort`), `driverId` (a driver uploaded in [JDBC Driver Management](/documentation/Datasource/JDBC-Driver-Management/)), `CUSTOM_DRIVER_CLASS` and `CUSTOM_URL` (for the generic database type). |
| `extraOptions` | body | object | No | JDBC URL options, keyed `<SHORTNAME>.<option>`, for example `"POSTGRESQL.sslmode": "require"`. |
| `connectSql` | body | string | No | SQL run when each connection opens. |
| `usingConnectionPool` | body | boolean | No | Use a connection pool. |
| `connectionPoolingProperties` | body | object | No | Pool settings such as `maxActive`, `maxIdle`, `minIdle`, `validationQuery`. Defaults: [Get pooling parameters](/api/Connections/Get%20pooling%20parameters/). |
| `id` | body | string | No | Leave `null`; the server assigns it. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/add" \
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
    "attributes": { "PORT_NUMBER": "5432" },
    "extraOptions": {},
    "usingConnectionPool": true,
    "connectionPoolingProperties": { "maxActive": "20", "minIdle": "1" }
  }'
```

```json
{ "success": true, "code": "200" }
```

## Errors

HTTP 200 with `success: false`, `code` `"500"`, and the reason in `msg`.

| `msg` starts with | When |
| --- | --- |
| `CONNECTION_CREATE_FORBIDDEN` | The caller's user type cannot create content. |
| `LOCAL_CONNECTION_ADMIN_ONLY` | A non-administrator targeted the repository server, an embedded engine, JNDI, or an unrecognized target. |
| `INTERNAL_CONNECTION_FORBIDDEN` | The name or JNDI name is one of Datafor's own internal data sources. |
| Text containing the connection name | A connection with this name already exists, or the database rejected the settings. |

Related: [Supported databases](/documentation/Datasource/Supported-Databases/), [Data connections: targets and custom SQL](/documentation/System/Permission-Evaluation-Overview/#data-connections-targets-and-custom-sql)
