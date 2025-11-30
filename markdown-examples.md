# 测试页面

## 测试折叠框 & 目录生成
::: details 目录
[[toc]]
:::

<details>
  <summary>点我展开</summary>
  Markdown默认折叠语法，Vitepress可以使用容器折叠语法，更加美观
</details>

## 测试图片
![测试图片，如果你看到这行文字，说明加载失败了](/homePageBG.png)

## 测试视频
<video src="/testVideoV1.mp4" controls="controls"></video>
这是原生播放器。

<xgplayer url="/testVideoV1.mp4" poster="/homePageBG.png" />
这是使用 <span class="mark">xgplayer</span> 组件的播放器。

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115630854446818&bvid=BV1bFUoB8E1k&cid=34351811385&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
这是 B 站视频嵌入播放器。

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iZ3b305mx00?si=-i7aXu-BC6Mw_KDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
这是 YouTube 视频嵌入播放器。

## 测试文段
<span class="mark">这是一个测试文段，用于展示自定义样式的效果。</span>

<mark>这是一个测试文段，用于展示自定义样式的效果。</mark>


## Markdown 扩展功能示例

> 本文档展示了 VitePress 内置的部分 Markdown 扩展功能。

## 语法高亮

VitePress 基于 [Shiki](https://github.com/shikijs/shiki) 提供语法高亮功能，支持行高亮等增强特性：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个可展开详情块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个可展开详情块。
:::

## 更多功能

查看 [完整 Markdown 扩展列表](https://vitepress.dev/guide/markdown) 文档了解更多细节。
