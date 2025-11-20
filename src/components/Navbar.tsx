// File: src/components/Navbar.tsx
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Your Name/Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
            Calistus Mwonga
          </Link>
        </div>

        {/* Right Side: Navigation Links */}
        <ul className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-blue-400 transition-colors duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}