import { ref } from 'vue'

export function setTheme(newTheme = 'no_theme') {
  if (newTheme === 'no_theme') {
    newTheme = localStorage.theme == 'light' ? 'light' : 'dark'
  }
  if (newTheme === 'light') {
    theme.value = 'light'
    document.querySelector('html').classList.remove('dark')
    document.documentElement.style.setProperty('color-scheme', 'light')
    localStorage.theme = 'light'
  } else {
    theme.value = 'dark'
    document.querySelector('html').classList.add('dark')
    document.documentElement.style.setProperty('color-scheme', 'dark')
    localStorage.theme = 'dark'
  }
}

export var theme = ref(localStorage.theme || 'dark')
