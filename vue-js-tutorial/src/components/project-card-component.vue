<script>
import textData from '../assets/texts.json'
const projectBaseURL = '/projects/'
export default {
  props: {
    project: Object
  },
  setup() {
    return { textData, projectBaseURL }
  }
}
</script>

<template>
  <div
    @click="$router.push(projectBaseURL + project.id)"
    class="flex flex-col max-w-md md:max-w-sm cursor-pointer bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out"
  >
    <img
      class="rounded-t-lg aspect-video object-cover"
      :src="project.img"
      :alt="project.title + ' illustration image'"
    />
    <div class="p-5 flex-1 flex flex-col justify-between items-baseline">
      <div>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ project.title }}
        </h5>
        <p class="mb-3 font-normal italic text-gray-500 dark:text-gray-500">
          {{ project.technologies }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>
      <a
        :href="projectBaseURL + project.id"
        class="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-600"
      >
        {{ textData.fr.pages.projects.seeMore }}
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform group-hover:translate-x-1 group-focus:translate-x-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
