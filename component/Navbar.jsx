"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative w-full pt-8 px-4 sm:px-10 flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-center gap-1">
        <Image
          src="/logo/logo.png"
          alt="Rivyne Logo"
          width={90}
          height={50}
          priority
        />
      </div>

      {/* DESKTOP MENU ( > 500px ) */}
      <div
        className="
          hidden min-[501px]:flex
          absolute left-1/2 -translate-x-1/2
          items-center gap-2 px-4 py-2 bg-white rounded-full
          border border-[#EDEDF7]
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        "
      >
        {links.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.name} href={item.path} className="relative">
              <span
                className="
                  relative z-10 px-4 py-1 text-sm font-medium
                  text-[#000000] hover:text-[#2B275F]
                "
              >
                {item.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 bg-[#7C6BFF] rounded-full z-0"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* HAMBURGER ( ≤ 500px ) */}
      <button
        onClick={() => setOpen(!open)}
        className="min-[501px]:hidden flex flex-col gap-1.5 z-50"
      >
        <span className="w-6 h-[2px] bg-[#2B275F]" />
        <span className="w-6 h-[2px] bg-[#2B275F]" />
        <span className="w-6 h-[2px] bg-[#2B275F]" />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            absolute top-20 left-1/2 -translate-x-1/2
            w-[90%] bg-white rounded-2xl
            border border-[#EDEDF7]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            flex flex-col items-center py-6 gap-4
            min-[501px]:hidden
          "
        >
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                pathname === item.path
                  ? "text-[#7C6BFF]"
                  : "text-[#2B275F]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
