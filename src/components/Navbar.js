import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-primary text-white p-4 md:p-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <Image 
            src="/images/2024/03/cleanmarine.png"
            alt="Marina Shipyard"
            width={180}
            height={60}
            className="mr-2"
          />
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-6">
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