import { WeatherService } from "@/services/weather.service";
import { FETCH_WEATHER_DATA } from './actions.type';
import { Commit } from 'vuex';

const initialState = {
  weatherData: {}
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_WEATHER_DATA]({ commit }: { commit: Commit }, { country, days }: { country: string, days: string }) {
    try {
      const data = await WeatherService.getForecastByCountry(country, days);
      commit('setWeatherData', data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

const getters = {
  getWeatherData(state: { weatherData: object }) {
    return state.weatherData;
  }
};

const mutations = {
  setWeatherData(state: { weatherData: object }, data: object) {
    state.weatherData = data;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
