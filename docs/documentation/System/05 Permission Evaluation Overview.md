---
title: Permission Evaluation Overview
permalink: /documentation/System/Permission-Evaluation-Overview/
tags:
  - Permissions
  - ACL
  - RLS
  - OLS
description: Understand how user types, business roles, resource permissions, and data security combine, resolve conflicting rules, troubleshoot access, and record permission changes.
createTime: 2026/09/05 00:00:00
---

# Permission Evaluation Overview

A user can be allowed to open a report but see only some rows, have a column hidden, or be unable to edit the report. These are different permission decisions, not contradictory results.

This guide connects the standard Console permission controls and database Data Security rules. Use it to design access, explain an unexpected result, and review a permission change. For individual configuration screens, see [User Types](/documentation/System/UserTypes/), [Access Control List](/documentation/System/Access-Control%20List/), and [Data Security](/documentation/Datasource/Data-Security/).

> **There is no single “deny always wins” rule.** File ACLs combine grants, matching RLS policies combine with OR, and OLS exclusions accumulate after each object policy is evaluated. Unmatched RLS subjects are not denied by default.

## 1. What each layer decides

| Layer | Question it answers | What it does not do |
| --- | --- | --- |
| **User Type** | Can this account use reader, authoring, or administrator capabilities? | Making someone a Creator does not grant access to every shared resource. |
| **Business Role** | Which business groups does this user belong to, such as `North Sales` or `Finance`? | Membership alone does not define access. The role must be referenced by a resource grant or data policy. |
| **File/folder ACL** | May this user view, edit, delete, or manage permissions on this resource? | Opening a report does not establish row or column restrictions. |
| **RLS — Row access** | Which records from this datasource, schema, and table may a governed query return? | RLS does not grant access to a report or reveal an OLS-hidden object. |
| **OLS — Table & column access** | Which tables, views, or columns are excluded from governed access? | OLS does not grant editing rights or replace row filtering. |

For an ordinary account, use this reasoning sequence when diagnosing access. It is a checklist, not a claim that every endpoint performs checks in this exact order:

1. Identify the authenticated user, User Type, and **all** resolved roles.
2. Check that the account has the capability needed for the action.
3. Check the resource ACLs required by that workflow, including relevant folders and dependent resources.
4. For governed data access, evaluate OLS visibility and the effective RLS condition on the actual datasource and physical objects.
5. Apply the report's ordinary filters to the permitted data.

A failure at one required layer cannot be repaired by granting permission at a different layer. An RLS full-row exception cannot open an inaccessible report; a report's **Full control** cannot make a hidden column visible.

### User Types and Business Roles are different

- **Reader:** views granted content; a role with Edit permission does not turn a Reader into a Creator.
- **Creator:** can create content and edit resources where access permits it. For shared content, check the relevant ACL.
- **Administrator:** manages the system and has privileged access. Do not use this account to test business-user restrictions.

Use Business Roles for audiences and responsibilities. A user can belong to several roles, and all relevant memberships participate in evaluation. There is no “primary business role” whose permissions automatically replace the others.

Granting access to a **User Type** targets a broad class of accounts. For example, a View grant to Reader may reach people outside the business role you intended to authorize. Review User Type grants alongside user and Business Role grants.

## 2. File and folder ACLs: grants and inheritance

### Grants add access; unchecked boxes do not deny it

The Console ACL editor provides **View**, **Edit**, **Delete**, and **Full control**. Its permission levels are cumulative: higher levels include the lower levels shown in the editor. Full control includes permission management; reserve it for resource custodians.

For an ordinary non-owner, matching grants from the user, Business Roles, and User Type contribute access. A lower grant does not cap a higher grant from another matching subject.

For example, suppose Alice is a Creator:

- Alice has a direct **View** grant on a report.
- Her `Report Authors` role has **Edit** on that report.
- Alice can edit it. The direct View grant is not a denial of Edit.

Removing Alice's direct entry still leaves the role grant. To revoke access, inspect every matching grant in the effective ACL. An unchecked permission means that entry does not grant it; the Console does not create an explicit deny entry to cancel other grants.

### Inheritance selects the ACL to use

