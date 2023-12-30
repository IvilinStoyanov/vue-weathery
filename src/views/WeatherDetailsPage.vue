<template>
    <base-layout :title="'Weather Details'" :pageDefaultBackLink="'/'">
        <template v-slot:content>
        <weather-details :weatherData="parsedWeatherData"></weather-details>
        </template>
    </base-layout>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from 'vuex';

import WeatherDetails from "@/components/weather/WeatherDetails.vue";
import { IWeatherForecast }  from '@/models/weather-forecast.interface';
import { WeatherForecast } from '@/models/weather-forecast.class';

export default defineComponent({
    name: "WeatherDetailsPage",
    setup() {
        const store = useStore();
        const parsedWeatherData = ref<IWeatherForecast>(new WeatherForecast());

        // Use Vuex getter to retrieve the weatherData
        onMounted(() => {
            parsedWeatherData.value = store.getters.getWeatherData;
        });

        return {
            parsedWeatherData,
        };
    },
    components: {
        WeatherDetails
    }
});
</script>
  