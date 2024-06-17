import React from "react";

export default function Navbar() {
  const menuItems = [
    {
      name: "About Me",
      link: "#",
    },
    {
      name: "Experience",
      link: "#",
    },
    {
      name: "Projects",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <div className="fixed inset-x-0 bg-background-primary/70 backdrop-blur-md flex items-center justify-center h-16 z-50">
      <div className="w-full max-w-[1280px] flex items-center justify-between md:px-8 px-6">
        <p className="w-max font-medium text-lg">
          vabarnabas<span className="text-text-primary">.com</span>
        </p>
        <div className="flex gap-x-8 w-max">
          {menuItems.map((item, index) => (
            <div
              key={`menu_item_${item.name
                .toLowerCase()
                .replaceAll(" ", "_")}_${index}`}
              className="cursor-pointer hover:text-text-primary transition-colors duration-200"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
