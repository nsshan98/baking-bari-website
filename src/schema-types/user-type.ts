import { z } from "zod";

export const userSignUpSchema = z.object({
    fullname: z.string().min(1, { message: 'Full name required' }),
    email: z.string().email({ message: 'Email Required' }),
    password: z.string().min(4, { message: 'Minimum 4' })
})

export type UserSignUpSchemaTypes = z.infer<typeof userSignUpSchema>