import CurriculumVitaeView from '@/views/CurriculumVitaeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CurriculumVitaeView
    }
  ]
})

export default router
