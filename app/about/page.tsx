import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us | Growin Finserv',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className=" pb-8 md:pb-12">
        <div className="w-full">
          <div
            className="relative py-24 md:py-32 text-white text-center overflow-hidden shadow-xl"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: '#1B3F8B', opacity: 0.85 }} />
            <div className="relative z-10 px-4 md:px-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Growin Finserv</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Your trusted loan partner since 2016 — helping Mumbai families and businesses achieve their financial goals with transparency and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Team handshake - Growin Finserv"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1B3F8B' }}>Our Story</h2>
              <p className="text-gray-600 mb-4">
                Growin Finserv was established with a singular mission: to make home loans and financial products accessible and transparent for every family in Mumbai. We understand that securing financing is one of life's most significant decisions, and we are committed to guiding you every step of the way.
              </p>
              <p className="text-gray-600 mb-4">
                Founded by Gopal Pandey and Shivdhar Tiwari, two seasoned finance professionals with over 15 years of combined experience, Growin Finserv has emerged as a trusted name in Mumbai's mortgage and loan landscape. Identifying a gap where borrowers were often confused, underserved, and overpaying, they built this firm to simplify the lending process and prioritize client needs.
              </p>
              <p className="text-gray-600">
                Since 2016, we have empowered over 2,000 families and businesses to secure optimal financing—from first-time homebuyers to expanding enterprises. Our dedicated team partners with 15+ leading Banks and NBFCs to negotiate the best rates, ensure rapid approvals, and deliver a seamless borrowing experience.
              </p>
            </div>
            {/* Right: Stats Card */}
            <div
              className="rounded-2xl p-8 text-white shadow-xl"
              style={{ backgroundColor: '#1B3F8B' }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Our Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">2000+</div>
                  <div className="text-blue-100 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">₹300Cr+</div>
                  <div className="text-blue-100 text-sm">Loan Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">8+</div>
                  <div className="text-blue-100 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-orange-400 mb-2">15+</div>
                  <div className="text-blue-100 text-sm">Bank and NBFCs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Partners */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#1B3F8B' }}>
            Meet Our Founders
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Gopal Pandey */}
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
              <div className="relative w-full md:w-2/5 h-[400px] md:h-[550px]">
                <Image
                  src="/gopal-pandey.jpg"
                  alt="Gopal Pandey"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs tracking-wider mb-6 self-start uppercase">
                  Co-Founder &amp; Partner
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Gopal Pandey</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                  10+ years of expertise in mortgage advisory and home loans. Gopal has helped hundreds of families navigate the complexities of property financing with personalised guidance and deep lender relationships.
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Get in Touch</p>
                  <a
                    href="tel:9769603074"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-blue-700 hover:text-orange-500 transition-colors"
                  >
                    <span>📞</span> 9769603074
                  </a>
                </div>
              </div>
            </div>

            {/* Shivdhar Tiwari */}
            <div className="flex flex-col md:flex-row-reverse gap-8 bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
              <div className="relative w-full md:w-2/5 h-[400px] md:h-[550px]">
                <Image
                  src="/shivdhar-tiwari.jpg"
                  alt="Shivdhar Tiwari"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs tracking-wider mb-6 self-start uppercase">
                  Co-Founder &amp; Partner
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Shivdhar Tiwari</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                  8+ years of experience in business and personal loan solutions. Shivdhar specialises in structuring loan products for entrepreneurs and self-employed professionals, ensuring fast approvals and competitive rates.
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Get in Touch</p>
                  <a
                    href="tel:8766507422"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-blue-700 hover:text-orange-500 transition-colors"
                  >
                    <span>📞</span> 8766507422
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3F8B' }}>
            Why Choose Growin Finserv?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>Quick Approvals</h3>
              <p className="text-gray-600 text-sm">
                Get your loan approved in as little as 48 hours. We streamline paperwork and liaise directly with lenders to speed up the process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>15+ Bank Partners</h3>
              <p className="text-gray-600 text-sm">
                We work with 15+ leading banks and NBFCs so you always get the most competitive interest rates and terms available in the market.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                Free consultation from certified loan advisors. We explain every option clearly and help you choose the product that fits your needs and budget.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B3F8B' }}>Doorstep Service</h3>
              <p className="text-gray-600 text-sm">
                We come to you. Our team handles all paperwork at your home or office so you never have to visit a bank or wait in long queues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: '#1B3F8B' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission &amp; Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-100">
                To empower every Indian family and business with transparent, accessible, and affordable financial solutions — delivered with honesty, speed, and genuine care for our clients' futures.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-blue-100">
                To become Mumbai's most trusted financial services partner — a company that homebuyers, entrepreneurs, and families turn to first when they need financial guidance and loan solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1B3F8B' }}>Ready to Apply?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Take the first step toward your financial goals. Get a free consultation from our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="/emi-calculator" variant="outline" size="lg">
              EMI Calculator
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
