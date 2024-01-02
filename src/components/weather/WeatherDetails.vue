<template>
    <div class="page-background">
        <div class="weather-details-container">
            <ion-card-content class="ion-text-center">
                <div class="ion-margin-top">
                    <ion-img alt="condition" :src="weatherData.current.condition.icon"
                        class="current-weather-condition-icon" />
                    <ion-text color="medium">
                        <h1>{{ weatherData.current.condition.text }}</h1>
                    </ion-text>
                    <ion-text color="medium">
                        <p>{{ new Date(weatherData.location.localtime).toDateString() }}</p>
                    </ion-text>
                </div>
                <ion-card-title class="ion-margin-top" color="medium">
                    <div class="temp-degree">
                    <span class="temp">{{Math.floor(weatherData.current.temp_c)}}</span>
                    <span class="degree">°C</span>
                     </div>
                </ion-card-title>
                <ion-grid class="ion-margin-top">
                    <ion-row>
                        <WeatherProperty :type="'wind'" :value="weatherData.current?.wind_mph" />
                        <WeatherProperty :type="'feelsLike'" :value="Math.floor(weatherData.current?.feelslike_c)" />
                    </ion-row>
                    <ion-row class="ion-margin-top">
                        <WeatherProperty :type="'indexUV'" :value="weatherData.current?.uv" />
                        <WeatherProperty :type="'pressure'" :value="weatherData.current?.pressure_mb" />
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
    IonGrid,
    IonRow,
    IonCardContent,
    IonCardTitle,
    IonText,
    IonImg,
} from "@ionic/vue";
import { IWeatherForecast } from "@/models/weather-forecast.interface";
import WeatherProperty from "@/components/weather/WeatherProperty.vue";

export default defineComponent({
    name: "WeatherDetails",
    props: {
        weatherData: {
            type: Object as PropType<IWeatherForecast>,
            required: true,
        },
    },
    components: {
        IonGrid,
        IonRow,
        IonCardContent,
        IonCardTitle,
        IonText,
        IonImg,
        WeatherProperty,
    },
});
</script>

<style scoped>
.weather-details-container {
    display: flex;
    flex-direction: column;
}

.temp-degree {
    display: flex;
    justify-content: center;
}

.temp {
    font-size: 6rem;
}

.degree {
    font-size: 2rem;
    padding-top: 10px;
}


.current-weather-condition-icon {
    height: 110px;
}


.page-background {
    background-image: url('../../assets/backgrounds/app-bg.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
}
</style>
