"use client";
import Image from "next/image";
import MissionStatsSection from "../../../component/Missionselection";
import ContactSection from "../../../component/ContactSection"; // <-- your contact component
import WhyChooseUsSection from "../../../component/WhyChooseUsSection";
import PricingCollaborationSection from "../../../component/PricingCollaborationSection";

export default function AboutSection() {
  return (
    <>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto mt-32 px-6 grid grid-cols-2 gap-20 items-start">

        {/* LEFT VISUAL STACK */}
        <div className="relative">

          <div className="w-[220px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/left1.png" width={220} height={300} alt="about" />
          </div>

          <div className="absolute top-32 left-60 w-[240px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/left2.png" width={240} height={300} alt="about" />
          </div>

          <div className="absolute top-[300px] left-0 w-[260px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/left3.png" width={260} height={300} alt="about" />
          </div>

          <div className="absolute top-[120px] left-[410px]  px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
            Hire <br /> us
          </div>

          <div className="absolute top-6 left-72 bg-white p-4 rounded-xl shadow-lg border border-[#E6E6F5] w-[200px]">
            <h3 className="text-lg font-semibold text-[#5c2c7e]">40 +</h3>
            <p className="text-xs text-[#6B7280] mt-1">
              Projects in 2025 with 5 stars ratings and happy clients.
            </p>
          </div>

          <div className="absolute top-[50px] left-[120px] bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
            20% OFF
          </div>

          <div className="absolute top-[570px] left-[180px] bg-[#8B7CF6] text-white p-2 rounded-full shadow-lg w-[60px]">
            <p className="text-xs ">Ratings</p>
            <div className="flex gap-1 text-xs text-yellow-300">★★★★★</div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1
                           border border-[#E6E6F5] rounded-full
                           text-xs font-medium text-[#7C6BFF] mb-6">
            ● About Us
          </span>

          <h2 className="text-[40px] leading-tight font-bold text-[#2B275F]">
            Driven by <span className="text-[#8B7CF6]">innovation</span>,<br />
            powered by <span className="text-[#8B7CF6]">creativity</span>, and<br />
            built for <span className="text-[#8B7CF6]">results</span>.
          </h2>

          <div className="mt-8 text-[#4B5563] leading-relaxed space-y-6 max-w-xl">
            <p>
            We are a creative digital agency passionate about turning ideas into meaningful digital experiences. Our team brings together strategy, design, and technology to create solutions that not only look exceptional but perform flawlessly.
            </p>

            <p>
          From startups finding their voice to established brands expanding their digital reach, we partner with clients at every stage to craft products and experiences that connect, inspire, and drive measurable growth.
            </p>

            <p>
           We believe that every project deserves attention to detail, a clear vision, and an approach that blends creativity with functionality. Our mission is simple — to shape your vision into digital reality through innovation, precision, and dedication.
            </p>
          </div>
        </div>

      </section>

<WhyChooseUsSection />
<PricingCollaborationSection />
      {/* ================= MISSION SECTION ================= */}
      <MissionStatsSection />

      {/* ================= CONTACT SECTION ================= */}
      <ContactSection />

    </>
  );
}
