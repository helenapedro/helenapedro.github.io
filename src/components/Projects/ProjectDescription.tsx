import type { DescriptionBlock } from './Projects';

interface ProjectDescriptionProps {
  projectId: string;
  blocks: DescriptionBlock[];
}

export const ProjectDescription = ({ projectId, blocks }: ProjectDescriptionProps) => {
  return (
    <div className="text-slate-700 text-justify mb-4 space-y-3">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <p key={`heading-${projectId}-${block.text}`} className="text-slate-900 font-semibold tracking-wide">
              {block.text}
            </p>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={`list-${projectId}-${index}`} className="list-disc pl-6 space-y-1 text-slate-700">
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
