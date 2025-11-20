// File: src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard'; // <-- Import ProjectCard
import { PROJECTS } from '@/lib/data';             // <-- Import our real data

export default function Home() {
  // We'll feature the first 3 projects from our data file
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <main>
      {/* Hero Section (already built) */}
      <section className="bg-blue-950 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <Image
                src="/Me-passport-photo-latest.jpg" 
                alt="Calistus Mwonga"
                width={128}
                height={128}
                className="rounded-full border-4 border-blue-700 object-cover"
                priority
              />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Calistus Musyimi Mwonga
                </h1>
                <p className="text-lg lg:text-xl text-blue-300 font-semibold mt-1">
                  Data Scientist & Machine Learning Engineer
                </p>
                <p className="mt-2 text-gray-300 max-w-xl">
                  I architect and deploy end-to-end AI systems, transforming complex models into tangible, product-driven solutions.
                </p>
                <Link href="/projects" passHref>
                  <button className="mt-6 bg-white text-blue-950 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300">
                    Explore All Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 0L200 100L100 200L0 100L100 0Z" fill="rgba(66, 153, 225, 0.1)"/>
                <path d="M100 20L180 100L100 180L20 100L100 20Z" stroke="rgba(66, 153, 225, 0.5)" strokeWidth="2"/>
                <circle cx="100" cy="100" r="30" stroke="rgba(66, 153, 225, 0.7)" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: Featured Projects Section --- */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>
          {/* This is the horizontal grid for the homepage */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}