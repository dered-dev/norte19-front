import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en.json'; // Adjust the path as necessary
import es from './locales/es.json'; // Adjust the path as necessary

// Get the language from localStorage or default to 'es'
const storedLanguage = localStorage.getItem('language');
const language = storedLanguage ? storedLanguage : 'es';

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language, 
    fallbackLng: language, 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
