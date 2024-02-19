<script setup>
import textData from '../../assets/texts.json'
</script>

<template>
  <section class="flex flex-col justify-between items-center gap-4 p-4 md:p-8 min-h-[80vh]">
    <div></div>
    <div class="flex flex-col items-center justify-between gap-4 md:gap-8 md:flex-row">
      <img
        :src="textData.fr.pages.homepage.welcome.img"
        alt="Julien Sailly's profile picture"
        class="object-cover aspect-square max-w-64 w-48 md:w-64 rounded-full shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out"
      />
      <div class="flex flex-col justify-center items-start gap-2">
        <div class="flex gap-2 mb-4">
          <h2 class="text-5xl font-extrabold dark:text-white">
            {{ textData.fr.pages.homepage.welcome.title }}
          </h2>
          <img
            :src="textData.fr.pages.homepage.welcome.waveEmoji"
            alt="Waving hand emoji"
            class="max-h-12"
          />
        </div>
        <p class="text-3xl font-bold dark:text-white mb-2">
          <span v-html="textData.fr.pages.homepage.welcome.line1A"></span>
          <span class="text-blue-400 dark:text-blue-600">{{ textData.fr.app_author }}</span>
          <span v-html="textData.fr.pages.homepage.welcome.line1B"></span>
        </p>
        <p
          class="text-2xl dark:text-white mb-2"
          v-html="textData.fr.pages.homepage.welcome.line2"
        ></p>
        <a
          href="/CV_Julien_SAILLY.pdf"
          class="group inline-flex items-center px-3 py-2 mx-auto md:mx-0 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-600"
          target="_blank"
          >{{ textData.fr.pages.homepage.welcome.cvBtn }}
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
    <div class="text-black dark:text-white hidden md:block">
      <svg
        onclick="document.getElementById('studies').scrollIntoView({ behavior: 'smooth', block: 'end' })"
        width="40px"
        height="100%"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 1.5;
        "
        class="cursor-pointer"
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style="fill: none; stroke: currentColor; stroke-width: 20px"
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style="fill: none; stroke: currentColor; stroke-width: 20px"
        />
      </svg>
    </div>
  </section>
</template>
