---
title: Get a connection
permalink: /api/Connections/Get a connection/
tags:
  - api
  - Connections
description: Read one data connection's settings by name; the password is never returned.
createTime: 2026/09/01 22:03:26
---
Returns the settings of one data connection. `password` is always `null`.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/connection/get` |
| Permission | **Read** on the connection. JNDI connections and connections to unrecognized targets are visible to administrators only. |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Connection name. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/get" \
  --data-urlencode "name=Sales DW"
```

```json
{
  "id": "11111111-2222-3333-4444-555555555555",
  "name": "Sales DW",
  "accessType": "NATIVE",
  "accessTypeValue": "NATIVE",
  "databaseType": {
    "name": "PostgreSQL",
    "shortName": "POSTGRESQL",
    "defaultDatabasePort": 5432,
    "defaultDatabaseName": null,
    "defaultOptions": null,
    "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters"
  },
  "hostname": "db.example.com",
  "databasePort": "5432",
  "databaseName": "sales",
  "username": "report_reader",
  "password": null,
  "attributes": { "PORT_NUMBER": "5432", "driverId": "postgresql" },
  "extraOptions": {},
  "extraOptionsOrder": {},
  "connectSql": "",
  "usingConnectionPool": true,
  "connectionPoolingProperties": { "maxActive": "20", "minIdle": "1" },
  "initialPoolSize": 0,
  "maximumPoolSize": 0,
  "changed": false,
  "partitioned": false,
  "quoteAllFields": false,
  "streamingResults": false,
  "forcingIdentifiersToLowerCase": false,
  "forcingIdentifiersToUpperCase": false,
  "usingDoubleDecimalAsSchemaTableSeparator": false,
  "dataTablespace": "",
  "indexTablespace": "",
  "informixServername": "",
  "SQLServerInstance": null
}
```

## Errors

Unlike most plugin endpoints, this one returns real HTTP status codes, with a body of `{"success": false, "msg": "..."}`.

| HTTP status | `msg` | When |
| --- | --- | --- |
| `403` | `CONNECTION_READ_FORBIDDEN: ...` | The caller lacks Read on the connection, or only administrators may use its target. |
| `403` | `INTERNAL_CONNECTION_FORBIDDEN: ...` | The connection is one of Datafor's internal data sources. |
| `404` | (connection not found) | No connection has this name. |
| `500` | `database connection operation failed` | Repository error. |

Related: [Get connections](/api/Connections/Get%20connections/), [Check if a connection exists](/api/Connections/Check%20if%20a%20connection%20exists/)
