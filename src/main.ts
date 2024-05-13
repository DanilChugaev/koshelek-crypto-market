import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

const app = createApp(App);

app.config.globalProperties.$basePath = import.meta.env.VITE_BASE_PATH;

app
  .use(Router)
  .mount('#app');
