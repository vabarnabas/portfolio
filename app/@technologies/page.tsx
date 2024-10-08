import clsx from "clsx"
import { Computer } from "lucide-react"
import React from "react"
import Marquee from "react-fast-marquee"
import { AiFillOpenAI } from "react-icons/ai"
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"
import { FaAws, FaDocker, FaReact } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiHono, SiMicrosoftazure, SiNestjs } from "react-icons/si"

import { cn } from "@/lib/utils"

export default function TechnologiesSection() {
  const className =
    "cursor-pointer group-hover:text-text-primary ease-out transition-all duration-200 group-hover:opacity-100 opacity-60"

  return (
    <div className="">
      <p className="flex items-center gap-x-2 text-3xl font-semibold">
        <Computer className="size-8 text-text-primary" />
        Techonlogies I Use
      </p>
      <Marquee speed={65} autoFill className="mt-8 text-6xl">
        <div className="flex w-full items-center justify-between gap-x-12 pr-12">
          <div className="group flex items-center gap-x-4">
            <SiExpress className={cn(className, "text-5xl")} />
            <p className={cn(className, "text-2xl")}>Express.js</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <SiHono className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>Hono</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <SiNestjs className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>NestJS</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <FaReact className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>React</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <RiNextjsFill className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>Next.js</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <RiTailwindCssFill className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>Tailwind CSS</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <BiLogoPostgresql className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>PostgreSQL</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <BiLogoTypescript className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>TypeScript</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <p className={clsx("select-none text-4xl", className)}>REST</p>
            <p className={cn(className, "text-2xl")}>REST API</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <GrGraphQl className={clsx("text-4xl", className)} />
            <p className={cn(className, "text-2xl")}>GraphQL</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <AiFillOpenAI className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>OpenAI</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <SiMicrosoftazure className={clsx("text-4xl", className)} />
            <p className={cn(className, "text-2xl")}>Azure</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <FaAws className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>AWS</p>
          </div>
          <div className="group flex items-center gap-x-4">
            <FaDocker className={clsx("text-5xl", className)} />
            <p className={cn(className, "text-2xl")}>Docker</p>
          </div>
        </div>
      </Marquee>
    </div>
  )
}
