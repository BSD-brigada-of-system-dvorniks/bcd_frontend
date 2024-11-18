import { createRouter, createWebHistory } from 'vue-router';

import WelcomePost from '../views/WelcomePost.vue';
import MainPage from '../views/MainPage.vue';

const routes = [
    {
        path: '/',
        component: WelcomePost
    },
    {
        path: '/main',
        component: MainPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
