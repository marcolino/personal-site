import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';

const fallbackLng = 'en'; // fallback language (detected language is not available)

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n
  .use(languageDetector) // browser's language detector
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng, // use en if detected language is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

const t = i18n.t.bind(i18n);
export { t }; // to be used outside react components
