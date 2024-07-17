import Link from "next/link"
import React from "react"
import { FaGithub } from "react-icons/fa"

import Button from "../ui/button"

interface Props {
  src: string
  title: string
  description: string
  technologies: React.ReactNode[]
  github?: string
  live?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  live,
}: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-1">
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
        <div className="mt-8 flex gap-x-4 empty:mt-0">
          {live ? (
            <Link className="flex w-full" href={live} target="_blank">
              <Button className="w-full">Live Demo</Button>
            </Link>
          ) : null}
          {github ? (
            <Link className="flex w-full" href={github} target="_blank">
              <Button className="w-full gap-x-1.5">
                <FaGithub /> Github
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
