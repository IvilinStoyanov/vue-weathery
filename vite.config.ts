import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    port: 8100,
  },
  plugins: [
    vue(),
    legacy(),
    VitePWA({
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}']
      },
      devOptions: {
        enabled: false,
        type: 'module'
      },
      manifest: {
        name: 'vue-weather',
        start_url: '/',
        short_name: 'weathery',
        description: 'weather app using PWA',
        theme_color: '#0079ce',
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})