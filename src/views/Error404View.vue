<script setup>
const checkIfBackUrlIsOnWebsite = () => {
  return window.history.length > 2
}
</script>

<template>
  <div
    class="flex-1 p-4 md:p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url(/background/wiggle-light.svg)] dark:bg-[url(/background/wiggle-dark.svg)]"
  >
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-400 dark:text-blue-400"
          >
            404
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            {{ $t("pages.error404.message") }}
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {{ $t("pages.error404.btnLabel") }}
          </p>
          <p
            @click="checkIfBackUrlIsOnWebsite() ? $router.back() : $router.push('/')"
            class="group inline-flex cursor-pointer text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg gap-2 text-sm px-5 py-3 text-center dark:focus:ring-blue-700 my-4"
          >
            {{ $t("pages.error404.button") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
