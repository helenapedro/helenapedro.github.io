import { projects } from './projects';

export interface RouteMetadata {
  title: string;
  description: string;
  type: 'article' | 'profile';
}

const routeMeta = {
  home: {
    title: 'Helena Pedro | Software Engineer & AI Innovator | M.S. in Computer Science',
    description:
      'Award-winning Software Engineer specialized in scalable backend systems and AI. Creator of the Resume Feedback Platform featured by OpenAI Developers x Handshake.',
  },
  about: {
    title: 'About Helena Pedro | Backend, Cloud & AI Software Engineer',
    description:
      'Helena Pedro is a software engineer focused on backend architecture, cloud systems, generative AI workflows, and business-critical reliability.',
  },
  press: {
    title: 'Press & Recognition | Helena Pedro | AI Innovator',
    description:
      'Press coverage and international recognition for Helena Pedro, creator of the Resume Feedback Platform featured by OpenAI Developers x Handshake and Angolan media.',
  },
};

export const getRouteMetadata = (pathname: string): RouteMetadata => {
  const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
  const project = projectMatch
    ? projects.find((item) => item.id === projectMatch[1])
    : undefined;

  if (project) {
    return {
      title: `${project.title} | Technical Projects | Helena Pedro`,
      description: `${project.summary} Technical deep-dive by Helena Pedro covering architecture, backend design, and engineering tradeoffs.`,
      type: 'article',
    };
  }

  const meta =
    pathname === '/about'
      ? routeMeta.about
      : pathname === '/press'
        ? routeMeta.press
        : routeMeta.home;

  return {
    ...meta,
    type: 'profile',
  };
};
