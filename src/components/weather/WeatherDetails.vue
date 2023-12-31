<template>
    <ion-grid>
        <ion-card-content className="ion-text-center">
            <ion-text color="medium">
                <h1>{{ weatherData.location.region }}, <span>{{ weatherData.location.country }}</span></h1>
            </ion-text>
            <div className="ion-margin-top">
                <ion-img alt="condition" :src=weatherData.current.condition.icon class="current-weather-condition-icon" />
                <ion-text color="dark">
                    <h1>{{ weatherData.current.condition.text }}</h1>
                </ion-text>
                <ion-text color="medium">
                    <p>{{ new Date(weatherData.location.localtime).toDateString() }}</p>
                </ion-text>
            </div>
            <ion-card-title className="ion-margin-top">{{ weatherData.current.temp_c }} °C</ion-card-title>
            <ion-grid className="ion-margin-top">
                <ion-row>
                    <WeatherProperty :type="'wind'" :currentWeather=weatherData />
                    <WeatherProperty :type="'feelsLike'" :currentWeather=weatherData />
                </ion-row>
                <ion-row className="ion-margin-top">
                    <WeatherProperty :type="'indexUV'" :currentWeather=weatherData />
                    <WeatherProperty :type="'pressure'" :currentWeather=weatherData />
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-grid>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
    IonGrid,
    IonRow,
    IonCardContent,
    IonCardTitle,
    IonText,
    IonImg
} from "@ionic/vue";
import { IWeatherForecast } from "@/models/weather-forecast.interface";
import WeatherProperty from '@/components/weather/WeatherProperty.vue';

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
        WeatherProperty
    },
});
</script>

<style scoped>
.current-weather-condition-icon {
    height: 110px;
}
</style>
