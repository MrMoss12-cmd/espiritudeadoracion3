import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">LOGO</h2>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Address:</h3>
              <p>United States, California</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Contact:</h3>
              <p>1800 123 4567</p>
              <p>info@biblecollege.com</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-black mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-gray-900">Academics</Link></li>
              <li><Link href="/student-life" className="hover:text-gray-900">Student Life</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-black mb-4">Social</h3>
            <ul className="space-y-2">
              <li><Link href="https://facebook.com" className="hover:text-gray-900">Facebook</Link></li>
              <li><Link href="https://instagram.com" className="hover:text-gray-900">Instagram</Link></li>
              <li><Link href="https://twitter.com" className="hover:text-gray-900">Twitter</Link></li>
              <li><Link href="https://linkedin.com" className="hover:text-gray-900">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-black mb-4">Company</h3>
            <ul className="space-y-2">
              <li><p>© 2023 Hidefresh.</p></li>
              <li><p>All right reserved</p></li>
              <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}