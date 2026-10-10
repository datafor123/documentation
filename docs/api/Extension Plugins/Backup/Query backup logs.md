---
title: Query backup logs
permalink: /api/Extension Plugins/Backup/Query backup logs/
tags:
  - api
  - Extension Plugins
  - Backup
description: List the backups that have been made, with their status and content.
createTime: 2026/09/01 22:03:26
---
Lists the backups in **Backup history**: scheduled, manual, and uploaded.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-backup/api/log/query` |
| Permission | Administrators |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | form | string | No | Only this backup. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-backup/api/log/query"
```

```json
{
  "success": true,
  "msg": "",
  "data": [
    {
      "id": "Backup_2026.10.10-02.00.00.205+0800",
      "backupid": "51b51905fc0b482f995f0f32b48105ba",
      "name": "Nightly",
      "folder": "backup/",
      "config": "[{\"id\":\"db\"},{\"id\":\"upload\"}]",
      "status": "1",
      "add_by": "admin",
      "add_time": "2026-10-10 02:00:00.207",
      "update_time": "2026-10-10 02:03:41.118"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `id` | Backup ID; also the name of the zip file. Use it with [Download backup zip](/api/Extension%20Plugins/Backup/Download%20backup%20zip/). |
| `backupid` | ID of the schedule that made the backup, from [Query backup configs](/api/Extension%20Plugins/Backup/Query%20backup%20configs/). |
| `status` | `0` running, `1` succeeded, `2` failed (`msg` then has the reason). |
| `config` | Backup content: `db` **Content and settings**, `upload` **Uploaded data files**, `file` **Application files**. |

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "code": 403, "msg": "no permission"}` | The caller is not an administrator. |

Related: [Backup and Restore](/documentation/System/backup/)
