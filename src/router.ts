import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import HashPage from '@/pages/HashPage.vue';
import { envConfig } from '@/config';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'hash',
    path: '/:hash',
    component: HashPage,
  },
] satisfies RouteRecordRaw[];

const history = envConfig.isDev ? createWebHistory() : createWebHashHistory();

export const router = createRouter({
  history,
  routes,
});
