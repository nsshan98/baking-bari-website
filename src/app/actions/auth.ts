// import { signIn } from "next-auth/react"
'use server'
import { signIn, signOut } from "@/auth"

export async function doUserSignIn(formData: FormData) {
    try {
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function doUserLogOut() {
    console.log('LogOut')
    await signOut({ redirectTo: '/login' })
}