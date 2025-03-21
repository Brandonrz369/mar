// Using standard img tags instead of Next.js Image
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';

export default function About() {
  const teamMembers = [
    {
      name: 'Management Team',
      role: 'Leadership',
      bio: 'Our management team brings decades of marine industry experience to ensure the highest quality service and customer satisfaction.',
      icon: '👨‍💼'
    },
    {
      name: 'Technical Staff',
      role: 'Marine Specialists',
      bio: 'Our skilled technicians are certified and experienced in all aspects of boat repair and maintenance to deliver the best results.',
      icon: '👨‍🔧'
    },
    {
      name: 'Support Team',
      role: 'Customer Service',
      bio: 'Our friendly support staff ensures a smooth experience from initial contact through project completion and beyond.',
      icon: '👩‍💼'
    }
  ];

  const milestones = [
    {
      year: '1964',
      title: 'Foundation',
      description: 'Marina Shipyard founded as a family-owned business dedicated to quality marine services.'
    },
    {
      year: '1980s',
      title: 'Expansion',
      description: 'Expanded facilities and service offerings to become a full-service marina and shipyard.'
    },
    {
      year: '1990s',
      title: 'Second Generation',
      description: 'The second generation of the family takes over leadership, continuing the tradition of excellence.'
    },
    {
      year: '2000s',
      title: 'Modernization',
      description: 'Updated equipment and facilities while maintaining our commitment to personal service.'
    },
    {
      year: 'Today',
      title: 'Third Generation',
      description: 'Now in its third generation of family ownership, combining tradition with modern techniques.'
    }
  ];

  return (
    <>
      <HeroSection 
        title="About Marina Shipyard"
        subtitle="A family-owned business serving the boating community with quality marine services since 1964."
        height="h-[70vh]"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Marina Shipyard has been family owned and operated since 1964, offering three generations of experience 
                in the marine service industry. What started as a small repair shop has grown into a full-service marina 
                and shipyard that serves hundreds of boat owners each year.
              </p>
              <p className="text-gray-600 mb-6">
                Customer Service and a Job Well Done are our greatest concerns. You can rest assured that when you place 
                your vessel in our care you will receive satisfaction in knowing the job will be done right the first time.
              </p>
              <p className="text-gray-600">
                Over the years, we've expanded our facilities and services while maintaining our commitment to quality 
                workmanship and exceptional customer service. Our team of experienced technicians and staff are dedicated 
                to providing the best possible experience for our clients.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/marinashipyard-scaled.jpg"
                alt="Marina Shipyard History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional marine services while maintaining the highest standards 
              of quality, integrity, and environmental responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality work on every project, large or small. 
                Our reputation depends on the quality of our service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our customers by exceeding expectations 
                and providing exceptional service at every step.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We're dedicated to environmentally responsible practices in all our operations to 
                protect our waterways and marine ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make Marina Shipyard the trusted choice for marine services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <span className="text-7xl">{member.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-gray-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our History</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Marina Shipyard has a rich history of serving the boating community since 1964.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white hidden md:block transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                    <p className="text-gray-200">{milestone.description}</p>
                  </div>
                  <div className="relative md:order-1">
                    <div className="absolute left-1/2 md:left-0 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-full md:-translate-y-1/2 hidden md:block">
                      <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center text-lg font-bold">{index + 1}</div>
                    </div>
                    <div className={`p-6 bg-white/10 backdrop-blur-sm rounded-lg ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="h-40 bg-white/5 flex items-center justify-center rounded">
                        <span className="text-5xl">
                          {index === 0 ? '🏢' : 
                           index === 1 ? '🔧' : 
                           index === 2 ? '👪' : 
                           index === 3 ? '🛠️' : '🚢'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Ready to Experience Our Service?"
        description="Contact us today to discuss your boat repair and maintenance needs with our experienced team."
        buttonText="Get in Touch"
        buttonLink="/contact"
        background="bg-gray-50"
        textColor="text-gray-900"
      />
    </>
  );
}