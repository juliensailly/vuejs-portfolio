import { createRouter, createWebHistory } from 'vue-router'
import textData from '../assets/texts.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: textData.fr.pages.projects.title
      }
    },
    {
      path: '/projects/:id',
      name: 'projectDetails',
      component: () => import('../views/ProjectDetailsView.vue'),
      meta: {
        title: textData.fr.pages.projectDetails.title
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = textData.fr.app_title
  if (to.meta.title)
    document.title = (to.meta.title + " – " + textData.fr.app_author) || textData.fr.app_title
  next()
})

export default router
