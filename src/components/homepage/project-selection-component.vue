<script setup>
import ProjectCard from '../project-card-component.vue'
import values from '../../assets/locales/fr.json'

const projectsKeys = values.pages.homepage.projects
const projects = projectsKeys.map((key) => values.pages.projects.values[key])
</script>

<template>
  <section class="flex flex-col gap-4 p-4 md:p-8">
    <h2 class="mb-2 text-3xl font-sans font-semibold">
      {{ $t("pages.homepage.projectsTitle") }}
    </h2>
    <div class="flex flex-col md:flex-row gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="flex-1"
      ></ProjectCard>
    </div>
    <router-link
      to="/projects"
      class="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-blue-400 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg"
    >
      <p>{{ $t("pages.homepage.projectsViewMore") }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </router-link>
  </section>
</template>
