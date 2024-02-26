import { createRouter, createWebHistory } from 'vue-router'
import values from '../assets/texts.json'

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
        title: values.fr.pages.projects.title
      }
    },
    {
      path: '/projects/:id',
      name: 'projectDetails',
      component: () => import('../views/ProjectDetailsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/Error404View.vue'),
      meta: {
        title: values.fr.pages.error404.title
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = values.fr.app_title
  if (to.meta.title && to.name !== 'projects')
    document.title = (to.meta.title + " – " + values.fr.app_author) || values.fr.app_title
  next()
})

export default router
