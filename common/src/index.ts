
import {z} from 'zod'

export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const blogInput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const updateBlogInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    id:z.string()
})


export type BlogInput = z.infer<typeof blogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>
export type SigninInput = z.infer<typeof signinInput>
export type SignupInput = z.infer<typeof signupInput>
