import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/papers',
      name: 'papers',
      component: () => import('../views/papers/PaperList.vue')
    },
    {
      path: '/papers/:id',
      name: 'paper-detail',
      component: () => import('../views/papers/PaperDetail.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/reviews/ReviewList.vue')
    },
    {
      path: '/reviews/:id',
      name: 'review-detail',
      component: () => import('../views/reviews/ReviewDetail.vue')
    }
  ]
})

export default router 