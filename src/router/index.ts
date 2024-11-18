import { createRouter, createWebHistory } from 'vue-router';

import WelcomePost from '../views/WelcomePost.vue';
import MainPage from '../views/MainPage.vue';
import ObjectPage from '@/views/ObjectPage.vue';

const routes = [
    {
        path: '/',
        component: WelcomePost
    },
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/objects/:id',
        component: ObjectPage,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
