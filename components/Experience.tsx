import React from "react";
import { Button } from "./ui/MovingBorders";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Leadership & <span className="text-purple">Impact</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "1.75rem",
            }}
            className={`group h-full transition-transform hover:scale-[1.02] ${card.className}`}
          >
            <div className="flex h-full flex-col p-6 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row lg:flex-col xl:flex-row">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/5 p-4">
                    <img
                      src={card.thumbnail}
                      alt={card.company}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-base md:text-lg font-medium text-purple-400">
                    {card.company}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-400">{card.date}</span>
                    <span className="inline-flex items px-3 py-1 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full">
                      {card.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed">{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
