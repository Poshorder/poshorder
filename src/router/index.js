import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ElectronicsView from '@/views/ElectronicsView.vue'

import CheckoutView from '@/views/CheckoutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: ElectronicsView
    },
    {
      path: '/c/:id',
      name: 'checkout',
      component: CheckoutView,
      props: true
    }
  ]
})

export default router
