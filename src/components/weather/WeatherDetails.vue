<template>
    <div class="page-background">
        <div class="weather-details-container">
            <ion-card-content class="ion-text-center">
                <div class="ion-margin-top">
                    <ion-img alt="condition" :src="weatherData.current.condition.icon"
                        class="current-weather-condition-icon" />
                    <ion-text color="light">
                        <h1>{{ weatherData.current.condition.text }}</h1>
                    </ion-text>
                    <ion-text color="light">
                        <p>{{ new Date(weatherData.location.localtime).toDateString() }}</p>
                    </ion-text>
                </div>
                <ion-card-title class="ion-margin-top" color="light">
                    <div class="temp-degree">
                        <span class="temp">{{ Math.floor(weatherData.current.temp_c) }}</span>
                        <span class="degree">°C</span>
                    </div>
                </ion-card-title>
            </ion-card-content>
        </div>
        <div>


            <ion-card class="n-margin border-bottom-r-none">
                <ion-grid>
                    <ion-row>
                        <WeatherProperty :type="'wind'" :value="weatherData.current?.wind_mph" />
                        <WeatherProperty :type="'feelsLike'" :value="Math.floor(weatherData.current?.feelslike_c)" />
                    </ion-row>
                    <ion-row class="ion-margin-top">
                        <WeatherProperty :type="'indexUV'" :value="weatherData.current?.uv" />
                        <WeatherProperty :type="'pressure'" :value="weatherData.current?.pressure_mb" />
                    </ion-row>
                </ion-grid>
            </ion-card>
        </div>

    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
    IonCard,
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
        IonCard,
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
    font-size: 9rem;
}

.degree {
    font-size: 3rem;
    padding-top: 10px;
}


.current-weather-condition-icon {
    height: 110px;
}

.n-margin {
    margin: 0;
}

.border-bottom-r-none {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.page-background {
    /* background-image: url('../../assets/backgrounds/app-bg.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
    background-image: linear-gradient(to right top, #4e627f, #4f6d8b, #507896, #5183a0, #518faa);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
