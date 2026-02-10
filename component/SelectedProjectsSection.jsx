"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectedProjectsSection() {
  const projects = [
    {
      slug: "regalis",
      title: "REGALIS",
      likes: 398,
      description: "Luxury Item Website for buying items globally.",
      image: "/project/project1.png",
      external: "#",
    },
    {
      slug: "scholarium",
      title: "Scholarium",
      likes: 247,
      description: "An AI course generator application with ChatBot.",
      image: "/project/project2.png",
      external: "#",
    },
    {
      slug: "shortify",
      title: "Shortify",
      likes: 424,
      description: "Video generator website that helps to generate short video.",
      image: "/project/project3.png",
      external: "#",
    },
    {
      slug: "hygieia",
      title: "Hygieia",
      likes: 393,
      description: "All in one fitness application for personalized workout.",
      image: "/project/project4.png",
      external: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-32 px-6">

      {/* Header */}
      <h2 className="text-2xl font-semibold text-[#2B275F] mb-10">
        Selected Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* See More */}
      <div className="flex justify-end mt-10">
        <Link
          href="/projects"
          className="flex items-center gap-2 font-medium text-[#2B275F]
                     hover:text-[#8B7CF6] transition"
        >
          See More →
        </Link>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ProjectCard({ project }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(project.likes);

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="
        group bg-white rounded-2xl p-4 cursor-pointer
        border border-[#E6E6F5]
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_60px_rgba(139,124,246,0.25)]
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative h-[200px] rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#8B7CF6]">
            {project.title}
          </p>
          <p className="text-sm text-[#2B275F] mt-1">
            {project.description}
          </p>
        </div>

        {/* Icons */}
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={toggleLike}
            className="flex items-center gap-1 text-sm text-[#6B7280]"
          >
            <span
              className={`transition ${
                liked ? "scale-125 text-red-500" : ""
              }`}
            >
              ♥
            </span>
            {count}
          </button>

          {/* External link (SAFE) */}
          <a
            href={project.external}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#8B7CF6] text-lg hover:scale-110 transition"
          >
            ↗
          </a>
        </div>
      </div>
    </div>
  );
}
