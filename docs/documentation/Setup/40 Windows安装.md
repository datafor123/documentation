---
title: Installation (Windows)
permalink: /documentation/Setup/Installation-windows/
---

# Installation (Windows)

Log in to Windows as an **Administrator**.

## Method 1: Run with Window

1. Start Datafor by double-clicking:

   ```
   start-server.bat
   ```

2. Stop Datafor by double-clicking:

   ```
   stop-server.bat
   ```

## Method 2: Run Datafor as a Service

1. Install the service for the first time by double-clicking:

   ```
   install-service.bat
   ```

2. Start the service by double-clicking:

   ```
   start-service.bat
   ```

3. Stop the service by double-clicking:

   ```
   stop-service.bat
   ```

4. Uninstall the service by double-clicking:

   ```
   delete-service.bat
   ```

## Login

URL:  `http://<server-ip>:28080/`

username  /  password

- `admin` / `password`
- `demo` / `demo`

## Update the System

Place the update package `Datafor-update.jar` in the `bi-server\update` folder and restart the system.