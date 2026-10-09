---
title: "Default Tab Rules"
permalink: /documentation/Visualization/Parameter-Driven-Tab-Switching/
createTime: 2026/09/04 13:35:20
---

# Default Tab Rules

Choose a tab using a system value or a report/global parameter. The current entry is **Actions → Default tab rules**.

1. Add and name the tabs under **Data**.
2. Open **Actions → Default tab rules → Settings** using the ellipsis button. The dialog is titled **Default tab rules**.
3. Choose **Parameter type → System parameters** or **Custom parameters**.
4. Select the parameter under **Parameters**.
5. Map each tab to its **Parameter values**, then click **OK**.
6. Preview with the intended value and save the report.

![Default tab rules and parameter mapping](./images/current/default-tab-rules.jpg)

For parameter navigation, create a Text parameter with a list such as Overview and Details, then bind a Dropdown or List box to that parameter. Use a single selection and distinct mapped values. Check both the initial tab and the result after changing the controller.

When the report opens, a matching rule wins; otherwise **Data → Default tab** (a named tab or **Same as when saved**) applies, then the tab that was showing when the report was saved, then the first visible tab. Hidden tabs are never opened.

Under **Style → Tab**, **Hide tab header** hides the tab bar in the report. Turn it on only when another control can reach every tab, for example a button with the click action **Switch tab page**. Rules and hidden headers control navigation; use resource permissions to control access.

See [Creating Parameters](/documentation/Analysis/Creating-Parameters/), [Bind Filters to Parameters](/documentation/Analysis/Parameter-Controllers/), and [Tabs](/documentation/Visualization/Multi-Tabbed-Page/).
