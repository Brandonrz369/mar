import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteMetadata from '@/lib/metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.siteName }],
  creator: siteMetadata.siteName,
  publisher: siteMetadata.siteName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: siteMetadata.type,
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteMetadata.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.twitterHandle,
    images: [`${siteMetadata.siteUrl}/images/og-image.jpg`],
  },
  icons: {
    icon: '/images/fbrfg/favicon.ico',
    shortcut: '/images/fbrfg/favicon-16x16.png',
    apple: '/images/fbrfg/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}