import type { Project } from '../../data/projects';
import { ExternalIconLink } from './ExternalIconLink';
import { ProjectDescription } from './ProjectDescription';
import { ProjectHighlight } from './ProjectHighlight';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';
import { ProjectTechnologies } from './ProjectTechnologies';

const cardContainerClasses =
  'group bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onImageClick: (image: string) => void;
}

export const ProjectCard = ({
  project,
  featured = false,
  onImageClick,
}: ProjectCardProps) => {
  const images = featured && project.detailImages ? project.detailImages : project.images;

  return (
    <div className={cardContainerClasses}>
      <div className="p-4 sm:p-5 lg:p-6">
        {!featured && (
          <div className="relative mb-3 sm:mb-4">
            <h3 className="flex min-h-12 items-center justify-center px-10 text-center text-xl font-semibold leading-snug text-slate-900">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 px-10 text-center text-sm font-semibold leading-6 text-sky-700">
                {project.subtitle}
              </p>
            )}
            <ProjectHighlight
              highlight={project.highlight}
              highlightUrl={project.highlightUrl}
              centered
            />
            <ExternalIconLink
              href={project.url}
              label={`Open live demo for ${project.title}`}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>
        )}

        <ProjectTechnologies technologies={project.technologies} featured={featured} />

        <ProjectImage
          images={images}
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
