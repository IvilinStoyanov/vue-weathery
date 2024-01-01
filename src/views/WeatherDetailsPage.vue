<template>
    <base-layout :title="parsedWeatherData?.location?.region + ', ' + parsedWeatherData?.location?.country"
        :pageDefaultBackLink="'/'">
        <template v-slot:content>
            <weather-details v-if="!isEmptyWeatherData" :weatherData="parsedWeatherData"></weather-details>
        </template>
    </base-layout>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted, computed, nextTick } from "vue";
import { useStore } from 'vuex';

import WeatherDetails from "@/components/weather/WeatherDetails.vue";
import { IWeatherForecast } from '@/models/weather-forecast.interface';
import { WeatherForecast } from '@/models/weather-forecast.class';
import { useRouter } from "vue-router";

export default defineComponent({
    name: "WeatherDetailsPage",
    setup() {
        const store = useStore();
        const router = useRouter();
        const parsedWeatherData = ref<IWeatherForecast>(new WeatherForecast());

        onMounted(async () => {
            parsedWeatherData.value = store.getters.getWeatherData;
            console.log(parsedWeatherData.value);

            await nextTick();

            if (isEmptyWeatherData.value) {
                router.replace('/');
            }
        });

        const isEmptyWeatherData = computed(() => {
            return Object.keys(parsedWeatherData.value).length === 0;
        });

        return {
            parsedWeatherData,
            isEmptyWeatherData
        };
    },
    components: {
        WeatherDetails
    }
});
</script>
