'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const loanLinks = [
  { label: 'Home Loan', href: '/loans/home-loan' },
  { label: 'Loan Against Property', href: '/loans/loan-against-property' },
  { label: 'Personal Loan', href: '/loans/personal-loan' },
  { label: 'Business Loan', href: '/loans/business-loan' },
  { label: 'Working Capital Loan', href: '/loans/working-capital' },
  { label: 'Car Loan', href: '/loans/car-loan' },
];

const toolLinks = [
  { label: 'EMI Calculator', href: '/emi-calculator' },
  { label: 'Branch Locator', href: '/branch-locator' },
  { label: 'Compare Loans', href: '/compare' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';

  const isActiveMobile = (href: string) =>
    pathname === href
      ? 'text-blue-600 font-semibold bg-blue-50'
      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50';

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo_cropped.png"
              alt="Growin Finserv Logo"
              width={240}
              height={60}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive('/')}`}>
              Home
            </Link>

            {/* Loans Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLoansOpen(true)}
              onMouseLeave={() => setLoansOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  pathname.startsWith('/loans') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Loans
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${loansOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  loansOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {loanLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === link.href
                        ? 'text-blue-600 font-semibold bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  toolLinks.some((l) => pathname === l.href)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Tools
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  toolsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {toolLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === link.href
                        ? 'text-blue-600 font-semibold bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/blog" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive('/blog')}`}>
              Blog
            </Link>
            <Link href="/careers" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive('/careers')}`}>
              Careers
            </Link>
            <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>

          {/* Apply Now Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200 shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-150"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActiveMobile('/')}`}
          >
            Home
          </Link>

          {/* Mobile Loans Section */}
          <div>
            <button
              onClick={() => setLoansOpen(!loansOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
            >
              <span>Loans</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${loansOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {loansOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {loanLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-150 ${isActiveMobile(link.href)}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Tools Section */}
          <div>
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-150"
            >
              <span>Tools</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {toolLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-150 ${isActiveMobile(link.href)}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActiveMobile('/about')}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActiveMobile('/blog')}`}
          >
            Blog
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActiveMobile('/careers')}`}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActiveMobile('/contact')}`}
          >
            Contact
          </Link>

          <div className="pt-2 pb-1">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors duration-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
