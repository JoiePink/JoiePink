<script setup lang="ts">
type Tech = {
    name: string
    icon: string
}

type TechCategory = {
    type: string
    list: Tech[]
}

const techList = ref<TechCategory[]>([
    {
        type: 'Framework And Core',
        list: [
            {
                name: 'Vue',
                icon: 'i-carbon-logo-vue',
            },
            {
                name: 'Uniapp',
                icon: 'i-sidekickicons-h5-16-solid'
            },
            {
                name: 'WeiXin Mini Program',
                icon: 'i-uiw-weixin'
            }
        ]
    },
    {
        type: 'Language',
        list: [
            {
                name: 'JavaScript',
                icon: 'i-picon-js'
            },
            {
                name: 'TypeScript',
                icon: 'i-ph-file-ts-bold'
            }
        ]
    },
    {
        type: 'Style',
        list: [
            {
                name: 'Sass',
                icon: 'i-akar-icons-sass-fill'
            },
            {
                name: 'UnoCSS',
                icon: 'i-simple-icons-unocss'
            }
        ]
    },
    {
        type: 'Build Tools',
        list: [
            {
                name: 'Vite',
                icon: 'i-file-icons-vite'
            },
        ]
    },
    {
        type: 'Code Quality',
        list: [
            {
                name: 'ESLint',
                icon: 'i-mdi-eslint'
            }
        ]
    },
    {
        type: 'Package Management',
        list: [
            {
                name: 'pnpm',
                icon: 'i-devicon-plain-pnpm-wordmark'
            },
            {
                name: 'npm',
                icon: 'i-devicon-plain-npm'
            }
        ]
    },
    {
        type: 'Version Control',
        list: [
            {
                name: 'Git',
                icon: 'i-teenyicons-git-solid'
            }
        ]
    },
    {
        type: 'Data Visualization',
        list: [
            {
                name: 'ECharts',
                icon: 'i-simple-icons-apacheecharts'
            }
        ]
    },
    {
        type: 'UI Component',
        list: [
            {
                name: 'Element Plus',
                icon: 'i-ep-element-plus'
            },
            {
                name: 'TDesign',
                icon: 'i-tdesign-logo-tdesign-filled'
            },
            {
                name: 'Vant',
                icon: 'i-token-vanar'
            },
            {
                name: 'Ant Design',
                icon: 'i-simple-icons-antdesign'
            }
        ]
    },
    {
        type: 'Development Tools',
        list: [
            {
                name: 'VSCode',
                icon: 'i-octicon-vscode-16'
            },
            {
                name: 'Cursor',
                icon: 'i-material-icon-theme-cursor-light'
            }
        ]
    },
    {
        type: 'Document',
        list: [
            {
                name: 'Markdown',
                icon: 'i-material-symbols-markdown'
            }
        ]
    },
    {
        type: 'Development Framework',
        list: [
            {
                name: 'Ruo Yi',
                icon: 'i-arcticons-k-ruoka'
            },
            {
                name: '人人开源',
                icon: 'i-el-opensource'
            },
        ]
    },
    {
        type: 'Map Service',
        list: [
            {
                name: '高德地图',
                icon: 'i-fa-map-pin'
            },
            {
                name: '百度地图',
                icon: 'i-mingcute-map-pin-fill'
            }
        ]
    },
    {
        type: 'Design Tools',
        list: [
            {
                name: 'Figma',
                icon: 'i-solar-figma-linear'
            }
        ]
    },
    {
        type: 'Build Tool Plugins',
        list: [
            {
                name: 'Unplugin',
                icon: 'i-mingcute-plugin-2-fill'
            }
        ]
    }
])
</script>
<template>
    <div class="max-w-300 mx-auto">
        <div class="flex flex-col gap-4 md:flex-row lg:flex-row md:gap-6 lg:gap-8 mb20">
            <div class="text-2xl font-bold op70">Technology Stack</div>
            <RouterLink
                to="/about-uni"
                class="!border-none opacity-20 hover:opacity-50 cursor-pointer text-2xl font-bold transition-opacity duration-200">
                University Experience
            </RouterLink>
        </div>

        <div class="space-y-8">
            <section
                v-for="category in techList"
                :key="category.type"
                class="slide-enter">
                <h2 class="mb-4 text-xl font-semibold tracking-wide op70 pb-2">
                    {{ category.type }}
                </h2>
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div
                        v-for="tech in category.list"
                        :key="tech.name"
                        class="group flex items-center gap-2 sm:gap-3 bg-base border-0.5 sm:border border-base dark:border-[#666] rounded-lg px-2 sm:px-3 py-2 sm:py-2.5 shadow-sm hover:(shadow-md translate-y--1 sm:border-[var(--fg)] op80) transition-all duration-200">
                        <div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-lg sm:text-xl op80 group-hover:op100 transition-opacity flex-shrink-0">
                            <div :class="tech.icon" class="w-full h-full" />
                        </div>
                        <span class="font-medium text-xs sm:text-sm break-words group-hover:text-[var(--fg-deeper)] transition-colors">
                            {{ tech.name }}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>