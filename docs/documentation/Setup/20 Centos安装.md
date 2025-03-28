---
title: Installation Guide (CentOS)
permalink: /documentation/Setup/Installation-CentOS/
---

# Installation Guide (CentOS)

## Step 1: Switch to the Root User

To begin the installation, switch to the root user by running:

```bash
sudo su root
```

**Console Output Example:**

```
[centos@ip-172-31-33-203 ~]$ sudo su root
[root@ip-172-31-33-203 centos]#
```

## Step 2: Create the `biadmin` User Group

Create a user group named `biadmin`:

```bash
groupadd biadmin
```

**Console Output Example:**

```
[root@52d0bef30d9c /]# groupadd biadmin
[root@52d0bef30d9c /]#
```


## Step 3: Create the `biadmin` User

Create a user named `biadmin`, add it to the `biadmin` group, and set its password:

```bash
adduser biadmin -g biadmin
passwd biadmin
```

**Console Output Example:**

```
[root@52d0bef30d9c /]# adduser biadmin -g biadmin
[root@52d0bef30d9c /]# passwd biadmin
Changing password for user biadmin.
New password:
BAD PASSWORD: The password is shorter than 8 characters
Retype new password:
passwd: all authentication tokens updated successfully.
```

## Step 4: Extract the Installation Package

Navigate to the directory where the installation package is located and extract it into the `/opt` directory:

```bash
unzip -o Datafor-linux-7.02.zip -d /opt/
```

**Console Output Example:**

```
inflating: /opt/bi-server/tomcat/lib/jasper.jar
inflating: /opt/bi-server/tomcat/lib/postgresql-42.5.1.jar
inflating: /opt/bi-server/tomcat/lib/servlet-api.jar
...
```

## Step 5: Set Directory Permissions

Move to the `/opt/` directory and modify the permissions:

```bash
cd /opt/
chmod -R 700 bi-server
chown -R biadmin:biadmin bi-server
```

**Console Output Example:**

```
[root@52d0bef30d9c opt]# cd /opt/
[root@52d0bef30d9c opt]# chmod -R 700 bi-server
[root@52d0bef30d9c opt]# chown -R biadmin:biadmin bi-server
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

**Console Output Example:**

```
biadmin@gg:/opt/bi-server$ ./start-server.sh
DEBUG: Found JAVA at the current folder
DEBUG: _PENTAHO_JAVA_HOME=/opt/bi-server/java
DEBUG: _PENTAHO_JAVA=/opt/bi-server/java/bin/java
waiting for server to start...
2025-03-18 06:29:15.279 UTC [131263] LOG: listening on IPv4 address "0.0.0.0", port 25432
2025-03-18 06:29:15.289 UTC [131263] LOG: listening on IPv6 address "::", port 25432
2025-03-18 06:29:15.300 UTC [131263] LOG: Listening on Unix socket "/tmp/.s.PGSQL.25432"
2025-03-18 06:29:16.011 UTC [131263] LOG: database system is ready to accept connections
server started
Using CATALINA_BASE: /opt/bi-server/tomcat
Using CATALINA_HOME: /opt/bi-server/tomcat
Using CATALINA_TMPDIR: /opt/bi-server/tomcat/temp
Using JRE_HOME: /opt/bi-server/java
Using CLASSPATH: /opt/bi-server/tomcat/bin/bootstrap.jar:/opt/bi-server/tomcat/bin/tomcat-juli.jar
Using CATALINA_OPTS: -Xms2048m -Xmx6144m -Dsun.rmi.dgc.client.gcInterval=360000 -Dsun.rmi.dgc.server.gcInterval=360000 -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8 -Djava.locale.providers=COMPAT,SPI -DDI_HOME="/opt/bi-server/pentaho-solutions/system/kettle" -Djava.awt.headless=true -Dhttps.protocols=TLSv1,TLSv1.1,TLSv1.2
Tomcat started.
```

## Step 3: Stop the Service

To stop the service, use:

```bash
./stop-server.sh
```

**Console Output Example:**

```
2025-03-18 06:29:45.604 UTC [131268] LOG: shutting down
2025-03-18 06:29:45.646 UTC [131263] LOG: database system is shut down
server stopped
```

## Step 4: Check Service Status

To verify whether the service is running, check the `Tomcat` process:

```bash
ps -ef | grep tomcat
```

**Console Output Example:**

```
biadmin@gg:/opt/bi-server$ ps -ef | grep tomcat
biadmin  131965  130565  0 14:30 pts/5  00:00:00 grep --color=auto tomcat
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