<template>
  <section
    class="flex flex-col justify-center items-center gap-4 p-4 md:p-8 min-h-[calc(100vh-6rem)] max-w-screen-lg mx-auto"
  >
    <div class="flex flex-col items-center justify-between gap-4 md:gap-8 md:flex-row">
      <img
        :src="$t('pages.homepage.welcome.img')"
        alt="Julien Sailly's profile picture"
        class="object-cover aspect-square max-w-64 w-48 md:w-64 rounded-full shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out ring ring-blue-400"
      />

      <div class="flex flex-col justify-center items-start gap-2">
        <div class="flex gap-2 mb-2 md:mb-4">
          <h1 class="text-4xl md:text-5xl font-extrabold dark:text-white">
            {{ $t("pages.homepage.welcome.title") }}
          </h1>
          <img
            :src="$t('pages.homepage.welcome.waveEmoji')"
            alt="Waving hand emoji"
            class="max-h-12"
          />
        </div>
        <p class="text-2xl md:text-3xl font-bold dark:text-white mb-2">
          <span v-html="$t('pages.homepage.welcome.line1A')"></span>
          <span class="text-blue-400 dark:text-blue-600">{{ $t("app_author") }}</span>
          <span v-html="$t('pages.homepage.welcome.line1B')"></span>
        </p>
        <p
          class="md:text-2xl dark:text-white mb-2"
          v-html="$t('pages.homepage.welcome.line2')"
        ></p>
        <a
          href="/CV_Julien_SAILLY.pdf"
          class="group inline-flex items-center px-3 py-2 mt-2 md:mt-0 mx-auto md:mx-0 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-600"
          target="_blank"
          >{{ $t("pages.homepage.welcome.cvBtn") }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1 group-focus:translate-x-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
