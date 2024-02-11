<script setup>
import textData from '../assets/texts.json'

const checkIfBackUrlIsOnWebsite = () => {
  return window.history.length > 2
}
</script>

<template>
  <div
    class="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url(/background/wiggle-light.svg)] dark:bg-[url(/background/wiggle-dark.svg)]"
  >
    <div class="max-w-screen-xl m-auto">
      <h1 class="text-4xl font-sans font-extrabold dark:text-white">
        {{ textData.fr.pages.error404.title }}
      </h1>
      <p class="project-card mt-4">{{ textData.fr.pages.error404.message }}</p>
      <p
        @click="checkIfBackUrlIsOnWebsite() ? $router.back() : $router.push('/')"
        class="mt-4 cursor-pointer inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-600"
      >
        {{ textData.fr.pages.error404.button }}
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
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </p>
    </div>
  </div>
</template>
