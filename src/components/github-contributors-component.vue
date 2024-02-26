<script setup>
import assets from '../assets/assets.json'

const props = defineProps({
  contributors: {
    type: Object,
    required: true
  }
})

setInterval(() => {
  var tooltip = document.querySelectorAll('.tooltip')
  tooltip.forEach((el) => {
    if (el.classList.contains('invisible')) {
      el.style.position = 'absolute'
      el.style.transform = 'translate3d(0px, 0px, 0px)'
    }
  })
}, 1000)

const contributorsData = assets.contributors
</script>

<template>
  <div class="flex -space-x-2.5 rtl:space-x-reverse justify-center">
    <a
      :href="contributorsData[contributor].github"
      v-for="contributor in props.contributors"
      :key="contributor"
      target="_blank"
    >
      <img
        :data-tooltip-target="contributor"
        data-tooltip-placement="top"
        class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
        :src="contributorsData[contributor].avatar + '?s=128'"
        :alt="contributorsData[contributor].name + ' profile picture'"
      />

      <div
        :id="contributor"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-800"
      >
        {{ contributorsData[contributor].name }}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </a>
  </div>
</template>
