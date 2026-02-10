"use client";
import React from "react";

export default function PricingCollaborationSection() {
  return (
    <section className="max-w-7xl mx-auto mt-32 px-6">

      {/* Title */}
      <h2 className="text-[#8B7CF6] text-2xl font-semibold mb-12">
        Pricing & Collaboration Approach
      </h2>

      <div className="grid grid-cols-2 gap-20 items-start">

        {/* ================= LEFT ANALYTICS STACK ================= */}
        <div className="grid grid-cols-2 gap-6">

          {/* Price Pulse */}
          <div className="bg-white rounded-2xl p-5 border border-[#E6E6F5]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]">
            <p className="text-sm font-medium mb-2 text-[#2B275F]">
              Price pulse
            </p>
            <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-xs text-gray-500">
              Graph Area
            </div>
            <div className="flex justify-between text-xs mt-2 text-[#6B7280]">
              <span>SUPPLY</span>
              <span>DEMAND</span>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-2xl p-5 border border-[#E6E6F5]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]">
            <p className="text-sm font-medium mb-2 text-[#2B275F]">
              Revenue
            </p>
            <div className="h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center text-xs text-gray-500">
              Chart Area
            </div>
            <h3 className="text-xl font-bold mt-3">107.5k</h3>
            <p className="text-xs text-[#6B7280]">
              Noida, Uttar Pradesh
            </p>
          </div>

          {/* Types of products */}
          <div className="bg-white rounded-2xl p-5 border border-[#E6E6F5]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]">
            <p className="text-sm font-medium mb-3 text-[#2B275F]">
              Types of products
            </p>
            <div className="h-24 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500">
              Donut Chart
            </div>

            <div className="flex justify-between mt-3 text-xs">
              <span className="text-purple-500">WEB</span>
              <span className="text-green-500">APP</span>
              <span className="text-orange-500">SEO</span>
            </div>
          </div>

          {/* Liked products */}
          <div className="bg-white rounded-2xl p-5 border border-[#E6E6F5]
                          shadow-[0_10px_40px_rgba(124,107,255,0.18)]">
            <p className="text-sm font-medium mb-2 text-[#2B275F]">
              Liked products
            </p>

            <h3 className="text-lg font-bold flex items-center gap-2">
              ❤️ 1088
            </h3>

            <p className="text-xs text-[#6B7280] mt-1">
              +19 likes/day
            </p>
          </div>

        </div>

        {/* ================= RIGHT TEXT CONTENT ================= */}
        <div className="text-[#4B5563] leading-relaxed space-y-6 max-w-xl">

          <p>
            Our pricing is flexible and depends on the scope, scale, and
            duration of each project. Every client and every idea is unique —
            and we ensure our solutions reflect that.
          </p>

          <p>
            Before starting any project, we take time to understand your
            goals, ideas, and vision in depth, ensuring that the final outcome
            not only meets but exceeds your expectations.
          </p>

          <p>
            Our team works closely with you to translate your concept into a
            standout digital experience, providing the best value within your
            budget without ever compromising on quality.
          </p>

        </div>

      </div>
    </section>
  );
}
