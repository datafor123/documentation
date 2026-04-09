---
title: "Row-Level Security in Analytics: What It Is and Why It Matters"
permalink: /documentation/Datasource/Row-Level-Security-in-Analytics/
tags: ["Security", "Analytics", "RLS", "Governance"]
description: "Understand row-level security in analytics, why it matters for governance, and how Datafor combines RLS, OLS, ACL, identity integration, and APIs to enforce secure access at scale."
---

# Row-Level Security in Analytics: What It Is and Why It Matters

## Overview

Datafor helps organizations govern analytics access as a full system, not as a collection of disconnected settings.

With Datafor, teams can combine **connection-level Row-Level Security (RLS)**, **Object-Level Security (OLS)**, **ACL-based resource governance**, **roles and user types**, **SSO and external identity integration**, and **API-based administration** into one permission model. That means access can be controlled before data reaches dashboards, reports, APIs, ad hoc exploration, or the Datafor AI Agent.

This matters because analytics security rarely fails at the login page. It usually fails when a user opens the correct dashboard and sees the wrong rows.

That is where **Row-Level Security (RLS)** becomes essential. RLS filters query results so each user only sees the records they are permitted to access. Two people can open the same dashboard, use the same metrics, and interact with the same experience, yet still receive different result sets based on their identity, role, region, business unit, tenant, or other policy conditions.

For modern BI teams, this is not a niche feature. It is part of the foundation for secure self-service analytics, multi-tenant data products, and governed embedded reporting. And it is exactly why Datafor's layered governance model matters.

## What Row-Level Security Actually Means

Row-level security limits **which rows are returned** when a query runs.

For example:

- A regional manager should only see sales rows for their own territory.
- A franchise owner should only see stores they operate.
- A department head should see employees in their own org, but not the rest of the company.
- A customer in a SaaS platform should only see records that belong to their tenant.

Without RLS, organizations often duplicate datasets, create separate dashboards for each audience, or rely on manual filtering conventions that are easy to break. Those approaches might work for a while, but they do not scale well, and they create both operational overhead and security risk.

With RLS, access control moves closer to the query itself. That changes the operating model. The same analytical asset can be reused safely across many audiences because the data is filtered automatically when users run it.

## Why RLS Matters in Analytics

### 1. It protects sensitive data without fragmenting content

Analytics teams want reuse. Security teams want control. RLS is one of the few capabilities that genuinely helps deliver both at the same time.

Instead of maintaining multiple versions of the same dashboard for different audiences, organizations can maintain one governed report and let security policies determine which rows each audience can see. This reduces content sprawl while keeping access boundaries intact.

### 2. It makes self-service analytics safer

Self-service analytics only works when users can explore confidently without exposing data they should never have access to. If every ad hoc query is a potential data leak, self-service adoption stalls before it really starts.

RLS gives organizations a way to open access to exploration while still enforcing business boundaries such as region, customer account, legal entity, or department.

### 3. It supports multi-tenant and embedded analytics

In embedded analytics, one shared reporting layer may serve many customers, partners, or internal teams. RLS is what allows the platform to deliver a shared analytics experience without mixing data between audiences.

This is especially important for SaaS products, dealer portals, partner ecosystems, and enterprise applications where analytics is part of the operational workflow rather than a separate BI destination.

### 4. It strengthens compliance and governance

Many compliance and governance programs are not only about authentication. They are about proving that data exposure is constrained according to business rules.

RLS helps organizations implement least-privilege data access in a way that is easier to explain, review, and audit than dashboard-by-dashboard workarounds.

## RLS Is Not the Same as Report Permissions

This distinction is critical.

- **Report, folder, model, and data source permissions** determine who can open or manage an asset.
- **Row-level security** determines what data the user can see after the query runs.

If a user has permission to open a dashboard but no row-level restrictions, they may still see more data than intended. On the other hand, if RLS is configured correctly, multiple audiences can safely open the same dashboard while only seeing their authorized subset.

In practice, strong analytics governance usually requires both layers:

- **content access control** to decide who can use the asset
- **data-level security** to decide what data the asset can return

## Common Mistakes Teams Make

### Mistake 1: Treating filters as security

User-facing filters are for analysis convenience, not for access control. A dropdown that defaults to "My Region" is not a security boundary if users can change it.

### Mistake 2: Copying dashboards for every audience

This may work early on, but it becomes expensive to maintain. Logic drifts, definitions diverge, and governance becomes harder over time.

### Mistake 3: Enforcing security only in the front end

If security only exists at the report layer, other access paths such as APIs, ad hoc exploration, or AI-assisted query experiences may expose data unexpectedly. Effective security should be enforced where the query is evaluated.

### Mistake 4: Managing everything user by user

Individual grants are difficult to maintain. Role-based policies are easier to review, easier to update, and much more scalable as teams change.

## Why Datafor Stands Out

Datafor approaches analytics governance as a layered control model rather than a single permission switch.

At the platform level, Datafor provides **ACL-based resource control** for reports, folders, models, and data sources. Administrators can grant permissions to users, roles, and user types, with support for inherited permissions on folders and resources. This governs who can access content and who can manage it.

At the data access level, Datafor provides **Data Security** at the **connection layer**, including:

