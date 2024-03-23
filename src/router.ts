import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    name: 'hash',
    path: '/:hash',
    component: () => import('@/pages/HashPage.vue'),
  },
  {
    name: '404',
    path: '*',
    component: () => import('@/pages/404Page.vue'),
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
