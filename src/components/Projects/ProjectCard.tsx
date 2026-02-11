import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from './Projects';
import { ProjectModal } from './ProjectModal';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const closeModal = () => setModalImage(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onImageClick={setModalImage}
          />
        ))}
      </div>

      {modalImage && <ProjectModal modalImage={modalImage} closeModal={closeModal} />}
    </section>
  );
}

type DescriptionBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

interface ProjectProps {
  project: {
    title: string;
    url: string;
    frontendUrl?: string;
    backendUrl?: string;
    technologies: string[];
    image?: string;
    images?: string[];
    description: string;
  };
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onImageClick: (image: string) => void;
}

const parseDescription = (description: string): DescriptionBlock[] => {
  return description
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
      const isList = lines.length > 0 && lines.every((line) => line.startsWith('- '));

      if (isList) {
        return { type: 'list', items: lines.map((line) => line.slice(2).trim()) };
      }

      const isHeading = lines.length === 1 && /^(Scope|Outcome)$/i.test(lines[0]);
      if (isHeading) {
        return { type: 'heading', text: lines[0] };
      }

      return { type: 'paragraph', text: lines.join(' ') };
    });
};

const ProjectCard: React.FC<ProjectProps> = ({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onImageClick,
}) => {
  const descriptionBlocks = parseDescription(project.description);

  return (
    <div
      className={`group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 ${
        isHovered ? '-translate-y-1 shadow-xl' : ''
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 text-center w-full">{project.title}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transform transition-transform hover:scale-110"
          >
            <ExternalLink size={28} />
          </a>
        </div>

        <ProjectTechnologies technologies={project.technologies} />

        <ProjectImage
          images={project.images}
          image={project.image}
          title={project.title}
          isHovered={isHovered}
          onImageClick={onImageClick}
        />

        <div className="text-gray-700 text-justify mb-4 space-y-3">
          {descriptionBlocks.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <p key={index} className="text-gray-900 font-semibold tracking-wide">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'list') {
              return (
                <ul key={index} className="list-disc pl-6 space-y-1 text-gray-700">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-gray-700">
                {block.text}
              </p>
            );
          })}
        </div>

        <ProjectLinks
          url={project.url}
          frontendUrl={project.frontendUrl}
          backendUrl={project.backendUrl}
        />
      </div>
    </div>
  );
};
