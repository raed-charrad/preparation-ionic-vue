<template>
    <div>
        <current-weather />
        <forecast />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CurrentWeather from './current-weather.vue'
import  Forecast  from './fore-cast.vue';

export default defineComponent({
    components: {
        CurrentWeather,
        Forecast
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>