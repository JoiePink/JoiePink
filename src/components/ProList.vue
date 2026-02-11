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

const cateList = ref(['APP', 'Official Account', 'Mini Program', 'WebSite'])

const projectList = ref<ProjectCategory[]>([
    {
        cate: 'APP',
        list: [
            {
                name: '浙里市场',
                icon: '/prod-logos/ZheLiMarket.svg',
                link: '',
                desc: '浙里办-浙里市场',
            },
            {
                name: '钦州智慧停车',
                icon: '/prod-logos/QinZhouSmartParking.svg',
                link: '',
                desc: '主要用于钦州市城市道路和公共场地临时停车泊位收费相关功能',
            },
        ],
    },
    {
        cate: 'Official Account',
        list: [
            {
                name: '鹿城未来农贸',
                icon: '/prod-logos/LuCheng.jpg',
                link: '',
                desc: '展示温州市鹿城区未来农贸市场信息',
            },
        ],
    },
    {
        cate: 'Mini Program',
        list: [
            {
                name: '众食链',
                icon: '/prod-logos/ZSL.jpg',
                link: '',
                desc: '众彩食安追溯管理',
            },
        ],
    },
    {
        cate: 'WebSite',
        list: [
            {
                name: 'BoSiXinYu',
                icon: '/prod-logos/BoSiXinYu.png',
                link: 'https://bodesitech.com/',
                desc: '杭州博思芯宇科技有限公司企业官网',
            },

            {
                name: 'SpringTex',
                icon: '/prod-logos/spring.png',
                link: 'https://www.springtex.com/',
                desc: '宁波市春禾时装有限公司企业官网',
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
            <div class="prose m-auto mb-4 text-center font-bold font-size-10">Prod Projects</div>
            <p class="text-center font-size-5 italic mb-10 op80">Projects that has been running in production.</p>
        </div>
        <div class="max-w-300 justify-between">
            <section v-for="cate in cateList" :key="cate" class="mb-10 space-y-4 slide-enter">
                <h2 class="font-size-6 font-semibold tracking-wide op70">{{ cate }}</h2>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="p in projectsByCate.get(cate) || []"
                        :key="p.link"
                        class="flex items-center gap-3 bg-base border border-base rounded-xl px3 py2 shadow-sm hover:(shadow-md translate-y--1) transition duration-200">
                        <div
                            class="w10 h10 bg-stone-100 dark:bg-zinc-50 rounded-full flex justify-center items-center shadow-inner">
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
