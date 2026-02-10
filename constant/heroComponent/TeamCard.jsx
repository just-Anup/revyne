import React from 'react'

export default function TeamCard() {
  return (
    <div className="bg-white p-4 rounded-2xl w-56
                    shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
      <p className="text-sm font-medium mb-3">Our Team</p>
      <div className="flex items-center gap-2">
        {[1,2,3].map(i => (
          <div
            key={i}
            className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"
          />
        ))}
        <span className="text-sm font-semibold">9+</span>
      </div>
    </div>
  );
}
