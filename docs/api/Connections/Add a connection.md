---
title: Add a connection
permalink: /api/Connections/Add a connection/
tags:
  - api
  - Connections
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/connection/add
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

**Preconditions**
- The current user's type **cannot** be `SYS_Reader`.

---

### **Parameters Schema**

| Name                                      | Location | Type     | Required | Description                        |
|-------------------------------------------|----------|----------|----------|------------------------------------|
| **Accept**                                | header   | string   | No       | Accept header (e.g., `application/json`)      |
| **Access-Control-Request-Headers**        | header   | string   | No       | Specifies which headers will be used during the request |
| **body**                                  | body     | object   | No       | Overall JSON payload                |
| ├── **SQLServerInstance**                 | body     | null     | Yes      | Not applicable (SQL Server only)    |
| ├── **accessType**                        | body     | string   | Yes      | Type of connection access (e.g., `NATIVE`)    |
| ├── **accessTypeValue**                   | body     | string   | Yes      | Same as `accessType`                |
| ├── **attributes**                        | body     | object   | Yes      | Additional connection attributes    |
| │   ├── **PORT_NUMBER**                   | body     | string   | Yes      | Port for the database (e.g., `25432`)         |
| │   └── **driverId**                      | body     | string   | Yes      | Driver identifier (e.g., `postgresql`)        |
| ├── **changed**                           | body     | boolean  | Yes      | Indicates if the connection config has changed |
| ├── **connectSql**                        | body     | string   | Yes      | SQL statement to execute upon connection (optional) |
| ├── **connectionPoolingProperties**       | body     | object   | Yes      | Connection pool settings            |
| │   ├── **initialSize**                   | body     | string   | Yes      | Initial pool size                   |
| │   ├── **maxActive**                     | body     | string   | Yes      | Maximum active connections          |
| │   ├── **maxIdle**                       | body     | string   | Yes      | Maximum idle connections            |
| │   └── **minIdle**                       | body     | string   | Yes      | Minimum idle connections            |
| ├── **dataTablespace**                    | body     | string   | Yes      | Data tablespace (if applicable)     |
| ├── **databaseName**                      | body     | string   | Yes      | Name of the database (e.g., `foodmart`)       |
| ├── **databasePort**                      | body     | string   | Yes      | Port number (e.g., `25432`)         |
| ├── **databaseType**                      | body     | object   | Yes      | Info about the database type        |
| │   ├── **defaultDatabasePort**           | body     | string   | Yes      | Default port (e.g., `5432`)         |
| │   ├── **name**                          | body     | string   | Yes      | Full name of the database type (`PostgreSQL`) |
| │   └── **shortName**                     | body     | string   | Yes      | Abbreviation of the database type (e.g., `POSTGRESQL`) |
| ├── **extraOptions**                      | body     | object   | Yes      | Additional driver-specific options  |
| │   └── **POSTGRESQL.TimeZone**           | body     | string   | Yes      | Time zone setting (e.g., `Australia/Melbourne`)        |
| ├── **extraOptionsOrder**                 | body     | object   | Yes      | Specifies order of extra options    |
| │   └── **0**                              | body     | string   | Yes      | The first item in the order list    |
| ├── **forcingIdentifiersToLowerCase**     | body     | boolean  | Yes      | Whether to force identifiers to lowercase  |
| ├── **forcingIdentifiersToUpperCase**     | body     | boolean  | Yes      | Whether to force identifiers to uppercase  |
| ├── **hostname**                          | body     | string   | Yes      | Host IP or domain (e.g., `127.0.0.1`)        |
| ├── **id**                                | body     | null     | Yes      | Typically unused; set to null       |
| ├── **indexTablespace**                   | body     | string   | Yes      | Index tablespace (if applicable)    |
| ├── **informixServername**                | body     | string   | Yes      | Server name for Informix (unused for PostgreSQL) |
| ├── **initialPoolSize**                   | body     | integer  | Yes      | Initial size for connection pool    |
| ├── **maximumPoolSize**                   | body     | integer  | Yes      | Maximum pool size                   |
| ├── **name**                              | body     | string   | Yes      | Connection name (e.g., `foodmart2`) |
| ├── **partitioned**                       | body     | boolean  | Yes      | Whether the database is partitioned |
| ├── **password**                          | body     | string   | Yes      | Database user password              |
| ├── **quoteAllFields**                    | body     | boolean  | Yes      | Whether to quote all SQL fields     |
| ├── **streamingResults**                  | body     | boolean  | Yes      | Whether to use streaming results    |
| ├── **username**                          | body     | string   | Yes      | Database user name (e.g., `postgres`)         |
| ├── **usingConnectionPool**               | body     | boolean  | Yes      | Whether to use connection pooling   |
| ├── **usingDoubleDecimalAsSchemaTableSeparator** | body | boolean | Yes | Whether to treat double decimals as schema-table separators |
| ├── **PORT_NUMBER**                       | body     | string   | Yes      | Database port number (duplicate with `databasePort`)         |
| ├── **driverId**                          | body     | string   | Yes      | Driver ID (duplicate with `attributes.driverId`)             |
| ├── **CUSTOM_URL**                        | body     | null     | Yes      | Custom URL if not using default driver config |
| └── **CUSTOM_DRIVER_CLASS**               | body     | null     | Yes      | Custom driver class if needed, otherwise null |

---

## **Response Examples**

```json
{
  "msg": "success",
  "code": "200",
  "success": true
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name       | Type    | Required | Description                             |
|------------|---------|----------|-----------------------------------------|
| `msg`      | string  | No       | Response message (e.g., `"success"`)    |
| `code`     | string  | No       | Status code (e.g., `"200"`)             |
| `success`  | boolean | Yes      | Indicates whether the request succeeded |