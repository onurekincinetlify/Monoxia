import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import 'bulma';
import { createPinia } from 'pinia'
import { useCookieStore } from './stores/cookieStore';
import * as echarts from 'echarts';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
const cookieStore = useCookieStore();
app.config.globalProperties.$cookieStore = cookieStore;
app.config.globalProperties.$echarts = echarts;
app.use(router);
app.mount('#app');
