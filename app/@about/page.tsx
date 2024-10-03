import { User } from "lucide-react"
import React from "react"

export default function AboutSection() {
  return (
    <div
      id="about-me"
      className="scroll-mt-20 rounded-lg bg-background-secondary p-6"
    >
      <p className="flex items-center gap-x-2 text-3xl font-semibold">
        <User className="size-8 text-text-primary" /> About Me
      </p>
      <p className="mt-4 text-lg">
        {`My name is Barnabas Varga I am a Full-Stack Engineer based in Hungary
        with a Graphic Design background. I am always ready to learn new
        technologies, methodologies and skills. As an ex-designer I always aim
        to present something that is functional an aesthetically pleasing. I've started my web development journey in 2021 as a Frontend Developer, but since that I've transitioned into a more Full-Stack Developer with a I can help wherever I can approach.`}
      </p>
    </div>
  )
}
