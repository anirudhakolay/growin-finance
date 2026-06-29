'use client'

import { LoanFeature } from '@/lib/data/loans'

interface FeaturesGridProps {
  features: LoanFeature[]
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about what makes this loan right for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-t-blue-600 transition-all duration-300"
              style={{ borderTopWidth: '3px', borderTopColor: 'transparent' }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderTopColor = '#2563EB'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderTopColor = 'transparent'
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
