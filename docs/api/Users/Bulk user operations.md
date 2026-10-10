---
title: Bulk user operations
permalink: /api/Users/Bulk-user-operations/
tags:
  - api
  - Users
description: Enable, disable or delete several users at once, and export or import users as an Excel file.
createTime: 2026/10/10 12:00:00
---

Four endpoints work on many users at once, as the **Users** page does with selected rows, **Export** and **Import**. All need an administrator and act on the current tenant.

## Enable or disable users

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/batchActivation` |
| Permission | Administrator |
| Content type | `application/x-www-form-urlencoded` |

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `usernames` | form | string | Yes | Login names joined with `&`. |
| `enabled` | form | string | No | `1` to enable (default), `0` to disable. |

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/batchActivation" \
  --data-urlencode "usernames=analyst1&analyst2" -d "enabled=0"
```

```json
{
  "success": true,
  "code": "200"
}
```

Every user is attempted. If some fail, the response is `"code": "500"` with `msg` `failed to update: <names>`; the others are changed.

## Delete users

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/batchDelete` |
| Permission | Administrator |
| Content type | `application/x-www-form-urlencoded` |

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `usernames` | form | string | Yes | Login names joined with `&`. |

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/batchDelete" \
  --data-urlencode "usernames=analyst1&analyst2"
```

The response is `{"success": true, "code": "200"}`. Users are deleted in order; at the first failure the call stops with `"code": "500"` and `msg` `cannot delete <name>:<reason>`, and the users before it are already deleted. As with [Delete a user](/api/Users/Delete%20a%20user/), home folders and permissions stay.

## Export users

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user/download` (all users) or `POST /plugin/datafor-modeler/api/user/download` (selected users) |
| Permission | Administrator |
| Content type | None for GET; `application/json` for POST |

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `usernames` | body | string[] | No | POST only. Login names to export. Empty or missing exports all users. |

```bash
curl -u admin:password -o user.xlsx "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/download"

curl -u admin:password -o user.xlsx -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/download" \
  -H "Content-Type: application/json" -d '{"usernames": ["analyst1", "analyst2"]}'
```

The response is an Excel file `user.xlsx` with one sheet `user` and the columns `username`, `password`, `company`, `dept`, `title`, `name`, `dob`, `mobile`, `email`, `enabled`, `ai_enabled`, `description`, `usertype`, `roles` (joined with `&`), `create_time` and `update_time`. The `password` column is always empty. Errors are plain HTTP statuses: 403 for a non-administrator, 400 for a malformed body, 500 otherwise.

## Import users

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/uploadFile` |
| Permission | Administrator |
| Content type | `multipart/form-data` |

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `file` | form | file | Yes | An `.xlsx` file in the export layout. Rows start on line 2; the header row names the columns. |

Each row creates the user, or updates the user if the login name exists. An empty `password` leaves an existing password unchanged; for a new user, fill it in. When the file has a `usertype` or `roles` column, the user's roles are replaced as in [Add or modify a user](/api/Users/Add%20or%20modify%20a%20user/): an empty `roles` cell removes the user's business roles, and an empty `usertype` cell keeps the current user type. The `create_time` and `update_time` columns are ignored.

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/uploadFile" \
  -F "file=@user.xlsx"
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    {"row": 2, "username": "analyst1", "success": true, "msg": ""},
    {"row": 3, "username": "analyst2", "success": false, "msg": "analyst2@example.com already existed"}
  ]
}
```

`data` has one entry per row, with the Excel row number. Before saving anything, the file is checked for empty and duplicate login names (compared case-insensitively). If that check fails, nothing is imported and `data` lists only the rows at fault, each with `"success": false`. A row that fails while saving does not stop the other rows.

## Errors

| `code` | When |
| --- | --- |
| `"401"` | `batchActivation` or `batchDelete` by a non-administrator. |
| `"400"` | `uploadFile` by a non-administrator, an unreadable file, or a file without user rows (`msg`: `no valid user data`). |
| `"500"` | See each endpoint above. |

Related: [Users](/documentation/System/Users/), [Get Users](/api/Users/Get%20Users/)
