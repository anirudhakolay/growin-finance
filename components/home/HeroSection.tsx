'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, IndianRupee, CalendarCheck, Building2, Trophy, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const loanSlides = [
  { slug: 'home-loan', label: 'Home Loan', caption: 'Your dream home awaits · Best rates', src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80' },
  { slug: 'loan-against-property', label: 'Loan Against Property', caption: 'Unlock your property value · Any purpose', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
  { slug: 'personal-loan', label: 'Personal Loan', caption: 'Instant funds · No collateral needed', src: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80' },
  { slug: 'business-loan', label: 'Business Loan', caption: 'Fuel your growth · Fast approvals', src: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&q=80' },
  { slug: 'car-loan', label: 'Car Loan', caption: 'Drive your dream car · Quick disbursal', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80' },
];

export default function HeroSection() {
  const [income, setIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [submitted, setSubmitted] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % loanSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  function handleEligibilityCheck(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="relative min-h-[90vh] flex items-center py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(27,63,139,0.96) 0%, rgba(37,99,235,0.88) 60%, rgba(37,99,235,0.75) 100%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            Mumbai&apos;s Trusted Loan Partner
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Growing your Dreams,
            <br />
            <span className="text-orange-500">Financing your Future</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-lg">
            Quick, hassle-free loans tailored for Mumbai residents. From home loans to personal
            loans — we&apos;ve got you covered with the best rates and fastest approvals.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="primary" href="/contact">
              Apply Now
            </Button>
            <a
              href="/emi-calculator"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200"
            >
              Calculate EMI
            </a>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { Icon: Users, number: '2000+', label: 'Happy Customers' },
              { Icon: IndianRupee, number: '₹300Cr+', label: 'Disbursed' },
              { Icon: CalendarCheck, number: '8+', label: 'Years Experience' },
              { Icon: Building2, number: '15+', label: 'Bank and NBFCs' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/20 rounded-xl p-3 text-center"
              >
                <div className="flex justify-center mb-2">
                  <stat.Icon size={22} className="text-orange-400" />
                </div>
                <div className="text-xl font-bold">{stat.number}</div>
                <div className="text-xs text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Quick Eligibility Check */}
        <div className="hidden lg:block">
          <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shadow-xl">
            {loanSlides.map((slide, i) => (
              <div
                key={slide.slug}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === slideIndex ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">{loanSlides[slideIndex].label}</p>
              <p className="text-blue-200 text-sm">{loanSlides[slideIndex].caption}</p>
            </div>
            <div className="absolute bottom-3 right-4 flex gap-1.5">
              {loanSlides.map((_, i) => (
                <span
                  key={i}
                  className="block h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === slideIndex ? 20 : 6, backgroundColor: i === slideIndex ? '#fff' : 'rgba(255,255,255,0.4)' }}
                />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Eligibility Check</h2>
            <p className="text-gray-500 text-sm mb-6">Find out if you qualify in seconds</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <p className="text-green-700 font-semibold text-lg">
                  You may be eligible!
                </p>
                <p className="text-green-600 text-sm mt-2">
                  Our team will reach out to you with the best offers.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-blue-600 underline"
                >
                  Check again
                </button>
              </div>
            ) : (
              <form onSubmit={handleEligibilityCheck} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income (₹)
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="e.g. 50000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount Required (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="e.g. 500000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Salaried</option>
                    <option>Self-Employed</option>
                    <option>Business Owner</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: '#1B3F8B' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor = '#163272')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor = '#1B3F8B')
                  }
                >
                  Check Eligibility
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
