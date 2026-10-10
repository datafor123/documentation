---
title: Managing Analysis Models
permalink: /documentation/Model/Managing-Analysis-Models/
description: Upload, download, copy, rename, repoint, share and delete analysis models from the Models list, and the permission each action needs.
createTime: 2026/10/10 10:00:00
---

# Managing Analysis Models

Open **Data > Models**. The list shows each model's **Name**, **ID**, **Datasource**, **Last edit**, **Modified by**, **Create time** and **Creator**. An error icon in the **Datasource** column means the model's connection has a problem; hover over it for the reason.

- **New** creates a model (see [Creating an Analysis Model](/documentation/Model/Creating-an-Analysis-Model/)).
- **Upload** imports models from a ZIP file created by **Download**.
- Select one or more models to **Download** them as one ZIP file or **Delete** them together.
- Each model's actions menu, next to its name, has the actions in the next section. It shows only the actions your permissions on that model allow.

## Model actions

| Action | What it does | You need |
| --- | --- | --- |
| **New report** | Opens a new report on this model. | Permission to create reports. Without a valid license Datafor shows "License is invalid, expired, or exceeds license limits". |
| **Rename** | Opens **Edit**, where you change the **Model name**. The model ID stays the same. | Edit |
| **Open in a new window** | Opens the model in the modeler in a new browser tab. | Read |
| **Delete** | Moves the model to Trash after you confirm. | Delete or Full control |
| **Create copy** | Opens **Save as** with the name `<name>_copy_<time stamp>`. Enter the **Analysis model name**; the **Analysis model ID** is taken from it, and **Modify** lets you enter a different ID. The copy keeps the data source and gives only you Full control. | Permission to create content, and Read on the data source |
| **Download** | Downloads the model as a ZIP file, which **Upload** can import here or on another server. | Read |
| **Change datasource** | Opens **Edit connection**, where you choose another **Datasource** for the model. | Delete or Full control on the model, and Read on the new data source |
| **Permissions** | Opens **Access setting**, where you grant users and roles **Read**, **Edit**, **Delete** or **Full control**. See [Access Control List](/documentation/System/Access-Control-List/). | Full control |
| **Copy permissions to...** | Copies this model's permissions to the models you tick in the **Copy** column. | Full control |
| **View item lineage** | Shows the model, its data source and the reports that use it. See [Lineage Analysis](/documentation/Analysis/Lineage-Analysis/). | Read |
| **Prep data for AI** | Builds or updates the model's knowledge index in the background and opens **Settings › AI Agent › Knowledge indexes**. See [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/). | Administrator |

**Apply data security** and **Cache expire** are set in the modeler, with the gear button in the toolbar: see [Data security and cache settings](/documentation/Model/Creating-an-Analysis-Model/#_6-data-security-and-cache-settings).

## Upload and download

**Download** creates one ZIP file for the selected models. It contains each model with its data source binding and its data security and cache settings.

To upload, click **Upload**, choose the ZIP file with **Please select upload file**, and click **Save**.

- You need permission to upload content; otherwise the upload fails with "User is not authorized to perform this operation".
- A model whose ID already exists is replaced and keeps its current permissions.
- Each model keeps the data source name stored in the file. If the connection has another name on this server, use **Change datasource** afterwards.
- A model in the file that has **Apply data security** turned off is refused with "Connection MANAGE permission is required to disable data policies" unless you may manage that data source.
- Check the uploaded models' permissions with **Permissions**.

## Permission rules since 10.00

- **Read on the data source.** Saving a new model, copying one, and changing a model's data source need Read on that data source. Without it Datafor refuses with "Connection READ permission is required: *data source*". Administrators are exempt.
- **Delete needs Delete.** Edit permission alone no longer lets you delete a model. When a model cannot be deleted, the error names it, for example `Delete Denied: <model ID>`, and the model stays in the list.
- **Models created through the API.** A model created through the API without permissions in the request is visible only to the user who created it, with Full control. It no longer inherits the permissions of the models folder.
- **Granting a model is not enough on its own.** After you save permissions, **Permissions saved** lists the users and roles that also need Read on the model's data source: "The following users and roles also need Read permission on these data sources, or they won't be able to use the models you granted". Grant it in the **Datasource** list.
- **Knowledge index.** While **Auto-build knowledge index** is on (**Settings › General › System configuration**) and AI is enabled, Datafor builds or updates a model's knowledge index in the background when the model is saved, copied or uploaded.
- **The model ID is permanent.** It is set on the first save ("This ID cannot be changed after saving"). **Rename** and **Create copy** cannot change it; a copy gets its own ID.

## Related topics

- [Analysis Model Overview](/documentation/Model/Analysis-Model-Overview/)
- [Creating an Analysis Model](/documentation/Model/Creating-an-Analysis-Model/)
- [Access Control List](/documentation/System/Access-Control-List/)
- [Data Security](/documentation/Datasource/Data-Security/)
