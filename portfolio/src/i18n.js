import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en.json'
import translationCZ from './locales/cs.json'

const savedLanguage = localStorage.getItem('language') || 'cz'

const resources = {
    en: {
        translation: translationEN
    },
    cz: {
        translation: translationCZ
    }
}

const syncDocumentLanguage = (language) => {
    document.documentElement.lang = language === 'cz' ? 'cs' : 'en'
}

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    interpolation: {
        escapeValue: false
    }
})

syncDocumentLanguage(savedLanguage)
i18n.on('languageChanged', syncDocumentLanguage)

export default i18n
