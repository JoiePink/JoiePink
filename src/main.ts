import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue/client'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (savedPosition)
      return savedPosition
    return { top: 0 }
  },
})

createApp(App).use(router).use(createHead()).mount('#app')
