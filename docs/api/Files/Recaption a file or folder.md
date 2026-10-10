---
title: Recaption a file or folder
permalink: /api/Files/Recaption a file or folder/
tags:
  - api
  - Files
description: Change the display name of a report, file, or folder.
createTime: 2026/09/01 22:03:26
---
Changes the display name (`title`) of a repository item, which is what **Rename** does in the console. The item's path and ID do not change, so links and references keep working.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/repo/files/recaption` |
| Permission | **Edit** on the item |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pathId` | form | string | Yes | Repository path of the item, for example `/public/Sales/Revenue.datafor`. |
| `newName` | form | string | Yes | New display name, without the file extension. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/recaption" \
  --data-urlencode "pathId=/public/Sales/Revenue.datafor" \
  --data-urlencode "newName=Revenue 2026"
```

```json
{ "success": true, "code": 200 }
```

## Errors

HTTP 200 with `success: false`. Here `code` is a number.

| `code` | When |
| --- | --- |
| `400` | `pathId` is empty. |
| `404` | The item does not exist or the caller cannot read it. |
| `500` | Any other failure, including missing Edit permission (`msg` has the reason). |

Related: [Get file tree](/api/Files/Get%20file%20tree/)
