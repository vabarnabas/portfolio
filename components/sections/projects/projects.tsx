import React from "react"
import { AiFillOpenAI } from "react-icons/ai"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaYarn } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiBun, SiClerk, SiHono, SiMicrosoftsqlserver } from "react-icons/si"

import ProjectCard from "@/components/project-card/project-card"

export default function ProjectsSection() {
  return (
    <div id="projects" className="scroll-mt-20">
      <p className="text-3xl font-semibold">Projects</p>
      <div className="mt-8 flex flex-col gap-y-12 md:gap-y-8">
        <ProjectCard
          title="F1 Foresight"
          description="Since early 2023 I am in love with Formula 1, and always wanted to do a project which is related to it. F1 Foresight came up as a project where me and my friends can predict the outcomes of certain races. Also it uses Generative AI to analyze your predictions which could be a great way to overview your theories."
          src="/f1-foresight.png"
          technologies={[
            <RiNextjsFill key="f1_next" />,
            <RiTailwindCssFill key="f1_tailwind" />,
            <SiClerk className="text-2xl" key="f1_clerk" />,
            <SiHono className="text-2xl" key="f1_hono" />,
            <FaYarn key="f1_yarn" className="text-2xl" />,
            <AiFillOpenAI key="f1_openai" />,
            <BiLogoPostgresql key="f1_postgresql" />,
          ]}
          live="https://f1-foresight.vercel.app/"
          github="https://github.com/vabarnabas/f1-foresight/"
        />
        <ProjectCard
          title="Overseer"
          description="Overseer is a Database Viewer tool, which currently supports PostgresSQL, MySQL and Microsoft SQL Server from many providers. My aim is to develop this and add more features as needed, but I feel that this is already a great achievement since I wanted to something like this for years."
          src="/overseer.png"
          technologies={[
            <RiNextjsFill key="overseer_next" />,
            <RiTailwindCssFill key="overseer_tailwind" />,
            <SiClerk className="text-2xl" key="overseer_clerk" />,
            <SiHono className="text-2xl" key="overseer_hono" />,
            <FaYarn key="overseer_yarn" className="text-2xl" />,
            <BiLogoPostgresql key="overseer_postgresql" />,
            <GrMysql key="overseer_mysql" className="text-2xl" />,
            <SiMicrosoftsqlserver key="overseer_mssql" className="text-2xl" />,
          ]}
          live="https://overseer.vercel.app/"
          github="https://github.com/vabarnabas/overseer"
        />
        <ProjectCard
          title="Wolt Picker"
          description="I've had the idea of this project in early 2023, when I stumbled across a Wolt repository containing the restaurant API. Since me and my friends always had a problem figuring out where to eat, it was an obvious choice how to use the API. This repository is a revised version of the site, since the original had some small issues."
          src="/wolt-picker.png"
          technologies={[
            <RiNextjsFill key="wolt_next" />,
            <RiTailwindCssFill key="wolt_tailwind" />,
            <FaYarn key="wolt_yarn" className="text-2xl" />,
          ]}
          live="https://wolt-picker.vercel.app/"
          github="https://github.com/vabarnabas/wolt-picker"
        />
        <ProjectCard
          title="Booker"
          description="Booker is a passion project of mine, a small tool that helps small businesses to set up a schedule, making it really easy for their customers to book appointments during the open times."
          src="/booker.png"
          technologies={[
            <RiNextjsFill key="booker_next" />,
            <RiTailwindCssFill key="booker_tailwind" />,
            <SiClerk className="text-2xl" key="booker_clerk" />,
            <SiHono className="text-2xl" key="booker_hono" />,
            <SiBun className="text-2xl" key="booker_bun" />,
            <BiLogoPostgresql key="booker_postgresql" />,
          ]}
        />
      </div>
    </div>
  )
}
