import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ensure the page query is added to the homepage request before it reaches the client

  const urlParams = request.nextUrl.search

  // Check if the incoming request contains the "page" query parameter
  if (!urlParams.includes('page')) {
    // if not, redirect to the same URL but append the "page" query parameter set to 1
    return NextResponse.redirect(new URL(`${request.nextUrl.pathname}?page=1`, request.url))
  }

  // if present, continue
  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // The middleware should only run for the home page route
}
