import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SearchedPage from '../views/SearchedPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home-page', path: '/', component: HomePage },
    { name: 'result-page', path: '/movie/:title', component: SearchedPage }
  ]
})

export default router
