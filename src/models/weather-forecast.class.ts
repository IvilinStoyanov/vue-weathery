import {
  Condition,
  CurrentForecast,
  Day,
  Forecast,
  ForecastDay,
  LocationForecast,
  IWeatherForecast,
} from "./weather-forecast.interface";

export class WeatherForecast {
  current: CurrentForecastClass;
  forecast: ForecastClass;
  location: LocationForecastClass;

  constructor(data: IWeatherForecast = defaultWeatherForecast) {
    this.current = new CurrentForecastClass(data.current);
    this.forecast = new ForecastClass(data.forecast);
    this.location = new LocationForecastClass(data.location);
  }
}

/* default values */
const defaultCondition: Condition = {
  code: 0,
  icon: "",
  text: "",
};

const defaultDay: Day = {
  avgtemp_c: 0,
  avgtemp_f: 0,
  condition: defaultCondition,
};

const defaultForecastDay: ForecastDay = {
  date: "",
  date_epoch: "",
  day: defaultDay,
};

const defaultForecast: Forecast = {
  temp_c: 0,
  temp_f: 0,
  forecastday: [defaultForecastDay],
};

const defaultCurrentForecast: CurrentForecast = {
  temp_c: 0,
  temp_f: 0,
  feelslike_c: 0,
  feelslike_f: 0,
  condition: defaultCondition,
};

const defaultLocationForecast: LocationForecast = {
  country: "",
  lat: "",
  localtime: "",
  localtime_epoch: "",
  lon: 0,
  name: "",
  region: "",
  tz_id: "",
};

const defaultWeatherForecast: WeatherForecast = {
  current: defaultCurrentForecast,
  forecast: defaultForecast,
  location: defaultLocationForecast,
};

export class CurrentForecastClass {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: ConditionClass;

  constructor(data: CurrentForecast = defaultCurrentForecast) {
    this.temp_c = data.temp_c;
    this.temp_f = data.temp_f;
    this.feelslike_c = data.feelslike_c;
    this.feelslike_f = data.feelslike_f;
    this.condition = new ConditionClass(data.condition);
  }
}

export class ForecastClass {
  temp_c: number;
  temp_f: number;
  forecastday: ForecastDayClass[];

  constructor(data: Forecast = defaultForecast) {
    this.temp_c = data.temp_c;
    this.temp_f = data.temp_f;
    this.forecastday = data.forecastday.map((day) => new ForecastDayClass(day));
  }
}

export class ForecastDayClass {
  date: string;
  date_epoch: string;
  day: DayClass;

  constructor(data: ForecastDay = defaultForecastDay) {
    this.date = data.date;
    this.date_epoch = data.date_epoch;
    this.day = new DayClass(data.day);
  }
}

export class LocationForecastClass {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: string;
  lon: number;
  name: string;
  region: string;
  tz_id: string;

  constructor(data: LocationForecast = defaultLocationForecast) {
    this.country = data.country;
    this.lat = data.lat;
    this.localtime = data.localtime;
    this.localtime_epoch = data.localtime_epoch;
    this.lon = data.lon;
    this.name = data.name;
    this.region = data.region;
    this.tz_id = data.tz_id;
  }
}

export class DayClass {
  avgtemp_c: number;
  avgtemp_f: number;
  condition: ConditionClass;

  constructor(data: Day = defaultDay) {
    this.avgtemp_c = data.avgtemp_c;
    this.avgtemp_f = data.avgtemp_f;
    this.condition = new ConditionClass(data.condition);
  }
}

export class ConditionClass {
  code: number;
  icon: string;
  text: string;

  constructor(data: Condition = defaultCondition) {
    this.code = data.code;
    this.icon = data.icon;
    this.text = data.text;
  }
}