When **Inherit parent permissions** is enabled, the resource follows its parent's effective ACL. If that parent also inherits, continue upward to the nearest non-inheriting ACL.

When inheritance is disabled, configure the resource's own entries. Do not think of this as adding a local deny on top of the parent's View/Edit grants. Re-enabling inheritance clears its existing local authorization entries and returns the resource to parent authorization; record those entries and review the confirmation before saving.

This has two operational consequences:

- A parent permission change affects descendants that continue to inherit, but not a descendant with its own ACL.
- Creating, moving, or deleting content can involve folder permissions as well as permissions on the item. When one of these operations fails, check the source and destination folders, not only the report's permissions.

Use **Public** for reports and folders that need shared ACL authorization. **Public** is a content location, not a promise that everyone can open everything in it. Personal content is not the place to configure shared file/folder ACLs.

### Owner and administrator exceptions

The resource owner receives owner access, and administrators have privileged repository access. Removing an ordinary ACL entry is not a way to deny the owner or an administrator. Use an ordinary **non-owner** account for ACL acceptance tests.

Owner access or datasource Full control is not, by itself, the Data Security bypass. The built-in **Administrator** and **SuperUser** roles bypass RLS and OLS. Do not assign an administrator role merely to give a manager unrestricted rows.

## 3. RLS: matching policies form a union

Each row policy belongs to one datasource and targets one schema and one physical table or view. Only enabled policies participate.

- **Within one policy:** conditions follow its **All (AND)** / **Any (OR)** groups.
- **Across matching policies for the same table:** conditions combine with **OR**, whether the match comes from a user, role, or User Type.
- **A matching Return all rows policy:** removes the RLS row restriction for that table, even if other policies are restrictive.
- **No matching enabled row policy:** RLS adds no restriction. This is **All rows**, not zero rows.

If a user matches both `region = NORTH` and `department = SALES` in separate policies, the result is North **or** Sales. To require both conditions, put them in the same **All (AND)** policy and check that no other matching policy broadens access.

Adding a row policy for North does not protect the table from users outside North. Likewise, disabling or deleting someone's only matching restrictive policy can increase their access to all rows. Review policy coverage before granting access to the analysis.

## 4. OLS: evaluate each policy, then combine exclusions

OLS controls whole objects or individual columns. It does not mask a value while leaving the column available. Hiding a column that an analysis depends on can make that analysis unavailable or cause its query to fail.

### Choose the visibility mode carefully

**Only selected subjects can view** is an allow-list for the selected objects. Within that policy, an explicitly selected user or a matching selected role/User Type remains eligible to see them; subjects outside the selection are excluded. Other policies can still exclude the same object.

**Selected subjects cannot view** needs particular care with role selections in the current evaluator:

- An explicitly selected **user** is excluded by that policy.
- For **role/User Type** selections, a match to just one selected role is not sufficient. In a deny-only policy, the role-based exclusion takes effect when the subject has a nonempty resolved role list and **all** of those roles are in the exclusion list. The resolved list also includes the User Type.
- An additional unselected role or User Type can therefore leave the object visible under that policy. Testing one role alone is not equivalent to testing a real user with several roles.

For example, a user resolves to `North Sales` and Reader. A deny-only policy selecting only `North Sales` is not a reliable way to hide `salary` from that user. Prefer **Only selected subjects can view** with a clearly defined `Payroll` audience, then test actual users inside and outside that audience. Do not maintain an expanding list of every other role as a substitute for an allow-list.

### An allow in one policy does not undo another policy's exclusion

After individual object policies are evaluated, excluded tables and columns accumulate. If one enabled policy excludes `salary` for Alice, another policy that allows Alice does not restore it. A whole-table exclusion also cannot be repaired with a column-level allowance.

When changing an exception, revise the policy that causes the exclusion. Do not keep adding “allow” policies until the editor appears to grant the desired access.

RLS and OLS remain separate: **Return all rows** means all rows of an otherwise accessible object, not all tables and columns.

## 5. Conflict reference

These results assume ordinary accounts unless a privileged role is explicitly named.

