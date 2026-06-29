import Image from 'next/image'
import Button from '@/components/ui/Button'
import { LoanData } from '@/lib/data/loans'

const loanImages: Record<string, string> = {
  'home-loan': 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80',
  'loan-against-property': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  'personal-loan': 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1920&q=80',
  'business-loan': 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1920&q=80',
  'car-loan': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80',
}

interface LoanHeroProps {
  loan: LoanData
}

export default function LoanHero({ loan }: LoanHeroProps) {
  const bgImage = loanImages[loan.slug];

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : { background: 'linear-gradient(135deg, #1B3F8B 0%, #2563EB 100%)' }}
    >
      {bgImage && <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(27,63,139,0.92) 0%, rgba(37,99,235,0.85) 100%)' }} />}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-blue-200">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><span className="text-blue-300">/</span></li>
            <li><a href="/loans" className="hover:text-white transition-colors">Loans</a></li>
            <li><span className="text-blue-300">/</span></li>
            <li className="text-white font-medium">{loan.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Interest Rate Badge */}
            <div className="inline-flex items-center mb-4">
              <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                Starting @ {loan.interestRate}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {loan.name}
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {loan.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="white" size="lg" href="/contact">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" href="/emi-calculator">
                Calculate EMI
              </Button>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="hidden lg:block">
            {loanImages[loan.slug] && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 shadow-xl">
                <Image
                  src={loanImages[loan.slug]}
                  alt={loan.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/20" />
              </div>
            )}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Loan at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Rate of Interest</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.interestRate}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Max Amount</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.maxAmount}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Max Tenure</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.tenure}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Processing Fee</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.processingFee}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
