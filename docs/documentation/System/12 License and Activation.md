---
title: License and Activation
permalink: /documentation/System/License/
description: Install and renew a Datafor license, manage seats, complete online or offline check-in, and handle server moves and licensing issues.
createTime: 2026/10/14 18:00:00
---

# License and Activation

This guide covers V2 licenses. Datafor is licensed per installation. Administrators manage licenses under **Settings › General › License**.

## 1. Status at a glance

| State | What it means and what to do |
| --- | --- |
| **Valid** | Use Datafor within the licensed features and capacity. |
| **Valid (attention needed)** | Read the reason on the page and act before the displayed deadline. |
| **Grace period** | Existing reports, queries and related exports remain available. You cannot add users who consume seats, enable additional AI users or create tenants. Renew, check in or update the license before the deadline. |
| **Restricted** | Licensed business operations, including reports, queries and exports, are restricted. Administrators can still sign in, deactivate users and manage the license. |

Check the reason shown below the state. Expiry, overdue check-in, excess users and machine changes require different actions.

## 2. Activating a server

1. On the License page of the installation you want to license, click **Get machine code** and copy the complete code.
2. Send it to Datafor with the edition, user capacity and term you need. Specify whether the server can access the internet.
3. Click **Upload license** and select the `.lic` file you receive. If you have a license portal account, you can also download the file there.
4. Verify the license number, features, capacity, expiry date and check-in mode. If check-in is required, complete it as described in section 6.

Get the machine code from the target installation and keep the license file unchanged.

A fresh installation has a 90-day trial with 5 Creator seats. Administrators use Creator seats, so include them when choosing capacity.

## 3. Renewing or changing capacity

Send Datafor your license number and the term, seats or features to change. Download the updated file and upload it. A successful automatic or manual check-in can also install an updated revision of the same license.

Afterwards, verify the new expiry date, capacity and revision on the License page. The revision identifies an update to the same license; an older revision cannot replace one already installed.

### Expiry

License dates use **UTC+8 (Beijing time)**. A license remains valid throughout its expiry date and expires at 00:00 the next day. The default grace period is 15 days; use the deadline shown on your License page. With no grace period, or after it ends, business operations are restricted.

Check in-product reminders and email notices. Renewing the license and renewing the check-in lease are separate: check-in does not extend the purchased term, and renewal does not remove the need to check in.

<a id="4-moving-to-another-server"></a>

## 4. Moving to another server

| Operation | License handling |
| --- | --- |
| Move reports and other business content | Use Datafor's content migration feature. The destination installation uses its own license. |
| Replace a server | Send the existing license number and the new server's machine code to Datafor for a transfer. Install the updated file on the new server and stop the old installation at the agreed cutover time. |
| Add a production or test installation | Provide each installation's machine code and arrange a license for each. |
| Restore a backup | Stop the instance being replaced. If restoring to a different machine, ask Datafor whether a license transfer is needed. |

When reinstalling or recreating containers, preserve persistent storage for the system repository and deployment data. Check the license state and check-in result afterwards. If there is a machine mismatch or check-in error, send the current machine code and message to Datafor support.

See [Backup and Restore](/documentation/System/backup/) and [Deploying Datafor Using Docker](/documentation/Setup/Deploying-Datafor-Using-Docker/) for the operational steps.

## 5. Seats and features

| Item | How it is counted |
| --- | --- |
| Creator seats | Active Creator and Administrator accounts. |
| Reader seats | Active Reader accounts. Readers can use unused Creator seats. |
| AI seats | Active accounts with **Enable AI Agent** turned on. Each account still uses its Creator or Reader seat. |
| Tenants | Excludes the default tenant and system template tenant. |
| Features | Embedding, white label, multi-tenancy and AI depend on the features listed in the license. |

Seats count active accounts, not concurrent sessions. Deactivate unused accounts to release seats. AI seats do not specify a request or token allowance.

Datafor rejects user creation, activation, imports or user-type changes that would exceed the seat limit. Check the failed-item list after a bulk operation. See [User Creation and User Types](/documentation/System/Users/) for account management.

