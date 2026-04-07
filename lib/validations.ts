import { z } from "zod"

export const leadSchema = z.object({
  email: z.string().email("Email invalide"),
  source: z.string().optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
  service: z.string().optional(),
})

export const newsletterSchema = z.object({
  email: z.string().email("Email invalide"),
})

export const adminAuthSchema = z.object({
  password: z.string().min(1, "Mot de passe requis"),
})
