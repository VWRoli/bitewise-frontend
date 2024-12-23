import { ELanguage } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/enum';

export const getLanguageText = (value: string) => {
  switch (value) {
    case ELanguage.ENGLISH:
      return 'English';
    case ELanguage.SPANISH:
      return 'Spanish';
    case ELanguage.FRENCH:
      return 'French';
    case ELanguage.GERMAN:
      return 'German';
    case ELanguage.HUNGARIAN:
      return 'Hungarian';

    default:
      return 'English';
  }
};
