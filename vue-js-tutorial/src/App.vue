<script>
import headerComponent from './components/header-component.vue'
import footerComponent from './components/footer-component.vue'

export default {
  components: { headerComponent, footerComponent }
}
</script>

<template>
  <div class="flex flex-col justify-between min-h-[100vh]">
    <headerComponent></headerComponent>
    <main class="flex-1 flex">
      <router-view></router-view>
    </main>
    <footerComponent></footerComponent>
  </div>
</template>
