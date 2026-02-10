"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="relative w-full pt-8 px-6">

      {/* ===== DESKTOP NAV (>= 500px) ===== */}
      <div className="hidden min-[500px]:flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <Image
          src="/logo/logo.png"
          alt="Rivyne Logo"
          width={100}
          height={60}
          priority
        />

        {/* Menu */}
        <div
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full
                     border border-[#EDEDF7]
                     shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          {links.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.name} href={item.path} className="relative">
                <span className="relative z-10 px-4 py-1 text-sm font-medium
                                 text-[#000] hover:text-[#2B275F]">
                  {item.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute inset-0 bg-[#7C6BFF] rounded-full -z-10"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ===== MOBILE NAV (< 500px) ===== */}
      <div className="flex min-[500px]:hidden items-center justify-between">

        {/* Logo */}
        <Image
          src="/logo/logo.png"
          alt="Rivyne Logo"
          width={90}
          height={50}
          priority
        />

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1"
        >
          <span className={`w-6 h-[2px] bg-black transition ${open && "rotate-45 translate-y-2"}`} />
          <span className={`w-6 h-[2px] bg-black transition ${open && "opacity-0"}`} />
          <span className={`w-6 h-[2px] bg-black transition ${open && "-rotate-45 -translate-y-2"}`} />
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="min-[500px]:hidden absolute top-full left-0 w-full
                       bg-white shadow-lg rounded-b-2xl py-6"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-[#2B275F]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