| Configuration | Effective result |
| --- | --- |
| Reader + a role's Edit ACL grant | No Creator capability; the ACL grant does not upgrade the User Type. |
| Creator + direct View + role Edit on the same resource | Edit is granted; direct View is not an Edit denial. |
| A user's ACL entry is removed, but a matching role or User Type still grants View | Access remains through that grant. |
| Child has inheritance enabled | Use the parent's effective ACL, not independent local entries. |
| Child has inheritance disabled | Use its own ACL; also check folder rights for structural operations. |
| North RLS + South RLS on the same table | North **OR** South rows. |
| Restrictive RLS + matching Return all rows | No RLS row restriction on that table. |
| No matching enabled RLS | All rows, subject to other controls and query filters. |
| One OLS policy allows an object; another actually excludes it | Object remains excluded. |
| Deny-only OLS selects one of several resolved roles | Do not assume exclusion; the all-roles condition described above matters. |
| ACL Full control or Return all rows + effective OLS exclusion | The object remains excluded. |
| Built-in Administrator or SuperUser | Data Security bypass; unsuitable for restriction tests. |

## 6. Typical access designs

The names below are illustrative, not built-in roles. Treat the expected results as acceptance criteria to test in your deployment.

### Regional readers sharing one report

1. Assign Reader and a regional Business Role, such as `North Sales`.
2. Grant the intended audience View on the shared report and the resource access required by its workflow. Check for broader User Type grants.
3. Enable a North row policy on each relevant physical table. Keep **Apply data security** enabled in the analysis model.
4. If some fields are sensitive, use an OLS allow-list for their permitted audience.
5. Test a North user, a South user, a user in both regions, and a user with no regional role. The dual-region user receives the union; the unassigned user must not accidentally receive access with unrestricted rows.

### Report authors without system administration

Assign Creator and an authoring role. Grant Edit on the intended shared folder/resources. Grant Full control only where the person must manage permissions or datasource policies. Keep ordinary business data policies in place and test with a non-owner account as well as the author.

### Executives with all rows but restricted sensitive fields

Assign Reader or Creator according to whether authoring is needed. Give the executive role the appropriate report ACL and a **Return all rows** policy for each intended table. Keep sensitive columns behind an OLS allow-list. Do not use Administrator or SuperUser for this design: those roles also bypass OLS.

### Embedded or shared access

Confirm the identity used by the actual request. A shared technical account has its own permissions, not those of each human viewer. A client-side region or tenant filter is not RLS.

Share links can use the sharer's data permissions; do not assume they enforce per-recipient RLS. Validate the chosen mode using the [Share Link guide](/documentation/Embedded/Share-link/) and test the real embedded, SSO, or API workflow separately.

## 7. Troubleshoot in a repeatable order

1. **Capture the failing action.** Record the account, timestamp, report path, model, datasource, expected result, and actual result. Distinguish “cannot open,” “cannot edit,” “missing field,” and “wrong rows.”
2. **Resolve identity.** Check the User Type and all Business Roles under **Users**. Check for Administrator/SuperUser, resource ownership, and a different identity used by sharing or embedding. After membership or User Type changes, sign out and back in before retesting; do not rely on an old session.
3. **Check capabilities and ACLs.** Inspect the resource's **Permissions**, inheritance source, direct entries, role grants, and User Type grants. For create/move/delete failures, inspect the relevant folders. A role's details page alone is not a complete calculation for a multi-role user.
4. **Check the data path.** Identify the actual datasource, schema, physical tables/views, and model's **Apply data security** setting. A policy on one datasource does not protect another connection to the same database.
5. **Run Data Security → Test access.** Select the actual user as **Simulated subject**, then the schema and tables. Check **Resolved subject**, **Row access**, **Effective condition**, **Field visibility**, and **Policies in effect**. Saved drafts and unsaved edits do not participate.
6. **Explain unexpected access using all policies.** For excess rows, look for missing coverage, additional matching roles, or Return all rows. For a visible sensitive field, check the OLS visibility mode and full resolved role list. For a missing field, inspect every policy that actually excludes it.
7. **Verify the real workflow.** Preview data is a sample of up to 50 rows, not full sign-in impersonation or an ACL test. Run the report as the ordinary user, including prohibited rows/fields and editable report filters. Test the actual integration if applicable.
8. **Record the result.** Keep the before/after configuration and test evidence with the change record. If unresolved, give support the identities, resource paths, policy names, timestamps, and expected/actual results; exclude passwords, tokens, and unnecessary sensitive records.

