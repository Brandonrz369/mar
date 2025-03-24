import { GetServerSideProps } from 'next';
import siteData from '@/lib/data';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = siteData.siteUrl || 'https://www.marinashipyard.com';
  
  // Define all pages
  const pages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/gallery',
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `;
        })
        .join('')}
    </urlset>
  `;

  // Send XML response
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;