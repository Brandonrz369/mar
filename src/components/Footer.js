const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Marina Shipyard</h3>
            <p className="mb-2">123 Harbor Drive</p>
            <p>Marina Bay, CA 90210</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p className="mb-2">Email: info@marinashipyard.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="mb-1">Monday-Friday: 8am-6pm</p>
            <p className="mb-1">Saturday: 9am-4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-blue-700 pt-6">
          <p>&copy; {new Date().getFullYear()} Marina Shipyard. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Website designed by Brandon | <a href="https://github.com/Brandonrz369/mar" className="underline hover:text-gray-300">View Source</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;