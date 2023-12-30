const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: {
        urlPattern: new RegExp('^https://api.weatherapi.com/v1/'),
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 20,
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    },
  },
});
