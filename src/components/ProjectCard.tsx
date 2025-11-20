// File: src/components/ProjectCard.tsx

import Image from 'next/image';
import Link from 'next/link';

// This defines the 'shape' of the data each card will need
export interface ProjectCardProps {
  slug: string; // The URL-friendly version of the title
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export default function ProjectCard({ slug, title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-700 
                    hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/50 
                    transition-all duration-300 transform hover:-translate-y-2">
      
      {/* Project Image */}
      <Link href={`/projects/${slug}`} passHref>
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          <Link href={`/projects/${slug}`} className="hover:text-blue-400 transition-colors duration-300">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* View Case Study Button */}
        <Link href={`/projects/${slug}`} passHref>
          <button className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300">
            View Case Study
          </button>
        </Link>
      </div>
    </div>
  );
}