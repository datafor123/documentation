---
title: Test a connection
permalink: /api/Connections/Test a connection/
tags:
  - api
  - Connections
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`PUT`

**Request URL**
```html
/plugin/datafor-modeler/api/connection/test
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

**Preconditions**
- The current user must have **read** privileges for the connection.

---

### **Parameters Schema**

| Name                                     | Location | Type     | Required | Description                                             |
|------------------------------------------|----------|----------|----------|---------------------------------------------------------|
| **name**                                 | query    | string   | No       | The name of the connection                             |
| **body**                                 | body     | object   | No       | JSON payload containing connection details             |
| ├── **SQLServerInstance**               | body     | null     | No       | For SQL Server; null if not used                        |
| ├── **accessType**                      | body     | string   | Yes      | Type of connection access (e.g., `NATIVE`)             |
| ├── **accessTypeValue**                 | body     | string   | Yes      | Same as `accessType`                                   |
| ├── **attributes**                      | body     | object   | Yes      | Additional connection attributes                        |
| │   ├── **driverId**                    | body     | string   | Yes      | E.g., `postgresql`                                      |
| │   ├── **PORT_NUMBER**                 | body     | string   | Yes      | Database port (e.g., `25432`)                           |
| ├── **changed**                         | body     | boolean  | Yes      | Indicates if the connection config has changed          |
| ├── **connectSql**                      | body     | string   | Yes      | SQL to run when establishing the connection (optional) |
| ├── **connectionPoolingProperties**     | body     | object   | Yes      | Connection pool settings                                |
| │   ├── **initialSize**                 | body     | string   | Yes      | Initial size of the pool                               |
| │   ├── **maxActive**                   | body     | string   | Yes      | Maximum active connections                             |
| │   ├── **maxIdle**                     | body     | string   | Yes      | Maximum idle connections                               |
| │   ├── **minIdle**                     | body     | string   | Yes      | Minimum idle connections                               |
| ├── **dataTablespace**                  | body     | string   | Yes      | Tablespace for data (if applicable)                    |
| ├── **databaseName**                    | body     | string   | Yes      | Name of the database (e.g., `foodmart`)                |
| ├── **databasePort**                    | body     | string   | Yes      | Port for the database (e.g., `25432`)                  |
| ├── **databaseType**                    | body     | object   | Yes      | Info about the database type                           |
| │   ├── **defaultDatabaseName**         | body     | null     | Yes      | Default DB name (null if not specified)                |
| │   ├── **defaultDatabasePort**         | body     | integer  | Yes      | Default port (e.g., `5432`)                            |
| │   ├── **defaultOptions**              | body     | null     | Yes      | Default driver options                                 |
| │   ├── **extraOptionsHelpUrl**         | body     | string   | Yes      | URL for documentation of extra options                 |
| │   ├── **name**                        | body     | string   | Yes      | E.g., `PostgreSQL`                                     |
| │   ├── **shortName**                   | body     | string   | Yes      | Abbreviated name (e.g., `POSTGRESQL`)                  |
| ├── **extraOptions**                    | body     | object   | Yes      | Additional driver-specific options                     |
| ├── **extraOptionsOrder**               | body     | object   | Yes      | Order of extra options                                 |
| ├── **forcingIdentifiersToLowerCase**   | body     | boolean  | Yes      | Whether to force identifiers to lowercase              |
| ├── **forcingIdentifiersToUpperCase**   | body     | boolean  | Yes      | Whether to force identifiers to uppercase              |
| ├── **hostname**                        | body     | string   | Yes      | Host IP or domain (e.g., `127.0.0.1`)                  |
| ├── **id**                              | body     | string   | Yes      | Unique ID for this connection                          |
| ├── **indexTablespace**                 | body     | string   | Yes      | Tablespace for indexes (if applicable)                 |
| ├── **informixServername**              | body     | string   | Yes      | For Informix only; otherwise empty                     |
| ├── **initialPoolSize**                 | body     | integer  | Yes      | Initial number of connections in the pool              |
| ├── **maximumPoolSize**                 | body     | integer  | Yes      | Maximum size of the pool                               |
| ├── **name**                            | body     | string   | Yes      | Connection name (e.g., `foodmart`)                     |
| ├── **partitioned**                     | body     | boolean  | Yes      | Whether the database is partitioned                    |
| ├── **password**                        | body     | null     | Yes      | Database password (null if not changed)                |
| ├── **quoteAllFields**                  | body     | boolean  | Yes      | Whether to quote all SQL fields                        |
| ├── **streamingResults**                | body     | boolean  | Yes      | Whether to use streaming results                       |
| ├── **username**                        | body     | string   | Yes      | Database user (e.g., `postgres`)                       |
| ├── **usingConnectionPool**             | body     | boolean  | Yes      | Whether to use a connection pool                       |
| ├── **usingDoubleDecimalAsSchemaTableSeparator** | body | boolean | Yes | If true, double decimals are used as schema-table separators |
| ├── **driverId**                        | body     | string   | Yes      | Driver ID (duplicate of `attributes.driverId`)         |
| ├── **PORT_NUMBER**                     | body     | string   | Yes      | Database port (duplicate of `attributes.PORT_NUMBER`)  |
| ├── **CUSTOM_URL**                      | body     | null     | No       | Custom JDBC URL if using a non-default driver config   |
| └── **CUSTOM_DRIVER_CLASS**             | body     | null     | No       | Custom driver class if required                        |

---

## **Response Examples**

```json
{
  "success": true
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name       | Type    | Required | Description         |
|------------|---------|----------|---------------------|
| `success`  | boolean | Yes      | Indicates whether the test was successful |