import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../Projects/Projects';

const SITE_URL = 'https://helenapedro.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/project-images/features/ongoma-news-feature.png`;

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

const setMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const projectMatch = location.pathname.match(/^\/projects\/([^/]+)$/);
    const project = projectMatch
      ? projects.find((item) => item.id === projectMatch[1])
      : undefined;

    const meta =
      project
        ? {
            title: `${project.title} | Technical Projects | Helena Pedro`,
            description: `${project.summary} Technical deep-dive by Helena Pedro covering architecture, backend design, and engineering tradeoffs.`,
          }
        : location.pathname === '/about'
          ? routeMeta.about
          : location.pathname === '/press'
            ? routeMeta.press
            : routeMeta.home;

    const canonical = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('robots', 'index,follow');
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:type', project ? 'article' : 'profile', 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:image', DEFAULT_IMAGE, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', DEFAULT_IMAGE);
    setCanonical(canonical);
  }, [location.pathname]);

  return null;
}
