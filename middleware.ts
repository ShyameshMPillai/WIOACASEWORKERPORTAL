import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simplified middleware for demo purposes
// In a real application, you would verify the session/token
export function middleware(request: NextRequest) {
  // For demo purposes, we'll just check if the URL is a protected route
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/applicants") ||
    request.nextUrl.pathname.startsWith("/appointments") ||
    request.nextUrl.pathname.startsWith("/documents") ||
    request.nextUrl.pathname.startsWith("/forms") ||
    request.nextUrl.pathname.startsWith("/job-development") ||
    (request.nextUrl.pathname.startsWith("/reports") && !request.nextUrl.pathname.startsWith("/application"))

  // In a real app, you would check for a valid session/token
  // For this demo, we'll just use a cookie to simulate authentication
  const isAuthenticated = request.cookies.has("authenticated")

  // If the route is protected and the user is not authenticated, redirect to sign-in
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - sign-in page
     */
    "/((?!_next/static|_next/image|favicon.ico|public|sign-in).*)",
  ],
}
