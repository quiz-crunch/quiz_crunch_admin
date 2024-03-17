// src/router/index.ts
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/sys/login/Index.vue')
        },
    ],
})

export default router
