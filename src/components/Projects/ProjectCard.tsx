import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects, type Project } from './Projects';
import { ProjectModal } from './ProjectModal';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';
import { ProjectDescription } from './ProjectDescription';

const cardContainerClasses =
  'group bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

const externalLinkClasses =
  'text-sky-600 hover:text-sky-700 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded';

export function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const featuredProject = projects.find((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  const closeModal = () => setModalImage(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

      {featuredProject && (
        <div className="mb-6">
          <ProjectCard project={featuredProject} featured onImageClick={setModalImage} />
        </div>
      )}

      {standardProjects.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {standardProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={setModalImage}
            />
          ))}
        </div>
      )}

      {modalImage && <ProjectModal modalImage={modalImage} closeModal={closeModal} />}
    </section>
  );
}

interface ProjectProps {
  project: Project;
  featured?: boolean;
  onImageClick: (image: string) => void;
}

const ProjectCard = ({ project, featured = false, onImageClick }: ProjectProps) => {
  return (
    <div className={cardContainerClasses}>
      <div className="p-6">
        <div className="relative mb-4">
          <h3 className="min-h-14 flex items-center justify-center px-10 text-center text-xl font-semibold leading-snug text-slate-900">
            {project.title}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${externalLinkClasses} absolute right-0 top-1/2 -translate-y-1/2`}
            aria-label={`Open live demo for ${project.title}`}
          >
            <ExternalLink size={28} />
          </a>
        </div>

        <ProjectTechnologies technologies={project.technologies} featured={featured} />

        <ProjectImage
          images={project.images}
          title={project.title}
          featured={featured}
          onImageClick={onImageClick}
        />

        <ProjectDescription
          projectId={project.id}
          blocks={project.descriptionBlocks}
          featured={featured}
        />

        <ProjectLinks
          url={project.url}
          frontendUrl={project.frontendUrl}
          backendUrl={project.backendUrl}
        />
      </div>
    </div>
  );
};
