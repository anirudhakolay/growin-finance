import { Briefcase, Building2, Check } from 'lucide-react';

interface EligibilityCriteriaProps {
  eligibility: {
    salaried: string[]
    selfEmployed: string[]
  }
}

export default function EligibilityCriteria({ eligibility }: EligibilityCriteriaProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check if you qualify for this loan with our simple eligibility criteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Salaried */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Briefcase size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Salaried</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.salaried.map((criterion, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Self-Employed */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Building2 size={20} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Self-Employed / Business</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.selfEmployed.map((criterion, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
