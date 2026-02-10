"use client";
import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8B7CF6] text-white mt-24 sm:mt-32 lg:mt-40">

      {/* ================= TOP ================= */}
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6
          py-12 sm:py-16
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10 lg:gap-12
        "
      >
        {/* Column 1 */}
        <div className="text-center sm:text-left">
          <img
            src="/logo/logo.png"
            alt="Rivyne Logo"
            className="mb-6 w-28 mx-auto sm:mx-0"
          />

          <p className="text-sm leading-relaxed opacity-90 max-w-sm mx-auto sm:mx-0">
            A creative agency committed to building trust, delivering quality,
            and empowering businesses through innovation and design.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="
                  w-9 h-9 rounded-full
                  bg-white/10
                  flex items-center justify-center
                  hover:bg-white hover:text-[#8B7CF6]
                  transition cursor-pointer
                "
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:opacity-100 cursor-pointer">Home</li>
            <li className="hover:opacity-100 cursor-pointer">About Us</li>
            <li className="hover:opacity-100 cursor-pointer">Services</li>
            <li className="hover:opacity-100 cursor-pointer">Product</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Other Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="hover:opacity-100 cursor-pointer">Terms</li>
            <li className="hover:opacity-100 cursor-pointer">Privacy</li>
            <li className="hover:opacity-100 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm opacity-90">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={16} /> Noida, Uttar Pradesh, India
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} /> Rivytech@gmail.com
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} /> +91 936-639-5522
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div
        className="
          border-t border-white/20
          py-4 px-4
          text-center text-sm opacity-90
        "
      >
        © 2023 All rights reserved
      </div>
    </footer>
  );
}
