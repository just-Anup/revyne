"use client";
import Image from "next/image";

export default function SelectedWorksSection() {
  return (
    <section className="max-w-7xl mx-auto mt-32 px-6">

      {/* ===== HEADER ===== */}
      <h2 className="text-2xl font-semibold text-[#2B275F] mb-12">
        Selected Works
      </h2>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-4 gap-6 auto-rows-[170px]">

        {/* 1 — Top Left (Big) */}
        <WorkBox img="/number-1.png" rowSpan={2} />

        {/* 2 — Top Middle */}
        <WorkBox img="/number-1.png" />

        {/* 3 — Top Right (Big) */}
        <WorkBox img="/number-1.png" colSpan={2} rowSpan={2} />

        {/* 4 — Middle Left */}
        <WorkBox img="/number-1.png" />

        {/* 5 — Center Circle */}
        <div className="col-span-1 row-span-2 flex items-center justify-center">
          <div
            className="relative w-[220px] h-[220px] rounded-full bottom-20 overflow-hidden
                       transition-all duration-500
                       hover:scale-110
                       hover:shadow-[0_30px_90px_rgba(139,124,246,0.6)]
                       shadow-[0_20px_60px_rgba(139,124,246,0.4)]"
          >
            <Image
              src="/number-1.png"
              alt="Center Work"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* 6 — Middle Right */}
        <WorkBox img="/number-1.png" />

        {/* 7 — Bottom Left */}
        <WorkBox img="/number-1.png" />

        {/* 8 — Bottom Middle */}
        <WorkBox img="/number-1.png" />


        {/* 10 — FULL WIDTH BANNER */}
        <div
          className="col-span-4 h-[260px] relative rounded-2xl bottom-40 overflow-hidden
                     transition-all duration-700
                     hover:scale-[1.02]
                     hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                     shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >
          <Image
            src="/number-1.png"
            alt="Featured Work"
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

      </div>

      {/* ===== SEE MORE ===== */}
      <div className="flex justify-end mt-10">
        <button className="text-[#2B275F] font-medium flex items-center gap-2
                           hover:text-[#8B7CF6] transition">
          See More →
        </button>
      </div>

    </section>
  );
}

/* ===== REUSABLE WORK BOX ===== */
function WorkBox({ img, rowSpan = 1, colSpan = 1 }) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
        ${rowSpan === 2 ? "row-span-2" : ""}
        ${colSpan === 2 ? "col-span-2" : ""}
      `}
    >
      <Image
        src={img}
        alt="Work"
        fill
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
}
