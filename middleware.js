import { NextResponse } from "next/server";

export function middleware(request) {
  const userToken = request.cookies.get("userToken")?.value;

  if (!userToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Protect specific paths
export const config = {
  matcher: ["/hotel", "/hotel/:path*"]
};
