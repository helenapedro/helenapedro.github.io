interface ProjectTechnologiesProps {
  technologies: string[];
}

const techBadgeClasses =
  'px-2 py-1 bg-sky-100 text-sky-800 rounded text-sm transition-transform hover:scale-105';

export const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className={techBadgeClasses}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
