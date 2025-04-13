"use server"
import { auth } from "@/auth"

export const fetchClient = async (url: string, options?: RequestInit) => {
    const session = await auth()
    console.log(`From the Fetch Client ${JSON.stringify(session?.accessToken)}`)

    return fetch(url, {
        ...options,
        headers: {
            ...options?.headers,
            ...(session && { Authorization: `Bearer ${session.accessToken}` })
        }
    })
}