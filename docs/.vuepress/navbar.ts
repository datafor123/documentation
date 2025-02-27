import { defineNavbarConfig } from "vuepress-theme-plume";

export const enNavbar = defineNavbarConfig([
	{
		text: "Documentation",
		link: "/documentation/intro.md",
		activeMatch: "^/documentation/",
	},
	{
		text: "API",
		link: "/api/intro.md",
		activeMatch: "^/api/",
	},
	{
		text: "Release notes",
		link: "/release/intro.md",
		activeMatch: "^/release/",
	},
	// {
	// 	text: "Blog",
	// 	link: "/blog/intro.md",
	// 	activeMatch: "^/blog/",
	// 	icon: "carbon:idea",
	// },
]);

export const zhNavbar = defineNavbarConfig([
	{
		text: "文档",
		link: "/documentation/intro.md",
		activeMatch: "^/documentation/",
	},
	{ text: "接口", link: "/api/intro.md", activeMatch: "^/api/" },
	//{ text: "博客", link: "/blog/intro.md", activeMatch: "^/release/" },
]);
