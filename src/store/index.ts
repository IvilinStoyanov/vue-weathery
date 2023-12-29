import { createStore } from "vuex";
import  weather from './weather.module';

export default createStore({
  modules: {
    weather
  }
});
