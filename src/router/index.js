import { createRouter, createWebHistory } from 'vue-router'
import WD from '@/views/WalkingDead'


const routes = [
  {path:'/', redirect: '/wd'},
  {path: '/wd', component:WD}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
