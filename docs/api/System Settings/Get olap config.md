---
title: Get olap config
permalink: /api/System Settings/Get olap config/
tags: ["api","System Settings"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/modeler/olap/config/meta
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/x-www-form-urlencoded`

---

### Parameters

| Name      | Location | Type   | Required | Description |
|-----------|----------|--------|----------|-------------|
| editable  | query   | string | no       | Specifies whether the configuration is editable |

---

## **Response Examples**

```json
{
  "msg": "success",
  "data": [
    {
      "code": "mondrian.rolap.EnableSumBottom",
      "defaults": "true",
      "editable": true,
      "name": "EnableSumBottom",
      "zhdesc": "Total at the bottom",
      "range": "true,false",
      "type": "Boolean",
      "value": "true",
      "desc": "Controls whether the sum line appears at the bottom or top."
    },
    {
      "code": "mondrian.olap.NullMemberCaption",
      "defaults": "",
      "editable": true,
      "name": "NullMemberCaption",
      "zhdesc": "Null member title",
      "range": "",
      "type": "String",
      "value": "",
      "desc": "Defines how a null member value is represented in the result output."
    },
    {
      "code": "mondrian.olap.InfinityRepresentation",
      "defaults": "Infinity",
      "editable": true,
      "name": "InfinityRepresentation",
      "zhdesc": "Infinity name",
      "range": "",
      "type": "String",
      "value": "Infinity",
      "desc": "Defines how the Infinity value is represented in the result output."
    },
    {
      "code": "mondrian.result.limit",
      "defaults": "0",
      "editable": true,
      "name": "ResultLimit",
      "zhdesc": "Maximum number of query result rows and hierarchical members",
      "range": "",
      "type": "Integer",
      "value": "500000",
      "desc": "Limits the maximum size of a result set when set to a value greater than zero."
    },
    {
      "code": "mondrian.rolap.queryTimeout",
      "defaults": "0",
      "editable": true,
      "name": "QueryTimeout",
      "zhdesc": "Query timeout duration (seconds)",
      "range": "",
      "type": "Integer",
      "value": "300",
      "desc": "Defines the timeout value (in seconds) for queries."
    },
    {
      "code": "mondrian.query.limit",
      "defaults": "40",
      "editable": true,
      "name": "QueryLimit",
      "zhdesc": "Maximum concurrent queries",
      "range": "",
      "type": "Integer",
      "value": "200",
      "desc": "Maximum number of simultaneous queries the system will allow."
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | Request was successful | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description    |
|-----------|---------|---------:|----------------|
| `msg`     | string  | No       | Response message |
| `data`    | array   | **Yes**  | List of OLAP configuration settings |
| `success` | boolean | **Yes**  | Indicates whether the request was successful |

#### **Data Object Schema**

| Name      | Type    | Required | Description    |
|-----------|---------|---------:|----------------|
| `code`    | string  | **Yes**  | Configuration code identifier |
| `defaults` | string  | **Yes**  | Default value of the configuration |
| `editable` | boolean | **Yes**  | Indicates whether the configuration is editable |
| `name`    | string  | **Yes**  | Configuration name |
| `zhdesc`  | string  | No       | Chinese description of the configuration |
| `range`   | string  | No       | Valid value range for the configuration |
| `type`    | string  | **Yes**  | Data type of the configuration |
| `value`   | string  | **Yes**  | Current value of the configuration |
| `desc`    | string  | **Yes**  | Description of the configuration |

