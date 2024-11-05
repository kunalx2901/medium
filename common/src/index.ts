
import {z} from 'zod'

export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().min(3)
})


export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const blogInput = z.object({
    title:z.string().min(15),
    content:z.string().min(30),
    authorName:z.string().optional()
})


export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
})


export type BlogInput = z.infer<typeof blogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>
export type SigninInput = z.infer<typeof signinInput>
export type SignupInput = z.infer<typeof signupInput>
