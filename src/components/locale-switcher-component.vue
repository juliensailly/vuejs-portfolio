<script setup>
import { setLocale, locale } from '@/assets/scripts/parametersLogic'
import { onMounted } from 'vue'

const toggleLocale = () => {
  setLocale(localStorage.locale == 'fr' ? 'en' : 'fr')
}

onMounted(() => {
  setLocale()
})
</script>

<template>
  <div>
    <button
      class="rounded-lg text-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium p-2 text-center dark:hover:bg-blue-200 dark:focus:ring-blue-500"
      @click="toggleLocale()"
    >
      <img
        src="/icons/england-flag.png"
        alt="United Kingdom flag"
        class="w-6 h-6"
        v-bind:class="{ hidden: locale == 'fr' }"
      />
      <img
        src="/icons/france-flag.png"
        alt="France flag"
        class="w-6 h-6"
        v-bind:class="{ hidden: locale == 'en' }"
      />
    </button>
    <span @click="$i18n.locale = 'en'" id="toggleEnglish" class="w-0 h-0 invisible"></span>
    <span @click="$i18n.locale = 'fr'" id="toggleFrench" class="w-0 h-0 invisible"></span>
  </div>
</template>
