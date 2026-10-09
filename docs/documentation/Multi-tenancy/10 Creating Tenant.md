---
title: Multi-tenancy
permalink: /documentation/Multi-tenancy/Multi-tenancy/
createTime: 2026/09/01 22:03:26
---

# Multi-tenancy

This document is intended for **Super Admin** users. It explains how to use Datafor’s **Multi-tenancy** feature to create tenants, configure entitlements (**Plan / Seats / Trial End Date**), maintain tenant administrators, enable/disable tenants, review audit logs, and delete tenants.

## 1. Overview

**Multi-tenancy** is Datafor’s centralized tenant management console. Super Admins can manage multiple tenants from one place. Typical tasks include:

- Creating a tenant for a new customer and setting up a trial period
- Assigning a subscription plan (**Plan**) and seat quotas (**Creator / Reader Seats**)
- Maintaining the tenant administrator (**Admin Email**)
- Enabling / disabling a tenant
- Viewing tenant change audit logs (**Activity Logs**)
- Deleting a tenant (irreversible)

## 2. Access and Permissions

### 2.1 Permission Requirements

Only users signed in with the **superadmin** account can see the **Multi-tenancy** page under **Settings › Operations**.

> Important: If you upgrade the system using an **upgrade package**, you must **manually create** the **`superadmin`** account. The upgrade process does not automatically create this account.

### 2.2 Navigation Path

**Settings › Operations › Multi-tenancy**


## 3. Tenant List Page

After entering Multi-tenancy, the system displays the tenant list by default. This page provides an overview and helps you quickly locate tenants.

<div align="left"><img src="./images/image-20260213144356786.png" /></div>

### 3.1 Column Descriptions

The list includes the following columns:

- **Tenant ID**: The unique identifier of the tenant. Use the copy icon next to the Tenant ID to copy the tenant URL (see Section 11).
- **Tenant Name**: The tenant name (click to open tenant details)
- **Status**: Tenant status (e.g., Enabled)
- **Plan**: Subscription plan (e.g., Enterprise, Pro)
- **Creator Seats**: Total creator seat quota
- **Reader Seats**: Total reader seat quota
- **Admin Email**: Tenant administrator email
- **Trial End Date**: Trial end date / expiration date
- **Last Updated**: Most recent update time

### 3.2 Search and Filters

The top-right of the list page provides:

- **Search**: Search by keywords such as Tenant ID / Tenant Name / Admin Email
- **All statuses**: Filter by status
- **All plans**: Filter by plan

### 3.3 Create Tenant Entry (“+”)

Click the **“+”** button to the right of the **Multi-tenancy** page title to open the **Create Tenant** dialog and create a new tenant (see Section 4).

### 3.4 Tenant Template (template0)

In the tenant list, you may see a tenant named **template0** (as shown in the screenshot). It is a built-in **Tenant Template** used to initialize new tenants.

> Important: If you upgrade the system using an **upgrade package**, the tenant template (**template0**) is **not created automatically**. Until it exists, creating any other tenant fails with "Tenant template0 does not exist,create it first". To create it, click **+** and create a tenant with **Tenant ID** `template0` (see Section 4); it is the only tenant that can be created without a template.

<div align="left"><img src="./images/image-20260218161843715.png" /></div>

- **Default behavior**: When you create a new tenant, the system **copies (clones) template0** to generate the tenant’s initial content and default configuration.
- **Copy scope**: the tenant's initial content and configuration, including:
  - **White-label configuration**: brand name, logo, theme color/appearance, etc.
  - **Data sources**: configured connections and related settings
  - **Analytic models**: published/available models and semantic configurations
  - **Sample pages / sample content**: sample reports, dashboards/pages, demo assets and folder structure
- **Impact**: Changes to **template0** apply to tenants created after the change. Existing tenants are not updated.
- **template0** cannot be deleted: its row menu has no **Delete**.

