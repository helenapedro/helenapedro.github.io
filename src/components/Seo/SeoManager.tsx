import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMetadata } from '../../data/seo';

const SITE_URL = 'https://helenapedro.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/project-images/features/ongoma-news-feature.png`;

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
    const meta = getRouteMetadata(location.pathname);
    const canonical = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('robots', 'index,follow');
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:type', meta.type, 'property');
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
