"use client";
import { useEffect, useState } from "react";

import ClientCard from "../constant/heroComponent/ClientCard";
import TeamCard from "../constant/heroComponent/TeamCard";
import FollowersCard from "../constant/heroComponent/FollowersCard";
import ReachCard from "../constant/heroComponent/ReachCard";

const words = ["Concepts", "Ideas", "Code", "Designs"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-20
        pt-16 sm:pt-20 lg:pt-24
      "
    >
      {/* ================= LEFT CONTENT ================= */}
      <div className="flex flex-col justify-center">

        <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.15] font-bold text-[#2B275F]">
  Shaping{" "}
  <span
    className="
      relative inline-flex
      w-[160px] sm:w-[220px] lg:w-[260px]
      h-[1.2em]
      overflow-hidden
      align-middle
    "
  >
    <span
      key={index}
      className="text-[#7C6BFF] animate-word-slide whitespace-nowrap"
    >
      {words[index]}
    </span>
  </span>
  <br />
  Into Real Projects
  <br />
  That Deliver Results
</h1>

        <p
          className="
            mt-6 sm:mt-7
            text-sm sm:text-base
            text-[#6B7280]
            max-w-lg
            leading-relaxed
          "
        >
          We craft meaningful digital experiences that combine creativity,
          strategy, and innovation to help brands connect with people and
          achieve lasting success.
        </p>

        <button
          className="
            mt-8 sm:mt-10 lg:mt-12
            w-fit
            bg-[#7C6BFF]
            text-white
            px-7 py-3 sm:px-9 sm:py-4
            rounded-xl
            text-sm font-medium
            shadow-[0_12px_40px_rgba(124,107,255,0.35)]
          "
        >
          Get Started →
        </button>
      </div>

      {/* ================= RIGHT VISUAL (DESKTOP ONLY) ================= */}
      <div className="relative h-[620px] hidden lg:block">

        <div
          className="
            absolute right-[-40px] top-[80px]
            w-[460px] h-[460px]
            bg-[#FFF4E3] rounded-full
            -z-10
          "
        />

        <div className="absolute top-0 left-20 float">
          <ClientCard />
        </div>

        <div className="absolute top-24 right-0 float">
          <TeamCard />
        </div>

        <div className="absolute top-64 left-0 float">
          <FollowersCard />
        </div>

        <div className="absolute bottom-0 right-24 float">
          <ReachCard />
        </div>
      </div>

      {/* ================= MOBILE / TABLET CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mt-10">
        <ClientCard />
        <TeamCard />
        <FollowersCard />
        <ReachCard />
      </div>
    </section>
  );
}
