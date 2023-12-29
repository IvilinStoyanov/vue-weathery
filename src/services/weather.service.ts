import ApiService from "./api.service";

export const WeatherService = {
    getForecastByCountry(country: string, days: string) {
      return ApiService.get("forecast.json", { query: country, days: days });
    }
  };