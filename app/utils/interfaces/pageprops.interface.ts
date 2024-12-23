import { TLocale } from '@/app/i18n/settings';

export interface IPageProps {
  params: { lang: TLocale; [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
}
