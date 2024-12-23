export function hasLocale(pathname: string, locales: string[]): boolean {
  return locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
}

export function isRootPath(pathname: string): boolean {
  return pathname === '/';
}
