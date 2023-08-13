import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import russianDataSet from 'libraries/locales/ru.json'
import englishDataSet from 'libraries/locales/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') ?? 'en',
    resources: {
      ru: {
        translation: russianDataSet,
      },
      en: {
        translation: englishDataSet,
      },
    },
  })

export default i18n
