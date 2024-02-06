import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import textData from '../assets/texts.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: textData.fr.pages.projects.title
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = textData.fr.app_title
  if (to.meta.title)
    document.title = (to.meta.title + " – " + textData.fr.app_title) || textData.fr.app_title
  next()
})

export default router
