"use client";
import React from "react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Development Services",
      href: "/service/development",
    },
    {
      id: "02",
      title: "Design Services",
      href: "/service/design",
    },
    {
      id: "03",
      title: "Growth & Marketing",
      href: "/service/marketing",
    },
    {
      id: "04",
      title: "Consulting",
      href: "/service/consulting",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-40 px-6">

      {/* ===== HEADER ===== */}
      <div className="mb-16">
        <span
          className="inline-flex items-center gap-2 px-4 py-1
                     border border-[#E6E6F5] rounded-full
                     text-xs font-medium text-[#7C6BFF]">
          ● SERVICE
        </span>

        <h2 className="mt-6 text-[44px] font-bold text-[#8B7CF6]">
          Things we can help you with
        </h2>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E6E6F5] mb-10" />

      {/* ===== SERVICES LIST ===== */}
      <div className="flex flex-col">

        {services.map((service, index) => (
          <Link
            key={service.id}
            href={service.href}
            className="group"
          >
            <div
              className="flex items-center justify-between py-10
                         cursor-pointer
                         transition-colors duration-300
                         hover:bg-[#F7F6FF]"
            >
              {/* Left */}
              <div className="flex items-center gap-8">
                <span className="text-sm text-[#6B7280]">
                  {service.id}
                </span>

                <h3
                  className="text-[22px] font-medium text-[#2B275F]
                             group-hover:text-[#8B7CF6]
                             transition-colors"
                >
                  {service.title}
                </h3>
              </div>

              {/* Right Arrow */}
              <span
                className="text-[28px] text-[#2B275F]
                           transform transition-transform
                           group-hover:translate-x-1
                           group-hover:text-[#8B7CF6]"
              >
                →
              </span>
            </div>

            {/* Row Divider */}
            {index !== services.length - 1 && (
              <div className="h-px bg-[#E6E6F5]" />
            )}
          </Link>
        ))}

      </div>
    </section>
  );
}
