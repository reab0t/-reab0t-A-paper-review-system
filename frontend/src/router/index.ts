import VueRouter from 'vue-router'

const createRouter = VueRouter.createRouter
const createWebHistory = VueRouter.createWebHistory
const RouteRecordRaw = VueRouter.RouteRecordRaw

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/paper',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'list',
        name: 'PaperList',
        component: () => import('@/views/paper/list.vue'),
        meta: {
          title: '论文列表',
          requiresAuth: true
        }
      },
      {
        path: 'submit',
        name: 'PaperSubmit',
        component: () => import('@/views/paper/submit.vue'),
        meta: {
          title: '提交论文',
          requiresAuth: true
        }
      },
      {
        path: 'review/:id',
        name: 'PaperReview',
        component: () => import('@/views/paper/review.vue'),
        meta: {
          title: '论文评审',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/review',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'tasks',
        name: 'ReviewTasks',
        component: () => import('@/views/review/tasks.vue'),
        meta: {
          title: '评审任务',
          requiresAuth: true
        }
      },
      {
        path: 'history',
        name: 'ReviewHistory',
        component: () => import('@/views/review/history.vue'),
        meta: {
          title: '评审历史',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/default.vue'),
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    },
    children: [
      {
        path: 'users',
        name: 'UserManagement',
        component: () => import('@/views/admin/users.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'papers',
        name: 'PaperManagement',
        component: () => import('@/views/admin/papers.vue'),
        meta: {
          title: '论文管理'
        }
      },
      {
        path: 'reviews',
        name: 'ReviewManagement',
        component: () => import('@/views/admin/reviews.vue'),
        meta: {
          title: '评审管理'
        }
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('@/views/admin/statistics.vue'),
        meta: {
          title: '统计分析'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title} - 论文评审系统`

  // 检查是否需要认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      return
    }

    // 检查是否需要管理员权限
    if (to.matched.some(record => record.meta.requiresAdmin)) {
      const userRole = localStorage.getItem('userRole')
      if (userRole !== 'ADMIN') {
        next({ path: '/' })
        return
      }
    }
  }

  next()
})

export default router 