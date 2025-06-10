import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the pathname doesn't start with a locale, redirect to add the locale
  if (!pathname.startsWith('/pt-br') && !pathname.startsWith('/en')) {
    // Default to 'pt-br' if no locale is present
    const url = request.nextUrl.clone();
    url.pathname = `/pt-br${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}