import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import trTranslation from '../locales/tr/translation.json';
import enTranslation from '../locales/en/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: enTranslation },
            tr: { translation: trTranslation },
        },
    });

export default i18n;
