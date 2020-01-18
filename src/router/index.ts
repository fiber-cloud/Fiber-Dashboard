import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'Not found',
    component: NotFound,
    meta: {
      guest: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // TODO check if route required authentication
  next()
})

export default router
