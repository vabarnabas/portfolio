import clsx from "clsx"
import React from "react"
import Marquee from "react-fast-marquee"
import { AiFillOpenAI } from "react-icons/ai"
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"
import { FaDocker, FaReact } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiHono, SiMicrosoftazure, SiNestjs } from "react-icons/si"

export default function TechnologiesSection() {
  const className =
    "cursor-pointer hover:text-text-primary ease-out transition-all duration-200 hover:opacity-100 opacity-60"

  return (
    <div className="">
      <p className="text-3xl font-semibold">Techonlogies I Use</p>
      <Marquee autoFill className="mt-8 text-6xl">
        <div className="flex w-full items-center justify-between gap-x-16 pr-16">
          <SiNestjs className={clsx("text-5xl", className)} />
          <SiExpress className={className} />
          <SiHono className={clsx("text-5xl", className)} />
          <FaReact className={clsx("text-5xl", className)} />
          <RiNextjsFill className={className} />
          <RiTailwindCssFill className={className} />
          <BiLogoPostgresql className={className} />
          <BiLogoTypescript className={className} />
          <p className={clsx("select-none text-4xl", className)}>REST</p>
          <GrGraphQl className={clsx("text-5xl", className)} />
          <AiFillOpenAI className={className} />
          <SiMicrosoftazure className={clsx("text-5xl", className)} />
          <FaDocker className={className} />
        </div>
      </Marquee>
    </div>
  )
}
