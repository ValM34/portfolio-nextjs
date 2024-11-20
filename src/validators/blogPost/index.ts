import { z } from "zod";

export const createBlogPostSchema = z.object({
  name: z.string().min(2).max(150),
  post: z.string().min(2).max(1500),
});
