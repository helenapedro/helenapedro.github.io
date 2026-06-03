import { BadgeCheck } from 'lucide-react';

interface ProjectHighlightProps {
  highlight?: string;
  highlightUrl?: string;
  centered?: boolean;
}

export const ProjectHighlight = ({
  highlight,
  highlightUrl,
  centered = false,
}: ProjectHighlightProps) => {
  if (!highlight) {
    return null;
  }

  const classes = `mt-3 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold leading-5 text-emerald-800 transition-colors hover:border-emerald-300 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
    centered ? 'mx-auto' : ''
  }`;
  const content = (
    <>
      <BadgeCheck className="h-4 w-4 shrink-0" />
      <span>{highlight}</span>
    </>
  );

  if (highlightUrl) {
    return (
      <a
        href={highlightUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={`Open featured showcase for ${highlight}`}
      >
        {content}
      </a>
    );
  }

  return <p className={classes}>{content}</p>;
};
