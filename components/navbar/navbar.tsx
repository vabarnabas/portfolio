import Link from "next/link";
import React from "react";
import Logo from "../logo/logo";

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
  ];

  return (
    <div className="fixed inset-x-0 bg-background-primary/70 backdrop-blur-md flex items-center justify-center h-16 z-50">
      <div className="w-full max-w-[1280px] flex items-center justify-between md:px-8 px-6">
        <Link href={"/"}>
          <button className="w-max flex font-medium text-lg items-center gap-x-2">
            <Logo className="text-text-primary" width={26} height={26} />
            <p className="">
              vabarnabas<span className="text-text-primary">.com</span>
            </p>
          </button>
        </Link>
        <div className="flex gap-x-8 w-max">
          {menuItems.map((item, index) => (
            <Link
              key={`menu_item_${item.name
                .toLowerCase()
                .replaceAll(" ", "_")}_${index}`}
              href={item.link}
            >
              <div className="cursor-pointer hover:text-text-primary transition-colors duration-200">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
