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
    <>
      {/* NAVBAR BAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-transparent px-4 sm:px-10 pt-6">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Image
            src="/logo/logo.png"
            alt="Rivyne Logo"
            width={90}
            height={50}
            priority
          />

          {/* DESKTOP MENU */}
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
                  <span className="relative z-10 px-4 py-1 text-sm font-medium text-[#2B275F]">
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

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="min-[501px]:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-[#2B275F]" />
            <span className="w-6 h-[2px] bg-[#2B275F]" />
            <span className="w-6 h-[2px] bg-[#2B275F]" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-6 border-b">
            <Image
              src="/logo/logo.png"
              alt="Rivyne Logo"
              width={80}
              height={40}
            />
            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-[#2B275F]"
            >
              ×
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col items-center gap-8 mt-16">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`text-xl font-medium ${
                  pathname === item.path
                    ? "text-[#7C6BFF]"
                    : "text-[#2B275F]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
