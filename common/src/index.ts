import z from "zod"

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

export type SignupInput = z.infer<typeof signupInput>

export const siginInput = z.object({
  username: z.string().email(),
  password: z.string().min(6)
})

export type SiginInput = z.infer<typeof siginInput>

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string()
})

export type createBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number()
})

export type updateBlogInput = z.infer<typeof updateBlogInput>