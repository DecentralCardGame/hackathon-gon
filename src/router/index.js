import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:screenName.html',
    name: 'Home2',
    component: Home
  },
  {
    path: '/test',
    name: 'Start',
    component: Start
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
