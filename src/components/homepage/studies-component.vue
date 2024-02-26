<script setup>
import MarkdownConverter from '../markdown-converter-component.vue'
</script>

<template>
  <section class="flex flex-col gap-4 p-4 md:p-8">
    <h2 class="mb-2 text-3xl font-sans font-semibold">
      {{ $t("pages.homepage.studiesTitle") }}
    </h2>
    <div class="flex flex-col items-stretch md:items-stretch lg:flex-row gap-2 md:gap-4">
      <div class="p-2 md:p-4 relative bg-blue-900 dark:bg-blue-100 rounded-xl aspect-[16/4] lg:aspect-square min-h-0 lg:max-w-[320px]">
        <img
          class="rounded-lg object-cover w-full h-full"
          :src="$t('pages.homepage.studiesIllustration')"
          :alt="$t('pages.homepage.studiesTitle') + ' illustration'"
        />
        <span
          class="bottom-4 md:bottom-8 right-4 md:right-8 absolute px-2 py-0.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"
        >{{ $t("pages.homepage.studiesDates") }}</span>
      </div>
      <div class="p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl">
        <h3 class="mb-2 md:mb-4 text-xl font-semibold">
          {{ $t("pages.homepage.studiesName") + ' - ' + $t("pages.homepage.studiesLocation") + ' - ' + $t("pages.homepage.studiesLevel") }}
        </h3>
        <MarkdownConverter :md="$t('pages.homepage.studiesDescription')" />
      </div>
    </div>
  </section>
</template>
