// File: src/app/(pages)/projects/[slug]/page.tsx

import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link"; // Import Link for navigation buttons
import Image from 'next/image'; // Import Image for main project image (optional)
import ReactMarkdown from 'react-markdown';
// Optional: Add icons for the links for extra polish
import { FaGithub, FaYoutube, FaLink } from 'react-icons/fa'; // We'll install react-icons later
import remarkGfm from 'remark-gfm';

interface ProjectPageParams {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageParams) { // <-- Added async here
  const { slug } = await params; // <-- Awaited params here

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Project Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
        <p className="text-lg text-blue-300 font-semibold">{project.subtitle}</p>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Main Content Column (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          {/* Optional: Main Project Image */}
          {/* If you have a large hero image for the project page, uncomment this */}
           {project.mainImageUrl && (
              <Image
                  src={project.mainImageUrl} // You would add a mainImageUrl to your Project interface
                  alt={`Main image for ${project.title}`}
                  width={1000}
                  height={600}
                  className="rounded-lg shadow-xl mb-8"
              />
          )} 

          {/* Problem Statement Section */}
          <div className="mb-10 p-6 ">
            <h2 className="text-2xl font-bold text-white border-b-2 border-blue-500 pb-2 mb-4">Problem Statement</h2>
            {project.problemStatement.map((paragraph, index) => (
  <div key={index} className="prose prose-invert max-w-none"> {/* <-- Apply prose classes here */}
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {paragraph}
    </ReactMarkdown>
  </div>
))}
          </div>

          {/* Methodology Section */}
          <div className="mb-10 p-6">
            <h2 className="text-2xl font-bold text-white border-b-2 border-blue-500 pb-2 mb-4">Methodology & Approach</h2>
            {project.methodology.map((paragraph, index) => (
              <div key={index} className="prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {paragraph}
                </ReactMarkdown>
              </div>
            ))}
          </div>

          {/* Results Section */}
          <div className="mb-10 p-6 ">
            <h2 className="text-2xl font-bold text-white border-b-2 border-blue-500 pb-2 mb-4">Results & Insights</h2>
            {project.resultsAndInsights.map((paragraph, index) => (
              <div key={index} className="prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {paragraph}
                </ReactMarkdown>
              </div>
            ))}
          </div>

          {/* Impact Section */}
          <div className="mb-10 p-6">
            <h2 className="text-2xl font-bold text-white border-b-2 border-blue-500 pb-2 mb-4">Impact & Value</h2>
            {project.impact.map((paragraph, index) => (
              <div key={index} className="prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {paragraph}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Column (1/3 width on large screens) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Tech Stack Section */}
          <div className="p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-blue-800 text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links Section */}
          <div className="p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Project Links</h2>
            <div className="flex flex-col space-y-4">
              {project.liveDemoUrl && (
                <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
                    {/* <FaLink className="mr-2" /> */} {/* Will add icon later */}
                    Live Demo
                  </button>
                </Link>
              )}
              {project.codeUrl && (
                <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
                    {/* <FaGithub className="mr-2" /> */} {/* Will add icon later */}
                    View Code on GitHub
                  </button>
                </Link>
              )}
              {project.videoUrl && (
                <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
                    {/* <FaYoutube className="mr-2" /> */} {/* Will add icon later */}
                    Watch Video Demo
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* You can add a "Future Work" or "Technologies Used" if different from tags here */}
        </div>
      </div>
    </div>
  );
}