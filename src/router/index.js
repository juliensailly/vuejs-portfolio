import { createRouter, createWebHistory } from 'vue-router'
import cyprienUI from '@/assets/scripts/cyprien'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Portfolio – Julien Sailly',
        description:
          'Portfolio de Julien Sailly. Apprenez à me connaître à travers mes études, mes projets et mes passions !'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: {
        title: 'Projets – Julien Sailly',
        description:
          'Découvrez mes projets, mes réalisations et mes compétences en développement web et mobile.'
      }
    },
    {
      path: '/projects/:id',
      name: 'projectDetails',
      component: () => import('@/views/ProjectDetailsView.vue'),
      meta: {
        title: 'Projets – Julien Sailly',
        description:
          'Découvrez les détails de mon projet, mes réalisations et mes compétences en développement web et mobile.'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/Error404View.vue'),
      meta: {
        title: 'Erreur 404 – Julien Sailly',
        description: "La page que vous cherchez n'existe pas. Veuillez vérifier l'URL et réessayer."
      }
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title
  document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description);
  next()
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
  if (localStorage.getItem('6p')) {
    setTimeout(() => {
      cyprienUI()
    }, 100)
  }
  if (to.name == "projectDetails") {
    setTimeout(() => {
      document.querySelector("nav .projects_link").ariaCurrent = "page"
    }, 10)
  } else if (to.name != "projects") {
    document.querySelector("nav .projects_link").ariaCurrent = ""
  }
})

export default router
