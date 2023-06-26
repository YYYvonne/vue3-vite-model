import { createRouter, createWebHistory } from 'vue-router';
import type { RouteConfigs } from '@/types';
import { t } from '@/lang/zh';

const routes = <RouteConfigs>[
  {
    path: '/',
    redirect: '/product',
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product.vue'),
  },
  {
    path: '/panel',
    name: 'panel',
    component: () => import('@/views/panel.vue'),
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('@/views/data.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export { router, routes };
