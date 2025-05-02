import axios, { isAxiosError } from "axios";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { jwtDecode } from "jwt-decode";
import { JWT } from "next-auth/jwt";

async function refreshAccessToken(token: JWT): Promise<JWT> {
    try {
        const { data: newTokens } = await axios.post(`${process.env.NEXT_PUBLIC_API}/refresh`, {
            refreshToken: token.refreshToken
        })

        console.log(newTokens.data, 'NewTokens')
        return {
            ...token,
            accessToken: newTokens.accessToken,
            refreshToken: newTokens.refreshToken ?? token.refresh
        }
    } catch (error) {
        console.log(error.message)
    }

    return {
        ...token,
        error: 'RefreshAccessTokenError'
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials): Promise<User | null> {
                try {
                    const url = `${process.env.NEXT_PUBLIC_API}/user-login`
                    const payload = {
                        email: credentials?.email,
                        password: credentials?.password,
                    }
                    const res = await axios.post(url, payload, { withCredentials: true })
                    console.log(res.data, 'User')
                    return { accessToken: res.data?.accessToken, refreshToken: res.data?.refreshToken, ...res.data.userInfo, };

                } catch (error) {
                    console.log(error, 'Catch Error')
                    if (isAxiosError(error) && error.response?.status === 400) {
                        throw new Error('Invalid email or password')
                    }
                    throw new Error('Failed to login')
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, account, user }) => {
            // console.log(`In jwt callback - token ${JSON.stringify(token)}`)

            if (token.accessToken) {
                const decodedToken = jwtDecode(token.accessToken)
                // console.log(decodedToken, 'DecodedToken')
                token.accessTokenExpires = decodedToken?.exp * 1000
            }

            if (Date.now() < token.accessTokenExpires) {
                // console.log('Return Previous Token')
                return token
            }

            console.log('Update refresh token')

            if (account && user) {
                // console.log(`In jwt callback - account ${JSON.stringify(account)}`)
                // console.log(`In jwt callback - user ${JSON.stringify(user)}`)
                const { accessToken, refreshToken, fullname, ...rest } = user
                const _token = { ...token, accessToken, refreshToken, name: fullname, user: rest }
                // console.log(_token, 'Token')
                return _token
            }
            console.log('Access token expires on', token.accessTokenExpires, new Date(token.accessTokenExpires))
            return refreshAccessToken(token)
        },
        session: async ({ session, token }) => {
            // console.log(`In jwt callback - token ${JSON.stringify(token)}`)

            if (token) {
                session.accessToken = token.accessToken
                session.refreshToken = token.refreshToken
                session.user = {
                    name: token.name,
                    email: token.user.email,
                    role: token.user.role
                }
            }
            // console.log(`In jwt callback - session ${JSON.stringify(session)}`)

            return session
        }

    }
})