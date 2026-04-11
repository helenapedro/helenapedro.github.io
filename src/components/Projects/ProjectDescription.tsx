import type { DescriptionBlock } from './Projects';

interface ProjectDescriptionProps {
  projectId: string;
  blocks: DescriptionBlock[];
  featured?: boolean;
}

export const ProjectDescription = ({
  projectId,
  blocks,
  featured = false,
}: ProjectDescriptionProps) => {
  const containerClasses = featured
    ? 'mb-4 mx-auto max-w-4xl space-y-4 text-left text-slate-700'
    : 'mb-4 space-y-3 text-justify text-slate-700';

  return (
    <div className={containerClasses}>
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <p
              key={`heading-${projectId}-${block.text}`}
              className={`font-semibold tracking-wide text-slate-900 ${featured ? 'text-base' : ''}`}
            >
              {block.text}
            </p>
          );
        }

        if (block.type === 'list') {
          return (
            <ul
              key={`list-${projectId}-${index}`}
              className={
                featured
                  ? 'space-y-3 pl-0'
                  : 'list-disc pl-6 space-y-1 text-slate-700'
              }
            >
              {block.items.map((item) => (
                <li
                  key={item}
                  className={
                    featured
                      ? 'rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 leading-7 text-slate-700 shadow-sm'
                      : ''
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={`paragraph-${projectId}-${index}`}
            className={
              featured
                ? 'rounded-xl border border-slate-200 bg-white px-5 py-4 text-lg leading-8 text-slate-700 shadow-sm'
                : 'text-slate-700'
            }
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
};