> Recommendation: Treat **template0** as a system template tenant. Avoid using it as a real customer tenant. If you need to change the “default content/configuration for new tenants”, update template0 carefully, assess impact, and verify the initialization result by creating a new tenant.

### 3.5 Copy Tenant URL (from Tenant ID)

On the tenant list page, the **copy** button next to a **Tenant ID** is used to copy the tenant’s URL.

### 3.6 Row Menu

Each row's menu offers **Details** (opens the tenant details page), **Enabled** (shown when the tenant is disabled), **Disabled** (shown when the tenant is enabled), and **Delete** (not shown for **template0**).

## 4. Create Tenant

On the tenant list page, click **“+”** to open the **Create Tenant** dialog.

<div align="left"><img src="./images/image-20260213145108643.png" width="100%"/></div>

### 4.1 Steps

1. Click **“+”**
2. Fill in the required fields (marked with `*`)
3. Click **Create Tenant** to create the tenant
   - To cancel: click **Cancel**

### 4.2 Field Descriptions (Create Tenant)

| Field                  | Required                       | Description                                                  |
| ---------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Tenant ID**          | Yes                            | The tenant’s unique identifier, used in the tenant URL. It must start with a letter or underscore (the field hint reads "Start with a letter or underscore") and contain only letters, digits, and underscores (e.g., `tenant16`, `t_abc`). |
| **Tenant Name**        | Yes                            | The tenant display name (e.g., “ABC SaaS”).                  |
| **Plan**               | Yes                            | Subscription plan (dropdown). After creation, you can adjust it via **Change Plan** on the tenant details page. |
| **Admin Email**        | Yes                            | Email address of the tenant’s **admin account**. After creation, you can update this email on the **Admin** tab via **Change Admin**. |
| **Creator Seat Limit** | Yes                            | Maximum number of Creator seats for the tenant.              |
| **Reader Seat Limit**  | Yes                            | Maximum number of Reader seats for the tenant.               |
| **Enable Trial**       | No                             | On by default. Turn it off to create the tenant without a trial end date. |
| **Trial End Date**     | Required when trial is enabled | Defaults to one month from today.                            |

### 4.3 Recommendations and Notes

- **Tenant ID must be unique**: Use a consistent naming convention (e.g., `tenant_<customer_short_name>`).
- **Seat limits should be integers**: Set Creator/Reader limits according to your licensing or contract terms.
- **Global license seat cap**: The **sum of seat quotas across all tenants** (Creators / Readers) **must not exceed** the seat count allowed by the system license. Before increasing quotas for a tenant, confirm your remaining license capacity.
- **Trial settings**: If trial mode is enabled, ensure **Trial End Date** is set correctly to avoid unexpected expiration.
- **New-tenant baseline**: New tenants are initialized by copying the tenant template **template0** (see 3.4).

## 5. Tenant Details Page
Click **Tenant Name** or **Tenant ID** on the list page to open the tenant details page. The details page has three tabs:

- **Details**: Plan, seats, and expiration date
- **Admin**: Administrator maintenance
- **Activity Logs**: Audit logs

Common action buttons in the top-right corner:

- **Back to List**: Return to the tenant list
- **Disabled**: Disable the tenant (when the tenant is currently Enabled)
- **Enabled** (may appear after disabling): Re-enable the tenant
- **Delete**: Delete the tenant (irreversible)

## 6. Details: Plan, Seats, and Expiration Date

The **Details** tab is used to manage a tenant’s core entitlements.

<div align="left"><img src="./images/image-20260218161704757.png" width="100%"/></div>

### 6.1 Change Plan

- View: **Current Plan**
- Update: Click **Change Plan**, select a new plan, and save

> Recommendation: Plans may control feature entitlements. Ensure changes align with your commercial policy.

### 6.2 Change Seats (Quotas)

The Seats section shows **used/total** (e.g., Creators 1/5, Readers 0/5).

