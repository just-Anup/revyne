"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [pressed, setPressed] = useState(false);

  return (
    <section
      className="
        max-w-7xl mx-auto
        mt-24 sm:mt-32 lg:mt-40
        px-4 sm:px-6
        relative
      "
    >
      {/* ================= HEADER ================= */}
      <div className="mb-16 sm:mb-20 lg:mb-24 text-center sm:text-left">

        <span
          className="
            inline-flex items-center gap-2 px-4 py-1
            border border-[#E6E6F5] rounded-full
            text-xs font-medium text-[#7C6BFF]
          "
        >
          ● Contact
        </span>

        <h2
          className="
            mt-6
            text-[28px] sm:text-[36px] lg:text-[44px]
            font-bold text-[#8B7CF6]
          "
        >
          A simple touch is all it takes to
        </h2>

        <h3
          className="
            text-[24px] sm:text-[32px] lg:text-[40px]
            font-bold text-[#2B275F]
          "
        >
          let your product shine
        </h3>
      </div>

      {/* ================= TOUCH BUTTON ================= */}
      <div className="flex justify-center">

        <button
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={() => alert("Touched!")}
          className={`
            relative flex items-center justify-center
            w-[260px] h-[260px]
            sm:w-[300px] sm:h-[300px]
            lg:w-[360px] lg:h-[360px]
            rounded-full bg-white
            transition-transform duration-300 ease-out
            touch-pulse touch-hover
            ${pressed ? "scale-95" : "scale-100"}
          `}
        >
          {/* Ripple ring */}
          <div
            className="
              absolute inset-0 rounded-full
              ripple-ring
              border border-[#513afb]/30
            "
          />

          {/* Inner depth ring */}
          <div
            className="
              absolute inset-0 rounded-full
              shadow-[inset_0_0_30px_rgba(0,0,0,0.12)]
            "
          />

          {/* Glow */}
          <div
            className="
              absolute inset-6 rounded-full
              shadow-[0_0_60px_rgba(139,124,246,0.35)]
            "
          />

          {/* Text */}
          <span
            className="
              relative z-10
              text-[32px] sm:text-[40px] lg:text-[48px]
              font-semibold text-[#8B7CF6]
              tracking-wide select-none
            "
          >
            Touch!
          </span>
        </button>

      </div>
    </section>
  );
}
