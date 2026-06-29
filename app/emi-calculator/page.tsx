import { Metadata } from 'next'
import EMICalculatorFull from '@/components/tools/EMICalculatorFull'

export const metadata: Metadata = {
  title: 'EMI Calculator | Growin Finance',
  description:
    'Calculate your loan EMI instantly. Use our free EMI calculator to plan your home loan, personal loan, business loan, or car loan repayments.',
}

export default function EMICalculatorPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2563EB 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">EMI Calculator</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Plan your loan repayments with our free, easy-to-use EMI calculator. Adjust the sliders
            to see instant results.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-gray-50 py-8">
        <EMICalculatorFull />
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How EMI is Calculated</h2>
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <p className="text-gray-700 mb-4">The EMI (Equated Monthly Installment) formula is:</p>
            <div
              className="inline-block rounded-xl px-8 py-4 text-white font-mono text-lg font-bold"
              style={{ backgroundColor: '#1B3F8B' }}
            >
              EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ - 1)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm text-gray-600">
              <div><span className="font-bold text-gray-900">P</span> = Principal loan amount</div>
              <div><span className="font-bold text-gray-900">r</span> = Monthly interest rate</div>
              <div><span className="font-bold text-gray-900">n</span> = Number of months</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
