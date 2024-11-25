import './assets/main.css'
import './assets/tailwind.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { VueCookieNext } from 'vue-cookie-next';

createApp(App).use(VueCookieNext).use(router).mount('#app')
