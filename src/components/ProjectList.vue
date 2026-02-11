<script setup lang="ts">
type Project = {
    name: string
    icon: string
    link: string
    desc: string
}

type ProjectCategory = {
    cate: string
    list: Project[]
}

const cateList = ref(['Web APP', 'VSCode', 'Starter Templates', 'Markdown Tools', 'Weapp Tools'])

const projectList = ref<ProjectCategory[]>([
    {
        cate: 'Web APP',
        list: [
            {
                name: 'Coffee',
                icon: '/project-logos/coffee.png',
                link: 'https://github.com/JoiePink/Coffee',
                desc: '一个展示中国星巴克门店分布的网页，支持定位、导航一站式服务',
            },
        ],
    },
    {
        cate: 'VSCode',
        list: [
            {
                name: 'Cassieye Theme',
                icon: '/project-logos/cassieye-theme.png',
                link: 'https://marketplace.visualstudio.com/items?itemName=Cassieye-azuretools.Cassieye-Theme',
                desc: '一个以pink为主调的VSCode主题插件',
            },
        ],
    },
    {
        cate: 'Starter Templates',
        list: [
            {
                name: 'vite-fast-template',
                icon: '/project-logos/vite-fast-template.png',
                link: 'https://github.com/JoiePink/vite-fast-template',
                desc: '一个基于vite+vue3+markdown的快速开发模板',
            },
        ],
    },
    {
        cate: 'Markdown Tools',
        list: [
            {
                name: 'markdown-it-github-mention-card',
                icon: '/project-logos/markdown-it-github-mention-card.svg',
                link: 'https://github.com/JoiePink/markdown-it-github-mention-card',
                desc: '一个鼠标悬停出现github用户信息的markdown插件',
            },
        ],
    },
    {
        cate: 'Weapp Tools',
        list: [
            {
                name: 'wxapp-download-post',
                icon: '/project-logos/wxapp-download-post.svg',
                link: 'https://www.npmjs.com/package/wxapp-poster?activeTab=readme',
                desc: '一个用于生成微信小程序下载海报的工具',
            },
            {
                name: 'weapp-photo-editor-plus',
                icon: '/project-logos/weapp-photo-editor-plus.png',
                link: 'https://github.com/JoiePink/weapp-photo-editor-plus',
                desc: '一个支持图片裁剪、旋转、缩放、加边框的图片编辑器',
            },
        ],
    },
])

const projectsByCate = computed(() => {
    const map = new Map<string, Project[]>()
    for (const c of projectList.value) map.set(c.cate, c.list)
    return map
})
</script>
<template>
    <div class="max-w-300 mx-auto">
        <div>
            <div class="prose m-auto mb-4 text-center font-bold font-size-10">Projects</div>
            <p class="text-center font-size-5 italic mb-10 op80">Projects that I designed and developed.</p>
        </div>
        <div class="max-w-300 justify-between">
            <section v-for="cate in cateList" :key="cate" class="mb-10 space-y-4 slide-enter">
                <h2 class="font-size-6 font-semibold tracking-wide op70">{{ cate }}</h2>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="p in projectsByCate.get(cate) || []"
                        :key="p.link"
                        class="flex items-center gap-3 bg-base border border-base rounded-xl px3 py2 shadow-sm hover:(shadow-md translate-y--1) transition duration-200">
                        <div class="w10 h10 bg-#fff rounded-full flex justify-center items-center shadow-inner">
                            <img :src="p.icon" :alt="p.name" loading="lazy" decoding="async" class="rounded-full" />
                        </div>
                        <div class="flex-1 space-y-1">
                            <a
                                :href="p.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="font-semibold text-sm hover:underline break-words">
                                {{ p.name }}
                            </a>
                            <p class="text-xs leading-snug op70">
                                {{ p.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
