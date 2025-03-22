import axios, { isAxiosError } from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                try {
                    const url = `${process.env.NEXT_PUBLIC_API}/user-login`
                    const payload = {
                        email: credentials?.email,
                        password: credentials?.password,
                    }
                    const res = await axios.post(url, payload)
                    console.log(res.data.userInfo, 'User')
                    return { ...res.data.userInfo };

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
    secret: process.env.NEXTAUTH_SECRET
})