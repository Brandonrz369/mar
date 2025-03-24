import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import siteData from '@/lib/data';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = siteData.name,
  description = siteData.description,
  canonical,
  ogImage = "/images/marinashipyard-scaled.jpg",
  noIndex = false
}) => {
  // Format page title
  const pageTitle = title === siteData.name 
    ? `${siteData.name} - Professional Marine Services Since 1964` 
    : `${title} | ${siteData.name}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        {canonical && <meta property="og:url" content={canonical} />}
        
        {/* No index if specified */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/fbrfg/favicon-32x32.png" />
      </Head>
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;