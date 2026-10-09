import { defineClientConfig } from "vuepress/client";
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import "./theme/styles/custom.css";
import { normalizePath, redirects } from "./redirects";

export default defineClientConfig({
	enhance({ app, router }) {
		// built-in components
		// app.component('RepoCard', RepoCard)
		// app.component('NpmBadge', NpmBadge)
		// app.component('NpmBadgeGroup', NpmBadgeGroup)
		// app.component('Swiper', Swiper) // you should install `swiper`
		// your custom components
		// app.component('CustomComponent', CustomComponent)
		router.beforeEach((to, from, next) => {
			const moved = redirects[normalizePath(to.path)];
			if (to.path === "/" || to.path === "/documentation") {
				next("/documentation/welcome/"); // 访问首页时自动重定向
			} else if (moved) {
				const [path, anchor] = moved.split("#");
				next({ path, hash: anchor ? `#${anchor}` : to.hash, replace: true });
			} else {
				next();
			}
		});
	},
});
