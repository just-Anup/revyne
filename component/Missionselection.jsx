"use client";
import React from "react";

export default function MissionStatsSection() {
  return (
    <section className="max-w-7xl mx-auto mt-32 px-6">

      {/* ===== HEADER ===== */}
      <div className="relative mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1
                         border border-[#E6E6F5] rounded-full
                         text-xs font-medium text-[#7C6BFF]">
          ● MISSION
        </span>

        <h2 className="mt-6 text-[44px] leading-tight font-bold text-[#2B275F]">
          Our focus is simple
          <br />
          <span className="text-[#8B7CF6]">Design to convert</span>
        </h2>

        <p className="absolute right-0 top-1/2 -translate-y-1/2
                      text-[#6B7280] max-w-md text-sm">
          We promise to deliver beyond your expectations for your business.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-3 gap-8">

        {/* ===== COLUMN 1 ===== */}
        <div className="flex flex-col gap-8">

          {/* Projects Box */}
          <div className="bg-white p-6 rounded-2xl
                          border border-[#DCD9FF]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]">
            <div className="flex items-center gap-2 mb-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200" />
              ))}
              <span className="text-xs text-[#6B7280] ml-2">
                90+ PROJECTS
              </span>
            </div>

            <p className="text-sm font-medium text-[#2B275F]">
              Delivering clean, efficient,
              <br />
              and future-ready solutions.
            </p>
          </div>

          {/* Quality Box */}
          <div className="bg-white p-6 rounded-2xl
                          border border-[#DCD9FF]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]
                          flex flex-col justify-between">
            <p className="text-sm text-[#6B7280]">
              Quality of Code
            </p>

            <h3 className="text-[56px] font-bold text-[#111827]">
              100%
            </h3>
          </div>
        </div>

        {/* ===== COLUMN 2 ===== */}
        <div className="flex flex-col gap-6">

          {/* 250+ Box */}
          <div className="bg-white p-6 rounded-2xl
                          border border-[#DCD9FF]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]
                          flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-[#2B275F]">
                Proven results through
                <br />
                passion and precision.
              </p>

              <h3 className="mt-10 text-[48px] font-bold text-[#111827]">
                250+
              </h3>

              <p className="text-sm text-[#6B7280]">
                Projects completed
              </p>
            </div>
          </div>

          {/* Available Box */}
          <div className="bg-white px-6 py-4 rounded-xl
                          border border-[#DCD9FF]
                          shadow-[0_6px_20px_rgba(124,107,255,0.18)]
                          flex items-center gap-2 text-xs text-[#6B7280]">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            AVAILABLE FOR WORK
          </div>
        </div>

        {/* ===== COLUMN 3 (PURPLE) ===== */}
        <div className="bg-[#8B7CF6] rounded-3xl p-8
                        text-white relative overflow-hidden">

          <p className="text-sm max-w-xs leading-relaxed">
            Building meaningful digital experiences
            that inspire growth, strengthen trust,
            and drive measurable success.
          </p>

          {/* Arrow */}
          <div className="absolute bottom-28 left-6
                          text-[160px] font-bold
                          opacity-20 leading-none">
            ↗
          </div>

          {/* Rating */}
          <div className="absolute bottom-8 left-8">
            <h3 className="text-[44px] font-bold">
              4.8<span className="text-lg">/5</span>
            </h3>

            <div className="flex gap-1 mt-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>

            <p className="text-xs mt-2 opacity-90">
              TRUSTED BY CLIENTS WORLDWIDE
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
