import { createStore } from "vuex";
import  weather from './weather/module';
import loader from './loader.module';

export default createStore({
  modules: {
    loader,
    weather
  }
});
