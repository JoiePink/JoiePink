import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItShiki from '@shikijs/markdown-it'
import MarkdownItGitHubMentionCard from 'markdown-it-github-mention-card'
import {transformerNotationDiff,transformerNotationHighlight,transformerNotationWordHighlight} from '@shikijs/transformers'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import LinkAttributes from 'markdown-it-link-attributes'
import MarkdownItMagicLink from 'markdown-it-magic-link'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import TOC from 'markdown-it-table-of-contents'
import { slugify } from './scripts/slugify'
import anchor from 'markdown-it-anchor'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import Exclude from 'vite-plugin-optimize-exclude'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  server: {
    port: 2019,
    open: true,
  },
  plugins: [
    UnoCSS(),
    VueRouter({
      routesFolder: 'pages',
      extensions: ['.vue', '.md'],
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperComponent: id => id.includes('/demo/')
        ? 'WrapperDemo'
        : 'WrapperPost',
      wrapperClasses: (code) => code.includes('@layout-full-width')
        ? ''
        : 'prose m-auto slide-enter-content',
      headEnabled: false,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: '""\'\'',
      },
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
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        // 先生成 GitHub mention 的 DOM，再用 magic-link 处理普通链接
        md.use(MarkdownItGitHubMentionCard)
        md.use(MarkdownItMagicLink, {
          linksMap: {
            'VueUse': 'https://github.com/vueuse/vueuse',
            'UnoCSS': 'https://github.com/unocss/unocss',
            'Vue': 'https://github.com/vuejs/core',
            'Vite': 'https://github.com/vitejs/vite',
            'Shiki': 'https://github.com/shikijs/shiki',
            'Unplugin': 'https://github.com/unplugin',
            'Vite PWA': 'https://github.com/vite-pwa',
            'i18n Ally': 'https://github.com/lokalise/i18n-ally',
            'ESLint': 'https://github.com/eslint/eslint',
            'Element Plus': 'https://github.com/element-plus/element-plus',
            'TDesign': 'https://github.com/Tencent/tdesign',
            'Wxapp Poster': 'https://github.com/cassie-ye/wxapp-download-post',
            'Icônes': 'https://github.com/antfu-collective/icones',
            'Iconify': 'https://github.com/iconify/iconify',
            'TypeScript': 'https://www.typescriptlang.org/',
            'Ruo Yi': {link:'https://github.com/yangzongzhuan/RuoYi-Vue3',imageUrl:'/public/ruoyi.png'},
            'Vant': {link:'https://github.com/youzan/vant',imageUrl:'https://img.yzcdn.cn/vant/logo.png'},
            'Cassieye Theme': {link:'https://marketplace.visualstudio.com/items?itemName=Cassieye-azuretools.Cassieye-Theme',imageUrl:'/public/cassieye-theme.png'},
            'Coffee': {link:'https://coffee.joiepink.space/',imageUrl:'/public/coffee.png'},
            'Markdown': { link: 'https://www.markdownguide.org/', imageUrl: 'https://www.markdownguide.org/assets/favicons/apple-touch-icon.png' },
            'WeiXin': { link: 'https://developers.weixin.qq.com', imageUrl: 'https://res8.wxqcloud.qq.com.cn/community/dist/community/images/logo_miniprogram_013191.png' },
            'Amap': { link: 'https://lbs.amap.com', imageUrl: 'https://cdn.apifox.com/app/project-icon/custom/20220915/59a19ceb-d3ff-4332-8c1d-a5f246549b16.jpeg' },
          },
          imageOverrides: [
            ['https://github.com/vuejs/core', 'https://vuejs.org/logo.svg'],
            ['https://github.com/vitejs/vite', 'https://vitejs.dev/logo.svg'],
          ],
        })
      },
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
      ],
    }),
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
    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),
    Inspect(),
    Exclude(),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT')
          next(warning)
      },
    },
  },
  // ssgOptions: {
  //   formatting: 'minify',
  // },
})
