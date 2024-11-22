import { z } from "zod"

export const createProjectSchema = z.object({
  name: z.string().min(2).max(150),
  imageSrc: z.string().min(2).max(150),
  github: z.string().max(150),
  siteUrl: z.string().max(150),
  projectPresentationUrl: z.string().max(150),
  projectPresentationName: z.string().max(150),
})

export const updateProjectSchema = z.object({
  name: z.string().min(2).max(150),
  imageSrc: z.string().min(2).max(150),
  github: z.string().max(150),
  siteUrl: z.string().max(150),
  projectPresentationUrl: z.string().max(150),
  projectPresentationName: z.string().max(150),
})
