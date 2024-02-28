import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import HashPage from '@/pages/HashPage.vue';

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

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
