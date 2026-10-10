---
title: Upload files
permalink: /api/Files/Upload files/
tags:
  - api
  - Files
description: Import a file, or a zip exported from Datafor, into a repository folder.
createTime: 2026/09/01 22:03:26
---
Imports one file, or a zip archive such as one produced by [Download folders and files](/api/Files/Download%20folders%20and%20files/), into a repository folder. Analysis models inside the zip are registered as models.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/repo/files/import` |
| Permission | Creator or Administrator user type, and **Edit** on the target folder |
| Content type | `multipart/form-data` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileUpload` | form | file | Yes | The file or zip to import. |
| `importDir` | form | string | No | Target folder path. Default `/public`. |
| `smart` | form | boolean | No | Default `true`: overwrite existing files, keep the ACL of items that already exist, and give new items an ACL with Full control for the uploader. Set `false` to use the four flags below. |
| `overwriteFile` | form | boolean | No | Default `true`. Replace existing files with the same name. |
| `applyAclPermissions` | form | boolean | No | Default `false`. Apply ACLs found in the zip manifest or in `acl`. |
| `overwriteAclPermissions` | form | boolean | No | Default `false`. Replace the ACL of existing items. |
| `retainOwnership` | form | boolean | No | Default `true`. Keep the current owner of existing items. |
| `acl` | form | string | No | ACL JSON to apply to new items when `smart` is `false`, in the format of [Change ACLs for files](/api/Files/Change%20acl%20for%20files/). |
| `fileNameOverride` | form | string | No | Store the file under this name instead of the uploaded file name. |
| `charSet` | form | string | No | Default `UTF-8`. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/import" \
  -F "importDir=/public/Sales" \
  -F "fileUpload=@export.zip"
```

```json
{ "success": true }
```

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `User is not authorized to perform this operation` | The caller's user type cannot upload, the caller lacks Edit on `importDir`, or `importDir` is not an existing folder. |
| `INVALID_MIME_TYPE` | The file type is not supported. |
| `invalid acl` (`code` 410) | `acl` is not valid JSON. |
| `Connection MANAGE permission is required to disable data policies` | The zip contains a model with data policies turned off, and the caller cannot manage that model's connection. |

Related: [Backup and restore](/documentation/System/backup/)
