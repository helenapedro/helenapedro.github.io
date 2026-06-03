import { Code2, Eye, Github } from 'lucide-react';
import { buttonStyles, classNames, projectLinkIconVariants } from '../../lib/buttonStyles';

interface ProjectLinksProps {
  url?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

export const ProjectLinks = ({ url, frontendUrl, backendUrl }: ProjectLinksProps) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(buttonStyles.iconBase, projectLinkIconVariants.live)}
          aria-label="Open live project"
        >
          <Eye size={18} />
        </a>
      )}
      {frontendUrl && (
        <a
          href={frontendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(buttonStyles.iconBase, projectLinkIconVariants.frontend)}
          aria-label="Open frontend source code"
        >
          <Code2 size={18} />
        </a>
      )}
      {backendUrl && (
        <a
          href={backendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(buttonStyles.iconBase, projectLinkIconVariants.backend)}
          aria-label="Open backend source code"
        >
          <Github size={18} />
        </a>
      )}
    </div>
  );
};
