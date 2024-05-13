import { createRouter, createWebHistory } from 'vue-router';

const BASE_PATH = import.meta.env.VITE_BASE_PATH;

const routes = [
  {
    path: `${BASE_PATH}/`,
    component: () => import('./pages/order-book.vue'),
    alias: `${BASE_PATH}/order-book`,
  },
  {
    path: `${BASE_PATH}/settings`,
    component: () => import('./pages/settings.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
