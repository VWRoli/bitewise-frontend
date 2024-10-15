import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const cookie = request.cookies.get('accessToken');

  if (!cookie && url.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}
