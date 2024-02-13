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
      <div>
        <h3 class="mb-2 text-xl font-sans font-semibold">
          {{ textData.fr.pages.homepage.skills.hard.title }}
        </h3>
        <div class="md:flex">
          <ul
            id="hard-skills-tab"
            data-tabs-toggle="#hard-skills-tab-content"
            role="tablist"
            class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
          >
            <li v-for="skillType in hardSkills" :key="skillType.id">
              <button
                :aria-selected="skillType.id === hardSkills[0].id"
                :data-tabs-target="'#' + skillType.id"
                type="button"
                role="tab"
                class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
              >
                <img
                  :src="skillType.iconURL"
                  :alt="skillType.title + ' illustration icon'"
                  class="w-4 h-4 me-2"
                />
                {{ skillType.title }}
              </button>
            </li>
          </ul>
          <div id="hard-skills-tab-content">
            <div
              role="tabpanel"
              :id="skillType.id"
              v-for="skillType in hardSkills"
              :key="skillType.id"
              class="flex flex-wrap gap-4 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full"
            >
              <div
                class="flex flex-col flex-1 items-center justify-between"
                v-for="skill in skillType.list"
                :key="skill"
              >
                <img
                  :src="techUsed[skill].src"
                  :alt="techUsed[skill].title + ' icon'"
                  class="w-12"
                />
                <p>{{ techUsed[skill].title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex"></div>
    </div>
  </section>
</template>
