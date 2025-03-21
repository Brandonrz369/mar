import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with us using the form below or contact information.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="bg-primary text-white font-medium py-2 px-6 rounded hover:bg-opacity-90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-700">Marina Shipyard<br/>6400 Marina Drive<br/>Long Beach, CA 90803</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-700">(562) 594-0995</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-700">info@marinashipyard.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hours</h3>
                  <div className="text-gray-700">
                    <p className="mb-1"><span className="font-medium">Monday-Friday:</span> 8am-5pm</p>
                    <p className="mb-1"><span className="font-medium">Saturday:</span> 8am-5pm</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Link href="https://www.facebook.com/marina.shipyard" target="_blank" className="text-2xl">📱</Link>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="bg-gray-200 h-80 flex items-center justify-center rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.963259763726!2d-118.13248388479652!3d33.75787168068711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31c1a1e0bc33%3A0x770ce3306d3c9604!2s6400%20Marina%20Dr%2C%20Long%20Beach%2C%20CA%2090803!5e0!3m2!1sen!2sus!4v1621517462123!5m2!1sen!2sus" 
                    className="w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Marina Shipyard Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Request an Estimate</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Need a quote for your boat repair or maintenance project? Fill out our contact form or give us a call 
            to discuss your specific needs and receive a detailed estimate.
          </p>
          <a href="tel:5625940995" className="bg-white text-primary font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            Call Us Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}