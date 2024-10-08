import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string({ message: "Your Name is Required" }),
  email: z.string({ message: "Your Email is Required" }).email(),
  phoneNumber: z.string({ message: "Your Phone Number is Required" }),
  message: z
    .string({ message: "Your Message is Required" })
    .max(500, { message: "Your Message is Too Long" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
