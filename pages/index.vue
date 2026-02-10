<template>
    <div
        class="flex flex-col md:flex-row justify-center items-center min-h-screen gap-8 md:gap-20 px-4 sm:px-6 lg:px-10">
        <div class="fixed top-4 right-4 flex items-center gap-3">
            <a
                href="https://github.com/JoiePink/vite-fast-template"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/70 dark:border-gray-600/70 bg-white/80 dark:bg-neutral-900/80 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-neutral-900 transition-all duration-200 backdrop-blur"
                aria-label="Open GitHub repository">
                <span class="i-ph-github-logo-duotone text-lg"></span>
            </a>
            <button
                type="button"
                class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300/70 dark:border-gray-600/70 bg-white/80 dark:bg-neutral-900/80 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-neutral-900 transition-all duration-200 backdrop-blur"
                @click="toggleTheme"
                aria-label="Toggle color mode">
                <span
                    :class="[
                        'h-4 w-4 inline-block',
                        isDark ? 'i-ph-sun-duotone text-amber-400' : 'i-ph-moon-stars-duotone text-sky-400',
                    ]"></span>
            </button>
        </div>
        <img
            :src="logoSrc"
            alt="logo"
            loading="eager"
            fetchpriority="high"
            class="w-60 h-60 sm:w-60 sm:h-60 lg:w-100 lg:h-100 max-w-full object-contain" />

        <div class="mt-6 md:mt-0 max-w-xl w-full">
            <p
                class="text-2xl sm:text-3xl lg:text-4xl mb4 sm:mb6 font-semibold tracking-wide color-#ffb6c1 dark:color-#ffa6d0 text-center md:text-left">
                vite-fast-template
            </p>
            <div
                class="mb4 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                <span
                    class="inline-flex items-center gap-1 rounded-full border border-pink-300/80 dark:border-pink-400/80 bg-pink-50/90 dark:bg-pink-900/40 px-2 py-0.5 font-medium text-pink-500 dark:text-pink-200 shadow-sm">
                    <span class="i-ph-plug-duotone text-sm text-pink-400 dark:text-pink-300"></span>
                    <span>Dev server port</span>
                    <span
                        class="ml1 rounded bg-pink-400/90 dark:bg-pink-500/90 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                        2019
                    </span>
                </span>
            </div>
            <ul
                class="max-w-full sm:max-w-xl w-full grid gap-2 sm:gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-100 list-none">
                <li v-for="item in features" :key="item.text" class="flex items-center gap-2 sm:gap-3">
                    <span
                        :class="[
                            'mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full',
                            item.bgClass,
                            item.colorClass,
                            item.iconClass,
                        ]"></span>
                    <span>{{ item.text }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode({
    selector: 'html',
    attribute: 'class',
    storageKey: 'vueuse-color-scheme',
    initialValue: 'auto',
})

const isDark = computed(() => colorMode.value === 'dark')

const logoSrc = computed(() => {
    // 确保路径始终正确
    return isDark.value ? '/logo-dark.svg' : '/logo.svg'
})

const toggleTheme = () => {
    colorMode.value = isDark.value ? 'light' : 'dark'
}

const features = [
    {
        text: '基于 vite + vue3 + markdown 的快速启动模板',
        iconClass: 'i-ph-rocket-launch-duotone',
        bgClass: 'bg-emerald-300 dark:bg-emerald-900/70',
        colorClass: 'text-emerald-600 dark:text-emerald-300',
    },
    {
        text: '集成 VueUse，支持任意 hooks 自动导入',
        iconClass: 'i-ph-magic-wand-duotone',
        bgClass: 'bg-sky-300 dark:bg-sky-900/70',
        colorClass: 'text-sky-600 dark:text-sky-300',
    },
    {
        text: '文件即路由，零配置集成 vue-router',
        iconClass: 'i-ph-signpost-duotone',
        bgClass: 'bg-amber-300 dark:bg-amber-900/70',
        colorClass: 'text-amber-600 dark:text-amber-300',
    },
    {
        text: '内置 UnoCSS + Iconify，原子化类名高效写样式',
        iconClass: 'i-ph-sparkle-duotone',
        bgClass: 'bg-pink-300 dark:bg-pink-900/70',
        colorClass: 'text-pink-600 dark:text-pink-300',
    },
    {
        text: 'Markdown 可直接作为页面，内置多种扩展能力',
        iconClass: 'i-ph-file-text-duotone',
        bgClass: 'bg-violet-300 dark:bg-violet-900/70',
        colorClass: 'text-violet-600 dark:text-violet-300',
    },
    {
        text: '使用 pnpm catalog 分类管理依赖版本，作用域清晰',
        iconClass: 'i-ph-package-duotone',
        bgClass: 'bg-indigo-300 dark:bg-indigo-900/70',
        colorClass: 'text-indigo-600 dark:text-indigo-300',
    },
] as const
</script>
