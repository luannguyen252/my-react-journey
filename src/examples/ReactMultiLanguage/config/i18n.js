import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        "Learn React": "Learn React",
        Edit: "Edit",
        "and save to reload": "and save to reload",
      },
    },
    vi: {
      translations: {
        "Learn React": "Học React",
        Edit: "Sửa",
        "and save to reload": "và lưu để tải lại trang",
      },
    },
  },

  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
