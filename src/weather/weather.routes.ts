import {RouteRecordRaw} from 'vue-router';
export const weatherRoutes: Array<RouteRecordRaw> = [
    {
        path: '/weather',
        name: 'weather',
        component: () => import('@/weather/current-weather.vue'),
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('@/weather/fore-cast.vue'),
    }
];