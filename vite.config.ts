import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://bynosplates.fabriciorocha.com',
        changeOrigin: true,
        headers: {
          Accept: 'application/json',
          Origin: 'https://bynosplates.fabriciorocha.com',
          Referer: 'https://bynosplates.fabriciorocha.com/',
        },
      },
    },
  },
})
