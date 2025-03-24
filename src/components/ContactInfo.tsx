import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import siteData from '@/lib/data';

interface ContactInfoProps {
  showMap?: boolean;
  showTitle?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  showMap = true,
  showTitle = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {showTitle && (
        <div className="bg-primary text-white p-6">
          <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
          <p>We'd love to hear from you. Here's how you can reach us.</p>
        </div>
      )}
      
      <div className="p-6">
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
              <p className="mt-1 text-gray-600">
                {siteData.contact.address.full}
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FaPhone className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Phone</h4>
              <p className="mt-1 text-gray-600">
                <a 
                  href={`tel:${siteData.contact.phone.replace(/[^0-9]/g, '')}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {siteData.contact.phone}
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FaEnvelope className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Email</h4>
              <p className="mt-1 text-gray-600">
                <a 
                  href={`mailto:${siteData.contact.email}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {siteData.contact.email}
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <FaClock className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
              <p className="mt-1 text-gray-600">
                {siteData.hours.weekday}<br />
                {siteData.hours.weekend}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {showMap && (
        <div className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2777764762466!2d-118.1329092!3d33.7609047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd300906633d85%3A0x19d0b6abd3cba3c!2s6400%20Marina%20Dr%2C%20Long%20Beach%2C%20CA%2090803!5e0!3m2!1sen!2sus!4v1685564812345!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Marina Shipyard Location Map"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;