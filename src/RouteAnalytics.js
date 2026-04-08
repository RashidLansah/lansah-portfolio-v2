import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent, trackPageView } from './analytics';

function getCaseStudySlug(pathname) {
  if (
    pathname.includes('-case-study') ||
    pathname === '/case-study' ||
    pathname === '/case-study-old'
  ) {
    return pathname.replace(/^\//, '') || 'case-study';
  }

  return null;
}

function RouteAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path, document.title);

    const caseStudySlug = getCaseStudySlug(location.pathname);
    if (caseStudySlug) {
      trackEvent('case_study_view', {
        case_study_slug: caseStudySlug
      });
    }
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a');

      if (!link) {
        return;
      }

      const href = link.getAttribute('href') || '';
      const absoluteHref = link.href || href;
      const linkText = (link.textContent || '').trim().slice(0, 100);

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', {
          link_text: linkText,
          destination: href
        });
        return;
      }

      if (absoluteHref.includes('calendly.com')) {
        trackEvent('schedule_call_click', {
          link_text: linkText || 'Schedule Call',
          destination: absoluteHref
        });
        return;
      }

      if (absoluteHref.includes('linkedin.com')) {
        trackEvent('social_click', {
          social_platform: 'linkedin',
          link_text: linkText || 'LinkedIn',
          destination: absoluteHref
        });
        return;
      }

      if (absoluteHref.includes('github.com')) {
        trackEvent('social_click', {
          social_platform: 'github',
          link_text: linkText || 'GitHub',
          destination: absoluteHref
        });
        return;
      }

      if (absoluteHref.includes('medium.com')) {
        trackEvent('social_click', {
          social_platform: 'medium',
          link_text: linkText || 'Medium',
          destination: absoluteHref
        });
        return;
      }

      const url = new URL(absoluteHref, window.location.origin);
      const caseStudySlug = getCaseStudySlug(url.pathname);

      if (caseStudySlug) {
        trackEvent('case_study_click', {
          case_study_slug: caseStudySlug,
          link_text: linkText
        });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

export default RouteAnalytics;
