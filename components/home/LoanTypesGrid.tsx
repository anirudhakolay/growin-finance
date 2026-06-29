import Link from 'next/link';
import { Home, Building, User, Briefcase, Car, type LucideIcon } from 'lucide-react';
import { loans } from '@/lib/data/loans';

const loanIcons: Record<string, LucideIcon> = {
  'home-loan': Home,
  'loan-against-property': Building,
  'personal-loan': User,
  'business-loan': Briefcase,
  'car-loan': Car,
};

const loanColors: Record<string, string> = {
  'home-loan': '#1B3F8B',
  'loan-against-property': '#7C3AED',
  'personal-loan': '#0891B2',
  'business-loan': '#065F46',
  'car-loan': '#B45309',
};

export default function LoanTypesGrid() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-50" style={{ opacity: 0.96 }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3" style={{ color: '#1B3F8B' }}>
            Our Loan Products
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tailored financial solutions for every need — from your dream home to your growing business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan) => {
            const Icon = loanIcons[loan.slug] ?? Home;
            const color = loanColors[loan.slug] ?? '#1B3F8B';
            return (
              <div
                key={loan.id}
                className="bg-white rounded-2xl shadow-md p-7 border border-transparent hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={28} color={color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{loan.name}</h3>
                <div className="mb-3">
                  <span
                    className="text-xs rounded-full px-3 py-1 font-semibold"
                    style={{ backgroundColor: '#EFF6FF', color: '#1B3F8B' }}
                  >
                    From {loan.interestRate}
                  </span>
                </div>
                <p className="text-gray-500 text-sm flex-1 mb-5 leading-relaxed">{loan.tagline}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={`/loans/${loan.slug}`}
                    className="font-semibold text-sm transition-colors duration-200 hover:underline"
                    style={{ color: '#2563EB' }}
                  >
                    Know More →
                  </Link>
                  <span className="text-xs text-gray-400">Up to {loan.maxAmount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
