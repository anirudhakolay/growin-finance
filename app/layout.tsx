import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Growin Finserv | Trusted Loan Partner & Financial Services in Mumbai',
  description:
    "Growin Finserv is Mumbai's most trusted loan company offering home loans, personal loans, business loans, and more. Get approved in 48 hours with competitive interest rates.",
  keywords: 'Growin Finserv, growin finserv, finance, loan, business loans, personal loans, home loans, Mumbai, fast loan approval, financial services India',
  authors: [{ name: 'Growin Finserv' }],
  openGraph: {
    title: 'Growin Finserv | Trusted Loan Partner in Mumbai',
    description: "Growin Finserv is Mumbai's most trusted loan company offering home loans, personal loans, and business loans.",
    url: 'https://www.growinfinserv.com',
    siteName: 'Growin Finserv',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growin Finserv | Trusted Loan Partner',
    description: "Mumbai's most trusted loan company. Get approved in 48 hours.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Picture1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Growin Finserv',
    image: 'https://www.growinfinserv.com/Picture1.png',
    '@id': 'https://www.growinfinserv.com',
    url: 'https://www.growinfinserv.com',
    telephone: '+919876543210', // User should update this
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mumbai, Maharashtra',
      addressLocality: 'Mumbai',
      addressRegion: 'MH',
      postalCode: '400001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0760,
      longitude: 72.8777
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.facebook.com/growinfinserv',
      'https://www.linkedin.com/company/growinfinserv',
      'https://twitter.com/growinfinserv',
      'https://www.instagram.com/growinfinserv'
    ]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* JSON-LD Structured Data for Local Business and Financial Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
