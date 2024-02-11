<script setup>
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import textData from '../assets/texts.json'
import Carroussel from '../components/carroussel-component.vue'
import TechChips from '../components/project-technologies-component.vue'
const projectID = useRoute().params.id
const project = textData.fr.pages.projectDetails[projectID]

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div
    class="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url(/background/wiggle-light.svg)] dark:bg-[url(/background/wiggle-dark.svg)]"
  >
    <div class="max-w-screen-xl m-auto">
      <h1 class="text-4xl font-sans font-extrabold dark:text-white">
        {{ project.title }}
      </h1>
      <div class="flex flex-col md:flex-row gap-4 mt-2">
        <div class="flex-1">
          <Carroussel :imgs="project.img"></Carroussel>
          <TechChips :project="project" class="md:hidden"></TechChips>
          <p class="mt-4">{{ project.description }}</p>

          <div class="flex justify-center gap-4 my-4 flex-wrap">
            <a
              :href="project.links.github"
              target="_blank"
              v-if="project.links.github != ''"
              class="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-blue-400 hover:animate-growing_shadow focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg"
            >
              <img class="w-6" src="/technologies/github-white.svg" alt="Github logo" />
              {{ textData.fr.pages.projectDetails.github_link }}
            </a>
            <a
              class="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-bl from-blue-300 to-blue-400 hover:animate-growing_shadow focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg"
              :href="project.links.website"
              target="_blank"
              v-if="project.links.website != ''"
            >
              <img class="w-6" src="/technologies/link.svg" alt="Web logo" />
              {{ textData.fr.pages.projectDetails.website_link }}
            </a>
          </div>
        </div>
        <hr class="md:hidden border border-gray-800 dark:border-white-800" />
        <div class="flex-1 flex flex-col gap-2">
          <TechChips :project="project" class="hidden md:flex"></TechChips>
          <p>{{ project.textContent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
