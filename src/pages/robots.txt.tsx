import { GetServerSideProps } from 'next';
import siteData from '@/lib/data';

const Robots = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = siteData.siteUrl || 'https://www.marinashipyard.com';
  
  // Generate robots.txt content
  const robots = `# www.robotstxt.org

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

  // Send text response
  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default Robots;