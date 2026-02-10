"use client";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto mt-24 sm:mt-32 px-4 sm:px-6">

      {/* Badge */}
      <span
        className="inline-flex items-center gap-2 px-4 py-1
                   border border-[#E6E6F5] rounded-full
                   text-xs font-medium text-[#7C6BFF] mb-6"
      >
        ● Contact
      </span>

      {/* Heading */}
      <h2 className="text-[28px] sm:text-[36px] font-bold text-[#2B275F] leading-tight">
        Get in <span className="text-[#8B7CF6]">Touch</span>
      </h2>

      <p className="text-[#4B5563] mt-2 mb-10">
        Let’s bring your ideas to life — together.
      </p>

      {/* ================= CONTACT CARD ================= */}
      <div
        className="
          grid grid-cols-1 lg:grid-cols-2
          rounded-3xl overflow-hidden
          border border-[#E6E6F5]
          shadow-[0_10px_40px_rgba(124,107,255,0.2)]
        "
      >
        {/* ================= LEFT INFO ================= */}
        <div className="bg-[#8B7CF6] text-white p-8 sm:p-10 relative">

          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Contact Information
          </h3>

          <p className="text-sm opacity-90 mb-8">
            Any question or remarks? Just write us a message!
          </p>

          <div className="space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <Phone size={18} />
              <span>+91-936-639-5522</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={18} />
              <span>rivynetech@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={18} />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Social placeholders */}
          <div className="flex gap-4 mt-10">
            <div className="w-8 h-8 rounded-full bg-white/20" />
            <div className="w-8 h-8 rounded-full bg-white/20" />
            <div className="w-8 h-8 rounded-full bg-white/20" />
          </div>

          {/* Decorative shapes (desktop only) */}
          <div className="hidden lg:block absolute bottom-0 right-0 w-40 h-40 bg-black/10 rounded-full" />
          <div className="hidden lg:block absolute bottom-16 right-20 w-32 h-32 bg-black/10 rounded-full" />
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="bg-white p-8 sm:p-10">

          <form className="space-y-8">

            {/* Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#2B275F]">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#8B7CF6]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#2B275F]">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#8B7CF6]"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-[#2B275F]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#8B7CF6]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#2B275F]">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#8B7CF6]"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-sm font-medium text-[#2B275F] mb-4">
                Select Service?
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-[#4B5563]">
                {[
                  "Web Development",
                  "App Development",
                  "Growth & Marketing",
                  "Consulting",
                ].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input type="radio" name="service" />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-[#2B275F]">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Write your message..."
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#8B7CF6]"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#8B7CF6] text-white px-8 py-3 rounded-lg
                           shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
