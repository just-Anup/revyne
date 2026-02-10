"use client";
import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Discover",
    desc:
      "We start by diving deep into your business, market, and audience. Through discussions, research, and analysis, we uncover your goals, challenges, and opportunities. This stage allows us to fully understand your vision and define clear objectives that set the foundation for a successful project.",
  },
  {
    id: "02",
    title: "Plan",
    desc:
      "Once the vision is clear, we build a tailored roadmap. This includes defining project milestones, setting realistic timelines, assigning resources, and establishing structured workflows. Our planning ensures every team member is aligned and that the project progresses smoothly with minimal risks and maximum efficiency.",
  },
  {
    id: "03",
    title: "Design",
    desc:
      "In this stage, ideas take shape. Our creative team crafts visually compelling and user-focused designs that align with your brand identity. We focus on aesthetics, usability, and engagement, ensuring the design not only looks great but also delivers an intuitive and memorable user experience.",
  },
  {
    id: "04",
    title: "Develop",
    desc:
      "Our developers bring designs to life using clean, scalable, and high-performance code. We ensure functionality, responsiveness, and seamless integration across all platforms.",
  },
  {
    id: "07",
    title: "Develop",
    desc:
      "Our developers bring designs to life using clean, scalable, and high-performance code. We ensure functionality, responsiveness, and seamless integration across all platforms.",
  },
  {
    id: "05",
    title: "Develop",
    desc:
      "Our developers bring designs to life using clean, scalable, and high-performance code. We ensure functionality, responsiveness, and seamless integration across all platforms.",
  },
  {
    id: "06",
    title: "Develop",
    desc:
      "Our developers bring designs to life using clean, scalable, and high-performance code. We ensure functionality, responsiveness, and seamless integration across all platforms.",
  },
];

export default function ProcessStepsSlider() {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 360; // includes gap

  const next = () => {
    if (index < steps.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="max-w-7xl mx-auto mt-24 px-6">

      {/* Slider */}
      <div className="relative overflow-hidden">

        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="min-w-[340px] bg-white rounded-2xl p-8
                         shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Number */}
              <div className="w-10 h-10 rounded-full bg-[#DCD7FF]
                              flex items-center justify-center
                              font-semibold text-[#2B275F] mb-4">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#2B275F] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end gap-4 mt-10">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-12 h-12 rounded-full border border-[#8B7CF6]
                     text-[#8B7CF6] flex items-center justify-center
                     hover:bg-[#8B7CF6] hover:text-white transition
                     disabled:opacity-40"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={index >= steps.length - 3}
          className="w-12 h-12 rounded-full border border-[#8B7CF6]
                     text-[#8B7CF6] flex items-center justify-center
                     hover:bg-[#8B7CF6] hover:text-white transition
                     disabled:opacity-40"
        >
          →
        </button>
      </div>

    </section>
  );
}
