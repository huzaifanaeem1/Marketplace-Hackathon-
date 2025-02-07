import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  "/",
  "/shop(.*)",
  "/about",
  "/cart",
  "/contact",
  "/pricing",
  "/search",
  "/team",

  "/wishlist",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);





export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!.*\\..*|_next).*)',
    // Always run for API routes
   "/studio(.*)","/",
    '/(api|trpc)(.*)',
  ],
} 