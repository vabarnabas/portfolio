import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: React.ReactNode[];
  github?: string;
  live?: string;
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
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="">
        <div className="relative rounded-lg overflow-clip h-56 md:h-[20rem]">
          <Image priority src={src} fill objectFit="cover" alt={src} />
        </div>
      </div>
      <div className="h-full flex flex-col">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="mt-4">{description}</p>
        <div className="flex gap-x-2.5 mt-4 text-3xl items-center">
          {technologies.map((tech, index) => (
            <div
              className="cursor-pointer hover:text-text-primary ease-out transition-all duration-200 hover:opacity-100 opacity-80"
              key={`tech_${index}`}
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="lg:mt-auto flex gap-x-4 mt-8 empty:mt-0">
          {github ? (
            <Link className="flex w-full" href={github} target="_blank">
              <button className="flex items-center justify-center w-full gap-x-1.5 rounded-md px-4 py-2 bg-text-primary hover:bg-text-secondary text-white font-medium">
                <FaGithub /> Github
              </button>
            </Link>
          ) : null}
          {live ? (
            <Link className="flex w-full" href={live} target="_blank">
              <button className="flex items-center justify-center w-full gap-x-1.5 rounded-md px-4 py-2 bg-text-primary hover:bg-text-secondary text-white font-medium">
                Live Demo
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