## 8. Audit permission changes

### Know what Audit Logs provides

Open **Settings → System → Audit Logs** as an administrator. This page configures audit collection, selected **Logged operations**, and **Retention cleanup**. It is not a complete permission-history or before/after ACL comparison screen.

Data Security operations have these audit event names:

| Change | Logged operation names |
| --- | --- |
| RLS policy creation, editing/state changes, deletion | `Row security add`, `Row security edit`, `Row security delete` |
| OLS policy creation, editing/state changes, deletion | `Object security add`, `Object security edit`, `Object security delete` |

Collection requires **Audit logging** and the relevant operation to be enabled when the event occurs. Turning collection on later does not reconstruct earlier changes. Event records can identify the actor, operation, target, and operation lifecycle, but do not constitute a complete snapshot of the rules before and after the change.

Do not assume that file/folder ACL edits, role membership changes, User Type changes, ownership changes, and model security-setting changes all have equivalent entries in this operation log. Keep a separate change record for them. Also retain identity-provider audit evidence when memberships are supplied by an external system.

### Use a permission-change record

For every material access change, retain:

- **Who and why:** requester, approver, operator, reason, and change/ticket identifier.
- **What and where:** affected users/roles/User Types; exact resource paths; datasource, schema, tables and columns; policy names and IDs where available.
- **Before and after:** memberships, ACL grants, inheritance/owner, policy conditions and enabled state, and relevant model settings. Capture these before deletion or replacement.
- **Impact and evidence:** intended access, representative allowed and prohibited cases, the complete resolved subject, Test access results, and the real-user workflow result.
- **Timing and recovery:** change time with timezone, related audit event identifiers where available, and the configuration needed to reverse an unintended change.

Before applying a change, confirm audit collection and retention meet your team's requirements. Afterward, review the corresponding records using your deployment's approved audit reporting or retrieval process; distinguish a started operation from a completed or failed one. Verify the saved configuration and effective access rather than treating the existence of a log entry as proof of success.

Preserve required evidence before retention expiry or manual cleanup. Restrict access to audit evidence itself, and never include credentials or unnecessary raw business data in the change record.

## Related topics

- [User Creation and User Types](/documentation/System/UserTypes/)
- [Access Control List](/documentation/System/Access-Control%20List/)
- [Data Security](/documentation/Datasource/Data-Security/)
- [Row-Level Security in Analytics](/documentation/Datasource/Row-Level-Security-in-Analytics/)

<!--
Maintenance evidence for the evaluation rules (source review, not an end-to-end
permission test report):
- datafor-modeler-plugin: auth/FileService.java doGetCanAccessList,
  prepareAclAce, setFileAcls, and canManage; auth/user/UsersService.java
  transUser and userTypeRoles.
- Repository ACL implementation: JcrRepositoryFileAclUtils.updateAcl and
  PentahoEntryCollector.findNonInheritingNode, addOwnerAce, and
  getRelevantAncestorAces. Console ACL writes grants, not deny ACEs.
- datafor-modeler-plugin: auth/policy/DataPolicyEngine.java
  evaluateRowPolicies, evaluateObjectPolicies, ObjectPolicy.isExcluded,
  and BYPASS_ROLES. In particular, role-only exclusions use containsAll,
  not an any-role match. datasource/utils/SessionUtils.java resolves the
  authority list including User Types. AuthConfigObjResource.buildPolicyRows
  preserves the editor's selected visibility mode for each grant.
- DataPolicyEngineTest.java has OR-combination and cross-policy object
  exclusion assertions; reading those tests is not a claim they were run here.
- Audit coverage: AuthConfigRowResource and AuthConfigObjResource operation
  hooks; datasource/utils/PentahoAuditHelper.java collection gating and event
  fields; Frontend packages/webconsole/src/pages/setting_content/audit/Audit.tsx
  and packages/common/src/locales/en.json for configuration controls.
Recheck these behaviors when the permission evaluator or audit coverage changes.
-->
