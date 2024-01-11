import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/table/:count',
      name: 'table',
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/table/landmarks/:count',
      name: 'tableExtension',
      component: () => import('../views/TableView.vue')
    }
  ]
});

export default router;
