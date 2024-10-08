import "./globals.css"

import clsx from "clsx"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio - Barnabas Varga",
  description: "Personal Portfolio of Barnabas Varga",
}

export default function RootLayout({
  hero,
  about,
  technologies,
  experience,
  projects,
  contact,
}: Readonly<{
  children: React.ReactNode
  hero: React.ReactNode
  about: React.ReactNode
  technologies: React.ReactNode
  experience: React.ReactNode
  projects: React.ReactNode
  contact: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={clsx(
          "flex flex-col items-center scroll-smooth bg-background-primary text-white",
          font.className
        )}
      >
        <Navbar />
        <div className="flex w-full max-w-[1280px] flex-col gap-y-16 px-6 pb-16 pt-20 md:px-8">
          {hero}
          {technologies}
          {about}
          {experience}
          {projects}
          {contact}
        </div>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "bg-background-secondary",
              content: "text-white",
              default: "text-white",
            },
          }}
        />
      </body>
    </html>
  )
}
