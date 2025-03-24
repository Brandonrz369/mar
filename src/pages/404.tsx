import Link from 'next/link';
import Layout from '@/components/Layout';
import siteData from '@/lib/data';

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found"
      description="Sorry, the page you're looking for cannot be found."
      noIndex={true}
    >
      <section className="py-20 md:py-32 flex items-center min-h-[75vh]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 text-primary font-bold">
              <span className="block text-7xl mb-4">404</span>
              Page Not Found
            </h1>
            
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            
            <p className="text-xl mb-8 text-gray-600">
              Sorry, we couldn't find the page you were looking for. It might have been moved,
              deleted, or never existed in the first place.
            </p>
            
            <div className="mb-12 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              <div className="p-6 border border-gray-200 rounded-lg bg-white">
                <h2 className="text-xl font-bold mb-3 text-primary">Looking for our services?</h2>
                <p className="mb-4 text-gray-600">
                  Browse our complete list of marine services including boat repairs, haul and launch, 
                  bottom painting and more.
                </p>
                <Link 
                  href="/services" 
                  className="btn btn-primary"
                >
                  View Services
                </Link>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg bg-white">
                <h2 className="text-xl font-bold mb-3 text-primary">Need to contact us?</h2>
                <p className="mb-4 text-gray-600">
                  For quotes, questions or to schedule service, reach out to our team directly.
                </p>
                <Link 
                  href="/contact" 
                  className="btn btn-accent"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <Link 
              href="/"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}