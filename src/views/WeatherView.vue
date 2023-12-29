<template>
  <base-layout :title="'Weathery'">
    <template v-slot:content>
      <weather-search-form @searchCountry="searchCountry"></weather-search-form>
    </template>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import WeatherSearchForm from '../components/weather/WeatherSearchForm.vue';
import { FETCH_WEATHER_DATA } from '../store/actions.type';

export default defineComponent({
  name: "WeatherView",
  setup() {
    const store = useStore();
    const router = useRouter();


    const searchCountry = (countryTitle: string) => {
      store.dispatch(FETCH_WEATHER_DATA, { country: countryTitle, days: 3}).then(() => {
        router.push('/weather-details');
      });
    };

    return {
      searchCountry
    };
  },
  components: {
    WeatherSearchForm
  },
});
</script>
