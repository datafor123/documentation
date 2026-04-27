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
3. Run `start-server.bat` to start the service.
   - Note: Running start-server.sh will automatically apply the update from datafor-update.jar in the update directory.