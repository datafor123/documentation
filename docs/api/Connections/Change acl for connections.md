---
title: Change acl for connections
permalink: /api/Connections/Change acl for connections/
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
/plugin/datafor-modeler/api/connection/aclBatch
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

**Preconditions**
- The current user must have **administrative** privileges for the specified connections.

---

### **Parameters Schema**

| Name  | Location | Type   | Required | Description                                 |
|-------|----------|--------|----------|---------------------------------------------|
| **body**                | body | object   | No       | Overall JSON payload                        |
| └── **foodmart**        | body | object   | Yes      | Object key is the connection name (e.g., `"foodmart"`) |
| &nbsp;&nbsp;├── **aces**               | body | [object]  | Yes | Array of ACE (Access Control Entry) objects     |
| &nbsp;&nbsp;│   ├── **recipient**      | body | string    | No  | Recipient of the ACE (e.g., username, role)      |
| &nbsp;&nbsp;│   ├── **modifiable**     | body | boolean   | No  | Whether this ACE can be changed by the recipient |
| &nbsp;&nbsp;│   ├── **recipientType**  | body | integer   | No  | 1 = user, 2 = group, etc. (implementation-defined) |
| &nbsp;&nbsp;│   └── **permissions**    | body | [integer] | No  | Array of permission codes (e.g., `[4]` = Admin)   |
| &nbsp;&nbsp;├── **entriesInheriting**  | body | boolean   | Yes | Whether entries are inheritable                  |
| &nbsp;&nbsp;├── **owner**             | body | string    | Yes | Owner of this connection (e.g., `admin`)         |
| &nbsp;&nbsp;└── **ownerType**         | body | integer   | Yes | 0 = user owner, 1 = role owner, etc. (implementation-defined) |

---

## **Response Examples**

```json
{
  "SampleData": "200"
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name          | Type   | Required | Description                                                  |
|---------------|--------|----------|--------------------------------------------------------------|
| `SampleData`  | string | Yes      | Shows the result code for the specified connection          |

**Return result code of each connection**  
The key corresponds to the connection name, and the value is a result code:

| Name                | Value | Description       |
|---------------------|-------|-------------------|
| `${connectionName}` | 200   | success           |
| `${connectionName}` | 401   | no auth           |
| `${connectionName}` | 409   | not found         |
| `${connectionName}` | 500   | internal error    |