import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fi from './locales/fi'
import en from './locales/en'

const STORAGE_KEY = 'norr-lang'
const savedLang = localStorage.getItem(STORAGE_KEY)

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fi: { translation: fi },
      en: { translation: en },
    },
    lng: savedLang === 'en' ? 'en' : 'fi',
    fallbackLng: 'fi',
    interpolation: { escapeValue: false },
  })

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
})

export default i18n
