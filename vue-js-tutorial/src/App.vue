<script setup>
  import headerComponent from './components/header-component.vue'
</script>

<template>
  <div id="app">
    <headerComponent></headerComponent>
    <router-view></router-view>
  </div>
</template>