<template>
    <ion-list>
    <ion-list-header>
      Forecast
    </ion-list-header>

    <ion-item v-for="weth in weather?.list" :key="weth.dt">
      <ion-avatar slot="start">
        <div class="weather-background">
          <img :src="getWeatherImageUrl(weth.weather[0].icon, '2x')">
        </div>
      </ion-avatar>
      <ion-label>
        <h1>{{ formatTemperature(weth.main.temp, 'F') }}</h1>
        <h2>{{ weth.weather[0].description }}</h2>
        <p>{{ new Date(weth.dt * 1000).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { IonList, IonListHeader, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import commonIonicComponents from '@/shared/common-ionic-components';
import { useWeather } from './weather.service';

export default defineComponent({
    components: {
    IonList,
    IonListHeader,
    IonItem,
    IonAvatar,
    IonLabel,
    ...commonIonicComponents
  },
    setup () {
        const { weather, fetchWeather, getWeatherImageUrl, formatTemperature } = useWeather();
    return {
      weather,
      getWeatherImageUrl,
      formatTemperature
    }
    }
})
</script>

<style scoped>
.weather-background {
  background-color: skyblue;
  border-radius: 100%;
  border: 2px solid white;
}
</style>