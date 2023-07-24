import {createRouter, createWebHistory} from 'vue-router'

import Index from './components/Index.vue'
import Portfolio from './pages/Portfolio.vue'
//import Front from './components/Front.vue'
import Tracking from './pages/Tracking.vue'
import Prueba from './pages/Prueba.vue'
import NotFound from './pages/NotFound.vue'
import RickMorty from './pages/Rick&Morty.vue'
import TipsCalculator from './pages/TipsCalculator.vue'
import DarkMode from './components/DarkMode.vue'
import Maquetacion from './pages/Maquetacion.vue'
import Notifications from './pages/Notifications.vue'
import Calculator from './pages/Calculator.vue'
import Ecommerce from './pages/Ecommerce.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', name: 'Portfolio', component: Portfolio},
      { path: '/index', name: 'Index', component: Index},
      { path: '/tracking', name: 'Tracking', component: Tracking},
      { path: '/prueba', name: 'Prueba', component: Prueba},
      { path: '/notfound', name: 'NotFound', component: NotFound},
      { path: '/rick&morty', name: 'Rick&Morty', component: RickMorty},
      { path: '/tipscalculator', name: 'TipsCalculator', component: TipsCalculator},
      { path: '/darkmode', name: 'DarkMode', component: DarkMode},
      { path: '/maquetacion', name: 'Maquetacion', component: Maquetacion},
      { path: '/notifications', name: 'Notifications', component: Notifications},
      { path: '/calculator', name: 'Calculator', component: Calculator},
      { path: '/ecommerce', name: 'Ecommerce', component: Ecommerce},
  ]
})

export default router