/**
 * Old page URLs that moved (pages merged or permalinks renamed).
 * Keys and values are site paths with a trailing slash; spaces stay literal.
 * Used twice: client.ts redirects in-app navigation, and config.ts writes a
 * static redirect page at each old path so bookmarks and search results work.
 */
export const redirects: Record<string, string> = {
	"/documentation/AI-Agent/AI-Agent-Overview-and-Roadmap/": "/documentation/AI-Agent/AI-Agent-Overview/",
	"/documentation/AI-Agent/LLM-Permission-Management/": "/documentation/AI-Agent/AI-Operations-and-Quotas/",
	"/documentation/Analysis/Exploratory Analysis/": "/documentation/Analysis/Exploratory-Analysis/",
	"/documentation/Analysis/Using-Parameters-in-Component-Titles/": "/documentation/Analysis/Creating-Parameters/#component-titles",
	"/documentation/Best/Filter by last date in the cube/": "/documentation/Visualization/Datepicker/",
	"/documentation/Embedded/How-SSO-Improves-the-Embedded-Analytics-Experience/": "/documentation/Embedded/Signing-In-Users/",
	"/documentation/Embedded/Reports-REST-API/": "/documentation/Embedded/Report-URLs/",
	"/documentation/Embedded/White-Label/": "/documentation/Console/Branding/",
	"/documentation/FAQs/Time-Axis/": "/documentation/Visualization/Datepicker/#filter-by-time-axis",
	"/documentation/Pass-parameters-through-URL/": "/documentation/Embedded/URL-Parameters/",
	"/documentation/SDK-Embedding/": "/documentation/Embedded/SDK-Embedding/",
	"/documentation/Setup/Deploying-Datafor-Using-Dockers/": "/documentation/Setup/Deploying-Datafor-Using-Docker/",
	"/documentation/Setup/repository-reparation-deployment-guide/": "/documentation/Setup/Repository-Separation-Deployment-Guide/",
	"/documentation/System/Access-Control List/": "/documentation/System/Access-Control-List/",
	"/documentation/System/Modify-Password/": "/documentation/System/Users/#_6-resetting-a-password",
	"/documentation/System/UserTypes/": "/documentation/System/Users/",
	"/documentation/Tools/Increasing-Memory-Limit/": "/documentation/Best/Performance-Tuning/#memory-heap-size",
	"/documentation/Visualization/100-Stacked-Bar-Chart/": "/documentation/Visualization/100-Stacked-Column-Chart/#column-or-bar",
	"/documentation/Visualization/Combo Chart/": "/documentation/Visualization/Combo-Chart/",
	"/documentation/Visualization/Ellipse/": "/documentation/Visualization/Shapes/#common-shapes",
	"/documentation/Visualization/Line/": "/documentation/Visualization/Shapes/#common-shapes",
	"/documentation/Visualization/Parameter-Driven-Tab-Switching/": "/documentation/Visualization/Multi-Tabbed-Page/#default-tab-rules",
	"/documentation/Visualization/Rectangle/": "/documentation/Visualization/Shapes/#common-shapes",
	"/documentation/Visualization/Stacked-Bar-Chart/": "/documentation/Visualization/Stacked-Column-Chart/#column-or-bar",
	"/documentation/Visualization/Stacked-Ratio-Chart/": "/documentation/Visualization/Area/#how-100-shares-are-calculated",
	"/documentation/Visualization/Stacked0-Area-Chart/": "/documentation/Visualization/Area/#how-stacking-behaves",
	"/documentation/Visualization/Tabs-Component/": "/documentation/Visualization/Multi-Tabbed-Page/"
};

export function normalizePath(p: string): string {
	let path = p;
	try {
		path = decodeURI(p);
	} catch {
		// keep the raw path if it is not valid percent-encoding
	}
	return path.endsWith("/") || path.endsWith(".html") ? path : `${path}/`;
}
