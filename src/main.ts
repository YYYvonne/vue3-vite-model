import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import pinia from './stores';
import './assets/css/index.css';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(router).use(pinia).mount('#app');
