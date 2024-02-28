import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import cyprienUI from './assets/scripts/cyprien'

import fr from './assets/locales/fr.json'
import en from './assets/locales/en.json'

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: { fr, en },
  legacy: false
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

window.addEventListener('keypress', (e) => {
  if (e.key === 'l') {
    i18n.global.locale.value = i18n.global.locale.value === 'fr' ? 'en' : 'fr'
    localStorage.setItem('locale', i18n.global.locale.value)
  }
  if (e.key === 'h') {
    router.push({ name: 'home' })
  }
  if (e.key === 'p') {
    router.push({ name: 'projects' })
  }
  if (e.key === '6') {
    if (localStorage.getItem('6p') == 'true') {
      localStorage.removeItem('6p')
    } else {
      localStorage.setItem('6p', 'true')
    }
    cyprienUI()
  }
})
