import { z } from "zod"

export const userLoginSchema = z.object({
  email: z.string().min(2).max(150),
  password: z.string().min(10).max(150),
})
