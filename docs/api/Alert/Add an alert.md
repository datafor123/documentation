---
title: Add an alert
permalink: /api/Alert/Add an alert/
tags:
  - api
  - Alert
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/alert/add
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user’s type **cannot** be `SYS_Reader`.

**Note**
- For **table** or **cross table** components, remove the following properties in `queryModel` if they appear:
  - `datafor.query.paging.size`
  - `datafor.query.paging.start`
  - `datafor.query.paging.subset.start`
  - `datafor.query.paging.subset.size`

---

### **Request Example**

```json
{
  "pagePath": "/public/test.datafor",
  "componentId": "C739239F-4B54-6C90-8389-BF77F713AA98",
  "componentTitle": "Business Overview",
  "enabled": "1",
  "name": "Test Alert",
  "title": "",
  "rule": {
    "logical": "and",
    "conditions": [
      {
        "id": "sales_fact.store_sales.1717310261398",
        "uniqueName": "[Measures].[store_sales]",
        "comparator": ">=",
        "value": [1],
        "match": "any"
      }
    ]
  },
  "qm": {
    "queryModel": {
      "axes": {
        "FILTER": {
          "mdx": null,
          "filters": [],
          "sortOrder": null,
          "sortEvaluationLiteral": null,
          "hierarchizeMode": null,
          "location": "FILTER",
          "hierarchies": [
            {
              "name": "[time_by_day].[AGG_the_date]",
              "levels": {
                "the_date@@MONTHS": {
                  "name": "the_date@@MONTHS",
                  "caption": "the_date(Month)",
                  "mdx": null,
                  "selection": {
                    "type": "INCLUSION",
                    "members": "[Object]",
                    "parameterName": null
                  },
                  "aggregators": [],
                  "filters": []
                }
              },
              "cmembers": {},
              "schema": "workshop-model",
              "cube": "workshop-model",
              "id": "UUID-344F5E34-451E-BB1A-B991-2D4192646E1B"
            }
          ],
          "nonEmpty": false
        },
        "COLUMNS": {
          "mdx": null,
          "filters": [],
          "sortOrder": null,
          "filterAxis": false,
          "sortEvaluationLiteral": null,
          "hierarchizeMode": null,
          "location": "COLUMNS",
          "hierarchies": [],
          "nonEmpty": true
        },
        "ROWS": {
          "mdx": null,
          "filters": [],
          "sortOrder": null,
          "sortEvaluationLiteral": null,
          "hierarchizeMode": null,
          "location": "ROWS",
          "hierarchies": [
            {
              "name": "[product_class].[hierarchy_product_family1]",
              "levels": {
                "product_family": {
                  "name": "product_family",
                  "caption": "product_family",
                  "mdx": null,
                  "selection": {},
                  "aggregators": [],
                  "filters": [],
                  "sort": 1
                }
              },
              "cmembers": {},
              "filters": []
            }
          ],
          "nonEmpty": true
        }
      },
      "visualTotals": false,
      "visualTotalsPattern": null,
      "lowestLevelsOnly": false,
      "details": {
        "axis": "COLUMNS",
        "location": "BOTTOM",
        "measures": [
          {
            "caption": "store_sales",
            "name": "sales_fact.store_sales",
            "uniqueName": "[Measures].[sales_fact.store_sales]",
            "id": "sales_fact.store_sales.1717310261398",
            "type": "EXACT",
            "sort": 2
          }
        ]
      },
      "calculatedMeasures": [],
      "calculatedMembers": []
    },
    "queryType": "OLAP",
    "properties": {
      "datafor.query.pick.row": "0,5000",
      "datafor.secret.appKey": "",
      "datafor.olap.result.formatter": "mix",
      "datafor.client.timezone": "Australia/Melbourne",
      "datafor.client.locale": "en",
      "datafor.source.format": "true"
    },
    "parameters": {},
    "plugins": {},
    "mdx": null,
    "name": "C739239F-4B54-6C90-8389-BF77F713AA98",
    "metadata": {},
    "type": "QUERYMODEL",
    "cube": {
      "uniqueName": "[workshop-model].[workshop-model].[workshop-model].[workshop-model]",
      "name": "workshop-model",
      "connection": "workshop-model",
      "catalog": "workshop-model",
      "schema": "workshop-model",
      "caption": "workshop-model",
      "visible": true
    }
  },
  "cron": {
    "complexJobTrigger": {
      "endTime": null,
      "startTime": "2024-08-07T12:00:00.000+08:00",
      "uiPassParam": "WEEKLY",
      "daysOfWeek": ["0"]
    }
  },
  "channels": ["email"],
  "emailConfig": {
    "toUsers": ["admin", "peter"],
    "ccUsers": ["sally"],
    "bccUsers": ["linda"],
    "subject": "Subject",
    "content": "Rich text content or plain text content ${value}"
  }
}
```

