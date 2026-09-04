---
title: Get jobs
permalink: /api/Schedule/Get jobs/
tags:
  - api
  - Schedule
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`GET`

**Request URL**
```html
/api/scheduler/getJobs
```

**Authorization**  
Authentication is **required** to use this API.

---

## **Description**
This API retrieves a list of scheduled jobs, including details such as job parameters, execution schedules, and status.

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "job": [
    {
      "groupName": "admin",
      "jobId": "admin\tPentahoSystemVersionCheck\t350ab76c-52f3-11ef-8d47-14755bc39e02",
      "jobName": "PentahoSystemVersionCheck",
      "jobParams": {
        "jobParams": [
          {
            "name": "ActionAdapterQuartzJob-ActionUser",
            "value": "admin"
          },
          {
            "name": "lineage-id",
            "value": "68bf0d34-4848-4061-abd0-ed334b5ce68d"
          },
          {
            "name": "ActionAdapterQuartzJob-ActionClass",
            "value": "org.pentaho.platform.scheduler2.versionchecker.VersionCheckerAction"
          },
          {
            "name": "versionRequestFlags",
            "value": "0"
          }
        ]
      },
      "jobTrigger": {
        "@type": "simpleJobTrigger",
        "duration": "-1",
        "startTime": "2024-08-05T14:23:18.893+08:00",
        "repeatCount": "-1",
        "repeatInterval": "86400"
      },
      "lastRun": "2024-08-06T14:23:18.893+08:00",
      "nextRun": "2024-08-07T14:23:18.893+08:00",
      "state": "NORMAL",
      "userName": "admin"
    }
  ]
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

### **Response Data Schema (HTTP 200)**

| Name          | Type     | Required | Description |
|--------------|---------|----------|-------------|
| `job`        | array   | **Yes**  | List of scheduled jobs. |
| ├── `groupName` | string  | No       | The user group associated with the job. |
| ├── `jobId`     | string  | No       | The unique identifier of the job. |
| ├── `jobName`   | string  | No       | The name of the scheduled job. |
| ├── `jobParams` | object  | No       | The parameters associated with the job. |
| │   ├── `jobParams` | array  | **Yes**  | List of job parameters. |
| │   │   ├── `name`  | string  | **Yes**  | The parameter name. |
| │   │   ├── `value` | string  | **Yes**  | The parameter value. |
| ├── `jobTrigger`  | object  | No       | The job execution trigger details. |
| │   ├── `@type`       | string  | **Yes**  | The type of trigger (`simpleJobTrigger`). |
| │   ├── `duration`    | string  | **Yes**  | The duration of the job execution. |
| │   ├── `startTime`   | string  | **Yes**  | The scheduled start time of the job (`ISO 8601` format). |
| │   ├── `repeatCount` | string  | **Yes**  | The number of times the job should repeat (`-1` for indefinite). |
| │   ├── `repeatInterval` | string  | **Yes**  | The interval between job executions (in seconds). |
| ├── `lastRun`  | string  | No       | The timestamp of the last job execution. |
| ├── `nextRun`  | string  | No       | The timestamp of the next scheduled execution. |
| ├── `state`    | string  | No       | The current state of the job (`NORMAL`, `PAUSED`, etc.). |
| ├── `userName` | string  | No       | The username of the job owner. |
