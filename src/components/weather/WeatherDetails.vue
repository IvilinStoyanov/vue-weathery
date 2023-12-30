<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>{{ weatherData?.current?.temp_c }}</ion-card-title>
            <ion-card-subtitle>feels like {{ weatherData?.current?.feelslike_c }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            Here's a small text description for the card content. Nothing more,
            nothing less.
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/vue";
import { IWeatherForecast } from "@/models/weather-forecast.interface";

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
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
    },
});
</script>
