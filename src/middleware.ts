import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig)

export async function middleware(request: NextRequest) {
    const publicRoutes = ['/', '/login', '/signup']
    const session = await auth()
    console.log(session, 'Middleware')

    const isAuthenticated = !!session?.user
    const isPublicRoutes = publicRoutes.includes(request.nextUrl.pathname)

    if (!isAuthenticated && !isPublicRoutes) {
        return NextResponse.redirect(new URL('/login', request.url))
    }


}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};