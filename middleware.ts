import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const res = NextResponse.next();
  if (token) {
    res.headers.set('Authorization', `Bearer ${token}`);
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin-dashboard/:path*'],
};
