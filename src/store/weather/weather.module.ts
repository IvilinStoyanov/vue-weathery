import { WeatherForecast } from "@/models/weather-forecast.class";
import { IWeatherForecast } from "@/models/weather-forecast.interface";

import actions from "./weather.actions";
import getters from "./weather.getters";
import mutations from "./weather.mutations";

export interface WeatherState {
  weatherData: IWeatherForecast;
  loading: boolean;
}


const initialState: WeatherState = {
  weatherData: new WeatherForecast(),
  loading: false
};

export const state: WeatherState = { ...initialState };


const weatherModule = {
  state,
  actions,
  mutations,
  getters,
};

export default weatherModule;