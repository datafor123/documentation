---
title: parameter in execute
permalink: /api/Parameters/parameter in execute/
tags:
  - api
  - Parameters
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/cube/query/execute
```

**Authorization**  
Authentication is required to use this API. For details on the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API executes an OLAP query against the specified cube. Users can define query parameters, filtering, sorting, and aggregation operations to retrieve structured data for analytical purposes.

---
## **Parameters**

### **Query Parameters**
| Name    | Location | Type   | Required | Description |
|---------|----------|--------|----------|-------------|
| `_test` | query   | string | No       | Test parameter for debugging purposes (if applicable). |

### **Body Parameters Schema**
| Name             | Location | Type     | Required | Description |
|-----------------|----------|----------|----------|-------------|
| `cube`          | body     | object   | **Yes**  | The cube metadata used for the query. |
| ├── `uniqueName` | body    | string   | **Yes**  | The unique identifier of the cube. |
| ├── `name`       | body    | string   | **Yes**  | The name of the cube. |
| ├── `connection` | body    | string   | **Yes**  | The connection associated with the cube. |
| ├── `catalog`    | body    | string   | **Yes**  | The catalog that contains the cube. |
| ├── `schema`     | body    | string   | **Yes**  | The schema that defines the cube structure. |
| ├── `caption`    | body    | string   | **Yes**  | The display name of the cube. |
| ├── `visible`    | body    | boolean  | **Yes**  | Indicates whether the cube is visible. |
| `queryModel`    | body     | object   | **Yes**  | Defines the structure of the query. |
| ├── `axes`      | body     | object   | **Yes**  | Specifies the axes of the OLAP query. |
| │   ├── `FILTER` | body   | object   | **Yes**  | Defines filter settings. |
| │   │   ├── `mdx` | body  | null     | **Yes**  | Multidimensional expression (MDX) for filtering. |
| │   │   ├── `filters` | body | array  | **Yes**  | A list of filter conditions. |
| │   │   ├── `sortOrder` | body | null | **Yes**  | Sorting order for the filter axis. |
| │   │   ├── `location` | body | string | **Yes**  | The location of the axis (e.g., "FILTER"). |
| │   │   ├── `hierarchies` | body | array | **Yes**  | Specifies the hierarchy of the axis. |
| │   │   ├── `nonEmpty` | body | boolean | **Yes**  | Determines whether to exclude empty results. |
| │   ├── `COLUMNS` | body | object | **Yes** | Defines the column axis. |
| │   ├── `ROWS` | body | object | **Yes** | Defines the row axis. |
| ├── `details` | body | object | **Yes** | Specifies additional details about the query. |
| │   ├── `axis` | body | string | **Yes** | The target axis for details. |
| │   ├── `measures` | body | array | **Yes** | A list of measures included in the query. |
| │   │   ├── `caption` | body | string | **Yes** | The display name of the measure. |
| │   │   ├── `name` | body | string | **Yes** | The name of the measure. |
| │   │   ├── `uniqueName` | body | string | **Yes** | The unique name of the measure. |
| │   │   ├── `type` | body | string | **Yes** | The type of measure (e.g., "EXACT", "CALCULATED"). |
| │   │   ├── `sort` | body | integer | **Yes** | The sorting order of the measure. |
| ├── `calculatedMeasures` | body | array | No | A list of calculated measures. |
| ├── `calculatedMembers` | body | array | No | A list of calculated members. |
| `queryType` | body | string | **Yes** | The type of query being executed (e.g., "OLAP"). |
| `properties` | body | object | **Yes** | Additional query properties. |
| ├── `datafor.query.sum.bottom` | body | boolean | **Yes** | Whether to include sum at the bottom of the query result. |
| ├── `datafor.query.sum.name` | body | string | **Yes** | Label for the subtotal row. |
| ├── `datafor.query.total.name` | body | string | **Yes** | Label for the grand total row. |
| ├── `datafor.client.timezone` | body | string | **Yes** | The timezone for the client request. |
| ├── `datafor.client.locale` | body | string | **Yes** | The locale for the client request. |
| `parameters` | body | object | No | A dictionary of parameters used in the query. |
| `parameterDefs` | body | array | No | Definitions of dynamic parameters. |
| ├── `name` | body | string | No | The name of the parameter. |
| ├── `defaults` | body | string | No | The default value for the parameter. |
| ├── `type` | body | integer | No | The parameter type. |
| ├── `datatype` | body | integer | No | The data type of the parameter. |
| ├── `source` | body | integer | No | The source of the parameter. |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

---
