<script setup>
import MarkdownConverter from '../markdown-converter-component.vue'
</script>

<template>
  <section class="flex flex-col gap-4 p-4 md:p-8">
    <h2 class="mb-2 text-3xl font-sans font-semibold">
      {{ $t("pages.homepage.contactTitle") }}
    </h2>
    <div class="flex flex-col gap-2 md:gap-4">
      <div class="p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl">
        <MarkdownConverter :md="$t('pages.homepage.contactDescription')" :disableHash="true"/>
        <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch">
          <div class="flex-1 flex flex-col xs:flex-row justify-center gap-4">
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
