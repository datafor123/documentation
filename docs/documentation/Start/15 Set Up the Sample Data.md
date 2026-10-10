---
title: Set Up the Sample Data
permalink: /documentation/Start/Set-Up-the-Sample-Data/
tags:
  - Getting Started
  - Data
description: Download the Retail Chain Operations workbook and model, load them into Datafor, and check the numbers before you follow the tutorials.
createTime: 2026/10/10 10:00:00
---

# Set Up the Sample Data

The tutorials and most examples in this documentation use **Retail Chain Operations**, a fictional retail chain with 20 stores in five Chinese regions, 54 products and about 31,700 order lines from January 2025 to August 2026. Load it once and every example can be repeated on your own server.

You need permission to upload file datasets and analysis models (an administrator account works).

## Download the files

| File | Contents |
| --- | --- |
| [retail-chain-operations.xlsx](/downloads/retail-chain-operations.xlsx) (3.7 MB) | One sheet per table: `dim_date`, `dim_store`, `dim_product`, `dim_customer`, `dim_channel`, `dim_employee`, `fact_sales_line`, `fact_store_month`, `fact_service_ticket`, plus a `_README` sheet with a field dictionary and check totals. |
| [retail-chain-operations-model.zip](/downloads/retail-chain-operations-model.zip) | The **Retail Chain Operations** analysis model (tables, relationships, hierarchies and 23 measures such as Net Sales and Gross Margin Rate), bound to the data source **retail_chain_operations**. |

Amounts are in CNY. All names are generated; the data describes no real company or person.

## 1. Upload the workbook as a file dataset

1. Open **Data › Datasource** and select the **File datasets** tab.
2. Under **Upload a file dataset**, click **+** on the **CSV / Excel Files** card and choose `retail-chain-operations.xlsx`.
3. In the upload dialog:
   - **Dataset**: enter `retail_chain_operations` exactly. The model refers to its tables by this name.
   - **Sheets**: select every sheet except `_README`.
   - **Table**: keep each table name identical to its sheet name (`dim_date`, `fact_sales_line`, …).
4. Click **Upload** and wait until the dataset's **Status** turns green. `fact_sales_line` has the most rows and finishes last.

See [File Dataset](/documentation/Datasource/File-Dataset/) for the dialog fields.

## 2. Upload the model

1. Open **Models** and click **Upload**.
2. Choose `retail-chain-operations-model.zip` with **Please select upload file**, then click **Save**.

The model appears in the list as **Retail Chain Operations** and uses the data source **retail_chain_operations**, which is why the dataset in step 1 must have exactly that name: the model also refers to the tables as `retail_chain_operations.<table>`. If you used another name, delete that dataset and upload the workbook again with the right name. A model with the same ID that already exists is replaced; see [Managing Analysis Models](/documentation/Model/Managing-Analysis-Models/#upload-and-download).

## 3. Check the numbers

Build a quick report on the model, for example a **Measure card** or a **Table**, without filters, and compare these totals over all dates (the `_README` sheet lists more):

| Measure | Expected total |
| --- | --- |
| **Net Sales** | 5,094,084.39 |
| **Sales** | 5,797,364.69 |
| **Order Count** | 13,596 |
| **Paid Order Count** | 12,388 |

If a total differs, the most common cause is a sheet that was skipped or uploaded into a table with another name: check the dataset's table list.

## Optional: register the metrics

The model contains measures but no Metrics Library bindings. To try governed metrics and the AI Agent's metric answers, open the model in the modeler, open the **Metric bindings** tab at the bottom and click **Generate metrics from this model**; see [Metrics Library](/documentation/Metrics-Library/Metrics-Library/).

## Next

[Create Your First Analysis Report](/documentation/Start/Create-Your-First-Analysis-Report/) builds a chart on this model.
