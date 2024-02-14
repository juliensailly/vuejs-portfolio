<script setup>
import { initFlowbite } from 'flowbite'
import textData from '../../assets/texts.json'
import { onMounted } from 'vue'

const hardSkills = textData.fr.pages.homepage.skills.hard.list
var techUsed = {}
hardSkills.forEach((skillType) => {
  skillType.id = skillType.title.replaceAll(' ', '-').replaceAll('é', 'e').toLowerCase()

  skillType.list.forEach((tech) => {
    techUsed[tech] = textData.fr.assets.technologies[tech]
  })
})

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <section class="flex flex-col gap-4 p-4 md:p-8">
    <h2 class="mb-2 text-3xl font-sans font-semibold">
      {{ textData.fr.pages.homepage.skillsTitle }}
    </h2>
    <div class="flex flex-col">
      <div class="p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl">
        <h3 class="mb-2 text-xl font-sans font-semibold">
          {{ textData.fr.pages.homepage.skills.hard.title }}
        </h3>
        <div
          class="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch"
        >
          <ul
            id="hard-skills-tab"
            data-tabs-toggle="#hard-skills-tab-content"
            role="tablist"
            class="flex flex-row flex-wrap md:flex-col gap-2 md:gap-4 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            <li v-for="skillType in hardSkills" :key="skillType.id" class="flex-[40%] md:flex-none">
              <button
                :aria-selected="skillType.id === hardSkills[0].id"
                :data-tabs-target="'#' + skillType.id"
                type="button"
                role="tab"
                class="inline-flex items-center px-4 py-3 bg-blue-700 hover:bg-blue-600 hover:text-gray-900 dark:text-gray-900 
                text-gray-900 rounded-lg active w-full dark:bg-blue-600 dark:hover:bg-blue-500 aria-selected:bg-blue-500 
                aria-selected:md:translate-x-7 aria-selected:md:rounded-r-none transition-all duration-200 aria-selected:hover:bg-blue-500 
                aria-selected:hover:text-gray-900 hover:dark:text-gray-900 aria-selected:dark:bg-blue-400 aria-selected:dark:hover:bg-blue-400 
                aria-selected:dark:hover:text-gray-900"
              >
                <img
                  :src="skillType.iconURL"
                  :alt="skillType.title + ' illustration icon'"
                  class="w-4 h-4 me-2"
                />
                <p class="text-start">{{ skillType.title }}</p>
              </button>
            </li>
            <div class="flex-[40%]"></div>
          </ul>
          <div id="hard-skills-tab-content" class="flex-1 bg-blue-500 dark:bg-blue-400 rounded-lg">
            <div
              role="tabpanel"
              :id="skillType.id"
              v-for="skillType in hardSkills"
              :key="skillType.id"
              class="grid grid-cols-[repeat(auto-fit,minmax(auto,150px))] gap-4 justify-around p-6 mx-auto text-medium text-gray-700 w-full"
            >
              <div
                class="flex-1 flex bg-white-500 p-2 rounded shadow-lg min-w-28"
                v-for="skill in skillType.list"
                :key="skill"
              >
                <a
                  :href="techUsed[skill].url"
                  class="flex-1 flex flex-col items-center justify-between gap-2"
                >
                  <img
                    :src="techUsed[skill].src"
                    :alt="techUsed[skill].title + ' icon'"
                    class="flex-1"
                  />
                  <p class="pt-2 border-t border-blue-700 w-full text-center">
                    {{ techUsed[skill].title }}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex"></div>
    </div>
  </section>
</template>
