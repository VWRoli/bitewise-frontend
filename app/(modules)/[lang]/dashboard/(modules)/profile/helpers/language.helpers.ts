import { ELanguage } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/enum';

export const getLanguageText = (
  value: string,
  dictionary: Record<string, string>,
) => {
  switch (value) {
    case ELanguage.ENGLISH:
      return dictionary.english;
    case ELanguage.SPANISH:
      return dictionary.spanish;
    case ELanguage.FRENCH:
      return dictionary.french;
    case ELanguage.GERMAN:
      return dictionary.german;
    case ELanguage.HUNGARIAN:
      return dictionary.hungarian;

    default:
      return dictionary.english;
  }
};
