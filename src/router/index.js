import Vue from 'vue'
import VueRouter from 'vue-router'
import todoLists from '../views/todoLists.vue'
import todoList from '../views/todoList.vue'
import login from '../views/login.vue'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todoLists',
    component: todoLists,
    meta : {
      requiresLogin : true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta : {
      requiresLogin : false
    }
  },
  {
    path: '/list/:id',
    name: 'list',
    component: todoList,
    meta : {
      requiresLogin : true
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (store.getters.isLogged) {
      next()       
    }else {
      next({ name: 'login' })
    } 

  } else {
    next()
  }    
})


export default router
