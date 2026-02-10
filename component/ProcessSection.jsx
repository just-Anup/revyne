"use client";
import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discover",
      number: "1",
      desc:
        "We explore your business, goals, and audience through research and discussion to build a strong foundation.",
    },
    {
      title: "Plan",
      number: "2",
      desc:
        "We define milestones, timelines, and resources to ensure clarity and smooth execution.",
    },
    {
      title: "Design",
      number: "3",
      desc:
        "We craft visually engaging and user-focused designs aligned with your brand identity.",
    },
    {
      title: "Develop",
      number: "4",
      desc:
        "We turn designs into scalable, high-performance digital solutions using clean code.",
    },
    {
      title: "Deliver",
      number: "5",
      desc:
        "We test, launch, and support your product to ensure long-term success.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-24 sm:mt-32 lg:mt-40 px-4 sm:px-6">

      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <span
          className="inline-flex items-center gap-2 px-4 py-1
                     border border-[#E6E6F5] rounded-full
                     text-xs font-medium text-[#7C6BFF]"
        >
          ● PROCESS
        </span>
      </div>

      {/* ================= DESKTOP (FLIP CARDS) ================= */}
      <div className="hidden lg:grid grid-cols-5 gap-6">

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative h-[420px] rounded-2xl
                       shadow-[0_20px_60px_rgba(139,124,246,0.45)]
                       [perspective:1200px]"
          >
            <div
              className="relative w-full h-full rounded-2xl
                         transition-transform duration-700
                         [transform-style:preserve-3d]
                         hover:[transform:rotateY(180deg)]"
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 bg-[#8B7CF6] rounded-2xl
                           overflow-hidden
                           [backface-visibility:hidden]"
              >
                <h3 className="absolute top-8 left-8
                               text-white text-2xl font-semibold">
                  {step.title}
                </h3>

                <span
                  className="absolute bottom-[-40px] left-6
                             text-[200px] font-bold
                             text-white leading-none opacity-90"
                >
                  {step.number}
                </span>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 bg-[#2B275F] rounded-2xl
                           flex items-center justify-center px-8 text-center
                           [transform:rotateY(180deg)]
                           [backface-visibility:hidden]"
              >
                <div>
                  <h4 className="text-white text-xl font-semibold mb-4">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* ================= TABLET & MOBILE ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#8B7CF6] rounded-2xl p-6
                       shadow-[0_16px_40px_rgba(139,124,246,0.35)]"
          >
            {/* Top row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20
                              flex items-center justify-center
                              text-white font-bold">
                {step.number}
              </div>

              <h3 className="text-white text-xl font-semibold">
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-white/90 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
