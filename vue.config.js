const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://api.weatherapi.com/v1/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-weather-cache',
            cacheableResponse: {
              statuses: [0, 200]
            },
            expiration: {
              maxAgeSeconds: 600,
              maxEntries: 10
            },
          }
        }
      ]
    }
  }
});