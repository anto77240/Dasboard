import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import * as auth from '../authService.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter(to, from, next)
    {
      if(!auth.isLogged()){
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'loginView',
    component: Login
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