---

### **Body Parameters Schema**

| Name                                   | Location | Type      | Required | Description                                                                                          |
|----------------------------------------|----------|-----------|----------|------------------------------------------------------------------------------------------------------|
| **body**                               | body     | object    | No       | Overall JSON payload                                                                                 |
| ├── **pagePath**                       | body     | string    | **Yes**  | The full page path (e.g., `/public/test.datafor`)                                                    |
| ├── **componentId**                    | body     | string    | **Yes**  | The component ID                                                                                     |
| ├── **componentTitle**                 | body     | string    | **Yes**  | The component title                                                                                  |
| ├── **enabled**                        | body     | string    | **Yes**  | Whether the alert is enabled: `1` (true) or `0` (false)                                              |
| ├── **name**                           | body     | string    | **Yes**  | The alert name                                                                                       |
| ├── **title**                          | body     | string    | **Yes**  | The alert title (can be empty)                                                                       |
| ├── **rule**                           | body     | object    | **Yes**  | Rule configuration object                                                                            |
| │   ├── **logical**                    | body     | string    | **Yes**  | Logical operator combining conditions (`and`, `or`)                                                  |
| │   └── **conditions**                 | body     | [object]  | **Yes**  | Array of condition objects                                                                           |
| │       ├── **id**                     | body     | string    | **Yes**  | The measure/metric ID                                                                                |
| │       ├── **uniqueName**             | body     | string    | **Yes**  | The unique measure identifier                                                                        |
| │       ├── **comparator**             | body     | string    | **Yes**  | Comparison operator (`>`, `<`, `<=`, `>=`, `==`, `!=`, `between`, `in`, etc.)                        |
| │       ├── **value**                  | body     | [integer] | No       | Numeric array for comparators that require values                                                    |
| │       ├── **inclusiveLeft**          | body     | boolean   | No       | For `between`/`not between` – whether the left boundary is inclusive                                 |
| │       ├── **inclusiveRight**         | body     | boolean   | No       | For `between`/`not between` – whether the right boundary is inclusive                                |
| │       └── **match**                  | body     | string    | No       | Specifies whether to match `any` or `all` values (default: `any`)                                    |
| ├── **qm**                             | body     | object    | **Yes**  | Query configuration wrapper                                                                          |
| │   ├── **queryModel**                 | body     | object    | **Yes**  | Defines axes, measures, and other OLAP settings                                                      |
| │   │   ├── **axes**                   | body     | object    | **Yes**  | Axes definition (`FILTER`, `COLUMNS`, `ROWS`)                                                        |
| │   │   │   ├── **FILTER**             | body     | object    | **Yes**  | Filter-axis definition                                                                               |
| │   │   │   │   ├── mdx                | body     | null      | **Yes**  | Not applicable (set to `null`)                                                                       |
| │   │   │   │   ├── filters            | body     | [string]  | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── sortOrder          | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── sortEvaluationLiteral | body  | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── hierarchizeMode    | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── **location**       | body     | string    | **Yes**  | Must be `FILTER`                                                                                     |
| │   │   │   │   ├── **hierarchies**    | body     | [object]  | **Yes**  | Hierarchy objects                                                                                    |
| │   │   │   │   │   ├── **name**       | body     | string    | No       | Hierarchy name                                                                                       |
| │   │   │   │   │   ├── **levels**     | body     | object    | No       | Contains level objects                                                                               |
| │   │   │   │   │   ├── **cmembers**   | body     | object    | No       | Calculated members (if any)                                                                          |
| │   │   │   │   │   ├── **schema**     | body     | string    | No       | Schema name (e.g., `workshop-model`)                                                                 |
| │   │   │   │   │   ├── **cube**       | body     | string    | No       | Cube name (e.g., `workshop-model`)                                                                   |
| │   │   │   │   │   └── **id**         | body     | string    | No       | Hierarchy ID                                                                                         |
| │   │   │   │   └── **nonEmpty**       | body     | boolean   | **Yes**  | Whether to exclude empty cells                                                                       |
| │   │   │   ├── **COLUMNS**            | body     | object    | **Yes**  | Columns-axis configuration                                                                           |
| │   │   │   │   ├── mdx                | body     | null      | **Yes**  | Not applicable (set to `null`)                                                                       |
| │   │   │   │   ├── filters            | body     | [string]  | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── sortOrder          | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── **filterAxis**     | body     | boolean   | **Yes**  | Whether to treat this as a filter axis                                                               |
| │   │   │   │   ├── sortEvaluationLiteral | body  | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── hierarchizeMode    | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── **location**       | body     | string    | **Yes**  | Must be `COLUMNS`                                                                                    |
| │   │   │   │   ├── **hierarchies**    | body     | [string]  | **Yes**  | Array of hierarchies (empty in this example)                                                         |
| │   │   │   │   └── **nonEmpty**       | body     | boolean   | **Yes**  | Whether to exclude empty cells                                                                       |
| │   │   │   ├── **ROWS**               | body     | object    | **Yes**  | Rows-axis configuration                                                                              |
| │   │   │   │   ├── mdx                | body     | null      | **Yes**  | Not applicable (set to `null`)                                                                       |
| │   │   │   │   ├── filters            | body     | [string]  | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── sortOrder          | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── sortEvaluationLiteral | body  | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── hierarchizeMode    | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   │   │   ├── **location**       | body     | string    | **Yes**  | Must be `ROWS`                                                                                       |
| │   │   │   │   ├── **hierarchies**    | body     | [object]  | **Yes**  | Row hierarchy definitions                                                                            |
| │   │   │   │   └── **nonEmpty**       | body     | boolean   | **Yes**  | Whether to exclude empty cells                                                                       |
| │   │   ├── **visualTotals**           | body     | boolean   | **Yes**  | Whether to enable visual totals                                                                      |
| │   │   ├── visualTotalsPattern        | body     | null      | **Yes**  | Not used in this example                                                                             |
| │   │   ├── **lowestLevelsOnly**       | body     | boolean   | **Yes**  | Whether to show only the lowest hierarchy levels                                                     |
| │   │   ├── **details**                | body     | object    | **Yes**  | Detail settings                                                                                      |
| │   │   │   ├── **axis**               | body     | string    | **Yes**  | Axis for details (e.g., `COLUMNS`)                                                                   |
| │   │   │   ├── **location**           | body     | string    | **Yes**  | Location for details (e.g., `BOTTOM`)                                                                |
| │   │   │   └── **measures**           | body     | [object]  | **Yes**  | A list of measure definitions                                                                        |
| │   │   │       ├── **caption**        | body     | string    | No       | Measure caption (e.g., `store_sales`)                                                                |
| │   │   │       ├── **name**           | body     | string    | No       | Internal measure name (e.g., `sales_fact.store_sales`)                                               |
| │   │   │       ├── **uniqueName**     | body     | string    | No       | Unique measure identifier (e.g., `[Measures].[sales_fact.store_sales]`)                              |
| │   │   │       ├── **id**             | body     | string    | No       | Unique measure ID                                                                                    |
| │   │   │       ├── **type**           | body     | string    | No       | Type of measure match (e.g., `EXACT`)                                                                |
| │   │   │       └── **sort**           | body     | integer   | No       | Sorting priority                                                                                     |
| │   │   ├── **calculatedMeasures**     | body     | [string]  | **Yes**  | Array of calculated measures (empty if none)                                                         |
| │   │   ├── **calculatedMembers**      | body     | [string]  | **Yes**  | Array of calculated members (empty if none)                                                          |
| │   │   ├── **queryType**              | body     | string    | **Yes**  | Type of query (e.g., `OLAP`)                                                                         |
| │   │   ├── **properties**             | body     | object    | **Yes**  | Misc. query properties                                                                               |
| │   │   │   ├── **datafor.query.pick.row**         | body | string  | No    | Row picking range (e.g., `0,5000`)                                                                   |
| │   │   │   ├── **datafor.secret.appKey**          | body | string  | No    | App key                                                                                              |
| │   │   │   ├── **datafor.olap.result.formatter**   | body | string  | No    | OLAP result format (e.g., `mix`)                                                                     |
| │   │   │   ├── **datafor.client.timezone**         | body | string  | No    | Timezone (e.g., `Australia/Melbourne`)                                                                     |
| │   │   │   ├── **datafor.client.locale**           | body | string  | No    | Locale (e.g., `en`)                                                                                  |
| │   │   │   └── **datafor.source.format**           | body | string  | No    | Whether to format the source (e.g., `true`)                                                          |
| │   │   ├── **parameters**             | body     | object    | **Yes**  | Query parameters (empty if none)                                                                     |
| │   │   ├── **plugins**                | body     | object    | **Yes**  | Plugin-related configuration (empty if none)                                                         |
| │   │   ├── mdx                        | body     | null      | **Yes**  | Not applicable (set to `null`)                                                                       |
| │   │   ├── **name**                   | body     | string    | **Yes**  | Matches the component ID                                                                             |
| │   │   ├── **metadata**               | body     | object    | **Yes**  | Metadata object                                                                                      |
| │   │   ├── **type**                   | body     | string    | **Yes**  | Query model type (e.g., `QUERYMODEL`)                                                                |
| │   │   └── **cube**                   | body     | object    | **Yes**  | Cube definition                                                                                      |
| │   │       ├── **uniqueName**         | body     | string    | **Yes**  | Full unique name, e.g., `[workshop-model].[workshop-model]...`                                       |
| │   │       ├── **name**               | body     | string    | **Yes**  | Cube name (e.g., `workshop-model`)                                                                   |
| │   │       ├── **connection**         | body     | string    | **Yes**  | Connection name (e.g., `workshop-model`)                                                             |
| │   │       ├── **catalog**            | body     | string    | **Yes**  | Catalog name (often the same as the cube name)                                                       |
| │   │       ├── **schema**             | body     | string    | **Yes**  | Schema name (e.g., `workshop-model`)                                                                 |
| │   │       ├── **caption**            | body     | string    | **Yes**  | Cube caption                                                                                         |
| │   │       └── **visible**            | body     | boolean   | **Yes**  | Whether the cube is visible                                                                          |
| ├── **cron**                           | body     | object    | **Yes**  | Scheduling configuration                                                                             |
| │   └── **complexJobTrigger**          | body     | object    | **Yes**  | Detailed scheduling settings                                                                          |
| │       ├── endTime                    | body     | null      | **Yes**  | Not used if no end time is set                                                                       |
| │       ├── **startTime**              | body     | string    | **Yes**  | Start time (e.g., `2024-08-07T12:00:00.000+08:00`)                                                    |
| │       ├── **uiPassParam**            | body     | string    | **Yes**  | Scheduling frequency (e.g., `WEEKLY`)                                                                |
| │       └── **daysOfWeek**             | body     | [string]  | **Yes**  | Days of week for `WEEKLY` (e.g., `["0"]` = Sunday)                                                    |
| ├── **channels**                       | body     | [string]  | **Yes**  | Alert channels (e.g., `["email"]`)                                                                   |
| ├── **emailConfig**                    | body     | object    | **Yes**  | Email alert configuration                                                                            |
| │   ├── **toUsers**                    | body     | [string]  | **Yes**  | Recipient usernames (e.g., `["admin", "peter"]`)                                                     |
| │   ├── **ccUsers**                    | body     | [string]  | **Yes**  | CC recipients (e.g., `["sally"]`)                                                                    |
| │   ├── **bccUsers**                   | body     | [string]  | **Yes**  | BCC recipients (e.g., `["linda"]`)                                                                   |
| │   ├── **subject**                    | body     | string    | **Yes**  | Email subject (e.g., `Subject`)                                                                      |
| │   └── **content**                    | body     | string    | **Yes**  | Email body (plain or rich text, e.g., `Rich text content ...`)                                       |
| └── **componentTitle**                 | body     | string    | **Yes**  | The component title                                                                                  |

---

## **Enum Values**

| Name            | Value                                                                         |
|-----------------|-------------------------------------------------------------------------------|
| `rule.logical`  | `and`, `or`                                                                   |
| `comparator`    | `<`, `>`, `<=`, `>=`, `==`, `!=`, `between`, `not between`, `in`, `not in`, `is empty`, `is not empty` |

---

## **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description         |
|-----------|---------|----------|---------------------|
| `msg`     | string  | No       | Message string      |
| `success` | boolean | **Yes**  | Request status      |