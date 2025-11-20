// File: src/app/(pages)/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data"; // <-- Import our central project data

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">All Projects</h1>
      <p className="text-gray-400 mb-12">
        Here is a collection of my work, showcasing my skills in AI, machine learning, and full-stack development.
      </p>

      {/* Use the PROJECTS array from data.ts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
        {PROJECTS.map((project) => ( // <-- Use PROJECTS here
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
  );
}