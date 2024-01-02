import { MutationTree } from "vuex";
import { WeatherState } from "./weather.module";
import * as fromWeather from "./weather.actions";

const mutations: MutationTree<WeatherState> = {
    [fromWeather.UPDATE_WEATHER_DATA](state: WeatherState, data: WeatherState) {
        Object.assign(state, data);
    }
};

export default mutations;
