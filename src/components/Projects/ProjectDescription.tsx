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
  return (
    <div className={`mb-4 space-y-3 text-slate-700 ${featured ? 'text-center' : 'text-justify'}`}>
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <p
              key={`heading-${projectId}-${block.text}`}
              className="font-semibold tracking-wide text-slate-900"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === 'list') {
          return (
            <ul
              key={`list-${projectId}-${index}`}
              className={`space-y-1 text-slate-700 ${featured ? 'list-none pl-0' : 'list-disc pl-6'}`}
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`paragraph-${projectId}-${index}`} className="text-slate-700">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};
