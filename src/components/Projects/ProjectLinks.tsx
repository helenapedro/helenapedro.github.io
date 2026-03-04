import { Code2, Eye, Github } from 'lucide-react';

interface ProjectLinksProps {
  url?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const linkButtonClasses =
  'mb-3 p-3 text-white rounded-full transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500';

export const ProjectLinks = ({ url, frontendUrl, backendUrl }: ProjectLinksProps) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkButtonClasses} bg-emerald-600 hover:bg-emerald-700`}
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
          className={`${linkButtonClasses} bg-sky-600 hover:bg-sky-700`}
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
          className={`${linkButtonClasses} bg-slate-700 hover:bg-slate-800`}
          aria-label="Open backend source code"
        >
          <Github size={18} />
        </a>
      )}
    </div>
  );
};
