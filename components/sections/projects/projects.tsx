import ProjectCard from "@/components/project-card/project-card";
import React from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBun, SiClerk, SiHono } from "react-icons/si";

export default function ProjectsSection() {
  return (
    <div>
      <p className="text-3xl font-semibold">Projects</p>
      <div className="mt-8">
        <ProjectCard
          title="Booker"
          description="Booker is a passion project of mine, a small tool that helps small businesses to set up a schedule, making it really easy for their customers to book appointments during the open times."
          technologies={[
            <RiNextjsFill key="booker_next" />,
            <RiTailwindCssFill key="booker_tailwind" />,
            <SiClerk className="text-2xl" key="booker_clerk" />,
            <SiHono className="text-2xl" key="booker_hono" />,
            <SiBun className="text-2xl" key="booker_bun" />,
          ]}
          github="a"
          live="a"
          src="/booker.png"
        />
      </div>
    </div>
  );
}
