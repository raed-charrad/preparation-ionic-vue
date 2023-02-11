import { weatherRoutes } from '@/weather/weather.routes';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import list from '../views/list-page.vue'
import weather from '../views/weather-page.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
    {
      path: '/weather',
      name: 'weather',
      component: weather
  },
  {
      path: '/list',
      name: 'list',
      component: list
  },
  // ...weatherRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
