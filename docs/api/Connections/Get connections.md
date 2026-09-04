---
title: Get connections
permalink: /api/Connections/Get connections/
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
/plugin/datafor-modeler/api/connection/list
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Preconditions**
- The current user must have **read** privileges for the connections.

**Content Type**  
No request body is typically used with a `GET` request. Parameters are provided via query string.

---

### **Parameters Schema**

| Name               | Location | Type   | Required | Description                                           |
|--------------------|----------|--------|----------|-------------------------------------------------------|
| **includeAccessMap** | query    | string | No       | Whether to include access mapping info (e.g., `"true"`) |

---

## **Response Examples**

```json
{
  "success": true,
  "databaseConnections": [
    {
      "connectSql": "",
      "databaseName": "training",
      "partitioned": false,
      "quoteAllFields": false,
      "extraOptionsOrder": {},
      "accessTypeValue": "NATIVE",
      "accessType": "NATIVE",
      "hostname": "127.0.0.1",
      "password": null,
      "connectionPoolingProperties": {
        "minIdle": "5",
        "maxIdle": "20",
        "testOnBorrow": "true",
        "validationQuery": "select 1",
        "initialSize": "5",
        "maxActive": "200"
      },
      "forcingIdentifiersToUpperCase": false,
      "id": "85f98919-fe84-409c-ac5a-7de78820e40d",
      "initialPoolSize": 0,
      "isUploadDataset": false,
      "partitioningInformation": null,
      "indexTablespace": "",
      "dataTablespace": "",
      "streamingResults": false,
      "databaseType": {
        "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
        "defaultDatabaseName": null,
        "defaultOptions": null,
        "name": "PostgreSQL",
        "defaultDatabasePort": 5432,
        "shortName": "POSTGRESQL",
        "supportedAccessTypes": [
          "NATIVE",
          "ODBC",
          "JNDI"
        ]
      },
      "isSystem": false,
      "extraOptions": {},
      "forcingIdentifiersToLowerCase": false,
      "accessMap": [
        {
          "name": "0",
          "value": "true"
        },
        {
          "name": "1",
          "value": "true"
        },
        {
          "name": "2",
          "value": "true"
        },
        {
          "name": "4",
          "value": "true"
        }
      ],
      "name": "Demo",
      "sqlserverInstance": null,
      "attributes": {
        "PORT_NUMBER": "25432"
      },
      "maximumPoolSize": 0,
      "informixServername": "",
      "usingConnectionPool": true,
      "usingDoubleDecimalAsSchemaTableSeparator": false,
      "databasePort": "25432",
      "username": "postgres",
      "changed": false
    },
    {
      "connectSql": "",
      "databaseName": "sampledata",
      "partitioned": false,
      "quoteAllFields": false,
      "extraOptionsOrder": {},
      "accessTypeValue": "NATIVE",
      "accessType": "NATIVE",
      "hostname": "127.0.0.1",
      "password": null,
      "connectionPoolingProperties": {
        "minIdle": "5",
        "maxIdle": "20",
        "testOnBorrow": "true",
        "validationQuery": "select 1",
        "initialSize": "5",
        "maxActive": "200"
      },
      "forcingIdentifiersToUpperCase": false,
      "id": "82f7ce1a-798c-41f3-a3ba-33b64a581c83",
      "initialPoolSize": 0,
      "isUploadDataset": false,
      "partitioningInformation": null,
      "indexTablespace": "",
      "dataTablespace": "",
      "streamingResults": false,
      "databaseType": {
        "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
        "defaultDatabaseName": null,
        "defaultOptions": null,
        "name": "PostgreSQL",
        "defaultDatabasePort": 5432,
        "shortName": "POSTGRESQL",
        "supportedAccessTypes": [
          "NATIVE",
          "ODBC",
          "JNDI"
        ]
      },
      "isSystem": false,
      "extraOptions": {},
      "forcingIdentifiersToLowerCase": false,
      "accessMap": [
        {
          "name": "0",
          "value": "true"
        },
        {
          "name": "1",
          "value": "true"
        },
        {
          "name": "2",
          "value": "true"
        },
        {
          "name": "4",
          "value": "true"
        }
      ],
      "name": "SampleData",
      "sqlserverInstance": null,
      "attributes": {
        "driverId": "postgresql",
        "PORT_NUMBER": "25432"
      },
      "maximumPoolSize": 0,
      "informixServername": "",
      "usingConnectionPool": true,
      "usingDoubleDecimalAsSchemaTableSeparator": false,
      "databasePort": "25432",
      "username": "postgres",
      "changed": false
    },
    {
      "connectSql": "",
      "databaseName": "foodmart",
      "partitioned": false,
      "quoteAllFields": false,
      "extraOptionsOrder": {},
      "accessTypeValue": "NATIVE",
      "accessType": "NATIVE",
      "hostname": "127.0.0.1",
      "password": null,
      "connectionPoolingProperties": {
        "minIdle": "5",
        "maxIdle": "20",
        "initialSize": "5",
        "maxActive": "200"
      },
      "forcingIdentifiersToUpperCase": false,
      "id": "3255113e-6d7e-4031-8a46-cc21dfda06e9",
      "initialPoolSize": 0,
      "isUploadDataset": false,
      "partitioningInformation": null,
      "indexTablespace": "",
      "dataTablespace": "",
      "streamingResults": false,
      "databaseType": {
        "extraOptionsHelpUrl": "http://jdbc.postgresql.org/documentation/83/connect.html#connection-parameters",
        "defaultDatabaseName": null,
        "defaultOptions": null,
        "name": "PostgreSQL",
        "defaultDatabasePort": 5432,
        "shortName": "POSTGRESQL",
        "supportedAccessTypes": [
          "NATIVE",
          "ODBC",
          "JNDI"
        ]
      },
      "isSystem": false,
      "extraOptions": {},
      "forcingIdentifiersToLowerCase": false,
      "accessMap": [
        {
          "name": "0",
          "value": "true"
        },
        {
          "name": "1",
          "value": "true"
        },
        {
          "name": "2",
          "value": "true"
        },
        {
          "name": "4",
          "value": "true"
        }
      ],
      "name": "foodmart",
      "sqlserverInstance": null,
      "attributes": {
        "driverId": "postgresql",
        "PORT_NUMBER": "25432"
      },
      "maximumPoolSize": 0,
      "informixServername": "",
      "usingConnectionPool": true,
      "usingDoubleDecimalAsSchemaTableSeparator": false,
      "databasePort": "25432",
      "username": "postgres",
      "changed": false
    }
  ]
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name                       | Type      | Required | Description                                                      |
|----------------------------|----------|----------|------------------------------------------------------------------|
| `success`                 | boolean  | Yes      | Indicates whether the request was successful                     |
| `databaseConnections`     | [object] | Yes      | Array of database connection objects                             |
| ├── `connectSql`          | string   | Yes      | SQL to run upon connection                                       |
| ├── `databaseName`        | string   | Yes      | Name of the database                                             |
| ├── `partitioned`         | boolean  | Yes      | Whether the database is partitioned                              |
| ├── `quoteAllFields`      | boolean  | Yes      | Whether to quote all fields                                      |
| ├── `extraOptionsOrder`   | object   | Yes      | Order of extra options (if any)                                  |
| ├── `accessTypeValue`     | string   | Yes      | Access type (e.g., `NATIVE`)                                     |
| ├── `accessType`          | string   | Yes      | Same as `accessTypeValue`                                        |
| ├── `hostname`            | string   | Yes      | Host IP or domain                                               |
| ├── `password`            | null     | Yes      | Database password (null if not retrieved)                        |
| ├── `connectionPoolingProperties`| object | Yes  | Properties for the connection pool                              |
| │   ├── `minIdle`         | string   | Yes      | Minimum idle connections                                         |
| │   ├── `maxIdle`         | string   | Yes      | Maximum idle connections                                         |
| │   ├── `testOnBorrow`    | string   | No       | Whether to test connection on borrow (e.g., `"true"`)            |
| │   ├── `validationQuery` | string   | No       | SQL query to validate connections (`"select 1"`)                 |
| │   ├── `initialSize`     | string   | Yes      | Initial pool size                                               |
| │   └── `maxActive`       | string   | Yes      | Maximum active connections                                       |
| ├── `forcingIdentifiersToUpperCase` | boolean | Yes | Whether to force identifiers to uppercase                       |
| ├── `id`                  | string   | Yes      | Unique ID for this connection configuration                      |
| ├── `initialPoolSize`     | integer  | Yes      | Initial size for the pool                                       |
| ├── `isUploadDataset`     | boolean  | Yes      | Whether it’s an uploaded dataset                                |
| ├── `partitioningInformation`| null | Yes      | Details of partitioning (null if not used)                       |
| ├── `indexTablespace`     | string   | Yes      | Name of the index tablespace                                    |
| ├── `dataTablespace`      | string   | Yes      | Name of the data tablespace                                     |
| ├── `streamingResults`    | boolean  | Yes      | Whether to use streaming results                                |
| ├── `databaseType`        | object   | Yes      | Details about the database type                                 |
| │   ├── `extraOptionsHelpUrl` | string  | Yes  | URL for extra driver options documentation                      |
| │   ├── `defaultDatabaseName`| null   | Yes  | Default database name (null if not applicable)                   |
| │   ├── `defaultOptions`  | null     | Yes      | Default driver options                                          |
| │   ├── `name`            | string   | Yes      | Full database type name (e.g., `PostgreSQL`)                     |
| │   ├── `defaultDatabasePort`| integer| Yes      | Default port for the database type (e.g., `5432`)                |
| │   ├── `shortName`       | string   | Yes      | Short name (e.g., `POSTGRESQL`)                                  |
| │   └── `supportedAccessTypes` | [string]| Yes   | Supported access types (e.g., `[ "NATIVE", "ODBC", "JNDI" ]`)     |
| ├── `isSystem`            | boolean  | Yes      | Indicates if it’s a system connection                            |
| ├── `extraOptions`        | object   | Yes      | Additional driver-specific options                               |
| ├── `forcingIdentifiersToLowerCase` | boolean | Yes | Whether to force identifiers to lowercase                        |
| ├── `accessMap`           | [object] | Yes      | Array of access permission objects                               |
| │   ├── `name`            | string   | Yes      | Permission code (`"0"`, `"1"`, `"2"`, `"4"`, etc.)              |
| │   └── `value`           | string   | Yes      | Whether the permission is granted (`"true"` or `"false"`)        |
| ├── `name`                | string   | Yes      | Name of the connection                                           |
| ├── `sqlserverInstance`   | null     | Yes      | For SQL Server instances (null if not used)                      |
| ├── `attributes`          | object   | Yes      | Driver-specific attributes                                       |
| │   ├── `PORT_NUMBER`     | string   | Yes      | Port number (`"25432"`)                                         |
| │   └── `driverId`        | string   | Yes      | Driver ID (e.g., `postgresql`)                                   |
| ├── `maximumPoolSize`     | integer  | Yes      | Maximum pool size                                               |
| ├── `informixServername`  | string   | Yes      | For Informix server name (empty if not used)                     |
| ├── `usingConnectionPool` | boolean  | Yes      | Whether a connection pool is in use                              |
| ├── `usingDoubleDecimalAsSchemaTableSeparator` | boolean | Yes | Whether to treat double decimals as schema-table separators      |
| ├── `databasePort`        | string   | Yes      | Port for the database (`"25432"`)                                |
| ├── `username`            | string   | Yes      | Database user name (e.g., `"postgres"`)                          |
| └── `changed`             | boolean  | Yes      | Indicates if the connection configuration has changed            |