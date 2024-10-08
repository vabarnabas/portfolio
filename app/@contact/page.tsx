"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { submitContactForm } from "@/lib/actions/submit-contact-form"
import { ContactFormData, contactFormSchema } from "@/types/contact.types"

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = form.handleSubmit((data) => {
    const responseCode = toast.promise(submitContactForm(data), {
      loading: "Sending message...",
      success: "Message sent!",
      error: "Failed to send message",
    })
    console.log(responseCode.toString())
    if (responseCode.toString() === "1") {
      console.log("Form Reset")
      form.reset({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      })
    }
  })

  form.watch()

  return (
    <div className="scroll-mt-20">
      <FormProvider {...form}>
        <p className="text-3xl font-semibold">Contact Me</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <Controller
            control={form.control}
            name="name"
            render={({ field, formState: { errors } }) => (
              <div className="space-y-1.5">
                <label htmlFor="name">Name</label>
                <Input placeholder="Your Name" id="name" {...field} />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
            )}
          />
          <div className="grid gap-x-4 md:grid-cols-2">
            <Controller
              control={form.control}
              name="email"
              render={({ field, formState: { errors } }) => (
                <div className="space-y-1.5">
                  <label htmlFor="email">Email</label>
                  <Input
                    placeholder="Your Email Address"
                    id="email"
                    {...field}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              control={form.control}
              name="phoneNumber"
              render={({ field, formState: { errors } }) => (
                <div className="space-y-1.5">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Input
                    placeholder="Your Phone Number"
                    id="phoneNumber"
                    {...field}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <Controller
            control={form.control}
            name="message"
            render={({ field, formState: { errors } }) => (
              <div className="space-y-1.5">
                <label htmlFor="message">Message (500 max)</label>
                <Textarea placeholder="Your Message" id="message" {...field} />
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}
          />
          <Button className="w-full">Send</Button>
        </form>
      </FormProvider>
    </div>
  )
}
