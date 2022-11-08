/* eslint-disable consistent-return */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import nextI18NextConfig from '../next-i18next.config';

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = async (req: NextRequest) => {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const locale =
    req.cookies.get('NEXT_LOCALE') || nextI18NextConfig.i18n.defaultLocale;
  if (req.nextUrl.locale !== locale) {
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
};
