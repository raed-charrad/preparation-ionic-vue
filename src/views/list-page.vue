<template>
    <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>forecast</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">forecast</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="auto" class="min-width">
            <ForeCast></ForeCast>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import commonIonicComponents from '@/shared/common-ionic-components';
import ForeCast from '@/weather/fore-cast.vue';
export default defineComponent({
    components: { 
        ForeCast,
        ...commonIonicComponents 
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>