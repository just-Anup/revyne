"use client";
import Image from "next/image";
import ProcessStepsSlider from "../../../component/ProcessStepsSlider";
import TestimonialsSection from "../../../component/TestimonialsSection";
import ContactSection from "../../../component/ContactSection";

export default function ProcessIntroSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto mt-24 lg:mt-32 px-4 sm:px-6">

        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1
                     border border-[#E6E6F5] rounded-full
                     text-xs font-medium text-[#7C6BFF] mb-8"
        >
          ● Process
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ================= IMAGE COLLAGE ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            {/* Big left image */}
            <div className="relative col-span-2 h-[240px] sm:h-[280px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/process1.png" fill className="object-cover" alt="process" />
            </div>

            {/* Top right small */}
            <div className="relative h-[160px] sm:h-[170px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/process2.png" fill className="object-cover" alt="process" />
            </div>

            {/* Middle right small */}
            <div className="relative h-[160px] sm:h-[170px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/process3.png" fill className="object-cover" alt="process" />
            </div>

            {/* Bottom left small */}
            <div className="relative h-[170px] sm:h-[180px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/process4.png" fill className="object-cover" alt="process" />
            </div>

            {/* Bottom right large */}
            <div className="relative col-span-2 h-[220px] sm:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/process5.png" fill className="object-cover" alt="process" />
            </div>

          </div>

          {/* ================= TEXT CONTENT ================= */}
          <div className="text-center lg:text-left">

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px]
                           font-bold text-[#2B275F] leading-tight mb-6">
              Turning vision into value,
              <br />
              <span className="text-[#8B7CF6]">step by step.</span>
            </h2>

            <div className="text-[#4B5563] leading-relaxed space-y-6 max-w-xl mx-auto lg:mx-0">

              <p>
                Every successful project starts with a clear process — one that
                combines strategy, creativity, and precision. At our agency, we
                follow a structured yet flexible workflow to ensure that every
                idea evolves into a meaningful outcome.
              </p>

              <p>
                We begin by deeply understanding your goals, challenges, and
                expectations. Then, we move into strategic planning, where
                timelines, resources, and milestones are clearly defined. Our
                design and development phases bring ideas to life through
                collaboration, innovation, and quality execution.
              </p>

              <p>
                Before launch, each project undergoes detailed testing to
                guarantee performance, scalability, and user satisfaction. Even
                after delivery, our support continues. We believe in long-term
                partnerships, providing maintenance, updates, and improvements to
                help your business grow and adapt to new opportunities.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* BELOW SECTIONS */}
      <ProcessStepsSlider />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
