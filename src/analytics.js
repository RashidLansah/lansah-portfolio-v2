export const GA_MEASUREMENT_ID = 'G-F56SNR560B';

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

export function trackPageView(path, title) {
  if (!hasGtag()) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    send_to: GA_MEASUREMENT_ID
  });
}

export function trackEvent(eventName, params = {}) {
  if (!hasGtag()) {
    return;
  }

  window.gtag('event', eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...params
  });
}
