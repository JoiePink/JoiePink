<script setup lang="ts">
import { formatDate } from '~/logics'

const props = withDefaults(
    defineProps<{
        onlyDate?: boolean
    }>(),
    {
        onlyDate: false,
    },
)

type TranslationItem = {
    path: string
    title: string
    date: string
    lang?: string
    duration?: string
    redirect?: string
}

type Frontmatter = {
    date?: string
    duration?: string
    title?: string
    redirect?: string
    lang?: string
}

const getYear = (a: Date | string | number) => {
    const year = new Date(a).getFullYear()
    return year || NaN
}

const router = useRouter()
const base = '/translations/'

const routeList = computed(() => {
    return router
        .getRoutes()
        .filter((route) => {
            const frontmatter = route.meta.frontmatter as Frontmatter | undefined
            if (!route.path.startsWith(base) || route.path.length <= base.length)
                return false
            return !!(frontmatter?.date && frontmatter?.title)
        })
        .map((i) => {
            const frontmatter = i.meta.frontmatter as Frontmatter
            return {
                year: getYear(frontmatter.date!),
                path: frontmatter.redirect || i.path,
                title: frontmatter.title!,
                date: frontmatter.date!,
                lang: frontmatter.lang,
                duration: frontmatter.duration,
                redirect: frontmatter.redirect,
            } as TranslationItem
        })
})

const posts = computed(() => {
    return [...routeList.value].sort((a, b) => +new Date(b.date) - +new Date(a.date))
})

const isFuture = (a?: Date | string | number) => {
    if (!a) return false
    const date = new Date(a)
    return !isNaN(date.getTime()) && date > new Date()
}
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => {
    if (!a || !b) return false
    const yearA = getYear(a)
    const yearB = getYear(b)
    if (isNaN(yearA) || isNaN(yearB)) return false
    return yearA === yearB
}
function isSameGroup(a: TranslationItem, b?: TranslationItem) {
    if (!b) return false
    return isFuture(a.date) === isFuture(b.date) && isSameYear(a.date, b.date)
}

function getGroupName(p: TranslationItem) {
    if (isFuture(p.date)) return 'Upcoming'
    const year = getYear(p.date)
    return isNaN(year) ? '' : year
}
</script>
<template>
    <ul>
        <template v-if="!posts.length">
            <div py2 op50>{ nothing here yet }</div>
        </template>

        <template v-for="(route, idx) in posts" :key="route.path">
            <div
                v-if="!isSameGroup(route, posts[idx - 1])"
                select-none
                relative
                h20
                pointer-events-none
                slide-enter
                :style="{
                    '--enter-stage': idx - 2,
                    '--enter-step': '60ms',
                }">
                <span
                    text-8em
                    color-transparent
                    absolute
                    left--3rem
                    top--2rem
                    font-bold
                    text-stroke-2
                    text-stroke-hex-aaa
                    op10>
                    {{ getGroupName(route) }}
                </span>
            </div>
            <div
                class="slide-enter"
                :style="{
                    '--enter-stage': idx,
                    '--enter-step': '60ms',
                }">
                <component
                    :is="route.path.includes('://') ? 'a' : 'RouterLink'"
                    v-bind="
                        route.path.includes('://')
                            ? {
                                  href: route.path,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                              }
                            : {
                                  to: route.path,
                              }
                    "
                    class="item block font-normal mb-6 mt-2 no-underline">
                    <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
                        <div class="title text-lg leading-1.2em" flex="~ gap-2 wrap">
                            <span
                                v-if="route.lang === 'zh'"
                                align-middle
                                flex-none
                                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--12 mr2 my-auto hidden md:block">
                                中文
                            </span>
                            <span
                                v-if="route.lang === 'ja'"
                                align-middle
                                flex-none
                                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--15 mr2 my-auto hidden md:block">
                                日本語
                            </span>
                            <span align-middle>{{ route.title }}</span>
                            <span
                                v-if="route.redirect"
                                class="align-middle op50 flex-none text-xs ml--1.5 i-carbon-arrow-up-right"
                                title="External" />
                        </div>

                        <div flex="~ gap-2 items-center">
                            <span text-sm op50 ws-nowrap>
                                {{ formatDate(route.date, true) }}
                            </span>
                            <span v-if="!onlyDate && route.duration" text-sm op40 ws-nowrap>· {{ route.duration }}</span>
                            <span
                                v-if="route.lang === 'zh'"
                                align-middle
                                flex-none
                                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden">
                                中文
                            </span>
                            <span
                                v-if="route.lang === 'ja'"
                                align-middle
                                flex-none
                                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden">
                                日本語
                            </span>
                        </div>
                    </li>
                </component>
            </div>
        </template>
    </ul>
</template>
