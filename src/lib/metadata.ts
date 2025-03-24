interface Social {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

interface Contact {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  googleMapsUrl?: string;
}

interface Hours {
  weekday: string;
  weekend: string;
  holiday?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  logo: {
    default: string;
    alt: string;
  };
  social: Social;
  contact: Contact;
  hours: Hours;
  foundingYear: number;
}

const metadata: SiteMetadata = {
  title: 'Marina Shipyard - Professional Marine Services Since 1964',
  description: 'Marina Shipyard offers quality boat repair, maintenance, and marine services. Family owned and operated for three generations since 1964. Serving Long Beach, CA.',
  siteUrl: 'https://www.marinashipyard.com',
  logo: {
    default: '/images/cleanmarine.png',
    alt: 'Marina Shipyard Logo',
  },
  social: {
    facebook: 'https://www.facebook.com/marina.shipyard',
  },
  contact: {
    phone: '(562) 594-0995',
    email: 'info@marinashipyard.com',
    address: {
      street: '6400 Marina Drive',
      city: 'Long Beach',
      state: 'CA',
      zip: '90803',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Marina+Shipyard+6400+Marina+Drive+Long+Beach+CA+90803',
  },
  hours: {
    weekday: 'Monday-Saturday: 8:00 AM - 5:00 PM',
    weekend: 'Sunday: Closed',
  },
  foundingYear: 1964,
};

export default metadata;