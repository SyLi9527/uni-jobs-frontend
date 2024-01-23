// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue' // Import your Home component
import About from '../pages/About.vue' // Import your About component
import NotFound from '../pages/NotFound.vue' // Import your NotFound component
import UniJob from '../pages/UniJob.vue'
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
  { path: '/', redirect: '/home' },
  { path: '/unijob', 
    name: 'UniJob',
    component: UniJob 
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
  }
  // other routes...
]

const router = createRouter({
  history: createWebHistory(),
//   createWebHistory(process.env.BASE_URL)
  routes
})

export default router