- **Row-Level Security (RLS)** to restrict returned rows
- **Object-Level Security (OLS)** to control visibility of tables, views, and columns

That matters because it means policies are enforced before data reaches downstream consumers such as reports, dashboards, ad hoc exploration, APIs, and the Datafor AI Agent.

In other words, Datafor is not just helping teams decide who can open content. It helps them decide what data is visible, which structures are exposed, how permissions scale across roles, and how governance aligns with enterprise identity systems.

## How Datafor Implements Row-Level Security

In Datafor, RLS policies are configured **per connection** and scoped to specific schemas and tables or views. Administrators can define which **users or roles** a policy applies to, then build conditional expressions that are injected at query time.

Typical examples include:

- `region IN ('WA','NSW','VIC')`
- `monthnum = 12`
- `date BETWEEN '2025-01-01' AND '2025-03-31'`
- more complex grouped logic using `AND` and `OR`

This design is important for two reasons:

1. The rule is attached to the data access layer, not buried inside a specific report.
2. The same governed rule can protect multiple analytical experiences consistently.

Datafor also supports an **Allow query all data** option within an RLS policy entry. This is useful when most users should be filtered, but a defined whitelist of users or roles should be allowed to bypass RLS for that policy while still remaining subject to other controls such as OLS.

## Why Datafor's Governance Model Is Stronger Than RLS Alone

RLS is necessary, but on its own it is not a complete governance model. Datafor strengthens it with adjacent controls that close common security gaps and make permission governance more operational.

### ACL for content and resource governance

Datafor ACL controls access to reports, folders, models, and data sources with permission levels such as **View**, **Edit**, **Delete**, and **Full Control**. This ensures organizations can decide not only what data users can see, but also which assets they can open, modify, share, or administer.

### OLS for structural protection

Some data should not merely be filtered. It should be hidden entirely. Datafor's Object-Level Security can restrict entire tables, views, or columns. This is especially valuable for PII, confidential attributes, or advanced schema elements that should not appear for most users.

When used together, **OLS limits visibility** and **RLS filters rows**. That creates a stronger, two-layer security model.

### Roles and user types for scalable administration

Datafor supports different **user types** such as Reader, Creator, and Administrator, and it also supports assigning **business roles** for more granular control. In practice, this allows organizations to separate broad platform capability from fine-grained business access rules.

For example:

- a **Reader** can consume content without editing it
- a **Creator** can build and modify content
- business roles can determine which regions, departments, or tenants that user can see

This combination reduces the operational burden of managing permissions one user at a time and gives teams a cleaner way to scale governance.

### External identity integration

Governance is easier when identity is centralized. Datafor supports authentication and SSO integrations including **OAuth2**, **SAML2**, **CAS**, **LDAP**, and **JWT**-based integration. In supported modes, organizations can automatically initialize users and assign default user types or roles on first login.

This helps align analytics permissions with enterprise identity processes such as onboarding, offboarding, and role changes.

### APIs for automation and auditability

For teams that want to operationalize governance instead of managing it manually, Datafor also exposes APIs for:

- row-level security policy management
- object-level security policy management
- ACL retrieval and modification
- user and role administration

That makes it easier to automate policy deployment, integrate governance with internal workflows, and review effective controls programmatically.

## A Practical Example

Imagine a company that serves multiple regional business units from one analytics environment.

They want:

- one shared sales dashboard
- one shared semantic model
- no cross-region data exposure
- a small executive group that can see all regions

In Datafor, that can be implemented as a layered policy:

1. Grant dashboard access through ACL to the relevant users or roles.
2. Assign business roles such as `North`, `South`, `West`, and `Executive`.
3. Configure row-level security on the connection so each regional role only sees rows for its own region.
4. Use **Allow query all data** for the executive whitelist where full visibility is appropriate.
5. Hide especially sensitive columns with OLS if they should not appear even for users who can access the report.

The result is a cleaner, more scalable governance model:

- one analytical experience
- reusable content
- centralized control
- less duplication
- lower risk of accidental overexposure

## Best Practices for Using RLS Well

- Prefer **role-based policies** over individual user mappings wherever possible.
- Define rules using stable business keys such as tenant ID, region code, or department ID.
- Keep policy intent clear: one policy should represent one understandable access rule.
- Test with non-admin accounts, not just administrator previews.
- Combine **RLS**, **OLS**, and **ACL** instead of relying on a single layer.
- Review identity-to-role mapping regularly, especially when SSO or external directories are involved.
- Use APIs where appropriate to make policy management repeatable and auditable.

## Conclusion

Row-level security matters because analytics access is rarely all-or-nothing. In most organizations, the real requirement is not simply "Can this person open the dashboard?" but "Which records should this person be allowed to see once they do?"

That is the problem RLS solves.

What makes Datafor particularly valuable is that it does not treat RLS as an isolated feature. It combines connection-level **Row-Level Security**, **Object-Level Security**, **ACL-based resource governance**, **roles and user types**, **enterprise identity integration**, and **API-driven administration** into a broader permission governance model.

For teams building governed self-service BI, embedded analytics, or multi-tenant data products, that combination is what turns security from a patchwork of filters into an operational capability.
