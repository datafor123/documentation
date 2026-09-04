---
title: List alerts
permalink: /api/Alert/List alerts/
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
/plugin/datafor/api/alert/list
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

**Preconditions**
- The current user must have **read** privileges for the alerts.

---

### **Parameters Schema**

| Name              | Location | Type   | Required | Description                  |
|-------------------|----------|--------|----------|------------------------------|
| **pagePath**      | body     | string | No       | Full page path (e.g., `/public/test.datafor`) |
| **componentId**   | body     | string | No       | Identifier of the component  |

### **Request Example**
```
pagePath: /public/test.datafor
componentId: C739239F-4B54-6C90-8389-BF77F713AA98
```

---

## **Response Examples**

```json
{
  "success": true,
  "data": [
    {
      "cron": {
        "complexJobTrigger": {
          "uiPassParam": "WEEKLY",
          "startTime": "2024-08-07T12:00:00.000+08:00",
          "endTime": null,
          "daysOfWeek": ["0"]
        }
      },
      "componentId": "C739239F-4B54-6C90-8389-BF77F713AA98",
      "rule": {
        "conditions": [
          {
            "comparator": "between",
            "uniqueName": "[Measures].[store_sales]",
            "match": "any",
            "inclusiveLeft": true,
            "inclusiveRight": true,
            "id": "sales_fact.store_sales.1717310261398",
            "value": [1, 2]
          }
        ],
        "logical": "and/or"
      },
      "pagePath": "/public/test.datafor",
      "pageExists": true,
      "pagePathTitle": "/Public/test",
      "pageTitle": "test",
      "title": "",
      "enabled": "1",
      "nextRun": 1739678400000,
      "emailConfig": {
        "ccUsers": ["sally"],
        "subject": "alert",
        "executor": "admin",
        "bccUsers": ["linda"],
        "toUsers": ["ada", "peter"],
        "content": "html or text"
      },
      "jobid": "admin\tAlertTaskAction\t64afc643-ea02-11ef-85a8-14755bc39e02",
      "channels": ["email"],
      "componentTitle": "test",
      "executor": "admin",
      "name": "alert1",
      "state": "NORMAL",
      "qm": {
        "mdx": null,
        "metadata": {},
        "plugins": {},
        "name": "C739239F-4B54-6C90-8389-BF77F713AA98",
        "queryModel": {
          "calculatedMembers": [],
          "lowestLevelsOnly": false,
          "calculatedMeasures": [],
          "axes": {
            "FILTER": {
              "mdx": null,
              "hierarchizeMode": null,
              "hierarchies": [
                {
                  "schema": "workshop-model",
                  "cmembers": {},
                  "name": "[time_by_day].[AGG_the_date]",
                  "cube": "workshop-model",
                  "id": "UUID-344F5E34-451E-BB1A-B991-2D4192646E1B",
                  "levels": {
                    "the_date@@MONTHS": "[Object]"
                  }
                }
              ],
              "sortOrder": null,
              "sortEvaluationLiteral": null,
              "nonEmpty": false,
              "location": "FILTER",
              "filters": []
            },
            "COLUMNS": {
              "mdx": null,
              "hierarchizeMode": null,
              "hierarchies": [],
              "sortOrder": null,
              "sortEvaluationLiteral": null,
              "nonEmpty": true,
              "location": "COLUMNS",
              "filters": [],
              "filterAxis": false
            },
            "ROWS": {
              "mdx": null,
              "hierarchizeMode": null,
              "hierarchies": [
                {
                  "cmembers": {},
                  "name": "[product_class].[hierarchy_product_family1]",
                  "filters": [],
                  "levels": {
                    "product_family": "[Object]"
                  }
                }
              ],
              "sortOrder": null,
              "sortEvaluationLiteral": null,
              "nonEmpty": true,
              "location": "ROWS",
              "filters": []
            }
          },
          "details": {
            "measures": [
              {
                "uniqueName": "[Measures].[sales_fact.store_sales]",
                "name": "sales_fact.store_sales",
                "caption": "store_sales",
                "id": "sales_fact.store_sales.1717310261398",
                "sort": 2,
                "type": "EXACT"
              }
            ],
            "location": "BOTTOM",
            "axis": "COLUMNS"
          },
          "visualTotalsPattern": null,
          "visualTotals": false
        },
        "cube": {
          "schema": "workshop-model",
          "uniqueName": "[workshop-model].[workshop-model].[workshop-model].[workshop-model]",
          "visible": true,
          "catalog": "workshop-model",
          "name": "workshop-model",
          "caption": "workshop-model",
          "connection": "workshop-model"
        },
        "type": "QUERYMODEL",
        "parameters": {},
        "properties": {
          "datafor.secret.appKey": "",
          "datafor.query.pick.row": "0,5000",
          "datafor.source.format": "true",
          "datafor.olap.result.formatter": "mix",
          "datafor.client.locale": "en",
          "datafor.client.timezone": "Australia/Melbourne"
        },
        "queryType": "OLAP"
      }
    }
  ]
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name       | Type      | Required | Description                                                                                           |
|------------|----------|----------|-------------------------------------------------------------------------------------------------------|
| `success`  | boolean  | Yes      | Indicates whether the request was successful                                                          |
| `data`     | [object] | Yes      | An array of alert objects                                                                            |
| ├── `cron` | object   | No       | Scheduling configuration                                                                              |
| │   └── `complexJobTrigger` | object  | Yes | Settings for triggers (start/end time, daysOfWeek, etc.)                                             |
| ├── `componentId`          | string  | No  | The component’s ID                                                                                   |
| ├── `rule`                 | object  | No  | Defines the alert logic and conditions                                                               |
| ├── `pagePath`             | string  | No  | Full path of the page                                                                                |
| ├── `pageExists`           | boolean | No  | Indicates if the page currently exists                                                               |
| ├── `pagePathTitle`        | string  | No  | Translated or displayed title for the page path                                                      |
| ├── `pageTitle`            | string  | No  | Title of the page                                                                                    |
| ├── `title`                | string  | No  | Alert title                                                                                          |
| ├── `enabled`              | string  | No  | Whether the alert is enabled (`1` = true, `0` = false)                                               |
| ├── `nextRun`              | integer | No  | Timestamp (ms) for the next run                                                                      |
| ├── `emailConfig`          | object  | No  | Email alert configuration                                                                            |
| ├── `jobid`                | string  | No  | Internal job identifier                                                                              |
| ├── `channels`             | [string]| No  | Channels used to send the alert (`["email"]`, etc.)                                                 |
| ├── `componentTitle`       | string  | No  | Title of the component                                                                               |
| ├── `executor`             | string  | No  | Username who last executed or updated the alert                                                      |
| ├── `name`                 | string  | No  | Alert name                                                                                           |
| ├── `state`                | string  | No  | Alert’s current state (e.g., `NORMAL`, `PAUSED`)                                                     |
| └── `qm`                   | object  | No  | Contains query configuration (e.g., `queryModel`, `properties`, `cube`)                              |