---
title: Execute an alert
permalink: /api/Alert/Execute an alert/
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
/plugin/datafor/api/alert/execute
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user must have **read** privileges for the alert.

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

### **Parameters Schema**

| Name  | Location | Type   | Required | Description                                                |
|-------|----------|--------|----------|------------------------------------------------------------|
| **body** | body     | object | No       | Overall JSON payload                                       |
| ├── **pagePath**         | body | string   | No  | Full path of the page (e.g., `/public/test.datafor`)       |
| ├── **componentId**      | body | string   | No  | Component identifier                                       |
| ├── **componentTitle**   | body | string   | No  | Component title (e.g., "test")                             |
| ├── **enabled**          | body | string   | Yes | Whether alert is enabled: `1` (true) or `0` (false)        |
| ├── **name**             | body | string   | No  | Alert name                                                 |
| ├── **title**            | body | string   | No  | Alert title (can be empty)                                 |
| ├── **rule**             | body | object   | Yes | Defines the alert conditions                               |
| │   ├── **logical**      | body | string   | Yes | Logical operator (`and` / `or`)                            |
| │   └── **conditions**   | body | [object] | Yes | Array of condition objects                                 |
| │       ├── **id**           | body | string   | No  | Unique condition or measure ID                             |
| │       ├── **uniqueName**   | body | string   | No  | Unique measure identifier                                  |
| │       ├── **comparator**   | body | string   | No  | Comparison operator (`>=`, `<=`, `in`, `not in`, etc.)     |
| │       ├── **value**        | body | [integer]| No  | Numeric threshold(s) for the comparator                    |
| │       └── **match**        | body | string   | No  | `any` or `all` (default: `any`)                            |
| ├── **qm**                | body | object | Yes | Query configuration wrapper                                |
| │   ├── **queryModel**    | body | object | Yes | Defines the axes, measures, etc.                           |
| │   │   ├── **axes**      | body | object | Yes | Object containing `FILTER`, `COLUMNS`, `ROWS`              |
| │   │   │   ├── **FILTER**   | body | object | Yes | Filter axis configuration                                  |
| │   │   │   ├── **COLUMNS**  | body | object | Yes | Columns axis configuration                                 |
| │   │   │   └── **ROWS**     | body | object | Yes | Rows axis configuration                                    |
| │   │   ├── **visualTotals**        | body | boolean | Yes | Whether to enable visual totals                            |
| │   │   ├── **visualTotalsPattern** | body | null    | Yes | Not used in this example                                   |
| │   │   ├── **lowestLevelsOnly**    | body | boolean | Yes | Whether to only show lowest levels of the hierarchy        |
| │   │   ├── **details**             | body | object  | Yes | Additional detail settings                                 |
| │   │   ├── **calculatedMeasures**  | body | [string]| Yes | Calculated measure definitions                             |
| │   │   ├── **calculatedMembers**   | body | [string]| Yes | Calculated member definitions                              |
| │   │   ├── **queryType**           | body | string  | Yes | E.g., `OLAP`                                               |
| │   │   ├── **properties**          | body | object  | Yes | Query properties (paging, time zone, etc.)                 |
| │   │   ├── **parameters**          | body | object  | Yes | Query parameters (empty if none)                           |
| │   │   ├── **plugins**             | body | object  | Yes | Plugin configuration (empty if none)                       |
| │   │   ├── **mdx**                 | body | null    | Yes | Not used in this example                                   |
| │   │   ├── **name**                | body | string  | Yes | Query model name (often the same as `componentId`)         |
| │   │   ├── **metadata**            | body | object  | Yes | Metadata object                                            |
| │   │   ├── **type**                | body | string  | Yes | E.g., `QUERYMODEL`                                         |
| │   │   └── **cube**                | body | object  | Yes | Cube definition (schema, catalog, etc.)                    |
| ├── **cron**              | body | object | Yes | Scheduling configuration                                   |
| │   └── **complexJobTrigger** | body | object | Yes | Detailed scheduling settings                               |
| │       ├── **endTime**       | body | null    | Yes | End time (null if no end date)                             |
| │       ├── **startTime**     | body | string  | Yes | Start time (e.g., `2024-08-07T12:00:00.000+08:00`)         |
| │       ├── **uiPassParam**   | body | string  | Yes | Scheduling frequency (e.g., `WEEKLY`)                      |
| │       └── **daysOfWeek**    | body | [string]| Yes | Days of the week for scheduling (e.g., `["0"]` for Sunday) |
| ├── **channels**         | body | [string] | Yes | Alert channels (e.g., `[ "email" ]`)                       |
| └── **emailConfig**      | body | object   | Yes | Email alert configuration                                  |
|     ├── **toUsers**  | body | [string] | Yes | Email recipients (usernames)                               |
|     ├── **ccUsers**  | body | [string] | Yes | CC recipients                                              |
|     ├── **bccUsers** | body | [string] | Yes | BCC recipients                                             |
|     ├── **subject**  | body | string   | Yes | Email subject (e.g., "alert1")                             |
|     └── **content**  | body | string   | Yes | Email body (rich or plain text)                            |

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

| Name       | Type    | Required | Description        |
|------------|---------|----------|--------------------|
| `msg`      | string  | No       | Message string     |
| `success`  | boolean | Yes      | Request status     |