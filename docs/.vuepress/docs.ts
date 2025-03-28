import { defineNoteConfig } from "vuepress-theme-plume";

export const documentationNote = defineNoteConfig({
	dir: "documenation",
	link: "/documentation",
	sidebar: [
		{
			text: "Welcome",
			link: "/documentation/intro.md",
		},

		{
			text: "Start",
			collapsed: true,
			prefix: "/documentation/Start/",
			items: "auto",
		},
		{
			text: "Setup",
			collapsed: true,
			prefix: "/documentation/Setup/",
			items: "auto",
		},
		{
			text: "Console",
			collapsed: true,
			prefix: "/documentation/Console/",
			items: "auto",
		},
		{
			text: "Datasource",
			collapsed: true,
			prefix: "/documentation/Datasource/",
			items: "auto",
		},
		{
			text: "Model",
			collapsed: true,
			prefix: "/documentation/Model/",
			items: "auto",
		},
		{
			text: "Visualization",
			collapsed: true,
			prefix: "/documentation/Visualization/",
			items: [
				{
					text: "Charts",
					collapsed: true,
					prefix: "/documentation/Visualization/Chart/",
					items: "auto",
				},
				{
					text: "Tables",
					collapsed: true,
					prefix: "/documentation/Visualization/Table/",
					items: "auto",
				},
				{
					text: "Maps",
					collapsed: true,
					prefix: "/documentation/Visualization/Map/",
					items: "auto",
				},				
				{
					text: "Filters",
					collapsed: true,
					prefix: "/documentation/Visualization/Filters/",
					items: "auto",
				},	
				{
					text: "Assists",
					collapsed: true,
					prefix: "/documentation/Visualization/Assists/",
					items: "auto",
				},
				{
					text: "Report Page Size and Display Settings",
					link: "/documentation/Visualization/08 报表页的大小和显示方式.md",
				},				
				{
					text: "Add Charts",
					link: "/documentation/Visualization/10 添加图表.md",
				},				
				{
					text: "Mobile Layout View",
					link: "/documentation/Visualization/12 手机布局视图.md",
				},
				{
					text: "Filter Subscriptions for Charts",
					link: "/documentation/Visualization/20 筛选器订阅.md",
				},
				{
					text: "Multi-Tabbed Page",
					link: "/documentation/Visualization/25 制作多标签页面.md",
				},				
				{
					text: "Tooltips",
					link: "/documentation/Visualization/40_图表组件的工具提示.md",
				},
				{
					text: "X Axis Type Settings - Continuous and Categorical",
					link: "/documentation/Visualization/81 X 轴类型设置：连续和类别.md",
				},
				{
					text: "Conditional Colors",
					link: "/documentation/Visualization/110 条件颜色设置.md",
				},
				{
					text: "Parameter-Driven Tab Switching",
					link: "/documentation/Visualization/120 参数驱动Tabs的显示.md",
				},
				{
					text: "Export",
					link: "/documentation/Visualization/130 导出.md",
				},
			],
		},
		{
			text: "Analysis",
			collapsed: true,
			prefix: "/documentation/Analysis/",
			items: "auto",
		},
		{
			text: "Embedded",
			collapsed: true,
			prefix: "/documentation/Embedded/",
			items: "auto",
		},
		{
			text: "Tools",
			collapsed: true,
			prefix: "/documentation/Tools/",
			items: "auto",
		},
		{
			text: "System",
			collapsed: true,
			prefix: "/documentation/System/",
			items: "auto",
		},
		{
			text: "FAQs",
			collapsed: true,
			prefix: "/documentation/FAQs/",
			items: "auto",
		},
		{
			text: "Advanced",
			collapsed: true,
			prefix: "/documentation/Advanced/",
			items: "auto",
		},
		{
			text: "Best Practices",
			collapsed: true,
			prefix: "/documentation/Best/",
			items: "auto",
		},
		{
			text: "Security & Compliance",
			collapsed: true,
			prefix: "/documentation/Security/",
			items: "auto",
		},		
	],
});

export const documentationNoteZH = defineNoteConfig({
	dir: "zh/documenation",
	link: "/documenation",
	sidebar: [
		{
			text: "欢迎",
			link: "/documentation/intro.md",
		},
		{
			text: "更新",
			collapsed: true,
			prefix: "/documentation/Update/",
			items: "auto",
		},
		{
			text: "开始",
			collapsed: true,
			prefix: "/documentation/Start/",
			items: "auto",
		},
		{
			text: "设置",
			collapsed: true,
			prefix: "/documentation/Setup/",
			items: "auto",
		},
		{
			text: "控制台",
			collapsed: true,
			prefix: "/documentation/Console/",
			items: "auto",
		},
		{
			text: "数据源",
			collapsed: true,
			prefix: "/documentation/Datasource/",
			items: "auto",
		},
		{
			text: "模型",
			collapsed: true,
			prefix: "/documentation/Model/",
			items: "auto",
		},
		{
			text: "可视化",
			collapsed: true,
			prefix: "/documentation/Visualization/",
			items: "auto",
		},
		{
			text: "分析",
			collapsed: true,
			prefix: "/documentation/Analysis/",
			items: "auto",
		},
		{
			text: "分享",
			collapsed: true,
			prefix: "/documentation/Share/",
			items: "auto",
		},
		{
			text: "工具",
			collapsed: true,
			prefix: "/documentation/Tools/",
			items: "auto",
		},
		{
			text: "系统",
			collapsed: true,
			prefix: "/documentation/System/",
			items: "auto",
		},
		{
			text: "问答",
			collapsed: true,
			prefix: "/documentation/Q&A/",
			items: "auto",
		},
		{
			text: "高级",
			collapsed: true,
			prefix: "/documentation/Advanced/",
			items: "auto",
		},
		{
			text: "最佳",
			collapsed: true,
			prefix: "/documentation/Best/",
			items: "auto",
		},
	],
});
