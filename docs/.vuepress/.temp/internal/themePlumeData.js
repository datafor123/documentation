export const themeData = {"locales":{"/":{"selectLanguageName":"English","selectLanguageText":"Languages","appearanceText":"Appearance","lightModeSwitchTitle":"Switch to light theme","darkModeSwitchTitle":"Switch to dark theme","editLinkText":"Edit this page","contributorsText":"","lastUpdatedText":"","changelogText":"Changelog","changelogOnText":"On","changelogButtonText":"View All Changelog","copyrightText":"Copyright","copyrightAuthorText":"Copyright Ownership:","copyrightCreationOriginalText":"This article link:","copyrightCreationTranslateText":"This article is translated from:","copyrightCreationReprintText":"This article is reprint from:","copyrightLicenseText":"License under:","encryptButtonText":"Confirm","encryptPlaceholder":"Enter password","encryptGlobalText":"Only password can access this site","encryptPageText":"Only password can access this page","homeText":"Home","blogText":"Blog","tagText":"Tags","archiveText":"Archives","categoryText":"Categories","archiveTotalText":"{count} articles","footer":{"message":"OPTIMIBI Documentation","copyright":"Copyright ©2025 Optimibi All rights reserved."},"lastUpdated":false,"contributors":false,"logo":"/plume.svg","notFound":{"code":" ","title":" ","quote":" ","linkLabel":" ","linkText":" "},"profile":{"avatar":"/plume.svg","name":"Optimibi","description":"Optimibi documentation"},"home":"https://www.optimibi.com","navbar":[{"text":"Documentations","link":"/documentation/intro.md","activeMatch":"^/documentation/|^/"},{"text":"API","link":"/api/intro.md","activeMatch":"^/api/"}]}},"appearance":true,"blog":false,"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":false,"changelog":false,"prevPage":true,"nextPage":true,"footer":{"message":"Power by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"lastUpdated":false,"logo":"/plume.svg","lastUpdatedText":"","contributorsText":"","notFound":{"code":" ","title":" ","quote":" ","linkLabel":" ","linkText":" "}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
