<script setup>
import ProjectSelection from '../components/homepage/project-selection-component.vue'
import Skills from '../components/homepage/skills-component.vue'
import Studies from '../components/homepage/studies-component.vue'
import Welcome from '../components/homepage/welcome-component.vue'
</script>

<template>
  <div
    class="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white  bg-[url(/background/topography-light.svg)] dark:bg-[url(/background/topography-dark.svg)]"
  >
    <div class="max-w-screen-xl m-auto py-4 md:py-8">
      <Welcome></Welcome>
      <Studies id="studies"></Studies>
      <ProjectSelection></ProjectSelection>
      <Skills></Skills>
    </div>
  </div>
</template>
