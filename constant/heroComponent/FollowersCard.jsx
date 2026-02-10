"use client";
import React from 'react'
import { BarChart, Bar, XAxis } from "recharts";

const data = [
  { d: "18/10", v: 30 },
  { d: "19/10", v: 40 },
  { d: "20/10", v: 26 },
  { d: "21/10", v: 20 },
  { d: "22/10", v: 35 },
  { d: "23/10", v: 45 },
];

export default function FollowersCard() {
  return (
    <div className="bg-white p-6 rounded-2xl w-72
                    shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
      <p className="font-semibold text-sm mb-5 text-[#111827]">
        Followers Stats
      </p>
      <BarChart width={240} height={160} data={data}>
        <XAxis dataKey="d" tick={{ fontSize: 10 }} />
        <Bar dataKey="v" fill="#7C6BFF" radius={[8,8,0,0]} />
      </BarChart>
    </div>
  );
}

