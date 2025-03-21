import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    
    // Basic validation
    const errors: Record<string, string> = {};
    
    if (!formData.name || formData.name.trim() === '') {
      errors.name = 'Name is required';
    }
    
    if (!formData.email || formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message || formData.message.trim() === '') {
      errors.message = 'Message is required';
    }
    
    // Return errors if validation fails
    if (Object.keys(errors).length > 0) {
      return NextResponse.json<ContactResponse>({ 
        success: false, 
        message: 'Please correct the errors in the form.',
        errors 
      }, { status: 400 });
    }
    
    // In a real application, you would send an email or store the contact in a database here
    
    // Return success response
    return NextResponse.json<ContactResponse>({ 
      success: true, 
      message: 'Your message has been received. We will contact you soon!' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json<ContactResponse>({ 
      success: false, 
      message: 'An error occurred while processing your request. Please try again.' 
    }, { status: 500 });
  }
}