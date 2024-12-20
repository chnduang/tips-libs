const base = "/";

const nav = [
  // { text: "镜像", link: "/" },
  { text: "前端组件", link: "/libs" },
  { text: "AI", link: "/ai" },
  {
    text: "链接",
    ariaLabel: "链接",
    items: [
      {
        text: "前端归纳",
        link: "https://copy.aduang.cn/",
        target: "_blank",
      },
      {
        text: "Github",
        link: "https://github.com/chnduang/cv-collect-blog.git",
        target: "_blank",
      },
    ],
  },
];

module.exports = {
  title: "组件归纳",
  description: "前端社区组件",
  base,
  host: "localhost",
  port: 9208,
  head: [
    ["link", { rel: "icon", href: "/logo.webp" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "meta",
      {
        name: "keywords",
        content: "前端社区组件",
      },
    ],
  ],
  plugins: [
    // ["@vuepress/medium-zoom", true],
    ["@vuepress/back-to-top", true],
    // ["vuepress-plugin-code-copy", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // [
    //   "vuepress-plugin-right-anchor",
    //   {
    //     showDepth: 3,
    //     ignore: ["/", "/api/"],
    //     expand: {
    //       trigger: "click",
    //       clickModeDefaultOpen: true,
    //     },
    //     customClass: "your-customClass",
    //     disableGlobalUI: false,
    //   },
    // ],
  ],
  themeConfig: {
    searchMaxSuggestions: 10,
    lastUpdated: "上次更新",
    editLinks: true,
    smoothScroll: true,
    nav,
    sidebar: "auto",
    sidebarDepth: 3,
  },
};
