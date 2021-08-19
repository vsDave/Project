import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import calculator from '../components/calculator.vue'

import Todo from '../components/todo.vue'
import services from '../components/services.vue'
import tables from '../components/tables.vue'
import quiz from '../components/quiz.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/calculator',

    component: calculator,
  },
  {
    path: '/Todo',
    component: Todo,
  },
  {
    path: '/services',
    component: services,
  },
  {
    path: '/tables',
    component: tables,
  },
  {
    path: '/quiz',
    component: quiz,
  },
]

const router = new VueRouter({
  routes,
})

export default router
