const DEFAULT_WEBAPP_URL = 'https://app.beatnow.app/register';
const ALLOWED_WEBAPP_HOSTS = new Set(['app.beatnow.app', 'localhost', '127.0.0.1']);

function getWebappUrl(): string {
  const configuredUrl = import.meta.env.VITE_WEBAPP_URL?.trim();

  if (!configuredUrl) return DEFAULT_WEBAPP_URL;

  try {
    const url = new URL(configuredUrl);
    const isLocalDevelopment = import.meta.env.DEV && (url.protocol === 'http:' || url.protocol === 'https:');
    const isProductionApp = url.protocol === 'https:' && url.hostname === 'app.beatnow.app';

    if (!ALLOWED_WEBAPP_HOSTS.has(url.hostname) || (!isLocalDevelopment && !isProductionApp)) {
      return DEFAULT_WEBAPP_URL;
    }

    return url.toString();
  } catch {
    return DEFAULT_WEBAPP_URL;
  }
}

export const WEBAPP_URL = getWebappUrl();
