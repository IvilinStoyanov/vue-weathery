<template>
  <base-layout :title="'Weathery'">
    <template v-slot:content>
      <weather-search-form @searchCountry="searchCountry" :loading="loading"></weather-search-form>
    </template>
  </base-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import WeatherSearchForm from '../components/weather/WeatherSearchForm.vue';
import * as fromWeatherActions from '../store/weather/actions';

export default defineComponent({
  name: "WeatherView",
  setup() {
    const store = useStore();
    const router = useRouter();


    const searchCountry = (countryTitle: string) => {
      store.dispatch(fromWeatherActions.FETCH_WEATHER_DATA, { country: countryTitle, days: 3 }).then(() => {
        router.push('/weather-details');
      });
    };

    const loading = computed(() => store.state.loader.isLoading);

    return {
      searchCountry,
      loading
    };
  },
  components: {
    WeatherSearchForm
  },
});
</script>
../store/weather.actions.type