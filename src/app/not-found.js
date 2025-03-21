'use client';

import Link from 'next/link';

// Note: metadata must be in a separate file when using client components
// This will be handled by the root layout

export default function NotFound() {
  return (
    <div className="py-20 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="btn btn-primary inline-block px-6 py-3"
          >
            Return to Homepage
          </Link>
          <Link 
            href="/contact" 
            className="btn btn-secondary inline-block px-6 py-3"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}