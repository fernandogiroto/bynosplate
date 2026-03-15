import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroView from '../views/IntroView.vue'
import IntroTwoView from '../views/IntroTwoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView,
    },
      {
      path: '/intro-two',
      name: 'intro-two',
      component: IntroTwoView,
    },
    {
      path: '/menu',
      name: 'home',
      component: HomeView,
    },
  ],
  
})

export default router
