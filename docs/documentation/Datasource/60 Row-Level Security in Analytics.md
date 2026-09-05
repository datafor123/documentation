---
title: Row-Level Security in Analytics
permalink: /documentation/Datasource/Row-Level-Security-in-Analytics/
tags:
  - Security
  - Analytics
  - RLS
  - Governance
description: Understand Datafor row-level security defaults, policy combination, full-row exceptions, and identity boundaries, then validate access with a worked example.
createTime: 2026/09/01 22:03:26
---

# Row-Level Security in Analytics

Row-level security (RLS) limits which records a user can query. For example, regional managers can use the same sales report while receiving different rows according to their assigned roles.

This guide explains Datafor's policy rules and how to verify the resulting access. For configuration steps and UI screenshots, see [Data Security](/documentation/Datasource/Data-Security/).

> **No matching policy does not mean no access.** If a user is otherwise allowed to query a table but no enabled row policy matches that user and table, RLS adds no row restriction. Check policy coverage before granting access to sensitive data.

## Choose the right control

| Requirement | Control |
| --- | --- |
| Decide who can open or manage a report, model, or datasource | [Access Control List (ACL)](/documentation/System/Access-Control%20List/) |
| Limit the records returned from a table or view | **Row access** (RLS) |
| Hide a table, view, or column | **Table & column access** (OLS) |

A report filter that users can change is not a security boundary. RLS does not grant permission to open a report, and permission to open a report does not establish row restrictions.

RLS policies belong to a datasource connection. Each row policy targets one schema and one table or view, and applies to selected **users, roles, or user types**. A policy on one datasource does not protect a second connection to the same database. Review every datasource and object used by the analysis.

## Understand the rules before adding policies

### Within one policy: AND or OR

**Return matching rows** uses conditions built from fields, operators, and values. **All (AND)** requires every condition in the group to match; **Any (OR)** requires at least one. Groups can be nested.

For example, to require both a North-region record and a particular department, put both conditions in the same **All (AND)** group. Review **Effective condition** and use **Validate expression** before enabling the policy.

### Across policies: OR, not AND

Enabled row policies matching the same user and physical table are combined with **OR**, including matches through different roles or user types. A user matching both a North policy and a South policy can see North **or** South rows.

Adding a restrictive policy does not narrow rows already allowed by another matching policy. Review all effective roles and policies, not only the policy being edited.

### Full-row exceptions and unmatched users

A matching **Return all rows** policy removes RLS filtering for its selected table, even when other matching row policies are restrictive. It does not remove report filters, grant ACL access, or make objects hidden by OLS visible.

With no matching enabled row policy, RLS also leaves rows unrestricted. These are different situations: one is an explicit exception; the other can be a gap in coverage. Do not assume that creating a North policy prevents everyone outside North from seeing North data.

### Drafts and administrator roles

- **Save draft** keeps a new policy inactive. **Save & enable** activates it. Disabled policies do not affect access; disabling a user's only matching row policy can therefore expose more rows.
- Built-in **SuperUser** and **Administrator** roles bypass Data Security, including RLS and OLS. Use ordinary users to validate restrictions. An administrative role is not a suitable substitute for a business role that needs full-row access but should still respect OLS.

## Worked example: regional sales

Use a disposable datasource and ordinary test accounts. The following is an example fixture, not a built-in Datafor dataset. Create or identify a table named `sales` in your chosen schema with these records:

| sale_id | region_code |
| --- | --- |
| 1 | NORTH |
| 2 | NORTH |
| 3 | SOUTH |
| 4 | WEST |

Create the business roles `North`, `South`, and `Executive`, and assign them to the ordinary test users as shown in the expected-results table below. Give the test users ACL access to the same test report and its required resources. Enable **Apply data security** in the model settings. For this example, assume no other row policies, OLS exclusions, or report filters affect the table.

You need **Full control** on the datasource to manage policies. Open **Datasource → Database sources → select the datasource → Actions → Data security → Row access**. Create the following policies with **New policy**, selecting the same schema and `sales` table each time:

| Policy name | Applies to: role | Access rule | Field / operator / value |
| --- | --- | --- | --- |
| North sales | North | Return matching rows | `region_code` / equals / `NORTH` |
| South sales | South | Return matching rows | `region_code` / equals / `SOUTH` |
| Executive sales | Executive | Return all rows | No condition |

Enter condition values in the editor rather than pasting a SQL statement. Validate the matching-row expressions and use **Save & enable** for all three policies.

### Expected results

Use these as acceptance criteria for the fixture. Role names below are business-role assignments unless explicitly marked as a built-in role; no other assignments match a policy in this example.

| Test user | Relevant roles | Expected sale_id values | Reason |
| --- | --- | --- | --- |
| north_reader | North | 1, 2 | North condition |
| south_reader | South | 3 | South condition |
| regional_reader | North, South | 1, 2, 3 | Matching policies combine with OR |
| executive_reader | North, Executive | 1, 2, 3, 4 | Full-row exception wins over row filtering |
| unassigned_reader | No matching business role | 1, 2, 3, 4 | No matching row policy: a coverage gap |
| administrator_test | Built-in Administrator | 1, 2, 3, 4 | Administrator bypass |

The last two results are warnings, not evidence of successful regional isolation. Do not give unassigned users access to the production analysis until their intended access is defined and verified.

In the disposable setup, also disable **North sales** and retest `north_reader`. With no other matching row policy, all four rows are unrestricted by RLS. Re-enable the policy and confirm the result returns to rows 1 and 2.

## Validate the effective user, then the actual workflow

1. Open **Test access**, select a user as the **Simulated subject**, and choose the schema and `sales` table. Prefer a user test over a role-only test so all of that user's roles and user type are resolved.
2. Click **Run test**. Check **Resolved subject**, **Row access**, **Effective condition**, **Field visibility**, and **Policies in effect** against the expected results.
3. Use **Preview data** to inspect a sample. Preview returns up to 50 rows and is not a full sign-in impersonation; a sample alone cannot prove that unwanted rows are excluded.
4. Sign in as the corresponding ordinary user and run the actual report. Confirm both permitted and prohibited regions, including when report filters are cleared or changed.
5. Repeat after changes to memberships, policy state, model settings, or datasource selection.

**Test access** evaluates enabled policies only, not drafts or unsaved edits. An **All rows** result or a message that no enabled policy affects the table must be checked against the intended access; it is not confirmation that the table is protected.

## Check identity and scope for other access paths

- **Models and the AI Agent:** Keep **Apply data security** enabled for governed models. Compare results using the same authenticated user, model, datasource, and enabled policies. A successful datasource policy test alone does not validate the model or Agent workflow. See [Data Security and the AI Agent](/documentation/Datasource/Data-Security/#data-security-and-the-ai-agent).
- **Share links:** The [Share Link guide](/documentation/Embedded/Share-link/) describes access using the sharer's data permissions. Do not treat such a link as per-recipient RLS or assume an anonymous visitor has an individual role assignment. Verify the sharing mode and effective identity before distributing the link.
- **Embedded applications, SSO, and APIs:** Confirm which identity the request authenticates as, which roles it resolves to, and which datasource/query path it uses. A shared technical account is not an individual viewer. Test each integration with its actual credentials and requests; do not infer coverage from a report test or from a client-supplied region or tenant filter.

For detailed policy editing, OLS configuration, and troubleshooting, continue with [Data Security](/documentation/Datasource/Data-Security/).
