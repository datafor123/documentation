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

## Login

URL:  `http://<server-ip>:28080/`

username  /  password

- `admin` / `password`
- `demo` / `demo`

### Update the System

1. Place the update package `datafor-update.jar` in the `bi-server\update` directory.
2. Run `stop-server.bat` to stop the service.
3. From version 8.01 onwards:
   - If you need to update configurations, run `update.bat`.
   - This will create a backup folder containing a `change-list.md` file with details of script and configuration changes.
   - If you do not need to modify the default configuration, you can skip this step and proceed directly to the next step.
4. Run `start-server.bat` to start the service.Note: Running start-server.bat will also automatically apply the update from datafor-update.jar in the update directory.