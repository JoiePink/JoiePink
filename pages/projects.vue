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

const cateList = ref([
    'Web APP',
    'VSCode',
    'Starter Templates',
    'Weapp Tools',
    'Markdown Tools',
])

const projectList = ref<ProjectCategory[]>([
    {
        cate: 'Web APP',
        list: [
            {
                name: 'Coffee',
                icon: '/coffee.png',
                link: 'https://github.com/JoiePink/Coffee',
                desc: '一个展示中国星巴克门店分布的网页，支持定位、导航一站式服务'
            },
            {
                name: '钦州智慧停车',
                icon: 'https://tse4.mm.bing.net/th/id/OIP.SxpXHyhCcG7ADAIl_QEVPwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
                link: '',
                desc: '主要用于钦州市城市道路和公共场地临时停车泊位收费相关功能'
            },
            {
                name: '浙里市场',
                icon: 'https://tse2.mm.bing.net/th/id/OIP.89r6wdewaxaROEBgRv96zAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
                link: '',
                desc: '浙里办-浙里市场'
            },
            {
                name: 'BoSiXinYu',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoAXT_kzTb7kU2EQfmSn3FfL5ABaVfDo5uSA&s',
                link: 'https://bodesitech.com/',
                desc: '杭州博思芯宇科技有限公司企业官网'
            },
            {
                name: 'SpringTex',
                icon: 'https://media.licdn.com/dms/image/v2/C4E0BAQHPYf8IFcwi1A/company-logo_200_200/company-logo_200_200/0/1631302606832?e=2147483647&v=beta&t=pwcV8e7RtW9exiAPIpSJFg9mKf5cVdEmEk-prbEAfrQ',
                link: 'https://www.springtex.com/',
                desc: '宁波市春禾时装有限公司企业官网'
            },
        ],
    },
])

const projectsByCate = computed(() => {
    const map = new Map<string, Project[]>()
    for (const c of projectList.value)
        map.set(c.cate, c.list)
    return map
})
</script>
<template>
    <div>
        <div class="prose m-auto mb-4 text-center font-bold font-size-10">Projects</div>
        <p class="text-center font-size-5 italic mb-10 op80">Projects that I developed.</p>
    </div>
    <div class="max-w-4xl m-auto px-4">
        <section v-for="cate in cateList" :key="cate" class="mb-10 space-y-4 slide-enter">
            <h2 class="text-center font-size-6 font-semibold tracking-wide op70">{{ cate }}</h2>
            <div class="grid gap-4 md:grid-cols-2">
                <div v-for="p in (projectsByCate.get(cate) || [])" :key="p.link"
                    class="flex items-center gap-5 bg-base border border-base rounded-xl px4 py3 shadow-sm hover:(shadow-md translate-y--1) transition duration-200">
                    <div
                        class="w12 h12 bg-stone-100 dark:bg-stone-800 rounded-full flex justify-center items-center shadow-inner">
                        <img :src="p.icon" :alt="p.name" loading="lazy" decoding="async" class="w-8 h-8 rounded-full" />
                    </div>
                    <div class="flex-1">
                        <a :href="p.link" target="_blank" rel="noopener noreferrer"
                            class="font-semibold hover:underline break-words">
                            {{ p.name }}
                        </a>
                        <p class="mt-1 text-sm leading-relaxed op70">
                            {{ p.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>