<template>
    <ion-card v-if="weather?.city">
        <div class="weather-background">
            <img :src="getWeatherImageUrl(weather.list[0]?.weather[0].icon, '4x')"/>
        </div>
        <ion-card-header>
            <ion-card-subtitle>{{ weather.list[0].weather[0].description }} </ion-card-subtitle>
            <ion-card-title>{{ formatTemperature(weather.list[0].main.temp, 'C') }}</ion-card-title>            
        </ion-card-header>
        <ion-card-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              Feels like {{ weather.list[0].main.feels_like }} &deg; F
            </ion-col>
            <ion-col>
              Wind Speed {{ weather.list[0].wind.speed }} mph
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              Sunrise 
               {{ new Date(weather.city.sunrise * 1000).toLocaleTimeString([], { timeStyle: 'short' }) }} 
            </ion-col>
              <ion-col>
              Sunset 
               {{ new Date(weather.city.sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' }) }} 
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import { useWeather } from './weather.service';
export default defineComponent({
    setup () {
        const { weather , fetchWeather ,formatTemperature ,getWeatherImageUrl } = useWeather()
        watch(weather, (newWeather) => {
            console.log(newWeather)
        })
        console.log('hiiii')
        console.log(weather)
        return {
            weather,
            fetchWeather,
            formatTemperature ,
            getWeatherImageUrl
        }
    }
})
</script>

<style scoped>
ion-card {
  max-width: 350px;
}
ion-card img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.weather-background {
  background-color: skyblue;
}
</style>