import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('node:path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
  ],
  base: './',

  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
