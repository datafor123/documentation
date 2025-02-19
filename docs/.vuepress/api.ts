import { defineNoteConfig } from "vuepress-theme-plume";

export const apiNote = defineNoteConfig({
	dir: "api",
	link: "/api",
	sidebar: [
		{
			text: "Authentication",
			collapsed: true,
			prefix: "/api/Authentication/",
			items: "auto",
		},
		{
			text: "Users",
			collapsed: true,
			prefix: "/api/Users/",
			items: "auto",
		},
		{
			text: "Roles",
			collapsed: true,
			prefix: "/api/Roles/",
			items: "auto",
		},
		{
			text: "User Settings",
			collapsed: true,
			prefix: "/api/User Settings/",
			items: "auto",
		},
		{
			text: "Files",
			collapsed: true,
			prefix: "/api/Files/",
			items: "auto",
		},
		{
			text: "Folders",
			collapsed: true,
			prefix: "/api/Folders/",
			items: "auto",
		},
		{
			text: "Recent",
			collapsed: true,
			prefix: "/api/Recent/",
			items: "auto",
		},
		{
			text: "Favorites",
			collapsed: true,
			prefix: "/api/Favorites/",
			items: "auto",
		},
		{
			text: "Connections",
			collapsed: true,
			prefix: "/api/Connections/",
			items: "auto",
		},
		{
			text: "Metadata",
			collapsed: true,
			prefix: "/api/Metadata/",
			items: "auto",
		},
		{
			text: "Models",
			collapsed: true,
			prefix: "/api/Models/",
			items: "auto",
		},
		{
			text: "Parameters",
			collapsed: true,
			prefix: "/api/Parameters/",
			items: "auto",
		},
		{
			text: "Dictionaries",
			collapsed: true,
			prefix: "/api/Dictionaries/",
			items: "auto",
		},
		{
			text: "Email",
			collapsed: true,
			prefix: "/api/Email/",
			items: "auto",
		},
		{
			text: "Version",
			collapsed: true,
			prefix: "/api/Version/",
			items: "auto",
		},
		{
			text: "Schedule",
			collapsed: true,
			prefix: "/api/Schedule/",
			items: "auto",
		},
		{
			text: "Token",
			collapsed: true,
			prefix: "/api/Token/",
			items: "auto",
		},
		{
			text: "System Settings",
			collapsed: true,
			prefix: "/api/System Settings/",
			items: "auto",
		},
		{
			text: "Lineage",
			collapsed: true,
			prefix: "/api/Lineage/",
			items: "auto",
		},
		{
			text: "Alert",
			collapsed: true,
			prefix: "/api/Alert/",
			items: "auto",
		},
		{
			text: "Data Security",
			collapsed: true,
			prefix: "/api/Data Security/",
			items: "auto",
		},
		{
			text: "Rows",
			collapsed: true,
			prefix: "/api/Data Security/Rows/",
			items: "auto",
		},
		{
			text: "Objects",
			collapsed: true,
			prefix: "/api/Data Security/Objects/",
			items: "auto",
		},
		{
			text: "Extention Plugins",
			collapsed: true,
			prefix: "/api/Extention Plugins/",
			items: "auto",
		},
		{
			text: "White Label",
			collapsed: true,
			prefix: "/api/Extention Plugins/White Label/",
			items: "auto",
		},
		{
			text: "Audit",
			collapsed: true,
			prefix: "/api/Extention Plugins/Audit/",
			items: "auto",
		},
		{
			text: "Backup",
			collapsed: true,
			prefix: "/api/Extention Plugins/Backup/",
			items: "auto",
		},
		{
			text: "LDAP",
			collapsed: true,
			prefix: "/api/Extention Plugins/LDAP/",
			items: "auto",
		},
		{
			text: "OAuth2",
			collapsed: true,
			prefix: "/api/Extention Plugins/OAuth2/",
			items: "auto",
		},
		{
			text: "SAML2",
			collapsed: true,
			prefix: "/api/Extention Plugins/SAML2/",
			items: "auto",
		},
		{
			text: "Cas",
			collapsed: true,
			prefix: "/api/Extention Plugins/Cas/",
			items: "auto",
		}
	],
});

export const apiNoteZH = defineNoteConfig({
	dir: "zh/api",
	link: "/api",
	sidebar: [
		{
			text: "Authentication",
			collapsed: true,
			prefix: "/api/Authentication/",
			items: "auto",
		}
	],
});
