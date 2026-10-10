---
title: Download backup zip
permalink: /api/Extension Plugins/Backup/Download backup zip/
tags:
  - api
  - Extension Plugins
  - Backup
description: Download a backup package to keep a copy off the server.
createTime: 2026/09/01 22:03:26
---
Downloads a backup package from the server's `backup/` folder, for example to keep a copy elsewhere.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-backup/api/log/download` |
| Permission | Administrators |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | query | string | Yes | Backup ID from [Query backup logs](/api/Extension%20Plugins/Backup/Query%20backup%20logs/), for example `Backup_2026.10.10-02.00.00.205+0800`. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor-backup/api/log/download" \
  --data-urlencode "id=Backup_2026.10.10-02.00.00.205+0800" \
  -o backup.zip
```

On success the body is the zip file, named `<id>.zip` in `Content-Disposition`.

## Errors

Errors are returned with HTTP 200 as a plain-text attachment named `info.txt`. Check the `Content-Disposition` header before saving the body.

| `info.txt` content | When |
| --- | --- |
| `no permission` | The caller is not an administrator. |
| `<id>.zip not found` | No backup has this ID. |

Related: [Backup and Restore](/documentation/System/backup/)
