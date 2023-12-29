<template>
    <base-layout :title="'Weather Details'" :pageDefaultBackLink="'/'">
        <template v-slot:content>
            <h1>Weather Details</h1>
            <p>{{ parsedWeatherData }}</p>
        </template>
    </base-layout>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from 'vuex';

export default defineComponent({
    name: "WeatherDetails",
    setup() {
        const store = useStore();
        const parsedWeatherData = ref<any>(null);

        // Use Vuex getter to retrieve the weatherData
        onMounted(() => {
            parsedWeatherData.value = store.getters.getWeatherData;
            console.log(parsedWeatherData.value);
        });

        return {
            parsedWeatherData,
        };
    },
});
</script>
  