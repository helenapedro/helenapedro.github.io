interface ProjectTechnologiesProps {
  technologies: string[];
  featured?: boolean;
}

const techBadgeClasses =
  'px-2 py-1 bg-sky-100 text-sky-800 rounded text-sm transition-transform hover:scale-105';

export const ProjectTechnologies = ({
  technologies,
  featured = false,
}: ProjectTechnologiesProps) => {
  return (
    <div className="mb-4">
      <div className={`flex flex-wrap gap-2 ${featured ? 'justify-center' : ''}`}>
        {technologies.map((tech) => (
          <span key={tech} className={techBadgeClasses}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
