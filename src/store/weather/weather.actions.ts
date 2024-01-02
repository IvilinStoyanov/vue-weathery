import { WeatherForecast } from "@/models/weather-forecast.class";
import { WeatherService } from "@/services/weather.service";
import { ActionTree, Commit } from "vuex";
import { RootState } from "..";
import { WeatherState } from "./weather.module";

export const FETCH_WEATHER_DATA = "fetchWeatherData";
export const UPDATE_WEATHER_DATA = "updateWeatherData";


const actions: ActionTree<WeatherState, RootState> = {
    async [FETCH_WEATHER_DATA](
        { commit }: { commit: Commit },
        { country, days }: { country: string; days: string }
    ) {
        try {
            commit(UPDATE_WEATHER_DATA, { weatherData: new WeatherForecast(), loading: true });

            const data = await WeatherService.getForecastByCountry(country, days);

            commit(UPDATE_WEATHER_DATA, { weatherData: data, loading: true });

            return data;
        } catch (error) {
            throw error;
        }
    },
};


export default actions;