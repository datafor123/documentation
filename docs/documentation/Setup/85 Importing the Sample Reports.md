---
title: Importing the Sample Reports
permalink: /documentation/Setup/Importing-the-Sample-Reports/
tags:
  - Setup
  - Upgrade
description: Download the 10.02 sample package and import its dashboards, paginated reports, models and data into an upgraded installation.
createTime: 2026/11/23 10:00:00
---

# Importing the Sample Reports

A new 10.02 installation already has the sample reports in **Public › Samples**. An installation upgraded from an earlier version does not: download the sample package and run its importer once. It brings the reports together with the models and data they need, so they open for everyone straight away.

## Download

| File | Contents |
| --- | --- |
| [datafor-samples-10.02.zip](/downloads/datafor-samples-10.02.zip) (1.9 MB) | The importer, `import.bat` and `import.sh`, `import-settings.txt` and a README, plus the content below. |

SHA-256: `838288aa7360f25fb4cd754893bb51135b245e47c00169fc244c8aa937b6a0e7`

What it adds:

| | |
| --- | --- |
| **Public › Samples** | 11 dashboards (three of them in the **Drill-through Pages** subfolder) and 7 paginated reports in **Paginated Reports** |
| Analysis models | Larkwood Retail Sales, Swiftline Global Network, Lifestats, Brightside Online Sales, Halden Group Financials, Kestrel Subscriptions, Halden Group Income Statement, Halden Group Balance Sheet |
| File datasets | Larkwood Retail Demo, Swiftline Global Demo, Lifestats Sample, Brightside Online Sample, Halden Financials Sample, Kestrel Churn Sample, Halden Income Statement Sample, Halden Balance Sheet Sample |

All companies and people in the data are fictional. The package has no foodmart samples and does not change `workshop-model`.

## Before you import

- **Upgrade to 10.02 first** and make sure Datafor is running and you can sign in. See [Upgrading Datafor](/documentation/Setup/Upgrading-Datafor/). On an earlier version the importer says so and stops before it changes anything.
- **An administrator account.** To import into a tenant, use an administrator of that tenant and note the tenant ID.
- **Where to run it.** The importer talks to Datafor over HTTP, so the server does not need internet access. Run it on the Datafor server: it finds the Java that comes with Datafor (`bi-server/jre`). On another computer that can reach the server, it needs Java 8 or later on the `PATH`, or in `DATAFOR_JAVA` (the full path of the `java` program).

## Import

1. Unzip the package, for example on the server.
2. Start the importer:
   - **Windows:** double-click `import.bat`, or run it in a command prompt.
   - **Linux:** in the unzipped folder, run

     ```bash
     sh import.sh
     ```

3. Answer the questions. Press Enter to keep the value in brackets.

   | Question | Enter |
   | --- | --- |
   | Server address | The address you open Datafor with, default `http://localhost:28080/datafor` |
   | Administrator account | Default `admin` |
   | Tenant ID | Empty for the default tenant |
   | Password | The administrator's password (not shown while you type) |

4. The importer signs in, checks the server and lists what it will do, then asks `Continue? [Y/n]`. Press Enter.

   ```text
   To import:
     File datasets 8
     Models        8
     Reports       18  -> /public/Samples
     Into the default tenant only; other tenants are not affected.
   Continue? [Y/n]:
   ```

5. It imports the datasets, then the models, then the reports, and finally checks every item: each model must answer a query and each paginated report must render. The last line reads `Done: 44 succeeded, 0 skipped, 0 failed.` A log, `import-<date>-<time>.log`, is left in the package folder.

The messages follow the language of the computer it runs on; add `--lang en` or `--lang zh` to choose.

## After the import

- **Home.** **Sample reports** now lists reports from **Public › Samples**, with **View all**. Which five it shows depends on the order the samples were imported in; to bring a report to the front, open it and save it again. Dashboard covers appear the first time Home shows them, which needs the render service. If [Branding](/documentation/Console/Branding/#cards-saved-in-an-earlier-version) still has saved report cards, Home keeps showing those. See [Sample reports](/documentation/Console/Quick-Tour-of-the-Console/#sample-reports).
- **Permissions.** **Public › Samples** is read-only for signed-in users and fully editable by administrators. The **Authenticated** role (all signed-in users) can read the 8 models and the database connections of the 8 datasets, so people who are not administrators can open the samples too.
- **Tenants.** The samples go into the tenant you signed in to. Other tenants are not changed and keep their Home as it was.

## Running it again

Running the importer again is safe: datasets, models and reports that already exist are skipped, and the check at the end runs again.

| Situation | What happens |
| --- | --- |
| Something already exists | Skipped. Add `--overwrite` to replace it: datasets are emptied and loaded again, models and reports get the package's content. The importer lists every item it will replace and continues only after you type `yes`. |
| **Public › Samples** already exists with reports of your own | The importer lists those reports and asks `Put the samples into this folder anyway? [y/N]`. Your reports are not changed and the folder keeps its permissions, but Home shows the five most recently modified reports of the folder, so it may show samples afterwards. |

## Options

| Option | Use |
| --- | --- |
| `--url ADDRESS` | Server address |
| `--user ACCOUNT` | Administrator account |
| `--tenant TENANT_ID` | Tenant to import into |
| `--overwrite` | Replace datasets, models and reports that already exist, including their data |
| `--yes` | Do not ask for any confirmation |
| `--lang zh` or `--lang en` | Language of the messages |
| `--help` | List the options |

The password can also be given in the `DATAFOR_PASSWORD` environment variable. For example, an unattended run on Linux:

```bash
DATAFOR_PASSWORD='…' sh import.sh --url http://localhost:28080/datafor --user admin --yes
```

**Settings file.** Instead of typing the address, account and tenant each time, fill them in once in `import-settings.txt` in the package folder (`url`, `user`, `tenant`, and optionally `overwrite`, `yes` and `lang`). When `url` is set, the importer asks only for the password. Options on the command line win over the file. Do not put the password in the file.

## One tenant per server

A file dataset's name is unique on the whole server, across tenants. The samples can therefore be imported into one tenant per server; importing into a second tenant stops with `this dataset name is already used by another tenant on this server`.

## Troubleshooting

| Message | What to do |
| --- | --- |
| `This server runs an older Datafor; the samples need Datafor 10.02 or later.` | Upgrade first. Nothing was changed. |
| `Cannot reach <address>` | Check the address and that Datafor is running. From another computer, check that the port is open. |
| `This address is not a Datafor server` | The address answers, but it is not Datafor. Include the `/datafor` path. |
| `Sign-in failed. Check the account, password and tenant ID.` | Check all three. A tenant administrator needs the tenant ID. |
| `This account is not an administrator.` | Use an administrator account. |
| `Java was not found. Enter the Datafor bi-server folder` | Enter the folder that contains `jre`, for example `/opt/bi-server`, or set `DATAFOR_JAVA` to the full path of `java` and run again. |
| `[NOTE] … read access for all signed-in users could not be added …` | The item was imported, but only administrators can open it. Give the **Authenticated** role read access to the model or database connection named in the message. |
| `[FAIL] Model query failed` or `Paginated report does not render` | Open the log in the package folder; it has the server's answer. Run the importer again after fixing the cause: what was imported is skipped. |

## Removing the samples

1. Delete the **Public › Samples** folder in the console.
2. Delete the 8 analysis models and then the 8 file datasets listed in [Download](#download).
