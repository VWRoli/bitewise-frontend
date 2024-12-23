import { defaultLocale, locales } from '@/app/i18n/settings';

import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';

export function getLocale(request: NextRequest) {
  const headers = {
    'accept-language': request.headers.get('accept-language') || '',
  };

  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}
