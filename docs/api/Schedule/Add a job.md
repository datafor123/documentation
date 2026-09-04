---
title: Add a job
permalink: /api/Schedule/Add a job/
tags:
  - api
  - Schedule
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/api/scheduler/job
```

**Authorization**  
Authentication is **required** to use this API.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API schedules a new job for execution. The job can be configured with parameters, scheduling options, and input/output file paths.

---

### **Request Example**
```json
{
  "jobName": "Update_Logging_Datamart",
  "overwriteFile": "false",
  "simpleJobTrigger": {
    "uiPassParam": "RUN_ONCE",
    "repeatInterval": 0,
    "repeatCount": 0,
    "startTime": "2024-08-07T00:00:00.000+08:00",
    "endTime": null
  },
  "inputFile": "/public/pentaho-operations-mart/DI Ops Mart ETL/Update_Logging_Datamart.kjb",
  "outputFile": "/home/admin",
  "timeZone": "Etc/UCT",
  "jobParameters": []
}
```

### **Parameters Schema**

| Name                | Location | Type       | Required | Description |
|---------------------|----------|------------|----------|-------------|
| `jobName`          | body     | string     | **Yes**  | The name of the job to be scheduled. |
| `overwriteFile`    | body     | string     | No       | Specifies whether to overwrite the existing output file. |
| `simpleJobTrigger` | body     | object     | No       | Defines the job execution trigger. |
| ├── `uiPassParam`  | body     | string     | **Yes**  | Execution mode (e.g., `RUN_ONCE`). |
| ├── `repeatInterval` | body   | integer    | **Yes**  | The time interval between executions (in milliseconds). |
| ├── `repeatCount`  | body     | integer    | **Yes**  | The number of times the job should repeat (`0` for no repeats). |
| ├── `startTime`    | body     | string     | **Yes**  | The scheduled start time of the job (`ISO 8601` format). |
| ├── `endTime`      | body     | null       | **Yes**  | The scheduled end time of the job (if applicable). |
| `inputFile`        | body     | string     | No       | The file path of the input job file (`.kjb` or `.ktr`). |
| `outputFile`       | body     | string     | No       | The output directory where results will be stored. |
| `timeZone`         | body     | string     | **Yes**  | The time zone used for scheduling the job (e.g., `Etc/UCT`). |
| `jobParameters`    | body     | array      | No       | Additional parameters to pass to the job. |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "success": true
}
```

### **Failure Response (Example)**
```json
{
  "msg": "Invalid job configuration",
  "success": false
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |
