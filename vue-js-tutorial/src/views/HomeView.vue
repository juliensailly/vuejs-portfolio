<script setup>
import ProjectSelection from '../components/homepage/project-selection-component.vue'
</script>

<template>
  <div
    class="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white  bg-[url(/background/topography-light.svg)] dark:bg-[url(/background/topography-dark.svg)]"
  >
    <div class="max-w-screen-xl m-auto py-4 md:py-8">
      <h1 class="px-4 md:px-8 text-center">Home</h1>
      <ProjectSelection class="px-4 md:px-8"></ProjectSelection>
    </div>
  </div>
</template>
