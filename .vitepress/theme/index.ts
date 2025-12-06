// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/var.css'
import './style/custom-block.css'
import './style/hidden.css'
import './style/marker.css'
import './style/sidebarIcons.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
// @ts-ignore
import xgplayer from "./components/xgplayer.vue"

export default {
  extends: DefaultTheme,
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'laikit-dev/ng-docs', //仓库
      repoId: 'R_kgDOQfDGWA', //仓库ID
      category: 'Polls', // 讨论分类
      categoryId: 'DIC_kwDOQfDGWM4CzeFq', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({app}) { 
    app.component('xgplayer' , xgplayer)
  }
} satisfies Theme