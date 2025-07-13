// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector) // tarayıcı dilini otomatik algılar
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr', // tarayıcı dili bulunamazsa Türkçe kullan
        debug: true,
        interpolation: {
            escapeValue: false, // React zaten escaping yapıyor
        },
        resources: {
            en: {
                translation: {
                    welcome: 'Welcome',
                    description: 'This is a multilingual app.',
                    change_language: 'Change Language',
                },
            },
            tr: {
                translation: {
                    welcome: 'Hoş geldiniz',
                    description: 'Bu çok dilli bir uygulamadır.',
                    change_language: 'Dili Değiştir',
                },
            },
        },
    });

export default i18n;
