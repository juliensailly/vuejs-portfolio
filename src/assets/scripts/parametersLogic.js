import { ref, watch } from 'vue'

// Theme
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

// Language
export function setLocale(newLocale = "no_locale") {
  localStorage.locale = (newLocale == 'en' ? 'en' : 'fr')
  locale.value = (newLocale == 'en' ? 'en' : 'fr')

  if (document.querySelector('select') != null) {
    document.querySelector('select').value = localStorage.locale
  }

  const toggleElement = document.getElementById(
    locale.value == "fr" ? 'toggleEnglish' : 'toggleFrench'
  )
  if (toggleElement != null) {
    toggleElement.click()
  } else {
    setTimeout(() => {
      document.getElementById(locale.value == false ? 'toggleEnglish' : 'toggleFrench').click()
    }, 100)
  }
}

export var locale = ref(localStorage.locale || 'fr')

watch(locale, (_, oldLocale) => {
  document.querySelector('html').setAttribute("lang", oldLocale);
})