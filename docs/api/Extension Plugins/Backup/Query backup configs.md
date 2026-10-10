---
title: Query backup configs
permalink: /api/Extension Plugins/Backup/Query backup configs/
tags:
  - api
  - Extension Plugins
  - Backup
description: List the scheduled backups with their content, schedule, and next run.
createTime: 2026/09/01 22:03:26
---
Lists the backup schedules shown under **Schedules** on the Backup and Restore page, with their next run time.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-backup/api/query` |
| Permission | Administrators |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | form | string | No | Only this schedule. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-backup/api/query"
```

```json
{
  "success": true,
  "msg": "",
  "data": [
    {
      "id": "51b51905fc0b482f995f0f32b48105ba",
      "name": "Nightly",
      "enable": "1",
      "folder": "backup/",
      "config": "[{\"id\":\"db\"},{\"id\":\"upload\"}]",
      "cron": "{\"complexJobTrigger\":{\"uiPassParam\":\"DAILY\",\"startTime\":\"2026-10-01T02:00:00.000+08:00\",\"endTime\":null,\"repeatInterval\":86400}}",
      "jobid": "<scheduler job ID>",
      "state": "NORMAL",
      "lastRun": 1760032800000,
      "nextRun": 1760119200000,
      "add_by": "admin",
      "add_time": "2026-10-01 01:30:00.0"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `config` | Backup content, as a JSON string: `db` **Content and settings**, `upload` **Uploaded data files**, `file` **Application files**. |
| `cron` | The schedule, as a JSON string in the scheduler's trigger format. |
| `state`, `lastRun`, `nextRun` | Scheduler state and run times (epoch milliseconds). |

## Errors

| Response | When |
| --- | --- |
| `{"success": false, "code": 403, "msg": "no permission"}` | The caller is not an administrator. |

Related: [Backup and Restore](/documentation/System/backup/)
