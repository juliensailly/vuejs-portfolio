<script setup>
import DarkModeToggle from '@/components/dark-mode-toggle-component.vue'
import LocaleSwitcher from '@/components/locale-switcher-component.vue'
import { ref } from 'vue'

const hamburgerBtnMenu = ref(null)
const hideHamburgerMenu = () => {
  if (window.innerWidth < 768) hamburgerBtnMenu.value.click()
}
</script>

<template>
  <header class="sticky top-0 z-40">
    <nav class="dark:bg-gray-900 bg-blue sticky w-full z-20 top-0 start-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/pp.jpg"
            class="h-8 rounded-[50%] border border-white"
            alt="Julien Sailly's profile picture"
          />
          <span
            class="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-white"
            >{{ $t('navbar.name') }}</span
          >
        </router-link>
        <div class="flex md:order-2 gap-2 rtl:space-x-reverse">
          <LocaleSwitcher class="hidden sxs:block"></LocaleSwitcher>
          <DarkModeToggle class="hidden sxs:block rounded-lg"></DarkModeToggle>
          <a
            href="/CV_Julien_SAILLY.pdf"
            target="_blank"
            class="hover:animate-growing_shadow hidden xxs:block text-white bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg px-4 py-2 text-center dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-500"
          >
            {{ $t('navbar.CV') }}
          </a>
          <button
            ref="hamburgerBtnMenu"
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Ouvrir le menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col gap-2 p-4 md:p-0 mt-4 font-medium rounded-lg bg-blue-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue dark:bg-gray-800 md:dark:bg-gray-900"
          >
            <li class="sxs:hidden flex justify-end">
              <a
                href="/CV_Julien_SAILLY.pdf"
                target="_blank"
                class="sxs:hidden block flex-1 text-white focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded px-3 py-2 mr-1 bg-blue-200 dark:bg-gray-700 dark:focus:ring-blue-500"
              >
                {{ $t('navbar.CV') }}
              </a>
              <LocaleSwitcher></LocaleSwitcher>
              <DarkModeToggle class="rounded-lg"></DarkModeToggle>
            </li>
            <hr class="sxs:hidden my-1 border-gray-500">
            <li>
              <router-link @click="hideHamburgerMenu" to="/" class="block py-2 px-3 rounded">{{
                $t('navbar.home')
              }}</router-link>
            </li>
            <li>
              <router-link
                @click="hideHamburgerMenu"
                to="/projects"
                class="block py-2 px-3 rounded projects_link"
                >{{ $t('navbar.projects') }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
