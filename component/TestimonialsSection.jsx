"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Prasanth Mudliyar",
    role: "Graphic Designer",
    image: "/logo/logo.png",
    text: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing.",
  },
  {
    name: "Abdul Malique",
    role: "UIUX Designer",
    image: "/logo/logo.png",
    text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
  },
  {
    name: "Sandeep Poudel",
    role: "Front End Developer",
    image: "/logo/logo.png",
    text: "This kit exceeded my expectations! The components are versatile and make implementation much easier.",
  },
  {
    name: "Ronald Topo",
    role: "UIUX Designer",
    image: "/logo/logo.png",
    text: "Perfect for quick prototyping! The designs are professional and work seamlessly with my workflow.",
  },
  {
    name: "Priya Gupta",
    role: "3D Designer",
    image: "/logo/logo.png",
    text: "I was blown away by how complete this UI kit is. It has everything I need, from assets to components.",
  },
  {
    name: "Noyon Sagma",
    role: "Logo Designer",
    image: "/logo/logo.png",
    text: "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="
        max-w-7xl mx-auto
        mt-24 sm:mt-32 lg:mt-40
        px-4 sm:px-6
      "
    >
      {/* ================= HEADER ================= */}
      <div className="mb-12 sm:mb-16 text-center sm:text-left">
        <span
          className="
            inline-flex items-center gap-2 px-4 py-1
            border border-[#E6E6F5] rounded-full
            text-xs font-medium text-[#7C6BFF]
          "
        >
          ● TESTIMONIALS
        </span>

        <h2
          className="
            mt-6
            text-[26px] sm:text-[34px] lg:text-[44px]
            font-bold text-[#8B7CF6]
          "
        >
          What they say after using our product
        </h2>
      </div>

      {/* ================= GRID ================= */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
        "
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl p-6
              border border-[#DCD9FF]
              shadow-[0_10px_40px_rgba(124,107,255,0.18)]
              flex flex-col
            "
          >
            {/* Top */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#2B275F]">
                  {item.name}
                </h4>
                <p className="text-xs text-[#6B7280]">
                  {item.role}
                </p>
              </div>
            </div>

            <div className="h-px bg-[#ECECFA] mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className="text-orange-400 text-sm"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p className="text-sm text-[#2B275F] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
