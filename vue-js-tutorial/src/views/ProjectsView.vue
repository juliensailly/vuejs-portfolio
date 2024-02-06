<script setup>
import ProjectCard from '../components/project-card-component.vue'
import textData from '../assets/texts.json'
</script>

<template>
  <div class="col-start-1 col-span-6 row-start-1 row-span-5 flex gap-8 flex-wrap justify-center py-8">
    <ProjectCard class="flex-[40%]" v-for="(project) in textData.fr.pages.projects.values" :key="project" :project="project"></ProjectCard>
  </div>
</template>
