import Image from "next/image"
import React from "react"

export default function HeroSection() {
  return (
    <div className="mt-4 grid gap-x-16 gap-y-8 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <p className="mb-1 text-2xl md:mb-2">Hello</p>
        <p className="text-5xl font-bold">
          My name is <span className="text-text-primary">Barnabas</span>, I am
          an Engineer
        </p>
        <p className="mt-3 text-lg opacity-80">
          with 3+ years of experience, and a passion to learn
        </p>
        <button className="mt-6 w-max rounded-md bg-text-primary px-4 py-2 font-medium text-white hover:bg-text-secondary md:mt-8">
          Learn About Me
        </button>
      </div>
      <div className="">
        <div className="relative h-56 overflow-clip rounded-lg md:h-[22rem]">
          <Image priority src="/barni.jpg" fill objectFit="cover" alt="me" />
        </div>
      </div>
    </div>
  )
}
