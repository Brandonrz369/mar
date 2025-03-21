import siteMetadata from '@/lib/metadata';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/contact',
  ];

  const sitemap = routes.map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return sitemap;
}