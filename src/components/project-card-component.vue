<script setup>
import fr from '../assets/locales/fr.json'
import en from '../assets/locales/en.json'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { onMounted } from 'vue'

const locale = useI18n().locale

const projectBaseURL = '/projects/'
const props = defineProps({
  project: {
    type: String,
    required: true
  }
})
const project_title = ref(null)
const project_techs = ref(null)
const project_desc = ref(null)
const project_img = ref(null)
watch(
  () => locale.value,
  () => {
    updateProject()
  }
)

function getProject() {
  return locale.value == 'fr'
    ? fr.pages.projects.values[props.project]
    : en.pages.projects.values[props.project]
}

function updateProject() {
  project_img.value.src = getProject().img
  project_img.value.alt = getProject().title + ' illustration image'
  project_title.value.innerText = getProject().title
  project_techs.value.innerText = getProject().technologies
  project_desc.value.innerText = getProject().description
}

onMounted(() => {
  updateProject()
})
</script>

<template>
  <router-link
    :title="$t('pages.projects.seeMore') + ' - ' + getProject().title"
    :to="projectBaseURL + getProject().id"
    class="flex flex-col cursor-pointer bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out"
  >
    <img class="rounded-t-lg aspect-video object-cover" ref="project_img" />
    <div class="p-5 flex-1 flex flex-col justify-between items-baseline">
      <div>
        <h5
          class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          ref="project_title"
        ></h5>
        <p class="mb-3 font-normal italic text-gray-500 dark:text-gray-500" ref="project_techs"></p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" ref="project_desc"></p>
      </div>
      <router-link
        :title="$t('pages.projects.seeMore') + ' - ' + getProject().title"
        :to="projectBaseURL + getProject().id"
        class="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-600"
      >
        {{ $t('pages.projects.seeMore') }}
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
      </router-link>
    </div>
  </router-link>
</template>
