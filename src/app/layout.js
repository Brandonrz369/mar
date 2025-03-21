import '@/styles/globals.css';

export const metadata = {
  title: 'Marina Shipyard - Marine Services & Boat Repair',
  description: 'Full-service marina and shipyard providing quality marine repair services, boat slips, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}