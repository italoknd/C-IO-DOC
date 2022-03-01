import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Agendar from '../pages/Agendar.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      hideNavbar: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/agendar',
    name: 'FormAgendamento',
    component: Agendar
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Edit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
