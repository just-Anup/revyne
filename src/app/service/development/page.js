"use client";
import Image from "next/image";
import SelectedProjectsSection from "../../../../component/SelectedProjectsSection";

export default function DevelopmentServicesPage() {
  const services = [
    {
      number: "1",
      title: "App Development",
      points: [
        "Native and cross-platform apps for iOS and Android.",
        "Seamless integration with APIs and third-party tools.",
        "Scalable architecture for future upgrades and features.",
        "Enhanced security and data protection measures.",
        "App store deployment, updates, and post-launch support.",
      ],
    },
    {
      number: "2",
      title: "Web Development",
      points: [
        "Custom websites built on modern frameworks and CMS platforms.",
        "Domain registration, hosting, and maintenance support.",
        "Integration of plugins, payment gateways, and third-party tools.",
        "Responsive designs optimized for all devices and browsers.",
        "E-commerce solutions with secure checkout and product management.",
      ],
    },
    {
      number: "3",
      title: "Custom Software",
      points: [
        "Tailored enterprise-level applications for business workflows.",
        "AI-driven automation and smart integrations.",
        "Cloud-based solutions with data storage and analytics.",
        "Scalable software that adapts to business growth.",
        "Ongoing updates, security patches, and performance optimization.",
      ],
    },
  ];

  return (
    <>
      <section className="w-full">

        {/* ================= HERO IMAGE ================= */}
        <div
          className="
            relative mx-auto
            max-w-6xl
            h-[200px] sm:h-[260px] lg:h-[320px]
            mt-16 sm:mt-20
            rounded-3xl overflow-hidden
          "
        >
          <Image
            src="/developmentservices.png"
            alt="Development Services"
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
                bg-[#8B7CF6] rounded-2xl
                p-6 sm:p-8
                shadow-[0_20px_60px_rgba(139,124,246,0.45)]
                grid grid-cols-1 lg:grid-cols-[180px_1fr]
                gap-6 lg:gap-10
                items-center
              "
            >
              {/* NUMBER WITH IMAGE */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="
                    bg-white rounded-2xl
                    w-[110px] h-[110px]
                    sm:w-[140px] sm:h-[140px]
                    lg:w-[160px] lg:h-[160px]
                    flex items-center justify-center
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      text-[70px] sm:text-[100px] lg:text-[120px]
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

      {/* SELECTED PROJECTS */}
      <SelectedProjectsSection />
    </>
  );
}
