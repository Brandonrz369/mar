import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white p-4 md:p-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between w-full md:w-auto">
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
            Marina Shipyard
          </Link>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row flex-wrap md:justify-center md:space-x-6 space-y-3 md:space-y-0">
            <li><Link href="/" className="hover:underline font-medium">Home</Link></li>
            <li><Link href="/services" className="hover:underline font-medium">Services</Link></li>
            <li><Link href="/about" className="hover:underline font-medium">About</Link></li>
            <li><Link href="/gallery" className="hover:underline font-medium">Gallery</Link></li>
            <li><Link href="/contact" className="hover:underline font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;