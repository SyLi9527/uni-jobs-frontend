// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue' // Import your Home component
import About from '../pages/About.vue' // Import your About component

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home // Associate /home with the Home component
  },
  {
    path: '/about',
    name: 'About',
    component: About // Associate /about with the About component
  },
  // other routes...
]

const router = createRouter({
  history: createWebHistory(),
//   createWebHistory(process.env.BASE_URL)
  routes
})

export default router