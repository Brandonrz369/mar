import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServiceList from '@/components/ServiceList';
import FeatureList from '@/components/FeatureList';
import TestimonialSection from '@/components/TestimonialSection';
import SpecialOfferSection from '@/components/SpecialOfferSection';
import CtaSection from '@/components/CtaSection';
import siteData from '@/lib/data';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServiceList 
        services={siteData.services}
        limit={3}
      />
      
      {/* Special Offer Section */}
      <SpecialOfferSection />
      
      {/* Why Choose Us */}
      <FeatureList />
      
      {/* Testimonials */}
      <TestimonialSection 
        testimonials={siteData.testimonials}
      />
      
      {/* Call to Action */}
      <CtaSection />
    </Layout>
  );
}