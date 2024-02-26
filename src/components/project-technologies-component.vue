<script setup>
import assets from '../assets/assets.json'

const props = defineProps({
    project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-2 flex-wrap project-card">
    <div
      class="bg-white border border-gray-800 dark:border-white-600 text-gray-900 px-1 py-0.5 rounded-md hover:shadow-md transition-shadow duration-200"
      :key="techKey"
      v-for="techKey in props.project.technologies"
    >
      <a
        :href="assets.technologies[techKey].url"
        target="_blank"
        class="flex gap-1 items-center"
      >
        <img
          class="max-h-5 w-full"
          :src="assets.technologies[techKey].src"
          :alt="assets.technologies[techKey].title"
        />
        <p class="italic">{{ assets.technologies[techKey].title }}</p>
      </a>
    </div>
  </div>
</template>
