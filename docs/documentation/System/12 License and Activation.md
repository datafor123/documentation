---
title: License and Activation
permalink: /documentation/System/License/
description: How a Datafor server is licensed, what the License page shows, how to activate, renew, move to another server, and what happens when a license expires.
createTime: 2026/10/14 18:00:00
---

# License and Activation

Datafor is licensed per deployment. Administrators manage the license under **Settings › General › License**. This page describes the current (v2) license format; older license files keep working and can be upgraded.

---

## 1. Status at a glance

The License page shows one of four states:

| State | Meaning | Effect |
|---|---|---|
| **Valid** | License installed and within term, or the server is in its 90-day trial. | Full functionality. |
| **Valid (attention needed)** | The license expires within 30 days, a seat quota is exceeded, the server hardware changed, or the server clock was set back. | Full functionality, but no new users, tenants or AI users can be added until the condition is cleared. |
| **Grace period** | The license expired less than the grace period ago (15 days by default). | Full functionality; new users, tenants and AI users cannot be added. Renew now. |
| **Restricted** | Expired beyond the grace period, trial ended, the license belongs to another deployment, or the file is invalid. | Reports, queries, exports, scheduled alerts, model publishing and the AI Agent stop. Administrators can still sign in, open the License page, manage users and run backups. |

Below the state the page lists the reasons, the edition, the license number and revision, the **Deployment ID**, the binding mode, the licensed features, and the seat usage for Readers, Creators, AI users and, on multi-tenant servers, tenants.

---

## 2. Activating a server

1. Install and start Datafor. A new server runs in a 90-day trial with 5 Creator seats.
2. Open **Settings › License** and click **Get machine code**. Copy the code; it contains the server's Deployment ID, hardware fingerprint and product version.
3. Send the machine code to Datafor (or paste it in the Datafor license portal if you have an account). You receive a license file named `license_<id>.lic`.
4. Click **Upload license** and select the file. The server checks the file before accepting it; a file for another deployment, an older revision, or a tampered file is rejected with a reason.

The Deployment ID is created on first start and kept in the repository, so recreating a Docker container or changing network cards does not invalidate the license as long as the repository database is kept.

---

## 3. Renewing or changing capacity

A renewal, additional seats or a feature change is delivered as a new revision of the same license. Upload the new file the same way; the server only accepts a revision newer than the one it already has, so an old file cannot be re-imported by mistake.

---

## 4. Moving to another server

Install Datafor on the new server, get its machine code and ask Datafor for a transfer. The old server's license stays bound to the old Deployment ID; a license file cannot be copied to a second installation.

With the default **standard** binding mode, the server tolerates hardware changes for 14 days (the License page shows a warning); after that it must be re-activated with a new machine code. Contracts can also use **strict** (hardware must match at all times) or **none** (bound only to the Deployment ID, for cloud and Kubernetes deployments).

---

## 5. Seats and features

| Item | Where it is enforced |
|---|---|
| Creator and Reader seats | Creating a user, enabling a disabled user, or changing a user type beyond the quota is rejected. Existing users are never disabled automatically; an overage is shown as a warning. Readers may use spare Creator seats. |
| AI users | **Enable AI Agent** on a user beyond the quota is rejected. |
| Tenants (OEM) | Creating a tenant beyond the licensed number, or setting tenant quotas whose sum exceeds the license, is rejected. |
| Features | `embed_sdk` (embed tokens and SDK sign-in), `white_label` (branding), `multi_tenant` (tenant management), `ai_agent` (AI Agent). A feature that is not licensed is hidden or returns `FEATURE_NOT_LICENSED`. Legacy licenses include all features. |

---

## 6. Upgrading a legacy license

Servers upgraded from an earlier version keep working with their existing license file. The License page shows **License upgrade available**: click **Get machine code**, send the new code to Datafor, and upload the v2 file you receive. The legacy file stays valid until then.

---

## 7. Troubleshooting

| Message | Cause | What to do |
|---|---|---|
| `License is bound to another deployment.` | The file was issued for a different Deployment ID. | Send this server's machine code and request a transfer. |
| `An older revision of this license cannot replace the current one.` | You uploaded a file that predates the installed one. | Download the latest file from the portal. |
| `Machine code mismatch.` | Hardware changed and the 14-day tolerance passed (or the binding mode is strict). | Re-activate with a new machine code. |
| `Server clock has been set back.` | The system time is more than 24 hours earlier than the last time the server saw. | Correct the clock; the warning clears automatically. |
| `License file is corrupted.` | The file was edited or truncated. | Download it again. |
