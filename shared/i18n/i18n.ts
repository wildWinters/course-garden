"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import en from "./en/translation.json" assert { type: "json" };
import ukr from "./ukr/translation.json" assert { type: "json" };

try {
  i18n
    .use(initReactI18next)
    .init({
      lng: "en",
      fallbackLng: "en",
      supportedLngs: ["en", "ukr"],
      debug: process.env.NODE_ENV === "development",
      resources: {
        en: { translation: en as unknown as Record<string, unknown> },
        ukr: { translation: ukr as unknown as Record<string, unknown> },
      },
      ns: ["translation"],
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
    
  i18n.on('initialized', () => {
    console.log('i18n initialized with language:', i18n.language);
    console.log('Available languages:', i18n.languages);
  });
    
  i18n.on('failedLoading', (lng, ns, msg) => {
    console.error('i18n failed to load:', { lng, ns, msg });
  });
  
} catch (error) {
  console.error('Failed to initialize i18n:', error);
}

export default i18n;
