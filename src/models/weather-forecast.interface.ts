export interface IWeatherForecast {
    current: CurrentForecast;
    forecast: Forecast;
    location: LocationForecast;
}

export interface CurrentForecast {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    condition: Condition;
}


export interface Forecast {
    temp_c: number;
    temp_f: number;
    forecastday: ForecastDay[];
}

export interface ForecastDay {
    date: string;
    date_epoch: string;
    day: Day;
}

export interface LocationForecast {
    country: string
    lat: string;
    localtime: string
    localtime_epoch: string;
    lon: number;
    name: string
    region: string;
    tz_id: string;
}

export interface Day {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: Condition
}

export interface Condition {
    code: number;
    icon: string;
    text: string;
}