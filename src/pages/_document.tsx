import { Html, Head, Main, NextScript } from 'next/document';
import metadata from '@/lib/metadata';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Character Set */}
        <meta charSet="utf-8" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/fbrfg/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/fbrfg/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/fbrfg/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/fbrfg/favicon-16x16.png" />
        
        {/* SEO tags */}
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content="Marina Shipyard" />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:image" content={`${metadata.siteUrl}/images/marinashipyard-scaled.jpg`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${metadata.siteUrl}/images/marinashipyard-scaled.jpg`} />
        
        {/* Preconnect to domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Web Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}