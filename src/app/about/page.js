import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Marina Shipyard</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Serving the boating community with quality marine services since 1985.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Marina Shipyard was founded in 1985 by John and Sarah Martinez, two passionate boating enthusiasts with a vision to create a premier marine service center. What started as a small repair shop has grown into a full-service marina and shipyard that serves hundreds of boat owners each year.
              </p>
              <p className="mb-4">
                Over the years, we've expanded our facilities and services while maintaining our commitment to quality workmanship and exceptional customer service. Our team of experienced technicians and staff are dedicated to providing the best possible experience for our clients.
              </p>
              <p>
                Today, Marina Shipyard continues to be family-owned and operated, with the second generation of the Martinez family leading the way. We remain committed to our founding principles of integrity, quality, and customer satisfaction.
              </p>
            </div>
            <div className="h-96 relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/2024/03/marinashipyard-scaled.jpg"
                alt="Marina Shipyard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 relative overflow-hidden">
                <Image 
                  src="/images/2024/03/cleanmarine.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Martinez</h3>
              <p className="text-primary font-medium">Owner & General Manager</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 relative overflow-hidden">
                <Image 
                  src="/images/2024/03/cleanmarine.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Jessica Martinez</h3>
              <p className="text-primary font-medium">Operations Director</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 relative overflow-hidden">
                <Image 
                  src="/images/2024/03/cleanmarine.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Robert Johnson</h3>
              <p className="text-primary font-medium">Head Technician</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/2020/12/bg2.jpg"
            alt="Marina Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 text-center z-10 relative text-white">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            To provide exceptional marine services that exceed our customers' expectations while maintaining the highest standards of quality, integrity, and professionalism.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}