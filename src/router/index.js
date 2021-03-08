import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import CreateComponent from '../components/CreateComponent.vue'
import IndexComponent from '../components/IndexComponent.vue'
import EditComponent from '../components/EditComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
