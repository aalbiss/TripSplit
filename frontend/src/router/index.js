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
    },
    {
      path: '/createGroup',
      name: 'CreateGroup',
      component: CreateGroupView,
    },
    {
      path: '/prova',
      name: 'Prova',
      component: Prova,
    },
  ],
})

export default router
