---
title: Installation Guide (Ubuntu)
permalink: /documentation/Setup/Installation-Ubuntu/
---

# Installation Guide (Ubuntu)

## Step 1: Switch to the Root User

To begin the installation, switch to the root user by running:

```bash
sudo su
```

## Step 2: Create the `biadmin` User

Create a user named `biadmin` and set the password:

```bash
adduser biadmin
```

Follow the prompts to set a password and user details.

## Step 3: Create the `biadmin` User Group

Create a user group named `biadmin` and add the `biadmin` user to this group:

```bash
addgroup biadmin
adduser biadmin biadmin
```

## Step 4: Extract the Installation Package

Navigate to the directory where the installation package is located and extract it into the `/opt` directory:

```bash
unzip -o Datafor-linux-7.02.zip -d /opt/
```

## Step 5: Set Directory Permissions

Move to the `/opt/` directory and modify the permissions:

```bash
cd /opt/
chmod -R 700 bi-server
chown -R biadmin bi-server
chgrp -R biadmin bi-server
ls -al bi-server
```

**Installation is now complete.**

------

# Starting Datafor

**Ensure that you perform the following steps as the `biadmin` user.**

## Step 1: Switch to `biadmin`

```bash
su biadmin
```

## Step 2: Start the Service

Navigate to the Datafor directory and start the server:

```bash
cd /opt/bi-server/
./start-server.sh
```

## Step 3: Stop the Service

To stop the service, use:

```bash
./stop-server.sh
```

## Step 4: Check Service Status

To verify whether the service is running, check the `Tomcat` process:

```bash
ps -ef | grep tomcat
```

If the command output shows Tomcat processes running, the service is active.

------

# Logging into Datafor

After installation, access the Datafor web interface using:

- **URL:** http://server-ip:28080/
- Default Login Credentials:
  - **Admin:** `admin / password`
  - **Demo User:** `demo / demo`

------

# Updating the System

To update Datafor, place the update package (e.g., `Datafor-update.jar`) in the `bi-server/update` folder and restart the system.