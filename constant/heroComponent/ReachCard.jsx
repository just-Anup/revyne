import React from 'react'

export default function ReachCard() {
  return (
    <div className="bg-white w-56 p-5 rounded-2xl
                    shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
      <p className="text-sm text-[#6B7280] flex items-center gap-2">
        ▶ Reach
      </p>
      <h3 className="text-3xl font-bold mt-2">896.18k</h3>
      <p className="text-green-500 text-sm mt-1">
        ↑ 3.6% vs last 7 days
      </p>
    </div>
  );
}

