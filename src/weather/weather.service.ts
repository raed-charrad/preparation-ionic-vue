import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import { OneWeather } from "./one-weather.model";
const weatherurl = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=207b229deef7ace432085b7ce1ea79bb';
const weather = ref<OneWeather>();
fetchWeather();
setInterval(fetchWeather, 120000);
export function useWeather(){
    return {
        weather,
        fetchWeather,
        formatTemperature,
        getWeatherImageUrl
    };
}
async function fetchWeather(): Promise<void> {
    const { coords } = await Geolocation.getCurrentPosition();
    const response = await fetch(`${weatherurl}&lat=${coords.latitude}&lon=${coords.longitude}&cnt=5&units=metric}`);
        // console.log('response'+response.json());
    weather.value = await response.json();
    // console.log('heeere')
    // console.log(weather);
}
function formatTemperature(value: number, format: 'F' | 'C') {
    return `${Math.round(value)}° ${format}`;
  }
  function getWeatherImageUrl(iconName: string, size: '2x' | '4x') {
    return `http://openweathermap.org/img/wn/${iconName}@${size ? size : '1x'}.png`;
  }
  