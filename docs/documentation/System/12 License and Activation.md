---
title: License and Activation
permalink: /documentation/System/License/
description: How a Datafor server is licensed, what the License page shows, how to activate, renew, move to another server, and what happens when a license expires.
createTime: 2026/10/14 18:00:00
---

# License and Activation

Datafor is licensed per installation. Administrators manage the license under **Settings › General › License**.

---

## 1. Status at a glance

The License page shows one of four states:

| State | Meaning | Effect |
|---|---|---|
| **Valid** | A license is installed and within its term, or the server is in its 90-day trial. | Full functionality. |
| **Valid (attention needed)** | Something needs your attention soon: the license expires within 30 days, a seat quota is exceeded, the server changed, or the server clock was set back. | Full functionality. Follow the hint shown on the page. |
| **Grace period** | The license expired recently, or an action is required within a deadline shown on the page. | Reports, queries and exports work as usual; new users, tenants and AI users cannot be added. Act before the deadline. |
| **Restricted** | The license expired beyond the grace period, the trial ended, the file belongs to another server, or the file is invalid. | Reports, queries, exports, scheduled alerts, model publishing and the AI Agent stop. Administrators can still sign in, open the License page, manage users and run backups. |

Below the state the page lists the reasons, the edition, the license number, the **Deployment ID** of this installation, the licensed features, and the seat usage for Readers, Creators, AI users and, on multi-tenant servers, tenants.

---

## 2. Activating a server

1. Install and start Datafor. A new server runs in a 90-day trial with 5 Creator seats.
2. Open **Settings › License**, click **Get machine code** and copy the code.
3. Send the machine code to Datafor (or paste it in the Datafor license portal if you have an account). You receive a license file named `license_<id>.lic`.
4. Click **Upload license** and select the file. A file issued for another server or an outdated file is rejected with a reason.

A license belongs to one installation. Reinstalling Datafor from scratch creates a new installation and needs a new license file; see [Moving to another server](#4-moving-to-another-server).

**Docker:** keep the installation in a volume and give the container a fixed host name, as shown in [Deploying Datafor Using Docker](/documentation/Setup/Deploying-Datafor-Using-Docker/). A container recreated this way is still the same installation. For Kubernetes and other environments where containers are replaced routinely, tell Datafor when ordering so the license can be issued accordingly.

---

## 3. Renewing or changing capacity

A renewal, additional seats or a feature change is delivered as a new license file. Upload it the same way. A file older than the one already installed is rejected, so an outdated file cannot be re-imported by mistake. Servers that check in online (section 6) receive renewals automatically.

---

## 4. Moving to another server

Install Datafor on the new server, get its machine code and ask Datafor for a transfer. The old server's license cannot be copied to the new one.

If the hardware of a licensed server changes substantially, the License page shows a warning with a deadline. Request a new license file with the server's current machine code before the deadline; otherwise the server becomes restricted.

---

## 5. Seats and features

| Item | Behaviour |
|---|---|
| Creator and Reader seats | Creating a user, enabling a disabled user, or changing a user type beyond the quota is rejected. Existing users are never disabled automatically; an overage is shown as a warning. Readers may use spare Creator seats. |
| AI users | **Enable AI Agent** on a user beyond the quota is rejected. |
| Tenants (OEM) | Creating a tenant beyond the licensed number, or setting tenant quotas whose sum exceeds the license, is rejected. |
| Features | Embed tokens and SDK sign-in, branding (white label), tenant management and the AI Agent are licensed separately. A feature that is not licensed is hidden or returns `FEATURE_NOT_LICENSED`. |

---

## 6. Online check-in

Depending on the contract, a license may ask the server to check in with the Datafor license portal. The License page shows the check-in mode, the last successful check-in and the last error.

| Mode | Behaviour |
|---|---|
| **Not checking in** | The server never contacts the portal. Renewals are delivered as files. |
| **Automatic check-in** | Once a day the server sends a short status report to the portal. If the portal is unreachable nothing changes. Renewed license files are installed automatically. |
| **Check-in required** | As above, but the server must check in at least once per lease period (30 days by default, shown on the License page). If it cannot, it enters the grace period and then becomes restricted until a check-in succeeds. |
| **Offline check-in** | For servers without internet access. The server never contacts the portal itself; an administrator completes a check-in by hand (see below) at least once per lease period (180 days by default). Otherwise it behaves like **Check-in required**. |

What is sent: the license number, the Deployment ID, the product version, an identifier of the server hardware, seat usage counts (Creators, Readers, AI users, tenants, total users) and the current license state. No user names, report names, queries or business data are sent. Only an outbound HTTPS connection to the portal address printed on the License page is needed; allow it in the firewall or proxy (`-Dhttps.proxyHost`/`-Dhttps.proxyPort` are honoured). Administrators can trigger a check-in at any time with **Check in now**.

A license is for one installation. If the portal finds the same license in use by more than one installation, the License page shows a warning; with **Check-in required** or **Offline check-in**, the servers become restricted after the lease period until the matter is settled with Datafor. If the portal revokes a license, the next check-in marks the server restricted.

### Checking in by hand

When the server cannot reach the portal, the License page offers two ways to check in without it:

- **Check in through this browser** – if the computer you are using has internet access, click the button; the browser carries the check-in to the portal and back. Nothing else is needed.
- **Check-in code** – click **Generate check-in code** and copy the code. On any device with internet access open the portal's check-in page (the address is shown next to the code), paste the code and copy the lease code you receive. Back on the License page paste it under **Submit lease code**. A check-in code is valid for 30 days; the lease code only works on the server that generated the check-in code.

### Reminders

When a lease is about to run out, the License page and the administrator's top bar show "check-in due in N days" (from 7 days before the deadline, or earlier for long leases), and the portal emails the license contact. After the deadline the top bar shows how many days the check-in is overdue. License expiry is announced the same way: the top bar from 30 days before, and portal emails at 30, 14, 7 and 1 days before expiry, on the day, and a week after.

---

## 7. Upgrading from an earlier version

Servers upgraded from an earlier version keep working with their existing license file **for 14 days after the upgrade**. During that window the License page shows **Grace period** with the deadline and **License upgrade available**: click **Get machine code**, send the new code to Datafor, and upload the file you receive. After the deadline the old file is no longer accepted and the server is restricted until the new file is uploaded. Plan the upgrade so that the new license is ready within those 14 days.

---

## 8. Troubleshooting

| Message | Cause | What to do |
|---|---|---|
| `License is bound to another deployment.` | The file was issued for a different installation. | Send this server's machine code and request a transfer. |
| `Legacy license files are no longer accepted by this version; upload a v2 license.` | More than 14 days have passed since the upgrade and the server still uses the old license file. | Click **Get machine code**, request the new file and upload it. |
| `An older revision of this license cannot replace the current one.` | You uploaded a file older than the installed one. | Download the latest file from the portal. |
| `Machine code mismatch.` | The server hardware changed and the deadline shown earlier has passed. | Request a new license with the current machine code. |
| `Server clock has been set back.` | The system time was moved backwards. | Correct the clock; the warning clears automatically. |
| `License file is corrupted.` | The file was edited or truncated. | Download it again. |
| `License check-in is overdue.` | A server with required or offline check-in has not checked in for longer than the lease period. | Allow the outbound connection and click **Check in now**, or check in by hand with a check-in code. |
