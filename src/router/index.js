import { createRouter, createWebHistory } from 'vue-router'
import PokemonPage from '../views/PokemonPage.vue'

const routes = [
  {
    path: '/',
    name: 'PokemonPage',
    component: PokemonPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
