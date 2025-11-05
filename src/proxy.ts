import { ProxyConfig, type NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  console.log("Proxy rodando:", request.nextUrl.pathname);

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
