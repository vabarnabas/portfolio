import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mt-4">
      <div className="flex flex-col justify-center">
        <p className="text-2xl md:mb-2 mb-1">Hello</p>
        <p className="text-5xl font-bold">
          My name is <span className="text-text-primary">Barnabas</span>, I am
          an Engineer
        </p>
        <p className="mt-3 text-lg opacity-80">
          with 3+ years of experience, and a passion to learn
        </p>
        <button className="mt-6 md:mt-8 rounded-md px-4 py-1.5 bg-text-primary hover:bg-text-secondary text-white font-medium w-max">
          Learn About Me
        </button>
      </div>
      <div className="">
        <div className="relative rounded-lg overflow-clip h-56 md:h-[22rem]">
          <Image priority src="/barni.jpg" fill objectFit="cover" alt="me" />
        </div>
      </div>
    </div>
  );
}
