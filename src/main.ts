import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './interceptors/axious-interceptor';


import { IonicVue } from "@ionic/vue";
import BaseLayoutVue from "./components/BaseLayout.vue";

import './styles/style.css';

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";

console.log(import.meta.env.BASE_URL);
const app = createApp(App).use(IonicVue).use(store).use(router);

app.component("base-layout", BaseLayoutVue);

app.provide("axios", app.config.globalProperties.axios);

router.isReady().then(() => {
  app.mount("#app");
});
