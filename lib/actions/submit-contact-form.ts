"use server"

import { ContactFormData } from "@/types/contact.types"

export async function submitContactForm(data: ContactFormData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CONTACTO_URL}/responses`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_CONTACTO_API_KEY!,
      },
      body: JSON.stringify({
        ...data,
        applicationId: process.env.CONTACTO_APP_ID,
      }),
    }
  )

  if (!response.ok) {
    throw new Error("Failed to submit form")
  }
}
