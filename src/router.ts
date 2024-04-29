import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { ROUTE } from '@/constants';

const routes = [
  {
    name: ROUTE.home.name,
    path: ROUTE.home.path,
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    name: ROUTE.hash.name,
    path: ROUTE.hash.path,
    component: () => import('@/pages/HashPage.vue'),
  },
  {
    name: ROUTE.error.name,
    path: ROUTE.error.path,
    component: () => import('@/pages/404Page.vue'),
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
