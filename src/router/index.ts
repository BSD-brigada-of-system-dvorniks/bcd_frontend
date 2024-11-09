import { createRouter, createWebHistory } from 'vue-router';

import WelcomePost from '../components/WelcomePost.vue';
import ObjectsList from '../components/ObjectsList.vue';  

const routes = [
    {
        path: '/',
        component: WelcomePost
    },
    {
        path: '/main',
        component: ObjectsList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
