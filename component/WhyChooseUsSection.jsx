"use client";
import React, { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Tailored Solutions",
    desc:
      "Every project is custom-built to align perfectly with your goals and audience. We focus on creating unique strategies that reflect your brand’s individuality and purpose.",
  },
  {
    id: 2,
    title: "Expert Team",
    desc:
      "A skilled team of developers, designers, and strategists working with passion and precision. Our experts bring years of experience and creativity to every project we undertake.",
  },
  {
    id: 3,
    title: "Quality Assurance",
    desc:
      "We maintain the highest code and design standards with rigorous testing and review. Every product is refined, optimized, and delivered with exceptional attention to detail.",
  },
  {
    id: 4,
    title: "On-Time Delivery",
    desc:
      "We respect timelines and ensure every project is delivered efficiently without compromising quality or performance.",
  },
  {
    id: 5,
    title: "Client Satisfaction",
    desc:
      "Our success is measured by our clients’ satisfaction. We build long-term relationships based on trust and results.",
  },
];

export default function WhyChooseUsSection() {
  const [index, setIndex] = useState(0);

  const cardWidth = 360; // px width per card including gap

  const next = () => {
    if (index < cards.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="max-w-7xl mx-auto mt-32 px-6 overflow-hidden">

      {/* Title */}
      <h2 className="text-[#8B7CF6] text-2xl font-semibold mb-10">
        Why Choose Us
      </h2>

      {/* Slider Wrapper */}
      <div className="relative">

        {/* Track */}
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[340px] bg-[#8B7CF6] text-white rounded-2xl p-8 text-center shadow-xl"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#2B275F] flex items-center justify-center text-2xl font-bold">
                {card.id}
              </div>

              <h3 className="font-semibold mb-4">{card.title}</h3>

              <p className="text-sm leading-relaxed opacity-90">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-10">

        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-[#8B7CF6] text-[#8B7CF6]
                     flex items-center justify-center hover:bg-[#8B7CF6]
                     hover:text-white transition disabled:opacity-40"
          disabled={index === 0}
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-[#8B7CF6] text-[#8B7CF6]
                     flex items-center justify-center hover:bg-[#8B7CF6]
                     hover:text-white transition disabled:opacity-40"
          disabled={index >= cards.length - 3}
        >
          →
        </button>

      </div>

    </section>
  );
}
