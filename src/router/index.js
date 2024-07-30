import { createRouter, createWebHistory } from 'vue-router'
import ElectronicsView from '@/views/ElectronicsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: ElectronicsView
    },
    {
      path: '/checkout/:id',
      name: 'checkout',
      component: () => import('@/views/CheckoutView.vue'),
      props: true
    }
  ]
})

export default router
