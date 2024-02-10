<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import ProjectCard from '../components/project-card-component.vue'
import textData from '../assets/texts.json'
import _ from 'lodash'
import { initFlowbite } from 'flowbite'

const sortedOption = ref('relevant')
const sortBtnLabel = ref(
  textData.fr.pages.projects.sort.title + ' : ' + textData.fr.pages.projects.sort.relevant
)
const sortingDropdownBtn = ref(null)

const hideDropdown = () => {
  sortingDropdownBtn.value.click()
}

const sortedTextData = computed(() => {
  // sortingDropdown.value.classList.add('hidden')
  // sortingDropdown.value.classList.remove('block')
  if (sortedOption.value === 'alphabetical') {
    return _.orderBy(textData.fr.pages.projects.values, 'title')
  } else if (sortedOption.value === 'recent') {
    return _.orderBy(textData.fr.pages.projects.values, 'recentScore', ['desc'])
  } else {
    return _.orderBy(textData.fr.pages.projects.values, 'relevantScore', ['desc'])
  }
})

watch(sortedOption, async (oldSort, newSort) => {
  if (newSort.value === 'alphabetical') {
    sortBtnLabel.value =
      textData.fr.pages.projects.sort.title + ' : ' + textData.fr.pages.projects.sort.alphabetical
  } else if (newSort.value === 'recent') {
    sortBtnLabel.value =
      textData.fr.pages.projects.sort.title + ' : ' + textData.fr.pages.projects.sort.recent
  } else {
    sortBtnLabel.value =
      textData.fr.pages.projects.sort.title + ' : ' + textData.fr.pages.projects.sort.relevant
  }
})

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div
    class="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url(/background/wiggle-light.svg)] dark:bg-[url(/background/wiggle-dark.svg)]"
  >
    <div class="max-w-screen-xl m-auto">
      <div class="text-right px-4 pt-4 md:px-8 md:pt-8">
        <button
          ref="sortingDropdownBtn"
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="group text-white bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-500"
          type="button"
        >
          {{ sortBtnLabel }}
          <svg
            class="w-2.5 h-2.5 ms-3 group-hover:translate-y-0.5 transition-transform duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          class="text-left z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            @click="hideDropdown()"
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li
              @click="sortedOption = 'relevant'"
              class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {{ textData.fr.pages.projects.sort.relevant }}
            </li>
            <li
              @click="sortedOption = 'recent'"
              class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {{ textData.fr.pages.projects.sort.recent }}
            </li>
            <li
              @click="sortedOption = 'alphabetical'"
              class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {{ textData.fr.pages.projects.sort.alphabetical }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex gap-4 md:gap-8 flex-wrap justify-center p-4 md:p-8">
        <ProjectCard
          class="flex-[100%] md:flex-[40%] lg:flex-[25%]"
          v-for="project in sortedTextData"
          :key="project"
          :project="project"
        ></ProjectCard>
      </div>
    </div>
  </div>
</template>
