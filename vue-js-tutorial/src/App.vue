<script setup>
import headerComponent from './components/header-component.vue'
import footerComponent from './components/footer-component.vue'
</script>

<template>
  <div class="flex flex-col justify-between min-h-[100vh]">
    <headerComponent></headerComponent>
    <main class="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url('/background/light-topography.svg')] dark:bg-[url('/background/dark-topography.svg')]">
      <div class="max-w-screen-xl m-auto">
        <router-view></router-view>
      </div>
    </main>
    <footerComponent></footerComponent>
  </div>
</template>
