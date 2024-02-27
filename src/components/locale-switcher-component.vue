<script setup>
import { ref, watch } from 'vue'
// import { useI18n } from 'vue-i18n'

// const langLibrary = useI18n()

const isFrench = ref(localStorage.locale === 'fr' || true)

const toggleFrench = () => {
  isFrench.value = !isFrench.value
  updateUI()
}

const updateUI = () => {
  if (localStorage.locale == null) {
    isFrench.value = true
    localStorage.locale = 'fr'
  }

  localStorage.locale = isFrench.value ? 'fr' : 'en'

  if (document.querySelector('select') != null) {
    document.querySelector('select').value = localStorage.locale
  }
}

watch(isFrench, () => {
  updateUI()
})
updateUI()
</script>

<template>
  <button
    class="text-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium p-2 text-center dark:hover:bg-blue-200 dark:focus:ring-blue-500"
    @click="toggleFrench()"
  >
    <img
      src="/icons/england-flag.png"
      alt="United Kingdom flag"
      class="w-6 h-6"
      v-bind:class="{ hidden: !isFrench }"
    />
    <img
      src="/icons/france-flag.png"
      alt="France flag"
      class="w-6 h-6"
      v-bind:class="{ hidden: isFrench }"
    />
  </button>
</template>
