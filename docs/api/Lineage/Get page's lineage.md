---
title: Get page's lineage
permalink: /api/Lineage/Get page's lineage/
tags: ["api","Lineage","Models"]
description:
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor/api/modeler/lineage/link
```

**Authorization**  
The current user must have read access to the specified model.

---

**Content Type**  
`application/json`

---

### **Request Example**

```json
{
  "pathIds":["/public/test.datafor"]
}
```

---

## **Response Examples**

#### ✅ **Success Response**
```json
{
  "data": [
    {
      "schema": "workshop-model",
      "files": [],
      "otherFiles": []
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                 | Description                              |
|------------------|---------------------------------------------------------|------------------------------------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Model lineage retrieved successfully.   |
| 400              | Bad Request                                             | Invalid request format or missing parameters. |
| 401              | Unauthorized                                            | Authentication required. |
| 403              | Forbidden                                               | User lacks the required permissions. |
| 404              | Not Found                                               | Specified model does not exist. |
| 500              | Internal Server Error                                   | Unexpected error occurred. |

---

## **Response Data Schema**
| Name              | Type            | Required | Description                                                                       |
|-------------------|-----------------|----------|-----------------------------------------------------------------------------------|
| `success`         | boolean         | Yes      | `true` if the request was successful, `false` otherwise.                          |
| `links`           | array[object]   | Yes      | List of link objects representing relationships between entities.                 |
| `links[].targetLid` | string        | Yes      | The LID (Logical ID) of the target entity in the link.                            |
| `links[].sourceLid` | string        | Yes      | The LID (Logical ID) of the source entity in the link.                            |
| `objs`            | array[object]   | Yes      | List of objects containing detailed metadata about entities.                      |
| `objs[].hidden`   | boolean         | Yes      | Indicates if the object is hidden (`true`) or visible (`false`).                  |
| `objs[].canRead`  | boolean         | Yes      | Indicates if the object is readable by the current user.                          |
| `objs[].lastModifiedDate` | integer | Yes      | The last modified timestamp of the object, in milliseconds since epoch.           |
| `objs[].lid`      | string          | Yes      | The LID (Logical ID) of the object.                                               |
| `objs[].type`     | string          | Yes      | The type/category of the object (e.g., connection,schema,page).                   |
| `objs[].title`    | string          | Yes      | The display title or label of the object.                                         |
| `objs[].pathTitle`| string          | Yes      | The path title, showing the object's hierarchical path as a user-friendly string. |
| `objs[].path`     | string          | Yes      | The full path of the object, typically as a string.                               |
| `objs[].createdDate` | integer      | Yes      | The creation timestamp of the object, in milliseconds since epoch.                |
| `objs[].name`     | string          | Yes      | The name of the object.                                                           |
| `objs[].owner`    | string          | No       | The owner of the object, if available.                                            |
| `objs[].ownerType`| integer         | No       | The type of the owner, 0:user 1:role.                                             |
