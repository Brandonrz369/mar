'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import siteData from '@/lib/data';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  boatType?: string;
  serviceType?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showBoatInfo?: boolean;
  showTitle?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Contact Us",
  subtitle = "Fill out the form below and we'll get back to you as soon as possible.",
  showBoatInfo = true,
  showTitle = true
}) => {
  // Form data state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    boatType: '',
    serviceType: ''
  });
  
  // Form validation and submission states
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  // Available services for dropdown
  const serviceTypes = siteData.services.map(service => service.title);

  // Effect for handling error reset on touch
  useEffect(() => {
    // Only validate fields that have been touched
    const validateTouchedFields = () => {
      const touchedErrors: FormErrors = {};
      
      if (touched.name && !formData.name.trim()) {
        touchedErrors.name = 'Name is required';
      }
      
      if (touched.email) {
        if (!formData.email.trim()) {
          touchedErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
          touchedErrors.email = 'Invalid email address';
        }
      }
      
      if (touched.phone && formData.phone.trim() && !/^[0-9]{10,}$/i.test(formData.phone.replace(/[^0-9]/g, ''))) {
        touchedErrors.phone = 'Please enter a valid phone number';
      }
      
      if (touched.message) {
        if (!formData.message.trim()) {
          touchedErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
          touchedErrors.message = 'Message is too short';
        }
      }
      
      setErrors(touchedErrors);
    };
    
    validateTouchedFields();
  }, [formData, touched]);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle field blur events
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Phone validation (optional but valid if provided)
    if (formData.phone.trim() && !/^[0-9]{10,}$/i.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message is too short';
    }
    
    // Set all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    // Set errors
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('submitting');
    
    try {
      // In a real implementation, this would be an API call
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        boatType: '',
        serviceType: ''
      });
      setTouched({});
      setStatus('success');
      
      // Auto-dismiss success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      
      // Auto-dismiss error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        {showTitle && (
          <SectionTitle 
            title={title}
            subtitle={subtitle}
            className="mb-8"
          />
        )}
        
        {status === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
            <strong className="font-bold">Thank you!</strong>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
            <strong className="font-bold">Error!</strong>
            <p>{errorMessage || 'Something went wrong. Please try again later.'}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="form-label">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${
                errors.name ? 'border-red-500' : touched.name ? 'border-green-500' : 'border-gray-300'
              }`}
              placeholder="Your name"
              disabled={status === 'submitting'}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="form-label">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${
                  errors.email ? 'border-red-500' : touched.email ? 'border-green-500' : 'border-gray-300'
                }`}
                placeholder="Your email"
                disabled={status === 'submitting'}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${
                  errors.phone ? 'border-red-500' : touched.phone && formData.phone ? 'border-green-500' : 'border-gray-300'
                }`}
                placeholder="Your phone number"
                disabled={status === 'submitting'}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <p id="phone-error" className="form-error">{errors.phone}</p>}
            </div>
          </div>
          
          {showBoatInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="boatType" className="form-label">
                  Boat Type (optional)
                </label>
                <input
                  type="text"
                  id="boatType"
                  name="boatType"
                  value={formData.boatType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-input"
                  placeholder="e.g. Sailboat, Powerboat, Yacht"
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="serviceType" className="form-label">
                  Service Needed (optional)
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-input"
                  disabled={status === 'submitting'}
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          <div>
            <label htmlFor="message" className="form-label">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={`form-input ${
                errors.message ? 'border-red-500' : touched.message ? 'border-green-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project or questions"
              disabled={status === 'submitting'}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status === 'submitting'}
              aria-label={status === 'submitting' ? 'Sending your message...' : 'Send message'}
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </div>
          
          <p className="text-gray-500 text-sm">
            <span className="text-red-500">*</span> Required fields
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;