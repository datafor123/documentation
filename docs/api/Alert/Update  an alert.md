---
title: Update  an alert
permalink: /api/Alert/Update  an alert/
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
/plugin/datafor/api/alert/update
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

**Preconditions**
- The current user must have **administrative** privileges for the alert.

---

### **Parameters Schema**

| Name          | Location | Type     | Required | Description                                          |
|---------------|----------|----------|----------|------------------------------------------------------|
| **body**      | body     | object   | No       | Overall JSON payload                                 |
| ├── **enabled**         | body | string   | Yes  | `1` (true) or `0` (false)                            |
| ├── **name**            | body | string   | Yes  | Alert name                                           |
| ├── **title**           | body | string   | Yes  | Alert title                                          |
| ├── **rule**            | body | object   | Yes  | Defines alert conditions                             |
| │   ├── **logical**         | body | string   | Yes  | Logical operator: `and` or `or`                      |
| │   └── **conditions**      | body | [object] | Yes  | Array of condition objects                           |
| │       ├── **id**            | body | string   | No  | Unique condition/measure ID                          |
| │       ├── **uniqueName**    | body | string   | No  | Unique measure identifier                            |
| │       ├── **comparator**    | body | string   | No  | Comparison operator (e.g., `<`, `>`, `==`, etc.)     |
| │       ├── **value**         | body | [integer]| No  | Values for comparison                                |
| │       ├── **inclusiveLeft** | body | boolean  | No  | Used when comparator is `between`/`not between`      |
| │       ├── **inclusiveRight**| body | boolean  | No  | Used when comparator is `between`/`not between`      |
| │       └── **match**         | body | string   | No  | `any` or `all` (default: `any`)                      |
| ├── **qm**               | body | object   | Yes  | Query configuration wrapper                          |
| │   ├── **queryModel**   | body | object   | Yes  | OLAP axes, measures, etc.                            |
| │   │   ├── **axes**     | body | object   | Yes  | Configuration for `FILTER`, `COLUMNS`, `ROWS`        |
| │   │   │   ├── **FILTER**   | body | object | Yes | Filter axis                                          |
| │   │   │   ├── **COLUMNS**  | body | object | Yes | Columns axis                                         |
| │   │   │   └── **ROWS**     | body | object | Yes | Rows axis                                            |
| │   │   ├── **visualTotals**        | body | boolean | Yes | Whether to enable visual totals                      |
| │   │   ├── **visualTotalsPattern** | body | null    | Yes | Pattern for visual totals (not used if `false`)      |
| │   │   ├── **lowestLevelsOnly**    | body | boolean | Yes | Whether to only show lowest hierarchy levels         |
| │   │   ├── **details**             | body | object  | Yes | Additional detail settings                           |
| │   │   ├── **calculatedMeasures**  | body | [string]| Yes | Calculated measures (if any)                         |
| │   │   ├── **calculatedMembers**   | body | [string]| Yes | Calculated members (if any)                          |
| │   │   ├── **queryType**           | body | string  | Yes | E.g., `OLAP`                                         |
| │   │   ├── **properties**          | body | object  | Yes | Misc. query properties                               |
| │   │   ├── **parameters**          | body | object  | Yes | Query parameters (if any)                            |
| │   │   ├── **plugins**             | body | object  | Yes | Plugin configuration                                 |
| │   │   ├── **mdx**                 | body | null    | Yes | Not used in this example                             |
| │   │   ├── **name**                | body | string  | Yes | The component ID (same as `componentId`)             |
| │   │   ├── **metadata**            | body | object  | Yes | Metadata object                                      |
| │   │   ├── **type**                | body | string  | Yes | E.g., `QUERYMODEL`                                   |
| │   │   └── **cube**                | body | object  | Yes | Cube definition (schema, catalog, etc.)              |
| ├── **cron**             | body | object   | Yes  | Scheduling configuration                             |
| │   └── **complexJobTrigger**  | body | object | Yes | Detailed scheduling settings                         |
| │       ├── **endTime**       | body | null  | Yes | End time (null if open-ended)                        |
| │       ├── **startTime**     | body | string| Yes | Start time (e.g., `2024-08-07T12:00:00.000+08:00`)   |
| │       ├── **uiPassParam**   | body | string| Yes | Scheduling frequency (e.g., `WEEKLY`)                |
| │       └── **daysOfWeek**    | body | [string]| Yes | E.g., `["0"]` for Sunday                             |
| ├── **channels**         | body | [string] | Yes | Alert channels (e.g., `["email"]`)                   |
| ├── **emailConfig**      | body | object   | Yes | Email alert configuration                            |
| │   ├── **toUsers**    | body | [string] | Yes | Recipients of the alert email                        |
| │   ├── **ccUsers**    | body | [string] | Yes | CC recipients                                        |
| │   ├── **bccUsers**   | body | [string] | Yes | BCC recipients                                       |
| │   ├── **subject**    | body | string   | Yes | Email subject                                        |
| │   ├── **content**    | body | string   | Yes | Email body (plain or rich text)                      |
| │   └── **executor**   | body | string   | Yes | Username who configures or triggers the alert        |
| ├── **pagePath**        | body | string   | Yes | Full path of the page (e.g., `/public/test.datafor`) |
| ├── **componentId**     | body | string   | Yes | The component’s ID                                   |
| └── **componentTitle**  | body | string   | Yes | The component title (e.g., "test")                   |

#### **Enum Values**

| Name             | Value                                                          |
|------------------|---------------------------------------------------------------|
| **comparator**   | `<`, `>`, `<=`, `>=`, `==`, `!=`, `between`, `not between`, `in`, `not in`, `is empty`, `is not empty` |

---

## **Response Examples**

```json
{
  "msg": "success",
  "success": true
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description    |
|-----------|---------|----------|----------------|
| `msg`     | string  | No       | Message string |
| `success` | boolean | Yes      | Request status |