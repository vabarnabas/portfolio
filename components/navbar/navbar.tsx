import Link from "next/link"
import React from "react"

import Logo from "../logo/logo"

export default function Navbar() {
  const menuItems = [
    {
      name: "About Me",
      link: "#about-me",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#",
    },
  ]

  return (
    <div className="fixed inset-x-0 z-20 flex h-16 items-center justify-center bg-background-primary/70 backdrop-blur-md">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-6 md:px-8">
        <Link href={"/"}>
          <div className="flex w-max items-center gap-x-2 text-lg font-medium">
            <Logo className="text-text-primary" width={26} height={26} />
            <p className="">
              vabarnabas<span className="text-text-primary">.com</span>
            </p>
          </div>
        </Link>
        <div className="hidden w-max gap-x-8 md:flex">
          {menuItems.map((item, index) => (
            <Link
              key={`menu_item_${item.name
                .toLowerCase()
                .replaceAll(" ", "_")}_${index}`}
              href={item.link}
            >
              <div className="cursor-pointer transition-colors duration-200 hover:text-text-primary">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
