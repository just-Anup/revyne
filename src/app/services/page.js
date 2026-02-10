"use client";
import Image from "next/image";
import ServiceFlowSection from "../../../component/ServiceFlowSection";
import ProcessSection from "../../../component/ProcessSection";
import TestimonialsSection from "../../../component/TestimonialsSection";

export default function ServicesIntroSection() {
  return (
    <>
    <section className="max-w-7xl mx-auto mt-32 px-6 grid grid-cols-2 gap-20 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div>
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1
                     border border-[#E6E6F5] rounded-full
                     text-xs font-medium text-[#7C6BFF] mb-6">
          ● Service
        </span>

        {/* Heading */}
        <h2 className="text-[42px] leading-tight font-bold text-[#2B275F] mb-6">
          Building <span className="text-[#8B7CF6]">ideas</span> that drive
          <br />
          <span className="text-[#8B7CF6]">impact.</span>
        </h2>

        {/* Paragraphs */}
        <div className="text-[#4B5563] leading-relaxed space-y-6 max-w-xl">
          <p>
            We offer end-to-end digital solutions that blend creativity,
            innovation, and technology. From powerful apps and dynamic websites
            to stunning designs and effective marketing strategies, we bring
            your vision to life with precision and purpose.
          </p>

          <p>
            Our expertise spans Development, Design, Growth & Marketing, and
            Consulting, ensuring your brand gets the complete digital edge it
            deserves. Every project is tailored to your goals, driven by
            strategy, and executed with excellence — because we don’t just
            deliver services, we create experiences that inspire growth and
            connection.
          </p>

          <p>
            Every service we offer is backed by a dedicated team committed to
            quality, transparency, and timely delivery. We focus on
            understanding your vision, adapting to your needs, and delivering
            solutions.
          </p>
        </div>
      </div>

      {/* ================= RIGHT IMAGE GRID ================= */}
      <div className="grid grid-cols-2 gap-6">

        {/* Top Left */}
        <div className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-xl bg-white">
          <Image
            src="/services1.png"
            alt="service"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Right */}
        <div className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-xl bg-orange-400">
          <Image
            src="/services2.png"
            alt="service"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Left */}
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-xl bg-white">
          <Image
            src="/services3.png"
            alt="service"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right */}
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-xl bg-white">
          <Image
            src="/services4.png"
            alt="service"
            fill
            className="object-cover"
          />
        </div>

      </div>

    </section>
    <ServiceFlowSection />
    <ProcessSection />
    <TestimonialsSection />
</>
  );
}
