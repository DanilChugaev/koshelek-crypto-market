import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import Router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
})

app.provide('basePath', import.meta.env.VITE_BASE_PATH)

app
  .use(vuetify)
  .use(Router)
  .mount('#app')
