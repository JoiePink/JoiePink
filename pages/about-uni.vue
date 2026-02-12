<script setup lang="ts">
const list = ref([
    {
        name: '第十五届中国大学生服务外包创新创业大赛',
        project: '基于西湖论剑·数字安全大会品牌宣传用户交互的活动平台',
        level: 'A类国奖',
        img: '/university-imgs/1.png',
        me: ['前端开发', '项目经理'],
        year: '2024',
        type:1
    },
    {
        name: '“和利时杯”第十一届浙江省大学生服务外包创新应用大赛',
        project: '红色党建研学平台',
        level: 'A类省奖',
        img: '/university-imgs/2.png',
        me: ['前端开发', '项目经理'],
        year: '2024',
        type:1
    },
    {
        name: '国家级大学生创新创业训练计划',
        project: '基于SolidWorks的管道探测清洗机器人',
        level: '国家级课题 教育部立项',
        img: '/university-imgs/3.png',
        me: ['主持人'],
        year: '2023',
        type:1
    },
    {
        name: '软件著作权[国家版权局]',
        project: '管道机器人自动行走控制系统V1.0',
        level: '登记号2024SR0667665',
        img: '/university-imgs/5.png',
        year: '2023',
        type:2
    },
    {
        name: '中国知网',
        project: '基于Android的无接触送餐机器人系统设计',
        level: '科技创新与生产力',
        me: ['第一作者'],
        img: '/university-imgs/4.png',
        year: '2022',
        type:3
    },
])


</script>
<template>
    <div class="max-w-300 mx-auto mb20">
        <div class="flex flex-col gap-4 md:flex-row lg:flex-row md:gap-6 lg:gap-8">
            <RouterLink
                to="/about-tech"
                class="!border-none opacity-20 hover:opacity-50 cursor-pointer text-2xl font-bold transition-opacity duration-200">
                Technology Stack
            </RouterLink>
            <div class="text-2xl font-bold op70">University Experience</div>
        </div>
    </div>
    <div class="max-w-300 mx-auto lg:grid lg:grid-cols-2">
        <div
            v-for="(item, index) in list"
            :key="item.name"
            class="mb10 slide-enter"
            :style="{ '--enter-stage': index }">
            <div class="flex flex-col ">
                <div class="flex gap2 items-center">
                    <div class="w12 h12 rounded-full overflow-hidden border border-base dark:border-[#666]">
                        <img class="w-full h-full object-cover" :src="item.img" alt="">
                    </div>
                    <div class="text-md font-bold flex-1">
                        {{ item.name }}</div>
                </div>
                
                <div class="text-md text-gray-600 mt2">
                    {{ item.project }}</div>
                <div class="text-sm text-gray-500 flex items-center">
                    <span class=" text-2xl" :class="item.type ===1 ? 'i-noto-v1-trophy' : (item.type ===2 ? 'i-material-symbols-copyright' : 'i-streamline-kameleon-color-script-paper-duo')"></span>
                    <span class="px2 py0.5 rounded-20 bg-pink-100 mx2">{{ item.level }}</span>
                    <span class="px2 py0.5 rounded-20 bg-pink-100">{{ item.year }}年</span>
                </div>
            </div>
        </div>
    </div>
</template>