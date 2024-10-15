import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const cookie = request.cookies.get('accessToken');
  const rootPathname = url.pathname === '/';

  if (!cookie && !rootPathname) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (rootPathname && cookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  return NextResponse.next();
}
