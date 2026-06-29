'use client'

import { useState } from 'react'

interface FAQ {
  q: string
  a: string
}

interface LoanFAQProps {
  faqs: FAQ[]
}

export default function LoanFAQ({ faqs }: LoanFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We have answers to help you make an informed decision.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg transition-colors duration-200"
                  style={{ backgroundColor: openIndex === index ? '#2563EB' : '#1B3F8B' }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 bg-blue-50">
                  <p className="text-gray-700 leading-relaxed pt-3 border-t border-blue-100">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
