import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'SkillIndex',
      component: () => import('../views/skills/skillIndex.vue')
    },{
      path: '/skills/create',
      name: 'SkillCreate',
      component: () => import('../views/skills/skillCreate.vue')
    },{
      path: '/skills/:id/edit',
      name: 'SkillEdit',
      component: () => import('../views/skills/skillEdit.vue'),
      props: true
    },{
      path: '/skills/:id/delete',
      name: 'SkillDelete',
      component: () => import('../views/skills/skillDelete.vue')
    },
  ]
})

export default router
