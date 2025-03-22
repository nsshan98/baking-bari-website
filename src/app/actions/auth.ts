// import { signIn } from "next-auth/react"

import { signIn } from "next-auth/react"

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