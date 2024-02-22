<script setup>
const props = defineProps({
  imgs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="relative w-full" data-carousel="static">
    <div
      class="relative w-full aspect-video sm:aspect-[16/7] md:aspect-video overflow-hidden rounded-lg"
    >
      <div
        class="hidden duration-200 ease-in-out"
        data-carousel-item
        :key="imgSrc"
        v-for="imgSrc in props.imgs"
      >
        <img
          :src="imgSrc.src"
          class="absolute block w-full rounded-lg aspect-video sm:aspect-[16/7] md:aspect-video object-cover object-top -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :alt="imgSrc.alt"
        />
        <p
          class="absolute bottom-0 bg-gray-900 text-white-500 text-center italic text-sm px-1 py-0.5 w-full"
        >
          {{ imgSrc.description }}
        </p>
      </div>
    </div>

    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white 
        dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-gray-800 dark:text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Précedent</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-gray-800 dark:text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Prochain</span>
      </span>
    </button>
  </div>
</template>
