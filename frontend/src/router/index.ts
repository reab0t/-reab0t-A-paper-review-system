// // import { createRouter, createWebHistory } from 'vue-router'
// //
// // const router = createRouter({
// //   history: createWebHistory(import.meta.env.BASE_URL),
// //   routes: [
// //     {
// //       path: '/',
// //       name: 'home',
// //       component: () => import('../views/Home.vue')
// //     },
// //     {
// //       path: '/papers',
// //       name: 'papers',
// //       component: () => import('../views/papers/PaperList.vue')
// //     },
// //     {
// //       path: '/papers/:id',
// //       name: 'paper-detail',
// //       component: () => import('../views/papers/PaperDetail.vue')
// //     },
// //     {
// //       path: '/reviews',
// //       name: 'reviews',
// //       component: () => import('../views/reviews/ReviewList.vue')
// //     },
// //     {
// //       path: '/reviews/:id',
// //       name: 'review-detail',
// //       component: () => import('../views/reviews/ReviewDetail.vue')
// //     }
// //   ]
// // })
// //
// // export default router
// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import PaperList from '../components/paper/PaperList.vue';
// import PaperDetail from '../components/paper/PaperDetail.vue';
// import ReviewList from '../components/review/ReviewList.vue';
// import ReviewDetail from '../components/review/ReviewDetail.vue';
// import LoginForm from '@/components/auth/LoginForm.vue';
// import RegisterForm from '@/components/auth/RegisterForm.vue';
//
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: LoginForm,
//   },
//   {
//        path: '/register',
//        name: 'register',
//        component: RegisterForm,
//   },
//   {
//     path: '/papers',
//     name: 'papers',
//     component: PaperList,
//   },
//   {
//     path: '/papers/:id',
//     name: 'paper-detail',
//     component: PaperDetail,
//   },
//   {
//     path: '/reviews',
//     name: 'reviews',
//     component: ReviewList,
//   },
//   {
//     path: '/reviews/:id',
//     name: 'review-detail',
//     component: ReviewDetail,
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     redirect: '/login',
//   },
// ];
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });
//
// export default router;
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

// 动态导入组件
const LoginForm = () => import('@/components/auth/LoginForm.vue');
const RegisterForm = () => import('@/components/auth/RegisterForm.vue');
const PaperList = () => import('@/components/paper/PaperList.vue');
const PaperDetail = () => import('@/components/paper/PaperDetail.vue');
const PaperUpload = () => import('@/components/paper/PaperUpload.vue');
const PaperViewer = () => import('@/components/paper/PaperViewer.vue');
const ReviewForm = () => import('@/components/review/ReviewForm.vue');
const ReviewList = () => import('@/components/review/ReviewList.vue');
const ReviewDetail = () => import('@/components/review/ReviewDetail.vue');
//const NotFound = () => import('@/components/common/NotFound.vue');

const routes = [
  { path: '/login', name: 'login', component: LoginForm },
  { path: '/register', name: 'register', component: RegisterForm },
  { path: '/papers', name: 'papers', component: PaperList },
  { path: '/papers/:id', name: 'paper-detail', component: PaperDetail },
  { path: '/upload', name: 'upload', component: PaperUpload },
  { path: '/viewer', name: 'viewer', component: PaperViewer },
  { path: '/reviews', name: 'reviews', component: ReviewForm },
  { path: '/reviews/:id', name: 'review-detail', component: ReviewDetail },
//   { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;

  if (to.name !== 'login' && to.name !== 'register' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
