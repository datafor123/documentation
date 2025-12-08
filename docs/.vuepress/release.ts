import { defineNoteConfig } from "vuepress-theme-plume";

export const releaseNote = defineNoteConfig({
	dir: "release",
	link: "/release",
	sidebar: [
		{
			text: "2025-12 Version 7.20",
			link: "/release/v7.20.md",
		},
		{
			text: "2025-08 Version 7.10",
			link: "/release/v7.1.md",
		},
		{
			text: "2025-05 Version 7.05",
			link: "/release/v7.05.md",
		},	
		{
			text: "2024-11 Version 6.08",
			link: "/release/v6.08.md",
		},
		{
			text: "2024-09 Version 6.07",
			link: "/release/v6.07.md",
		},
		{
			text: "2024-07 Version 6.06",
			link: "/release/v6.06.md",
		},
		{
			text: "2024-05 Version6.05",
			link: "/release/v6.05.md",
		},
		{
			text: "2024-03 Version5.05",
			link: "/release/v5.05.md",
		},		
		{
			text: "2024-01 Version5.04",
			link: "/release/v5.04.md",
		},	
		{
			text: "2023-11 Version5.03",
			link: "/release/v5.03.md",
		},	
		{
			text: "2023-09 Version5.02",
			link: "/release/v5.02.md",
		},	
		{
			text: "2023-07 Version5.01",
			link: "/release/v5.01.md",
		},	
		{
			text: "2023-05 Version5.00",
			link: "/release/v5.0.md",
		},	
		{
			text: "2023-03 Version4.03",
			link: "/release/v4.03.md",
		},	
		{
			text: "2023-01 Version4.02",
			link: "/release/v4.02.md",
		},	
		{
			text: "2022-11 Version4.01",
			link: "/release/v4.01.md",
		},	
		{
			text: "2022-09 Version4.00",
			link: "/release/v4.00.md",
		},			
	],
});

export const releaseNoteZH = defineNoteConfig({
	dir: "zh/release",
	link: "/release",
	sidebar: "auto",
});
