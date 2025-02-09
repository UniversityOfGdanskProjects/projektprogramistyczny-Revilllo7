import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./public/locales/en.json";
import plTranslation from "./public/locales/pl.json";
import deTranslation from "./public/locales/de.json";
import frTranslation from "./public/locales/fr.json";
import esTranslation from "./public/locales/es.json";
import ruTranslation from "./public/locales/ru.json";
import jpTranslation from "./public/locales/jp.json";
import koTranslation from "./public/locales/ko.json";
import zhTranslation from "./public/locales/zh.json";
import arTranslation from "./public/locales/ar.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        pl: { translation: plTranslation },
        de: { translation: deTranslation },
        fr: { translation: frTranslation },
        es: { translation: esTranslation },
        ru: { translation: ruTranslation },
        jp: { translation: jpTranslation },
        ko: { translation: koTranslation },
        zh: { translation: zhTranslation },
        ar: { translation: arTranslation },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;