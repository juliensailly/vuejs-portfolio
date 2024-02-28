import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/main.css'

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
