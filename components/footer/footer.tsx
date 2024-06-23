import Link from "next/link"
import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import LogoText from "../logo/logo-text"

export default function Footer() {
  const className =
    "cursor-pointer hover:text-text-primary ease-out transition-all duration-200"

  return (
    <div className="flex h-16 w-full justify-center border-background-secondary">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-6 md:px-8">
        <p className="flex items-center text-sm">
          <LogoText
            width={18}
            height={18}
            className="mr-1.5 text-text-primary"
          />
          Created by
          <span className="ml-1 font-medium">Barnabas Varga</span>
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
  )
}
