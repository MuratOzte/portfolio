import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    hero: {
                        greeting1: "Hi, I'm ",
                        greeting2: "Murat",
                        paragraph:
                            'A software developer creating web and mobile applications, also working on machine learning',
                        scrollHint: 'Scroll Down',
                    },
                },
            },
            tr: {
                translation: {
                    hero: {
                        greeting1: "Selam, Ben ",
                        greeting2: "Murat",
                        paragraph:
                            'Web ve mobil uygulamalar geliştiren, aynı zamanda makine öğrenimi üzerinde çalışan bir yazılım geliştiriciyim',
                        scrollHint: 'Aşağı Kaydır',
                    },
                },
            },
        },
    });

export default i18n;
