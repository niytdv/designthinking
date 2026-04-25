// Education.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const education = [
  {
    name: "Stanford University",
    title: "2020 - Present",
    image: "/SIT.png",
    quote: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-purple">
          Ph.D. in Organizational Innovation
        </h3>
        <p className="text-sm">Dissertation: Design Thinking at Scale</p>
        <p className="text-xs text-gray-400">Stanford, California</p>
      </div>
    ),
  },
  {
    name: "MIT Sloan School of Management",
    title: "2015 – 2017",
    image: "/arham.png",
    quote: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-purple">
          Master of Business Administration
        </h3>
        <p className="text-sm">Concentration: Innovation & Entrepreneurship</p>
        <p className="text-xs text-gray-400">Cambridge, Massachusetts</p>
      </div>
    ),
  },
  {
    name: "University of California, Berkeley",
    title: "2011 – 2015",
    image: "/hume.jpg",
    quote: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-purple">Bachelor of Science</h3>
        <p className="text-sm">Psychology & Business Administration</p>
        <p className="text-xs text-gray-400">Berkeley, California</p>
      </div>
    ),
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        Academic
        <span className="text-purple"> Credentials</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[40vh] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={education}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
