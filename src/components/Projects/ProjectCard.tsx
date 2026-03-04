import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects, type Project } from './Projects';
import { ProjectModal } from './ProjectModal';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';

const cardContainerClasses =
  'group bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

const externalLinkClasses =
  'text-sky-600 hover:text-sky-700 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded';

export function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const closeModal = () => setModalImage(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onImageClick={setModalImage}
          />
        ))}
      </div>

      {modalImage && <ProjectModal modalImage={modalImage} closeModal={closeModal} />}
    </section>
  );
}

interface ProjectProps {
  project: Project;
  onImageClick: (image: string) => void;
}

const ProjectCard = ({ project, onImageClick }: ProjectProps) => {
  return (
    <div className={cardContainerClasses}>
      <div className="p-6">
        <div className="flex justify-between items-center gap-4 mb-4">
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClasses}
            aria-label={`Open live demo for ${project.title}`}
          >
            <ExternalLink size={28} />
          </a>
        </div>

        <ProjectTechnologies technologies={project.technologies} />

        <ProjectImage
          images={project.images}
          title={project.title}
          onImageClick={onImageClick}
        />

        <div className="text-slate-700 text-justify mb-4 space-y-3">
          {project.descriptionBlocks.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <p key={`heading-${project.id}-${block.text}`} className="text-slate-900 font-semibold tracking-wide">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'list') {
              return (
                <ul key={`list-${project.id}-${index}`} className="list-disc pl-6 space-y-1 text-slate-700">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={`paragraph-${project.id}-${index}`} className="text-slate-700">
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
