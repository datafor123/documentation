---
title: Get version
permalink: /api/Version/Get version/
tags:
  - api
  - Version
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/version/info
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

---

### **Parameters Schema**

| Name       | Location | Type     | Required | Description |
|------------|----------|----------|----------|-------------|
| `refresh`  | query    | string   | no       | Specifies whether to refresh the version information. |

---

### **Response Examples**

```json
{
  "current": {
    "buildId": "datafor-2024-07-26",
    "branch": "commercial",
    "version": "6.06"
  },
  "success": true,
  "newest": {
    "buildId": "datafor-2022-06-14",
    "branch": "commercial",
    "version": "4.01"
  },
  "status": -1
}
```

---

### **HTTP Responses**

| HTTP Status Code | Meaning                                                                  | Description | Data Schema |
|------------------|--------------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | none        | Inline      |

---

### **Response Data Schema (HTTP 200)**

| Name           | Type    | Required | Description                            |
|----------------|---------|----------|----------------------------------------|
| `current`      | object  | Yes      | Contains information about the current version. |
| ├── `buildId`  | string  | Yes      | The build ID of the current version.   |
| ├── `branch`   | string  | Yes      | The branch of the current version.     |
| ├── `version`  | string  | Yes      | The version number of the current build. |
| `success`      | boolean | Yes      | Overall success status of the request. |
| `newest`       | object  | No       | Contains information about the newest available version. |
| ├── `buildId`  | string  | No       | The build ID of the newest version.    |
| ├── `branch`   | string  | No       | The branch of the newest version.      |
| ├── `version`  | string  | No       | The version number of the newest version. |
| `status`       | integer | Yes      | The status of the version check. A negative value typically indicates an issue. |
