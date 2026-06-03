import { ExternalLink } from 'lucide-react';
import { buttonStyles, classNames } from '../../lib/buttonStyles';

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
      className={classNames(buttonStyles.externalIcon, className)}
      aria-label={label}
    >
      <ExternalLink size={28} />
    </a>
  );
};
