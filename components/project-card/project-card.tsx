import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaGithub } from "react-icons/fa"

interface Props {
  src: string
  title: string
  description: string
  technologies: React.ReactNode[]
  github?: string
  live?: string
}

export default function ProjectCard({
  src,
  title,
  description,
  technologies,
  github,
  live,
}: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="">
        <div className="relative h-52 overflow-clip rounded-lg px-2 md:h-[20rem]">
          <Image priority src={src} fill objectFit="cover" alt={src} />
        </div>
      </div>
      <div className="flex h-full flex-col">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="mt-4">{description}</p>
        <div className="mt-4 flex items-center gap-x-2.5 text-3xl">
          {technologies.map((tech, index) => (
            <div
              className="cursor-pointer opacity-80 transition-all duration-200 ease-out hover:text-text-primary hover:opacity-100"
              key={`tech_${index}`}
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-x-4 empty:mt-0 lg:mt-auto">
          {live ? (
            <Link className="flex w-full" href={live} target="_blank">
              <button className="flex w-full items-center justify-center gap-x-1.5 rounded-md bg-text-primary px-4 py-2 font-medium text-white hover:bg-text-secondary">
                Live Demo
              </button>
            </Link>
          ) : null}
          {github ? (
            <Link className="flex w-full" href={github} target="_blank">
              <button className="flex w-full items-center justify-center gap-x-1.5 rounded-md bg-text-primary px-4 py-2 font-medium text-white hover:bg-text-secondary">
                <FaGithub /> Github
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
