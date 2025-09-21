"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";


try {
  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: "en", 
      fallbackLng: "en",
      supportedLngs: ["en", "ukr"],
      debug: process.env.NODE_ENV === "development",
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
        crossDomain: true,
        requestOptions: {
          cache: 'no-store',
        },
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
