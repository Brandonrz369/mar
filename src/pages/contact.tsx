import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import CtaSection from '@/components/CtaSection';
import siteData from '@/lib/data';

export default function Contact() {
  return (
    <Layout
      title={`Contact Us | ${siteData.name}`}
      description="Contact Marina Shipyard for all your boat repair and maintenance needs. Request a quote, schedule service, or inquire about our marine services."
    >
      {/* Page Header */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help with all your boating needs. Reach out to our team for quotes, questions, or to schedule service.
          </p>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                className="mb-8"
              />
              <ContactForm showTitle={false} />
            </div>
            
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Inspection CTA */}
      <CtaSection 
        title="Ask About Our Free Mechanical Inspection"
        description="Contact us today to learn more about our complimentary inspection service for your boat."
        primaryButtonText="Schedule Now"
        primaryButtonLink="#"
        bgColor="accent"
      />
    </Layout>
  );
}