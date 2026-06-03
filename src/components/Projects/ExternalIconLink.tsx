import { ExternalLink } from 'lucide-react';

const externalLinkClasses =
  'text-sky-600 hover:text-sky-700 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded';

interface ExternalIconLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const ExternalIconLink = ({
  href,
  label,
  className = '',
}: ExternalIconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${externalLinkClasses} ${className}`.trim()}
      aria-label={label}
    >
      <ExternalLink size={28} />
    </a>
  );
};
