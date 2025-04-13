import { DefaultUser } from 'next-auth'

export type NextAuthError =
    | "InvalidCredentialsError"
    | "RefreshAccessTokenError"
    | "NetworkError"
    | "TokenExpiredError"
    | "UnknownError";


export interface NextAuthErrorDetail {
    type: NextAuthError
    message: string
    statusCode?: number
}

declare module "next-auth" {
    interface Session {
        accessToken?: string
        user: DefaultUser
    }

    interface User {
        accessToken: string
        refreshToken: string
        fullname: string
        email: string
    }
}

declare module "next-auth/jwt" {
    interface jwt {
        accessToken?: string
        refreshToken?: string
        accessTokenExpires?: string
        error?: NextAuthError
    }
}