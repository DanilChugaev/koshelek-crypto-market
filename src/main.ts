import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
});

app.config.globalProperties.$basePath = import.meta.env.VITE_BASE_PATH;

app
  .use(vuetify)
  .use(Router)
  .mount('#app');
