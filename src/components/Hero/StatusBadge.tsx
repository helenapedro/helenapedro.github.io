import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

type IconComponent = LucideIcon | IconType;

interface StatusBadgeProps {
  Icon: IconComponent;
  text: string;
  href?: string;
  target?: string;
}

export function StatusBadge({ Icon, text, href, target }: StatusBadgeProps) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/14 w-full">
      <Icon size={16} />
      {href ? (
        <a href={href} target={target}>{text}</a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
