import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import NotFoundVue from '../views/NotFound.vue'

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundVue },
    { path: '/', component: MainContent },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
