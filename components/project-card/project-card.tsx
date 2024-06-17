import Image from "next/image";
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
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
      <div className="">
        <div className="relative rounded-lg overflow-clip h-56 md:h-[22rem]">
          <Image priority src={src} fill objectFit="cover" alt={src} />
        </div>
      </div>
      <div className="h-full flex flex-col">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="mt-4">{description}</p>
        <div className="flex gap-x-3 mt-4 text-3xl items-center">
          {technologies.map((tech, index) => (
            <div
              className="cursor-pointer hover:text-text-primary ease-out transition-all duration-200 hover:opacity-100 opacity-80"
              key={`tech_${index}`}
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="mt-auto flex gap-x-4">
          {github ? (
            <button className="flex items-center justify-center w-full gap-x-1.5 mt-6 md:mt-8 rounded-md px-4 py-2 bg-text-primary text-white font-medium">
              <FaGithub /> Github
            </button>
          ) : null}
          {live ? (
            <button className="flex items-center justify-center w-full gap-x-1.5 mt-6 md:mt-8 rounded-md px-4 py-2 bg-text-primary text-white font-medium">
              Live Demo
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
