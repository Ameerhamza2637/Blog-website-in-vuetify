// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

const routes = [
  {
      path: '/',
      name: 'Login',
      component: Login
  },
  {
    path: '/dashbord',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
