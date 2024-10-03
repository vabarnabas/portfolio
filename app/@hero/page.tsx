import Image from "next/image"
import React from "react"

import Button from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="grid scroll-mt-20 gap-x-16 gap-y-8 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center">
        <p className="mb-1 text-2xl md:mb-2">Hello</p>
        <p className="text-5xl font-bold">
          My name is <span className="text-text-primary">Barnabas</span>, I am
          an Engineer
        </p>
        <p className="mt-3 text-lg opacity-80">
          with 3+ years of experience, and a passion to learn
        </p>
        <Button className="mt-6 w-max md:mt-6">Learn About Me</Button>
      </div>
      <div className="relative h-56 overflow-clip rounded-lg md:h-[22rem]">
        <Image priority src="/barni.jpg" fill objectFit="cover" alt="me" />
      </div>
    </div>
  )
}
