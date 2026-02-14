---
title: 搭建一个基于vite的快速开发项目结构
date: 2025-12-28T09:00:00Z
lang: zh
duration: 8min
---

[[toc]]

插件：

- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)
- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import/releases)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [markdown-it-table-of-contents](https://github.com/cmaas/markdown-it-table-of-contents)
- [@shikijs/markdown-it](https://github.com/antfu/markdown-it-shiki)
- [shiki](https://github.com/shikijs/shiki)
- [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons?tab=readme-ov-file)
- [vite-plugin-inspect](https://github.com/antfu-collective/vite-plugin-inspect)
- [vite-plugin-optimize-exclude](https://github.com/antfu/vite-plugin-optimize-exclude)

## 一、创建一个vite项目

```js
pnpm create vite
```

## 二、分类管理项目依赖

### 新建`pnpm-workspace.yaml`文件

将项目依赖catalogs成以下几类<br>

- <code important-text-purple>vue-core</code>：项目运行必须的核心依赖
- <code important-text-purple>style</code>：样式
- <code important-text-purple>ui-framework</code>：UI框架、组件库
- <code important-text-purple>ui-components</code>：常用组件
- <code important-text-purple>data</code>：数据处理
- <code important-text-purple>utils</code>：工具库
- <code important-text-purple>code-quality</code>：代码质量
- <code important-text-purple>build</code>：构建工具
- <code important-text-purple>test</code>：测试
- <code important-text-purple>docs</code>：文档
- <code important-text-purple>deploy</code>：部署
- <code important-text-purple>other</code>：其他

### 将`package.json`中的版本替换

在 package.json 的 `dependencies/devDependencies` 里加：**"包名": "catalog:分类名"**

## 三、配置unplugin-vue-router按文件自动生成路由

```js
pnpm install -D unplugin-vue-router
```

在`vite.config.ts`中

```js
import VueRouter from 'unplugin-vue-router/vite'

VueRouter({
  routesFolder: 'pages',
  extensions: ['.vue', '.md'],
}),
```

从`pages`目录扫描`.vue`和`.md`文件，自动生成对应路由

## 四、配置@vitejs/plugin-vue将指定文件编译成vue单文件组件

在`vite.config.ts`中

```js
import Vue from '@vitejs/plugin-vue'
Vue({
  include: [/\.vue$/, /\.md$/],
}),
```

## 五、配置unplugin-vue-markdown在vue项目中把Markdown当成vue组件来用

在`vite.config.ts`的 `plugins` 数组中添加：

```ts
import Markdown from 'unplugin-vue-markdown/vite'

Markdown({
  wrapperComponent: id => id.includes('/demo/')
    ? 'WrapperDemo'
    : 'WrapperPost',
  wrapperClasses: (id, code) => code.includes('xxx')
    ? ''
    : 'prose m-auto slide-enter-content',
  headEnabled: true,
  exportFrontmatter: false,
  exposeFrontmatter: false,
  exposeExcerpt: false,
  markdownItOptions: {
    quotes: '""\'\'',
  },
}),
```

## 六、安装@unhead/vue

@unhead/vue是head管理库，用来在代码里改页面的 &lt;head&gt; 内容

主要用途：

- 改标题：根据当前路由/页面设置 &lt;title&gt;（浏览器标签上的标题）。
- 改 meta：设置 &lt;meta name="description"&gt;、OG 标签等，方便 SEO 和分享预览。
- 按需注入：不同页面/组件可以各自调用 useHead()，最终合并成一份 head，由 unhead 统一写入 DOM。

```js
pnpm add @unhead/vue
```

在`main.ts`中

```js
import { createHead } from '@unhead/vue/client'
app.use(createHead())
```

## 七、配置unplugin-auto-import自动导入

在`vite.config.ts`中

```ts
    AutoImport({
      dts: true,
      imports: [
        'vue',
        VueRouterAutoImports,
        // '@vueuse/core',
      ],
    }),
```

## 八、配置unocss

```js
pnpm add -D unocss
pnpm add @unocss/reset   # 可选，用于 reset 样式（如 tailwind 风格）

// vite.config.ts
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
    // ... 其他插件
  ],
})

// main.ts
import '@unocss/reset/tailwind.css'  // 可选，要 reset 时加
import 'uno.css'

// add unocss.config.ts
```

## 九、配置unplugin-vue-components组件自动导入

```js
pnpm add -D unplugin-vue-components

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [

      ],
    }),
```

## 十、安装vueuse并设置自动导入

```js
pnpm add @vueuse/core
```

## 十一、样式文件导入并在main.ts里面注册

- **src/styles/main.css**
    - 背景/滚动条变量（如 --c-bg）
    - 暗色模式（.dark）
    - 顶部进度条（#nprogress）
    - 正文入场动画（slide-enter）
    - 视口过渡等
- **src/styles/prose.css**
    - 文章正文排版：标题、段落、列表、引用、代码块、表格等（.prose 一套）。
- **src/styles/markdown.css**
    - 代码高亮主题（Shiki / twoslash）
    - 目录样式（.table-of-contents）
    - 链接、引用等 Markdown 相关样式。

## 十二、配置markdown-it-table-of-contents和markdown-it-anchor根据文章里的标题自动生成目录

- markdown-it-anchor：给每个标题加上 id（锚点）。
- markdown-it-table-of-contents：扫描这些标题，生成带 #id 链接的嵌套列表，即侧边目录。

导入`slugify`文件把任意字符串（比如标题）转成适合做 URL 锚点 / id 的短字符串。这样生成的 id 会用在：

- markdown-it-anchor：给每个标题加上 id="xxx"，用于锚点跳转
- markdown-it-table-of-contents：目录里的链接 #xxx 要跟标题 id 一致，所以也用同一套 slugify

需要添加`diacritics`这个npm包

- 作用：处理变音符号 / 重音符号，把带符号的字符转成对应的基础拉丁字母。

```js
      async markdownItSetup(md) {
        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
        })
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })
      },
```

## 十三、配置Iconify图标(结合unocss)
```js
pnpm add -D unocss @unocss/preset-icons @iconify/json
```
在unocss.config.ts中配置
```js
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        verticalAlign: 'text-bottom',
      },
    }),
    // 你其他的 preset，如 presetUno() 等
  ],
})
```
图标写法
```js
<div class="i-ri-menu-2-fill" />
<div i-ri-menu-2-fill />
```


## 十四、配置markdown代码高亮
### 1. 下载依赖
```js
pnpm add -D @shikijs/markdown-it @shikijs/transformers @shikijs/twoslash
```
### 2. `vite.config.js中引入`
```js
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItShiki from '@shikijs/markdown-it'
import {transformerNotationDiff,transformerNotationHighlight,transformerNotationWordHighlight} from '@shikijs/transformers'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
```
### 3. `vite.config.js中配置`
```js
        md.use(await MarkdownItShiki({
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          defaultColor:false,
          cssVariablePrefix:'--s-',
          transformers: [
            transformerTwoslash({
              explicitTrigger:true,
              renderer:rendererRich()
            }),
            // 支持diff语法
            transformerNotationDiff(),
            // 支持行高亮
            transformerNotationHighlight(),
            // 支持单词高亮
            transformerNotationWordHighlight(),
          ],
        }))
```

## 十五、配置markdown-it-link-attributes为Markdown中的外部链接自动添加属性

```js
md.use(LinkAttributes, {
  matcher: (link: string) => /^https?:\/\//.test(link),  // 匹配器：只匹配 http:// 或 https:// 开头的链接
  attrs: {
    target: '_blank',    // 在新标签页打开
    rel: 'noopener',     // 安全属性，防止新页面访问 window.opener
  },
})
```

## 十六、配置unplugin-icons自动导入图标

```js
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // 在模板中使用图标组件时，无需手动 import，会自动解析并导入
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
```

`IconsResolver`是`unplugin-icons`提供的解析器，配合`unplugin-vue-components`实现图标的自动导入。

具体功能：
自动导入图标组件：在模板中使用图标组件时，无需手动 import，会自动解析并导入。
componentPrefix: '' 表示组件名无前缀，可以直接使用图标名作为组件。

## 十七、配置unplugin-icons/vite按需使用图标
```js
Icons({
  defaultClass: 'inline',              // 默认添加 'inline' CSS 类
  defaultStyle: 'vertical-align: sub;', // 默认添加内联样式
}),
```

## 十八、配置vite-plugin-inspect
vite-plugin-inspect 是一个 Vite 调试插件，用于：
- 检查 Vite 插件的中间状态
- 查看插件如何转换文件
- 调试构建过程
- 在开发服务器中访问 /__inspect/ 查看插件信息
- 它是开发时的调试工具，不影响生产构建。

## 十九、配置vite-plugin-optimize-exclude
Vite 会预构建 CommonJS/UMD 模块，提升开发性能，但某些包可能不需要预构建，或预构建会导致问题
vite-plugin-optimize-exclude的作用
- 将指定包从预构建中排除
- 避免不必要的预构建
- 解决某些包的兼容性问题