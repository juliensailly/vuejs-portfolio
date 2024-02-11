<script setup>
import textData from '../assets/texts.json'

const props = defineProps({
    project: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <div
      class="bg-white border border-gray-800 dark:border-white-600 text-gray-900 px-1 py-0.5 rounded-md hover:shadow-md transition-shadow duration-200"
      :key="techKey"
      v-for="techKey in props.project.technologies"
    >
      <a
        :href="textData.fr.assets.technologies[techKey].url"
        target="_blank"
        class="flex gap-1 items-center"
      >
        <img
          class="max-h-5"
          :src="textData.fr.assets.technologies[techKey].src"
          :alt="textData.fr.assets.technologies[techKey].title"
        />
        <p class="italic">{{ textData.fr.assets.technologies[techKey].title }}</p>
      </a>
    </div>
  </div>
</template>
