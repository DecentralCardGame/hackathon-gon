import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/MyNFTs',
    name: 'MyNFTs',
    component: Start
  },
  {
    path: '/Leaderboard',
    name: 'Leaderboard',
    component: Start
  },
  {
    path: '/ChainDetails/:name',
    name: 'ChainDetails',
    component: Start
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
