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

const professionalHighlights = [
  'Built backend systems for banking workflows serving high-scale operations.',
  'Experience with Java, Spring Boot, Kafka, SQL, NoSQL, Node.js, Express, React/Redux, TypeScript, Redis, and Docker.',
  'Strong in Full-Stack Development, Microservices Archtecture, System Design, Distributed Systems and Enterprise Applications.',
  'Open to full-time Software Engineer opportunities.',
];

export function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const featuredProject = projects.find((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  const closeModal = () => setModalImage(null);

  return (
    <section className="mb-16">
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Experience Snapshot
        </p>
        <div className="mt-4 space-y-3 text-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Millennium Atlantico Bank
            </h2>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Software Development Engineer
            </p>
          </div>
          <p className="leading-7">
            Built resilient backend services, analytics automation, and high-value
            transaction reliability improvements.
          </p>
          <p className="leading-7">
            Worked with Java, Spring Boot, Apache Kafka, IBM Db2, microservices,
            and production systems.
          </p>
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Professional Highlights
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {professionalHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>

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
