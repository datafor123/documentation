---
title: Get a connection
permalink: /api/Connections/Get a connection/
tags:
  - api
  - Connections
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/connection/get
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Preconditions**
- The current user must have **read** privileges for the specified connection.

**Content Type**  
No request body is typically used with a `GET` request. Parameters are provided via query string.

---

### **Parameters Schema**

| Name  | Location | Type   | Required | Description                        |
|-------|----------|--------|----------|------------------------------------|
| **name** | query | string | No       | The name of the connection to retrieve |

---

## **Response Examples**

```json
{
  "SQLServerInstance": null,
  "accessType": "NATIVE",
  "accessTypeValue": "NATIVE",
  "attributes": {
    "driverId": "postgresql",
    "PORT_NUMBER": "25432"
  },
  "changed": false,
  "connectSql": "",
  "connectionPoolingProperties": {
    "minIdle": "5",
    "maxIdle": "20",
    "initialSize": "5",
    "maxActive": "200"
  },
  "dataTablespace": "",
  "databaseName": "foodmart",
  "databasePort": "25432",
  "databaseType": {
    "defaultDatabaseName": null,
    "defaultDatabasePort": 5432,
    "defaultOptions": null,
    "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
    "name": "PostgreSQL",
    "shortName": "POSTGRESQL"
  },
  "extraOptions": {},
  "extraOptionsOrder": {},
  "forcingIdentifiersToLowerCase": false,
  "forcingIdentifiersToUpperCase": false,
  "hostname": "127.0.0.1",
  "id": "3255113e-6d7e-4031-8a46-cc21dfda06e9",
  "indexTablespace": "",
  "informixServername": "",
  "initialPoolSize": 0,
  "maximumPoolSize": 0,
  "name": "foodmart",
  "partitioned": false,
  "password": null,
  "quoteAllFields": false,
  "streamingResults": false,
  "username": "postgres",
  "usingConnectionPool": true,
  "usingDoubleDecimalAsSchemaTableSeparator": false
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name                                     | Type     | Required | Description                                                 |
|------------------------------------------|----------|----------|-------------------------------------------------------------|
| `SQLServerInstance`                      | null     | No       | For SQL Server; null if not used                           |
| `accessType`                             | string   | Yes      | Connection access type (e.g., `NATIVE`)                    |
| `accessTypeValue`                        | string   | Yes      | Same value as `accessType`                                 |
| `attributes`                             | object   | Yes      | Driver attributes                                          |
| ├── `driverId`                           | string   | Yes      | Identifier for the driver (e.g., `postgresql`)             |
| └── `PORT_NUMBER`                        | string   | Yes      | Database port number (e.g., `25432`)                       |
| `changed`                                | boolean  | Yes      | Indicates if the connection configuration has changed      |
| `connectSql`                             | string   | Yes      | SQL to be run on connection initialization (if any)        |
| `connectionPoolingProperties`            | object   | Yes      | Properties for the connection pool                         |
| ├── `minIdle`                            | string   | Yes      | Minimum idle connections in the pool                       |
| ├── `maxIdle`                            | string   | Yes      | Maximum idle connections                                   |
| ├── `initialSize`                        | string   | Yes      | Initial number of connections                              |
| └── `maxActive`                          | string   | Yes      | Maximum active connections in the pool                     |
| `dataTablespace`                         | string   | Yes      | Name of the data tablespace (if applicable)               |
| `databaseName`                           | string   | Yes      | Name of the database (e.g., `foodmart`)                    |
| `databasePort`                           | string   | Yes      | Port for the database (e.g., `25432`)                      |
| `databaseType`                           | object   | Yes      | Information about the database type                        |
| ├── `defaultDatabaseName`                | null     | Yes      | Default database name (null if not specified)              |
| ├── `defaultDatabasePort`                | integer  | Yes      | Default port (e.g., `5432`)                                |
| ├── `defaultOptions`                     | null     | Yes      | Default driver options                                     |
| ├── `extraOptionsHelpUrl`                | string   | Yes      | URL for extra driver options                               |
| ├── `name`                               | string   | Yes      | Full name (e.g., `PostgreSQL`)                             |
| └── `shortName`                          | string   | Yes      | Short name (e.g., `POSTGRESQL`)                            |
| `extraOptions`                           | object   | Yes      | Additional driver-specific parameters                      |
| `extraOptionsOrder`                      | object   | Yes      | Ordering for extra options                                 |
| `forcingIdentifiersToLowerCase`          | boolean  | Yes      | Whether to force identifiers to lowercase                  |
| `forcingIdentifiersToUpperCase`          | boolean  | Yes      | Whether to force identifiers to uppercase                  |
| `hostname`                               | string   | Yes      | Host IP or domain (e.g., `127.0.0.1`)                      |
| `id`                                     | string   | Yes      | Unique ID for this connection configuration                |
| `indexTablespace`                        | string   | Yes      | Index tablespace (if applicable)                           |
| `informixServername`                     | string   | Yes      | Server name for Informix (unused here)                     |
| `initialPoolSize`                        | integer  | Yes      | Initial size of the pool                                   |
| `maximumPoolSize`                        | integer  | Yes      | Maximum pool size                                          |
| `name`                                   | string   | Yes      | Connection name (e.g., `foodmart`)                         |
| `partitioned`                            | boolean  | Yes      | Whether the database is partitioned                        |
| `password`                               | null     | Yes      | Password for the database user (null if not retrieved)     |
| `quoteAllFields`                         | boolean  | Yes      | Whether to quote all fields                                |
| `streamingResults`                       | boolean  | No       | Whether results are streamed                               |
| `username`                               | string   | Yes      | Database user name (e.g., `postgres`)                      |
| `usingConnectionPool`                    | boolean  | Yes      | Whether a connection pool is being used                    |
| `usingDoubleDecimalAsSchemaTableSeparator` | boolean| Yes      | Whether double decimals separate schema/table identifiers  |