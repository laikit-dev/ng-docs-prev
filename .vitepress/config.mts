import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/ng-docs-prev/',
  title: "LGS NG 帮助中心",
  description: "LGS NG 帮助中心 - 提供全面的使用指南和开发文档",
  lang: 'zh-CN',
  sitemap: {
    hostname: 'https://ng-help-prev.luogu.me',
  },
  head: [
    ["link", { rel: "icon", href: "https://www.luogu.me/static/self/img/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#7AD6EF" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "zh-CN" }],
    ["meta", { name: "og:title", content: "LGS NG 帮助中心" }],
    ["meta", { name: "og:site_name", content: "LGS NG 帮助中心" }],
    ["meta", { name: "og:image", content: "https://www.luogu.me/favicon.ico" }],
    /*
    ['script', { 
            async : '', 
            src : "https://analytics.luogu.me/script.js", 
            "data-website-id" : "32e91990-3c50-4462-8be5-0e6886e6c380"
         }]
            */
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://www.luogu.me/static/self/img/favicon.ico',
    outlineTitle: "页面导航",
    outline: [2, 6],
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel:'目录', 
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-exaples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "基于 AGPL-3.0 协议开源",
      copyright: "© 2025 laikit-dev ",
    },
    notFound: {
      title: "页面未找到",
      quote: "抱歉，您访问的页面不存在。可能链接地址有误，或页面已被移动。",
      linkLabel: "hero",
      linkText: "TAKE ME HOME",
    },
    
  },
  cleanUrls:true,
})
