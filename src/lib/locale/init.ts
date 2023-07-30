import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ruLang } from "./locales/ru";

export const initI18next = (): void => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        ru: ruLang,
      },
      lng: "ru",
      fallbackLng: "ru",

      interpolation: {
        escapeValue: false,
      },
    });
};
