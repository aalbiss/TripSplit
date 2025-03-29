import LandingPage from '@/views/LandingPageView.vue'
import SigupView from '@/views/SigupView.vue'
import StartView from '@/views/StartView.vue'
import CreateGroupView from '@/views/CreateGroupView.vue'
import Prova from '@/views/Prova.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: SigupView,
    },
    {
      path: '/start',
      name: 'Start',
      component: StartView,
      meta: { requiresAuth: true },
    },
    {
      path: '/creategroup',
      name: 'CreateGroup',
      component: CreateGroupView,
      meta: { requiresAuth: true },
    },
    {
      path: '/prova',
      name: 'Prova',
      component: Prova,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken') // or use Vuex/store to manage the auth status

  // If the route requires authentication and the user is not logged in
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to landing page or login page
    next({ name: 'LandingPage' })
  } else {
    // Proceed with the navigation
    next()
  }
})

export default router
