import * as z from 'zod'

export const LoginSchema = z.object ({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    })
})


export const RegisterSchema = z.object ({
    fullName: z.string({
        message: 'Fullname is required'
    }),
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    })
})