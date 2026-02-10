"use client";
import Image from "next/image";
import SelectedWorksSection from "../../../../component/SelectedWorksSection";

export default function DesignServicesPage() {
  const services = [
    {
      number: "1",
      title: "UI/UX Design",
      points: [
        "Wireframing and prototyping to map user journeys and interactions.",
        "Intuitive layouts that prioritize usability and accessibility.",
        "High-fidelity mockups aligned with modern design standards.",
        "Testing and refining based on user feedback and analytics.",
        "Design systems and reusable components for scalability.",
      ],
    },
    {
      number: "2",
      title: "Brand Identity",
      points: [
        "Logo design with strong symbolism and brand relevance.",
        "Typography, color palette, and visual style guidelines.",
        "Consistent identity across digital and print media.",
        "Stationery, business cards, and collateral design.",
        "Brand refresh and modernization for evolving businesses.",
      ],
    },
    {
      number: "3",
      title: "Product Design",
      points: [
        "Designing user-friendly digital products with functional aesthetics.",
        "Mobile-first approach for apps, websites, and platforms.",
        "Interactive prototypes for testing before development.",
        "Balancing visual creativity with technical feasibility.",
        "Continuous design improvements based on user insights.",
      ],
    },
  ];

  return (
    <>
      <section className="w-full">

        {/* ================= HERO IMAGE ================= */}
        <div
          className="
            relative max-w-6xl mx-auto
            h-[220px] sm:h-[300px] lg:h-[380px]
            mt-16 sm:mt-20
            rounded-3xl overflow-hidden
          "
        >
          <Image
            src="/consulting.png"
            alt="Design Services"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-20 space-y-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-[#8B7CF6] rounded-2xl p-6 sm:p-8
                shadow-[0_20px_60px_rgba(139,124,246,0.45)]
                grid grid-cols-1 lg:grid-cols-[180px_1fr]
                gap-6 lg:gap-10 items-center
              "
            >
              {/* NUMBER WITH IMAGE */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="
                    bg-white rounded-2xl
                    w-[120px] h-[120px]
                    sm:w-[140px] sm:h-[140px]
                    lg:w-[160px] lg:h-[160px]
                    flex items-center justify-center overflow-hidden
                  "
                >
                  <div
                    className="
                      text-[80px] sm:text-[100px] lg:text-[120px]
                      font-extrabold leading-none
                      bg-clip-text text-transparent
                    "
                    style={{
                      backgroundImage: `url(/number-${service.number}.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {service.number}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="text-white text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  {service.title}
                </h2>

                <ul className="space-y-2 text-sm leading-relaxed list-disc pl-5 max-w-2xl mx-auto lg:mx-0">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SELECTED WORKS */}
      <SelectedWorksSection />
    </>
  );
}
