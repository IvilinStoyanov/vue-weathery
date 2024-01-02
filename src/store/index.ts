import { createStore } from "vuex";
import  weather, { WeatherState } from './weather/weather.module';
import loader, { LoaderState } from './loader/loader.module';


export interface RootState {
  loader: LoaderState;
  weather: WeatherState
}

export default createStore({
  modules: {
    loader,
    weather
  }
});
