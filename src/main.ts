import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import Router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.provide('basePath', import.meta.env.VITE_BASE_PATH)

app
  .use(vuetify)
  .use(Router)
  .mount('#app')
