<script setup>
import assets from '../assets/assets.json'
</script>

<template>
  <footer class="bg-blue dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-4">
      <div class="flex justify-center items-center gap-4">
        <a :href="link.url" v-for="link in  assets.footer.contactLinks" :key="link.title" target="_blank" class="hover:scale-110 transition-transform duration-200">
          <img :src="link.src" :alt="link.title + ' icon'" class="w-8 h-8" />
        </a>
      </div>
      <p class="text-center text-white dark:text-gray-300">
        {{ assets.footer.name }} &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>
