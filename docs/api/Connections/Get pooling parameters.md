---
title: Get pooling parameters
permalink: /api/Connections/Get pooling parameters/
tags:
  - api
  - Connections
description: List the connection pool settings a connection accepts, with their server defaults.
createTime: 2026/10/10 10:00:00
---
Lists the connection pool settings you can put in `connectionPoolingProperties` when you [add](/api/Connections/Add%20a%20connection/) or [modify](/api/Connections/Modify%20a%20connection/) a connection, with the defaults this server uses.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/connection/poolingParameters` |
| Permission | Any signed-in user |
| Content type | none |

## Example

```bash
curl -u admin:password \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/connection/poolingParameters"
```

```json
{
  "databaseConnectionPoolParameters": [
    { "parameter": "defaultAutoCommit", "defaultValue": "true", "description": "..." },
    { "parameter": "initialSize", "defaultValue": "0", "description": "..." },
    { "parameter": "maxActive", "defaultValue": "20", "description": "..." },
    { "parameter": "maxIdle", "defaultValue": "2", "description": "..." },
    { "parameter": "minIdle", "defaultValue": "1", "description": "..." },
    { "parameter": "maxWait", "defaultValue": "100", "description": "..." },
    { "parameter": "validationQuery", "defaultValue": null, "description": "..." },
    { "parameter": "testOnBorrow", "defaultValue": "true", "description": "..." }
  ]
}
```

The list is abridged. The full list also has `defaultReadOnly`, `defaultTransactionIsolation`, `defaultCatalog`, `testOnReturn`, `testWhileIdle`, `timeBetweenEvictionRunsMillis`, `poolPreparedStatements`, `maxOpenPreparedStatements`, `accessToUnderlyingConnectionAllowed`, `removeAbandoned`, `removeAbandonedTimeout` and `logAbandoned`.

The defaults for `maxActive`, `maxIdle`, `minIdle`, `maxWait`, `testOnBorrow`, `testOnReturn`, `testWhileIdle` and `timeBetweenEvictionRunsMillis` come from the server's `dbcp-defaults` system settings when they are set, so they can differ from the values above.

Related: [Add a connection](/api/Connections/Add%20a%20connection/)
