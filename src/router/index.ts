import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import MenuView from '../views/MenuView.vue'
import CartaView from '../views/CartaView.vue'
import VinhosView from '../views/VinhosView.vue'
import ReservarView from '../views/ReservarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/carta',
      name: 'carta',
      component: CartaView,
    },
    {
      path: '/vinhos',
      name: 'vinhos',
      component: VinhosView,
    },
    {
      path: '/reservar',
      name: 'reservar',
      component: ReservarView,
    },
  ],
})

export default router
