<script setup>
import textData from '../../assets/texts.json'
</script>

<template>
  <section class="flex flex-col gap-4 p-4 md:p-8">
    <h2 class="mb-2 text-3xl font-sans font-semibold">
      {{ textData.fr.pages.homepage.studiesTitle }}
    </h2>
    <div class="flex flex-col items-stretch xs:items-start md:items-stretch xs:flex-row gap-2 md:gap-4">
      <div class="p-2 md:p-4 relative bg-blue-900 dark:bg-blue-100 rounded-xl xs:flex-[33%] aspect-square">
        <img
          class="rounded-lg object-cover w-full h-full"
          :src="textData.fr.pages.homepage.studiesIllustration"
          :alt="textData.fr.pages.homepage.studiesTitle + ' illustration'"
        />
        <span
          class="top-8 -right-4 absolute px-2 py-0.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"
        >{{ textData.fr.pages.homepage.studiesDates }}</span>
      </div>
      <div class="p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl xs:flex-[66%]">
        <h3 class="mb-2 md:mb-4 text-xl font-semibold">
          {{ textData.fr.pages.homepage.studiesName + ' - ' + textData.fr.pages.homepage.studiesLocation + ' - ' + textData.fr.pages.homepage.studiesLevel }}
        </h3>
        <p class="text-md text-justify">
          {{ textData.fr.pages.homepage.studiesDescription }}
          <ul>
            <li>Formation en 3 ans</li>
            <li>Parcours Réalisation et Conception d'applications</li>
            <li>Total de 24 semaines de stage</li>
            <li>Possibilité d'alternance en 3ème année</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
</template>
