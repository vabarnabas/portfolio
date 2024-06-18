import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const className =
    "cursor-pointer hover:text-text-primary ease-out transition-all duration-200";

  return (
    <div className="h-16 w-full flex justify-center border-t border-background-secondary">
      <div className="flex items-center justify-between w-full max-w-[1280px] px-6 md:px-8">
        <p className="text-sm font-medium">
          Created by <span className="text-text-primary">Barnabas Varga</span>
        </p>
        <div className="flex items-center gap-x-3 text-xl">
          <Link target="_blank" href={"https://github.com/vabarnabas"}>
            <FaGithub className={className} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/vabarnabas/">
            <FaLinkedin className={className} />
          </Link>
        </div>
      </div>
    </div>
  );
}