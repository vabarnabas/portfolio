import React from "react"
import { AiFillOpenAI } from "react-icons/ai"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaDocker, FaReact } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiMicrosoftazure, SiNestjs } from "react-icons/si"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Engineer",
      company: "McKinsey Digital Budapest",
      date: "2022 Jun - Present",
      bulletPoints: [
        "Building products from ground up in multiple sectors",
        "Working on Generative AI based products for clients",
        "Partaking in planning, building and running as well",
        "Leading work streams requiring multiple engineers",
        "Working on performance enhancement and load testing",
      ],
      technologies: [
        <RiNextjsFill key={"nextjs-2"} />,
        <RiTailwindCssFill key={"tailwind-3"} />,
        <SiExpress key={"express-2"} />,
        <BiLogoPostgresql key={"postgresql-2"} />,
        <SiMicrosoftazure className="text-xl" key={"azure-2"} />,
        <AiFillOpenAI key={"openai-2"} />,
        <FaDocker key={"docker-2"} />,
        <p className="select-none text-base" key={"rest-2"}>
          REST
        </p>,
      ],
    },
    {
      title: "Fellow Engineer",
      company: "McKinsey Digital Budapest",
      date: "2021 Feb - 2022 Jun",
      bulletPoints: [
        "Building frontend for various projects",
        "Learning to use Next.js, and building backends with Nest.js",
        "Helping to build REST and GraphQL APIs",
      ],
      technologies: [
        <RiNextjsFill key={"nextjs-1"} />,
        <RiTailwindCssFill key={"tailwind-2"} />,
        <SiNestjs key={"nestjs-1"} />,
        <BiLogoPostgresql key={"postgresql-1"} />,
        <GrGraphQl className="text-xl" key={"graphql-1"} />,
        <p className="select-none text-lg" key={"rest-1"}>
          REST
        </p>,
      ],
    },
    {
      title: "Frontend Developer",
      company: "MOL Limo",
      date: "2021 Oct - 2022 Feb",
      bulletPoints: [
        "Building frontend for a specific project",
        "Learning React and frontend development",
      ],
      technologies: [
        <FaReact className="text-xl" key={"react-1"} />,
        <RiTailwindCssFill key={"tailwind-1"} />,
      ],
    },
  ]

  return (
    <div id="experience" className="scroll-mt-20">
      <p className="text-3xl font-semibold">Experience</p>
      <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-8">
        {experiences.map((experience, index) => (
          <div
            key={`menu_item_${experience.title
              .toLowerCase()
              .replaceAll(" ", "_")}_${index}`}
            className=""
          >
            <p className="text-3xl font-semibold">{experience.title}</p>
            <p className="mt-1 opacity-80">{`${experience.company} (${experience.date})`}</p>
            {experience.bulletPoints && (
              <ul className="mt-3 list-inside list-disc">
                {experience.bulletPoints.map((bullet, index) => (
                  <li key={`bullet_${index}`}>{bullet}</li>
                ))}
              </ul>
            )}
            {experience.technologies && (
              <div className="mt-3 flex items-center gap-x-2.5 text-2xl">
                {experience.technologies.map((tech, index) => (
                  <div
                    className="cursor-pointer opacity-80 transition-all duration-200 ease-out hover:text-text-primary hover:opacity-100"
                    key={`tech_${index}`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
