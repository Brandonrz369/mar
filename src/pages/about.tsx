import Layout from '@/components/Layout';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import FeatureList from '@/components/FeatureList';
import TestimonialSection from '@/components/TestimonialSection';
import CtaSection from '@/components/CtaSection';
import siteData from '@/lib/data';

export default function About() {
  // Milestones for timeline
  const milestones = [
    {
      year: 1964,
      title: 'Founding',
      description: 'Marina Shipyard was founded as a family-owned boat repair business.'
    },
    {
      year: 1980,
      title: 'Expansion',
      description: 'Expanded facilities to offer more comprehensive marine services.'
    },
    {
      year: 1995,
      title: 'Second Generation',
      description: 'The second generation of the family took leadership of the business.'
    },
    {
      year: 2010,
      title: 'Modern Upgrades',
      description: 'Upgraded equipment and facilities to provide state-of-the-art services.'
    },
    {
      year: 2020,
      title: 'Third Generation',
      description: 'The third generation joined the family business, continuing the legacy.'
    }
  ];

  return (
    <Layout
      title={`About Us | ${siteData.name}`}
      description="Learn about Marina Shipyard's history, our team, and our commitment to quality marine services since 1964. Family owned and operated for three generations."
    >
      {/* Page Header */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">About Marina Shipyard</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Family owned and operated since 1964, providing quality marine services for three generations.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                tag="Since 1964"
                subtitle="A legacy of quality service and family tradition"
              />
              
              <p className="text-gray-600 mb-6">
                {siteData.founding.story}
              </p>
              
              <p className="text-gray-600 mb-6">
                With each generation, we've built upon our knowledge and expertise, while maintaining the same commitment to quality and customer satisfaction that has been our hallmark since the beginning.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary mb-6">
                <p className="italic text-primary font-medium">
                  {siteData.featuredNote}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/marinashipyard-scaled.jpg"
                  alt="Marina Shipyard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">{siteData.founding.year}</p>
                <p>Year Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do at Marina Shipyard"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From the materials we use to the workmanship we provide, excellence is our standard.
              </p>
            </div>
            
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Customer First</h3>
              <p className="text-gray-600">
                Our customers are at the center of everything we do. Your satisfaction is our ultimate measure of success.
              </p>
            </div>
            
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-6 mx-auto">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Experience</h3>
              <p className="text-gray-600">
                With three generations of expertise, we bring decades of knowledge and skill to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our History"
            subtitle="The journey of Marina Shipyard through the decades"
            centered
          />
          
          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-white z-10"></div>
                  
                  {/* Content */}
                  <div className="w-5/12"></div>
                  <div className={`w-5/12 p-6 bg-white rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <span className="text-accent font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <FeatureList 
        title="Why Customers Choose Us"
        subtitle="We've built our reputation on these core strengths"
      />
      
      {/* Testimonials */}
      <TestimonialSection 
        testimonials={siteData.testimonials}
        title="What Our Customers Say"
        subtitle="Hear from boat owners who have trusted Marina Shipyard with their vessels"
      />
      
      {/* Call to Action */}
      <CtaSection 
        title="Experience the Marina Shipyard Difference"
        description="Contact us today to learn how our experienced team can help with your boat repair and maintenance needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </Layout>
  );
}