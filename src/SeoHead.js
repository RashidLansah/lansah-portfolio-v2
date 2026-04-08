import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoRoutes from './seoRoutes.json';

const SITE_NAME = 'Lansah Portfolio';
const SITE_URL = 'https://www.uxlansah.com';
const DEFAULT_IMAGE = '/images/lansah-profile.png';

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdul-Rashid Lansah',
  alternateName: 'Lansah',
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  jobTitle: 'Senior Product Designer',
  description:
    'Senior Product Designer specializing in AI-native product design and 0-to-1 builds.',
  email: 'mailto:rashidlansahadam@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/rashid-lansah',
    'https://github.com/RashidLansah'
  ],
  homeLocation: {
    '@type': 'Place',
    name: 'Accra, Ghana'
  },
  knowsAbout: [
    'AI-Assisted Design',
    'Product Design',
    'Claude Code',
    'Figma',
    '0-to-1 Product',
    'Design Systems',
    'Cursor'
  ]
};

function absoluteUrl(pathname = '/') {
  return `${SITE_URL}${pathname}`;
}

function findSeoConfig(pathname) {
  return (
    seoRoutes.find((route) => route.path === pathname) ||
    seoRoutes.find((route) => route.path === '/') ||
    seoRoutes[0]
  );
}

function upsertMeta(attrName, attrValue, content) {
  let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertSchema(id, data) {
  let element = document.head.querySelector(`script[data-seo-schema="${id}"]`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo-schema', id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function getBreadcrumbs(pathname, title) {
  if (pathname === '/') {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title.replace(/\s+\|\s+Lansah.*$/, ''),
        item: absoluteUrl(pathname)
      }
    ]
  };
}

function getPageSchema(config, pathname, canonicalUrl) {
  const imageUrl = absoluteUrl(config.image || DEFAULT_IMAGE);
  const shared = {
    '@context': 'https://schema.org',
    '@type': config.schemaType || 'WebPage',
    name: config.title,
    headline: config.title,
    description: config.description,
    url: canonicalUrl,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: PERSON_SCHEMA.name,
      url: PERSON_SCHEMA.url
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    }
  };

  if (config.schemaType === 'ProfilePage') {
    return {
      ...shared,
      mainEntity: {
        '@type': 'Person',
        name: PERSON_SCHEMA.name,
        url: PERSON_SCHEMA.url,
        image: PERSON_SCHEMA.image,
        jobTitle: PERSON_SCHEMA.jobTitle,
        description: PERSON_SCHEMA.description,
        sameAs: PERSON_SCHEMA.sameAs
      }
    };
  }

  if (config.schemaType === 'CollectionPage') {
    return {
      ...shared,
      about: [
        'Product Design',
        'Case Studies',
        'AI Product Design',
        'Fintech'
      ]
    };
  }

  return {
    ...shared,
    mainEntityOfPage: canonicalUrl
  };
}

function SeoHead() {
  const location = useLocation();

  useEffect(() => {
    const config = findSeoConfig(location.pathname);
    const canonicalPath = config.canonicalPath || config.path || location.pathname;
    const canonicalUrl = absoluteUrl(canonicalPath);
    const imageUrl = absoluteUrl(config.image || DEFAULT_IMAGE);
    const robots = config.robots || 'index, follow';

    document.title = config.title;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', config.description);
    upsertMeta('name', 'keywords', config.keywords || '');
    upsertMeta('name', 'author', 'Abdul-Rashid Lansah');
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'theme-color', '#111111');

    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', config.pageType || 'website');
    upsertMeta('property', 'og:title', config.title);
    upsertMeta('property', 'og:description', config.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', config.title);
    upsertMeta('name', 'twitter:description', config.description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertLink('canonical', canonicalUrl);

    upsertSchema('person', PERSON_SCHEMA);
    upsertSchema('page', getPageSchema(config, location.pathname, canonicalUrl));

    const breadcrumbs = getBreadcrumbs(location.pathname, config.title);
    if (breadcrumbs) {
      upsertSchema('breadcrumbs', breadcrumbs);
    } else {
      const existing = document.head.querySelector('script[data-seo-schema="breadcrumbs"]');
      if (existing) {
        existing.remove();
      }
    }

  }, [location.pathname]);

  return null;
}

export default SeoHead;
