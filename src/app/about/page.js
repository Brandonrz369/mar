import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Marina Shipyard</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Serving the boating community with quality marine services since 1964.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Marina Shipyard has been family owned and operated since 1964, offering three generations of experience in 
                the marine service industry. What started as a small repair shop has grown into a full-service marina and 
                shipyard that serves hundreds of boat owners each year.
              </p>
              <p className="mb-4">
                Customer Service and a Job Well Done are our greatest concerns. You can rest assured that when you place 
                your vessel in our care you will receive satisfaction in knowing the job will be done right the first time.
              </p>
              <p className="mb-4">
                Over the years, we've expanded our facilities and services while maintaining our commitment to quality 
                workmanship and exceptional customer service. Our team of experienced technicians and staff are dedicated 
                to providing the best possible experience for our clients.
              </p>
              <p>
                Today, Marina Shipyard continues its tradition of excellence, with the family's next generation leading 
                the way. We remain committed to our founding principles of integrity, quality, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg">
              <span className="text-6xl">🚢</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-primary text-white mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍✈️
              </div>
              <h3 className="text-xl font-semibold">Management Team</h3>
              <p className="text-primary font-medium">Owner & General Management</p>
              <p className="mt-3 text-gray-600">
                Our management team brings decades of marine industry experience to ensure the highest quality service.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-primary text-white mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍🔧
              </div>
              <h3 className="text-xl font-semibold">Technical Staff</h3>
              <p className="text-primary font-medium">Marine Technicians</p>
              <p className="mt-3 text-gray-600">
                Our skilled technicians are certified and experienced in all aspects of boat repair and maintenance.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-primary text-white mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold">Support Team</h3>
              <p className="text-primary font-medium">Customer Service</p>
              <p className="mt-3 text-gray-600">
                Our friendly support staff ensures a smooth experience from initial contact through project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>We're committed to delivering the highest quality work on every project, large or small.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>We operate with honesty and transparency in all our business practices.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💚</div>
              <h3 className="text-xl font-semibold mb-2">Environmental Care</h3>
              <p>We're dedicated to environmentally responsible practices in all our operations.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}