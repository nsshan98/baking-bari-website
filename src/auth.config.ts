import { NextAuthConfig } from "next-auth";

export const authConfig = {
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [],
} satisfies NextAuthConfig