import { createRouter, createWebHistory } from "@ionic/vue-router";
import WeatherViewVue from "@/views/WeatherView.vue";

const routes = [
  {
    path: "/",
    name: "weather",
    component: WeatherViewVue,
  },
  {
    path: "/weather-details",
    name: "weather details",
    component: () =>
      import("../views/WeatherDetailsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
