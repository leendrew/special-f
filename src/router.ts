import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/Home.vue';
import HashPage from '@/pages/Hash.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/:hash',
    component: HashPage,
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
