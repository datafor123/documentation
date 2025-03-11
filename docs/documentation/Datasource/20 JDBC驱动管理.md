---
title: JDBC Driver Management
permalink: /documentation/Datasource/JDBC-Driver-Management/
tags:
description: 
---

# JDBC Driver Management

Datafor supports managing and configuring different versions of JDBC drivers to support various versions of databases. This feature ensures that your database connections are compatible with the corresponding database versions, preventing connection issues due to driver version mismatches.

## Instructions

### Accessing the Driver Management Interface

1. Log in to the Datafor platform.

2. Navigate to the settings page and select "JDBC Driver".

   <div align="left"><img src="./images/1739437741794.png"  width="25%" /></div>

### Adding a New JDBC Driver

1. Click the "New" button.

   <div align="left"><img src="./images/1739437780416.png"  width="100%" /></div>

2. In the pop-up window:

   Enter the **Driver Name**.

   - Select the **Database Type** (e.g., MySQL, PostgreSQL, etc.).

   - Fill in the **Driver Class** information.

   - Upload the appropriate version of the JDBC driver file (.jar file).

   - Click the "OK" button to complete the driver addition.

   <div align="left"><img src="./images/1739437816109.png"  width="55%" /></div>

### Updating an Existing JDBC Driver

1. In the driver management interface, find the driver that needs updating. Click the "Edit" menu.


<div align="left"><img src="./images/1739437852015.png"  width="100%" /></div>

2. Upload the new driver file and update other information. Click the "OK" button to complete the driver update.

### Deleting a JDBC Driver

In the driver list's action menu, select the "Delete" menu.

<div align="left"><img src="./images/1739437912116.png"  width="100%" /></div>