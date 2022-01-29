import { createRouter, createWebHistory } from 'vue-router'

import news from './pages/news.vue'
import home from './pages/home.vue'

const routes = [
    { name: 'home', path: '/', component: home },
    { name: 'news', path: '/news', component: news }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
