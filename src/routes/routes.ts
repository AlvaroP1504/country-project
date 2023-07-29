import { createRouter, createWebHistory } from 'vue-router'
import NotFoundVue from '../views/NotFound.vue'
import Home from '../components/Home.vue'

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue },
    { path: '/', component: Home },
    { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
