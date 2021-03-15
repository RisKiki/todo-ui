import Vue from 'vue'
import VueRouter from 'vue-router'
import todoLists from '../views/todoLists.vue'
import todoList from '../views/todoList.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todoLists',
    component: todoLists
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/list/:id',
    name: 'list',
    component: todoList
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
