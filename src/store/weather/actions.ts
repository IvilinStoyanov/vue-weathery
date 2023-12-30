import { WeatherService } from "@/services/weather.service";
import { Commit } from "vuex";

export const FETCH_WEATHER_DATA = "fetchWeatherData";
export const UPDATE_WEATHER_DATA = "updateWeatherData";

const actions = {
  async [FETCH_WEATHER_DATA](
    { commit }: { commit: Commit },
    { country, days }: { country: string; days: string }
  ) {
    try {
      const data = await WeatherService.getForecastByCountry(country, days);
      commit("setWeatherData", data);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default actions;
