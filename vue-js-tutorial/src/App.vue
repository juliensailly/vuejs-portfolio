<script setup>
import headerComponent from './components/header-component.vue'
import footerComponent from './components/footer-component.vue'

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark')
} else {
  document.querySelector('html').classList.remove('dark')
}
</script>

<template>
  <div class="flex flex-col justify-between min-h-[100vh]">
    <headerComponent></headerComponent>
    <main class="flex-1">
      <router-view></router-view>
    </main>
    <footerComponent></footerComponent>
  </div>
</template>
