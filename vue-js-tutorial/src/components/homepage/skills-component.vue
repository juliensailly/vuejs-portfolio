<script setup>
import { initFlowbite } from 'flowbite';
import textData from '../../assets/texts.json'
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <section class="flex flex-col gap-4 p-4 md:p-8">
    <h2 class="mb-2 text-3xl font-sans font-semibold">
      {{ textData.fr.pages.homepage.skillsTitle }}
    </h2>
    <div class="flex flex-col">
      <div>
        <div class="md:flex">
          <ul
            id="hard-skills-tab"
            data-tabs-toggle="#hard-skills-tab-content"
            role="tablist"
            class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
          >
            <li>
              <a
                id="profile-tab"
                data-tabs-target="#profile"
                role="tab"
                aria-controls="profile"
                class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
                aria-current="page"
              >
                <svg
                  class="w-4 h-4 me-2 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                  />
                </svg>
                Profile
              </a>
            </li>
          </ul>
          <div id="hard-skills-content">
            <div
              id="profile" role="tabpanel" aria-labelledby="profile-tab"
              class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full"
            >
              <!-- Tab content -->
            </div>
          </div>
        </div>
      </div>
      <div class="flex"></div>
    </div>
  </section>
</template>
