---
title: Repository Separation Deployment Guide
permalink: /documentation/Setup/repository-reparation-deployment-guide/
---

# Repository Separation Deployment Guide

This guide provides instructions for migrating the Datafor repository database to a user-defined PostgreSQL database environment.

> **Important Notice**: Before proceeding, ensure that you have completed a **full backup** of the system to prevent data loss or service disruption due to misconfiguration.


## 1. Prerequisites and Preparation

- **Verify PostgreSQL Environment**: Ensure that PostgreSQL is correctly installed and accessible. 
- **Stop Datafor Services**: Before migration or configuration, stop Datafor services to avoid data conflicts.


## 2. Initializing the Repository Database

### 2.1 Modify Database Initialization Scripts

1. Navigate to `data/postgresql/` and edit the following SQL files:

   - `create_jcr_postgresql.sql`
   - `create_quartz_postgresql.sql`
   - `create_repository_postgresql.sql`
   - `create_upload_postgresql.sql`

2. Locate the following SQL statement (example from `create_jcr_postgresql.sql`):

   ```sql
   CREATE USER jcr_user PASSWORD 'password';
   ```

3. Replace `'password'` with a **strong password** that complies with security policies and keep it securely stored.


### 2.2 Execute Database Initialization

1. Use `psql` to connect to the PostgreSQL server:

   ```shell
   psql -h <database_host> -p <port> -U postgres -d postgres
   ```

   **Example**:

   ```shell
   psql -h 127.0.0.1 -p 5432 -U postgres -d postgres
   ```

2. Execute all SQL files located in `data/postgresql/` to complete the database initialization.


## 3. Configuring Datafor to Connect to an Independent PostgreSQL Database

### 3.1 Modify Tomcat Data Source Configuration

- **File Path**: `tomcat/conf/server.xml`

- Instructions

  : Locate the 

  ```
  <Context path="/datafor" docBase="datafor" debug="0" privileged="true">
           <Resource name="jdbc/Hibernate" auth="Container" type="javax.sql.DataSource"
		factory="org.pentaho.di.core.database.util.DecryptingDataSourceFactory" maxActive="200" minIdle="10" maxIdle="200" initialSize="10"
		maxWait="10000" username="hibuser" password="password"
		driverClassName="org.postgresql.Driver" url="jdbc:postgresql://localhost:25432/hibernate"
		testOnBorrow="true"
		validationQuery="select 1" />
		
	         <Resource name="jdbc/Quartz" auth="Container" type="javax.sql.DataSource"
		factory="org.pentaho.di.core.database.util.DecryptingDataSourceFactory" maxActive="200" minIdle="10" maxIdle="200" initialSize="10"
		maxWait="10000" username="pentaho_user" password="password"
		driverClassName="org.postgresql.Driver" url="jdbc:postgresql://localhost:25432/quartz"
		testOnBorrow="true"
		validationQuery="select 1"/>

   	       <Resource name="jdbc/jackrabbit" auth="Container" type="javax.sql.DataSource"
		factory="org.pentaho.di.core.database.util.DecryptingDataSourceFactory" maxActive="200" minIdle="10"
		maxIdle="200" initialSize="10"
		maxWait="10000" username="jcr_user" password="password"
		driverClassName="org.postgresql.Driver" url="jdbc:postgresql://localhost:25432/jackrabbit"
		testOnBorrow="true"
		validationQuery="select 1"/>	
					<Resource name="jdbc/datafor_modeler_auth" auth="Container" type="javax.sql.DataSource"
		factory="org.pentaho.di.core.database.util.DecryptingDataSourceFactory" maxActive="200" minIdle="10"
		maxIdle="200" initialSize="10"
		maxWait="10000" username="postgres" password="postgres"
		driverClassName="org.postgresql.Driver" url="jdbc:postgresql://localhost:25432/datafor?stringtype=unspecified"
		testOnBorrow="true"
		validationQuery="select 1"/>
				<Resource name="jdbc/datafor_repository" auth="Container" type="javax.sql.DataSource"
		factory="org.pentaho.di.core.database.util.DecryptingDataSourceFactory" maxActive="200" minIdle="10"
		maxIdle="200" initialSize="10"
		maxWait="10000" username="upload" password="password"
		driverClassName="org.postgresql.Driver" url="jdbc:postgresql://localhost:25432/upload?stringtype=unspecified"
		testOnBorrow="true"
		validationQuery="select 1"/>		
       </Context>
  ```

   node and modify the url and credentials for all the following resources:

   configuration:

  - `url`: Update to the PostgreSQL server address and port
  - `username` / `password`: Update database credentials


### 3.2 Modify JDBC Connection Configuration

- **File Path**: `pentaho-solutions/system/applicationContext-spring-security-jdbc.properties`

- Instructions

  : Update the following parameters:

  ```properties
  datasource.url=jdbc:postgresql://<database_host>:<port>/<database_name>
  datasource.username=<database_username>
  datasource.password=<database_password>
  ```


### 3.3 Modify Jackrabbit Repository Configuration

- **File Path**: `pentaho-solutions/system/jackrabbit/repository.xml`

- Instructions

  :

  - Locate all database connection-related configurations (6 occurrences) and update the database address and credentials.
  - Locate the `jcr_user` configuration and update the `password` to match the password set in **section 2.1**.


### 3.4 Modify Hibernate Configuration

- **File Path**: `pentaho-solutions/system/hibernate/postgresql.hibernate.cfg.xml`

- Instructions

  : Update the following database connection parameters:

  - `connection.url`
  - `connection.username`
  - `connection.password`


## 4. Clear System Cache

After completing all configurations, clear the Datafor cache to ensure the new settings take effect.

- **Navigate to the Datafor server root directory**:

- **Execute the cache clearing script**:

  - **Windows**: Double-click `clear.bat`

  - Linux

    :

    ```shell
    cd /opt/bi-server
    sh clear.sh
    ```


## 5. Start Datafor Services

- Start Datafor services and check logs to ensure there are no errors.


## 6. Verify System Configuration

1. Access Datafor via a web browser and log in with the default administrator account (`admin`).
2. Navigate to **Data Source Management** and confirm that the repository switch was successful.
3. Update connection details for example data sources such as `foodmart` to ensure business data sources are accessible.
4. Go to the **Public** directory, upload, and test sample analytical pages to verify data display correctness.


## 7. Important Considerations

- **Database Security**: After migration, it is strongly recommended to perform a **full backup** and document the system state.
- **Production Deployment**: For production environments, submit a detailed change request and undergo review before implementation.
- **Network Security**: It is advised to use a **private network or VPN** for communication between Datafor and the PostgreSQL database to avoid exposing it to the public internet.


## 8. Appendix: Recommended PostgreSQL Configuration Parameters

| Parameter       | Recommended Value | Description                       |
| --------------- | ----------------- | --------------------------------- |
| max_connections | 200+              | Adjust based on concurrency needs |
| shared_buffers  | 25% of total RAM  | Optimize database caching         |
| work_mem        | 4MB ~ 64MB        | Query memory allocation           |
| wal_level       | replica           | Enhance log security              |