import 'server-only';

import { TLocale, fallbackLocale } from '@/app/i18n/settings';

const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  hu: () => import('./locales/hu.json').then((module) => module.default),
  es: () => import('./locales/es.json').then((module) => module.default),
  de: () => import('./locales/de.json').then((module) => module.default),
  fr: () => import('./locales/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: TLocale) => {
  if (!dictionaries[locale]) {
    console.warn(`Locale '${locale}' is not supported. Falling back to 'en'.`);
    locale = fallbackLocale;
  }
  return dictionaries[locale]();
};
