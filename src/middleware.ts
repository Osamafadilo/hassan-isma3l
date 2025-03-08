import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const publicPaths = [
    "/",
    "/auth/login",
    "/auth/register",
    "/categories",
    "/services",
    "/providers",
    "/about",
  ];

  // Check if the path starts with any of the public paths
  const isPublicPath = publicPaths.some(
    (publicPath) => path === publicPath || path.startsWith(`${publicPath}/`),
  );

  // Check if the path is for API routes
  const isApiPath = path.startsWith("/api/");

  // Check if the path is for static files or images
  const isStaticFile =
    path.startsWith("/_next/") ||
    path.includes("/images/") ||
    path.endsWith(".ico");

  if (isPublicPath || isApiPath || isStaticFile) {
    return NextResponse.next();
  }

  // Get the token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token and trying to access protected route, redirect to login
  if (!token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  // Check for provider-only routes
  const providerOnlyPaths = [
    "/dashboard/provider",
    "/dashboard/services/create",
    "/dashboard/services/manage",
  ];

  const isProviderOnlyPath = providerOnlyPaths.some((providerPath) =>
    path.startsWith(providerPath),
  );

  // If user is not a provider but trying to access provider routes
  if (isProviderOnlyPath && token.userType !== "provider") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