- Update: Click **Change Quotas**
- Items:
  - **Creators**: Total creator seat quota
  - **Readers**: Total reader seat quota

> Notes:
>
> - Saving a quota does not check the total across tenants; keep the sum of all tenants' quotas within the license seat count yourself. Each tenant is limited to the lower of its own quota and the license seat count.

### 6.3 Change Expiration Date (Expiration / Trial End)

- View: The current date is shown in the Expiration Date area
- Update: Click **Change Expiration Date** to set a new date

## 7. Admin: Update the Tenant Admin Account Email

<div align="left"><img src="./images/image-20260213144621277.png" width="100%"/></div>

- In the **Admin** tab, you can view and update the email address of the tenant’s **admin account**.
  - View: **Current admin account email:** **xxx@xxx.com**
  - Update: Click **Change Admin**, enter the new email address, and save

> Note: **Change Admin updates the email of the tenant’s admin account** (i.e., it changes the *email address* associated with that admin account for the tenant).

## 8. Activity Logs: Audit and Tracking

<div align="left"><img src="./images/image-20260213144703873.png" width="100%"/></div>

The **Activity Logs** tab displays key changes for the tenant, useful for auditing and troubleshooting.

### 8.1 Column Descriptions

- **Time**: When the action occurred
- **Action**: Action type

### 8.2 Common Action Examples

You may see records such as:

- **add**: Tenant created
- **enabled / disabled**: Tenant enabled/disabled
- **expireDay**: Expiration date changed
- **email**: Admin email changed (or an email-related admin action)

### 8.3 Search and Pagination

- **Search** (top-right): Filter logs by keyword
- Pagination (bottom): Browse additional log pages

## 9. Enable / Disable Tenant

On the tenant details page (top-right):

- Click **Disabled** to disable the tenant (suspend access)
- After disabling, the button may change to **Enabled** to re-enable the tenant

Before deleting a tenant, consider disabling it first: a disabled tenant can be re-enabled, a deleted one cannot be restored.

## 10. Delete Tenant (Irreversible)

Deleting a tenant is a high-risk operation: it **cannot be undone** and will remove the tenant’s **users and associated data**.

<div align="left"><img src="./images/image-20260213144946113.png" width="100%"/></div>

### 10.1 Steps

1. On the tenant details page, click **Delete**
2. The **Confirm Deletion** dialog appears
3. Verify the prompt information (Tenant Name / Tenant ID)
4. Enter the specified **Tenant ID** in the input box (e.g., `tenant16`)
5. Click **Delete** to confirm
   - To cancel: click **Cancel**

## 11. Tenant URL and Default Admin Credentials

### 11.1 Tenant URL

- Tenant URL format:
  - `http://your-server:28080/datafor/t/<tenant-id>`
  - Example: `http://your-server:28080/datafor/t/tenant16`
- You can click the **copy** icon next to **Tenant ID** on the tenant list page to copy the full tenant URL.

### 11.2 Default Tenant Admin Account

For each tenant, the built-in tenant administrator account is:

- **Username**: `admin`
- **Default password**: `password`

> Security recommendation: Change the default password after first login and follow your organization’s password policy.

## 12. FAQ

### Q1: Why can’t I see Multi-tenancy?

Only **superadmin** users can see this menu. Confirm you are logged in with the correct account and permissions.

### Q2: What happens when Trial End Date / Expiration Date is reached?

From the day after the date (one day of grace for time zones), the tenant's license check fails with "License has expired." and the tenant can no longer use system features. To restore access, set a later date with **Change Expiration Date**.

### Q3: How do I quickly find a tenant?

Use **Search** on the list page and enter Tenant ID / Tenant Name / Admin Email. You can also refine results using **All statuses** and **All plans**.

### Q4: Can a deleted tenant be restored?

No. Deletion removes tenant data and users, and requires strong confirmation (entering the Tenant ID).