**Exceeding Creator or Reader capacity restricts business operations immediately, with no additional grace period.** Accounts and data are retained. Administrators can deactivate excess accounts or upload a license with enough seats. For example, if a server has 5 active Creator accounts and receives a license for 1, deactivate 4 accounts or increase capacity.

Before moving from trial to a paid license or reducing capacity, check active accounts and reserve Creator seats for administrators.

### Multi-tenant installations

Users must fit both the installation's total capacity and their tenant's quota. Child tenants' Creator quotas must add up to no more than the licensed Creator capacity; the same rule applies to Reader quotas.

A new tenant needs a Creator seat for its initial administrator. Active administrators in the default and template tenants also count toward the installation total.

If excess users are the only reason for restriction, authorized administrators can still adjust existing tenant quotas and deactivate users. They cannot create new tenants while restricted.

## 6. Check-in

Check-in confirms the installation's authorization. A **lease** is the validity period granted by a successful check-in; check in again before it expires.

| Common mode | How to check in | Default lease |
| --- | --- | --- |
| **Check-in required** | The server tries automatically every 24 hours. Manual check-in is also available. | 30 days |
| **Offline check-in** | An administrator checks in manually. The server does not contact the portal automatically. | 180 days |

Follow the mode, lease deadline and grace period shown on the License page. An installation that requires check-in becomes restricted after its lease and any grace period end.

### Server check-in

For automatic check-in, allow outbound HTTPS access to the portal address shown on the License page. Click **Check in now** and confirm that the last successful check-in and lease deadline have updated. No inbound port is needed for license check-in.

### Through an administrator's browser

If the server cannot reach the portal but your computer can, expand the manual check-in controls and click **Check in through this browser**. Confirm success and the updated lease deadline. The manual controls are already expanded in Offline check-in mode.

### Through another device with internet access

1. Open the manual check-in controls and click **Generate check-in code**. Copy the complete code.
2. On a device with internet access, open the portal exchange address shown on the page. Submit the code and copy the returned **lease code**.
3. Return to the installation that generated the request. Paste the result under **Submit lease code** and submit it.
4. Confirm success and the updated lease deadline.

A check-in code is valid for 30 days. After generating another code, use only the latest code and its response. Generate a fresh code after replacing the license as well.

Manual check-in does not change the license's mode or lease length. For ongoing offline use, ask Datafor to configure Offline check-in and arrange for an administrator to renew the lease before each deadline.

License check-in sends deployment and authorization details and usage counts. It does not upload report content or query results.

## 7. Upgrading from an earlier version

Arrange a V2 license with Datafor before upgrading. After the software upgrade, get the new machine code, request the V2 file and upload it.

An old V1 license has a **14-day transition period** in the new software. Follow the deadline on the License page. During this period, grace-period restrictions apply; afterwards, business operations are restricted. A later expiry date in the old file does not extend the transition, and excess user seats still cause immediate restriction.

Older servers that have not been upgraded cannot use V2 files. Plan the software upgrade and license replacement together.

## 8. Troubleshooting

| Message or symptom | What to do |
| --- | --- |
| License or lease expired | Check both deadlines. Renew the license or complete check-in as appropriate. |
| User seat limit exceeded | Deactivate excess accounts or increase capacity. Include administrators in the Creator count. |
| License bound to another deployment, or machine mismatch | Verify that you selected the correct file. Send the current machine code and recent migration or hardware changes to support. |
| Check-in conflict | Send the page message and recent deployment changes to support. |
| Older license revision | Download the latest file for that license. |
| Invalid file, signature error or product mismatch | Download the correct file again without editing it. Contact support if it is still rejected. |
| Legacy license no longer accepted | Get the new machine code, request a V2 file and upload it. |
| Server clock error | Correct the system clock and time synchronization settings. Contact support if the error remains. |
| AI access denied | Check the AI feature in the license, the user's **Enable AI Agent** setting and the license state. |

When contacting support, include a screenshot of the License page, the license number and any recent environment changes.
