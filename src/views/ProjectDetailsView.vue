<script setup>
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import fr from '../assets/locales/fr.json'
import en from '../assets/locales/en.json'
import Carroussel from '../components/carroussel-component.vue'
import TechChips from '../components/project-technologies-component.vue'
import MarkdownConverter from '../components/markdown-converter-component.vue'
import GithubContributors from '../components/github-contributors-component.vue'
import Error404 from './Error404View.vue'
import { useI18n } from "vue-i18n";
    
const i18nLocale = useI18n();

const projectID = useRoute().params.id
var project = (i18nLocale.locale.value == "fr" ? fr.pages.projectDetails[projectID] : en.pages.projectDetails[projectID])

document.title = project.title

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <Error404 v-if="project == undefined"></Error404>
  <div
    v-else
    class="flex-1 p-4 md:p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url(/background/endless-clouds-light.svg)] dark:bg-[url(/background/endless-clouds-dark.svg)]"
  >
    <div class="max-w-screen-xl m-auto">
      <h1 class="text-4xl font-sans font-extrabold dark:text-white">
        {{ project.title }}
      </h1>
      <div class="mt-2 flex flex-col md:flex-row gap-4">
        <div class="flex-1 flex flex-col gap-4">
          <Carroussel :imgs="project.img"></Carroussel>
          <TechChips :project="project" class="md:hidden"></TechChips>
          <p class="project-card">{{ project.description }}</p>

          <div
            class="flex justify-center flex-col xs:flex-row gap-2 flex-wrap project-card"
            v-if="project.links.github != '' || project.links.website != ''"
          >
            <a
              :href="project.links.github"
              target="_blank"
              v-if="project.links.github != ''"
              class="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-blue-400 hover:animate-growing_shadow_dark focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg"
            >
              <img class="w-6" src="/technologies/github-white.svg" alt="Github logo" />
              <p>{{ $t("pages.projectDetails.github_link") }}</p>
            </a>
            <a
              class="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-white bg-gradient-to-bl from-blue-300 to-blue-400 hover:animate-growing_shadow_dark focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg"
              :href="project.links.website"
              target="_blank"
              v-if="project.links.website != ''"
            >
              <img class="w-6" src="/technologies/link.svg" alt="Web logo" />
              <p>{{ $t("pages.projectDetails.website_link") }}</p>
            </a>
          </div>
        </div>
        <hr class="md:hidden border border-gray-800 dark:border-white-800" />
        <div class="flex-1 flex flex-col gap-4">
          <TechChips :project="project" class="hidden md:flex"></TechChips>
          <MarkdownConverter :md="project.textContent" class="project-card"></MarkdownConverter>
          <div class="project-card" v-if="project.contributors != undefined">
            <h2 class="mb-2 text-2xl font-sans font-semibold dark:text-white">
              {{ $t("pages.projectDetails.contributorsLabel") }}
            </h2>
            <GithubContributors :contributors="project.contributors"></GithubContributors>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
