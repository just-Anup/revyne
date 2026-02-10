export default function ProjectDetail({ params }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold text-[#2B275F] capitalize">
        {params.slug}
      </h1>
      <p className="mt-6 text-[#4B5563]">
        Detailed project page content goes here.
      </p>
    </div>
  );
}
