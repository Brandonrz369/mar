export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: Address;
  googleMapsUrl: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  weekday: string;
  weekend: string;
}

export interface LogoInfo {
  default: string;
  alt: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  featured?: boolean;
}

export interface TestimonialInfo {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar?: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

export interface SiteData {
  name: string;
  title: string;
  description: string;
  logo: LogoInfo;
  domain: string;
  contact: ContactInfo;
  hours: BusinessHours;
  social: SocialLinks;
  founding: {
    year: number;
    story: string;
  };
  services: ServiceInfo[];
  testimonials: TestimonialInfo[];
  gallery: GalleryImage[];
  featuredNote: string;
  highlights: string[];
}

const siteData: SiteData = {
  name: "Marina Shipyard",
  title: "Marina Shipyard - Professional Marine Services Since 1964",
  description: "Marina Shipyard offers quality boat repair, maintenance, and marine services. Family owned and operated for three generations since 1964. Serving Long Beach, CA.",
  logo: {
    default: "/images/cleanmarine.png",
    alt: "Marina Shipyard Logo",
  },
  domain: "marinashipyard.com",
  contact: {
    phone: "(562) 594-0995",
    email: "info@marinashipyard.com",
    address: {
      street: "6400 Marina Drive",
      city: "Long Beach",
      state: "CA",
      zip: "90803",
      full: "6400 Marina Drive, Long Beach, CA 90803"
    },
    googleMapsUrl: "https://maps.google.com/?q=Marina+Shipyard+6400+Marina+Drive+Long+Beach+CA+90803"
  },
  hours: {
    monday: "8:00 AM - 5:00 PM",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "Closed",
    weekday: "Monday-Saturday: 8:00 AM - 5:00 PM",
    weekend: "Sunday: Closed",
  },
  social: {
    facebook: "https://facebook.com/marina.shipyard",
  },
  founding: {
    year: 1964,
    story: "Marina Shipyard offers you three generations of experience and has been family owned and operated since 1964. Customer Service and a Job Well Done are our greatest concerns. You can rest assured that when you place your vessel in our care you will receive satisfaction in knowing the job will be done right the first time."
  },
  services: [
    {
      id: "boat-repairs",
      title: "Boat Repairs",
      description: "Professional boat repair services by our experienced technicians. We handle everything from minor fixes to major overhauls.",
      image: "/images/marinashipyard-scaled.jpg",
      featured: true
    },
    {
      id: "haul-launch",
      title: "Haul and Launch",
      description: "Safe and efficient haul out and launch services for boats of all sizes. Our specialized equipment ensures your vessel is handled with care.",
      image: "/images/bg4.jpg"
    },
    {
      id: "bottom-painting",
      title: "Bottom Painting",
      description: "High-quality bottom painting services to protect your vessel from marine growth and corrosion. We use environmentally friendly anti-fouling paints.",
      image: "/images/bg2.jpg"
    },
    {
      id: "mechanical-services",
      title: "Mechanical Services",
      description: "Expert diagnostics and repair for all boat engine types. Our certified mechanics will keep your boat running smoothly.",
      image: "/images/bg4.jpg"
    },
    {
      id: "electrical-work",
      title: "Electrical Work",
      description: "Complete electrical system services from troubleshooting to full rewiring. We ensure your boat's electrical systems are safe and functional.",
      image: "/images/marinashipyard-scaled.jpg"
    },
    {
      id: "hull-maintenance",
      title: "Hull Maintenance",
      description: "Regular maintenance and repair services for your boat's hull. We fix cracks, damages, and ensure structural integrity.",
      image: "/images/bg2.jpg"
    }
  ],
  testimonials: [
    {
      id: "testimonial-1",
      name: "Michael Thompson",
      title: "Boat Owner",
      quote: "Marina Shipyard did an excellent job repairing my boat's hull. The work was done quickly and professionally. I highly recommend their services!",
      rating: 5
    },
    {
      id: "testimonial-2",
      name: "Sarah Johnson",
      title: "Yacht Owner",
      quote: "I've been bringing my vessel to Marina Shipyard for over 10 years. Their team is knowledgeable, efficient, and always delivers quality work.",
      rating: 5
    },
    {
      id: "testimonial-3",
      name: "Robert Davis",
      title: "Sailboat Enthusiast",
      quote: "The haul out and painting service was excellent. My boat looks brand new, and the team was very professional throughout the process.",
      rating: 5
    }
  ],
  gallery: [
    {
      id: "gallery-1",
      src: "/images/marinashipyard-scaled.jpg",
      alt: "Marina Shipyard Facility",
      category: "Facility",
      featured: true
    },
    {
      id: "gallery-2",
      src: "/images/bg4.jpg",
      alt: "Boat Repair Work",
      category: "Repairs"
    },
    {
      id: "gallery-3",
      src: "/images/bg2.jpg",
      alt: "Bottom Painting Service",
      category: "Painting"
    },
    {
      id: "gallery-4",
      src: "/images/2024/02/sign.png",
      alt: "Marina Shipyard Sign",
      category: "Facility"
    }
  ],
  featuredNote: "A note to all of our customers, vendors, tenants and business partners of Marina Shipyard... Jerry Tretter would have wanted us, the Marina Shipyard Family, to carry on his family's legacy with 'business as usual' so that is exactly what we are doing!",
  highlights: [
    "Family owned since 1964",
    "Three generations of experience",
    "Quality workmanship guaranteed",
    "Full-service facility",
    "Customer satisfaction priority"
  ]
};

export default siteData;