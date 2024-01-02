import { GetterTree } from "vuex";
import { RootState } from "..";
import { WeatherState } from "./weather.module";

const getters: GetterTree<WeatherState, RootState> = {
    getWeatherData: (state: WeatherState) => state.weatherData
};

export default getters;
