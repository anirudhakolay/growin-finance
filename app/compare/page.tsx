'use client'

import { useState, useMemo } from 'react'
import { loans, LoanData } from '@/lib/data/loans'
import { formatCurrency, calculateEMI } from '@/lib/utils'

// For comparison EMI: ₹10L principal, 10 years (120 months), using each loan's defaultRate
const COMPARE_PRINCIPAL = 1000000
const COMPARE_TENURE = 120

function parseRate(rateStr: string): number {
  const match = rateStr.match(/[\d.]+/)
  return match ? parseFloat(match[0]) : 0
}

function parseAmount(amountStr: string): number {
  // e.g. "₹5 Crore", "₹50 Lakh", "₹75,000"
  const str = amountStr.replace(/[₹,\s]/g, '')
  if (/crore/i.test(str)) return parseFloat(str) * 10000000
  if (/lakh/i.test(str)) return parseFloat(str) * 100000
  return parseFloat(str) || 0
}

type ColorClass = 'text-green-600' | 'text-red-600' | 'text-gray-900'

function rateColor(a: number, b: number, isA: boolean): ColorClass {
  if (a === b) return 'text-gray-900'
  if (isA) return a < b ? 'text-green-600' : 'text-red-600'
  return b < a ? 'text-green-600' : 'text-red-600'
}

function amountColor(a: number, b: number, isA: boolean): ColorClass {
  if (a === b) return 'text-gray-900'
  if (isA) return a > b ? 'text-green-600' : 'text-red-600'
  return b > a ? 'text-green-600' : 'text-red-600'
}

export default function ComparePage() {
  const [slug1, setSlug1] = useState('home-loan')
  const [slug2, setSlug2] = useState('personal-loan')

  const loan1 = useMemo(() => loans.find(l => l.slug === slug1) as LoanData, [slug1])
  const loan2 = useMemo(() => loans.find(l => l.slug === slug2) as LoanData, [slug2])

  const rate1 = parseRate(loan1.interestRate)
  const rate2 = parseRate(loan2.interestRate)

  const maxAmount1 = parseAmount(loan1.maxAmount)
  const maxAmount2 = parseAmount(loan2.maxAmount)

  const feeRate1 = parseRate(loan1.processingFee)
  const feeRate2 = parseRate(loan2.processingFee)

  const emi1 = calculateEMI(COMPARE_PRINCIPAL, rate1, COMPARE_TENURE)
  const emi2 = calculateEMI(COMPARE_PRINCIPAL, rate2, COMPARE_TENURE)

  const rows = [
    {
      label: 'Rate of Interest',
      val1: loan1.interestRate,
      val2: loan2.interestRate,
      color1: rateColor(rate1, rate2, true),
      color2: rateColor(rate1, rate2, false),
    },
    {
      label: 'Minimum Amount',
      val1: loan1.minAmount,
      val2: loan2.minAmount,
      color1: 'text-gray-900' as ColorClass,
      color2: 'text-gray-900' as ColorClass,
    },
    {
      label: 'Maximum Amount',
      val1: loan1.maxAmount,
      val2: loan2.maxAmount,
      color1: amountColor(maxAmount1, maxAmount2, true),
      color2: amountColor(maxAmount1, maxAmount2, false),
    },
    {
      label: 'Maximum Tenure',
      val1: loan1.tenure,
      val2: loan2.tenure,
      color1: 'text-gray-900' as ColorClass,
      color2: 'text-gray-900' as ColorClass,
    },
    {
      label: 'Processing Fee',
      val1: loan1.processingFee,
      val2: loan2.processingFee,
      color1: rateColor(feeRate1, feeRate2, true),
      color2: rateColor(feeRate1, feeRate2, false),
    },
    {
      label: 'Best For',
      val1: loan1.tagline,
      val2: loan2.tagline,
      color1: 'text-gray-900' as ColorClass,
      color2: 'text-gray-900' as ColorClass,
    },
    {
      label: 'EMI for ₹10L / 10 Yrs',
      val1: formatCurrency(Math.round(emi1)) + '/mo',
      val2: formatCurrency(Math.round(emi2)) + '/mo',
      color1: rateColor(emi1, emi2, true),
      color2: rateColor(emi1, emi2, false),
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2563EB 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Compare Loans</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Compare our loan products side by side to find the best fit for your needs.
          </p>
        </div>
      </section>

      {/* Compare Tool */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Loan 1
              </label>
              <select
                value={slug1}
                onChange={e => setSlug1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {loans.map(l => (
                  <option key={l.slug} value={l.slug} disabled={l.slug === slug2}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Loan 2
              </label>
              <select
                value={slug2}
                onChange={e => setSlug2(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {loans.map(l => (
                  <option key={l.slug} value={l.slug} disabled={l.slug === slug1}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="px-6 py-5 bg-gray-50 border-r border-gray-100">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Feature</p>
              </div>
              <div
                className="px-6 py-5 text-center border-r border-gray-100"
                style={{ backgroundColor: '#EEF2FF' }}
              >
                <p className="text-lg font-bold text-gray-900">{loan1.name}</p>
                <p className="text-2xl mt-1">{loan1.icon}</p>
              </div>
              <div
                className="px-6 py-5 text-center"
                style={{ backgroundColor: '#FFF7ED' }}
              >
                <p className="text-lg font-bold text-gray-900">{loan2.name}</p>
                <p className="text-2xl mt-1">{loan2.icon}</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="px-6 py-4 border-r border-gray-100">
                  <p className="text-sm font-semibold text-gray-600">{row.label}</p>
                </div>
                <div className="px-6 py-4 text-center border-r border-gray-100">
                  <p className={`text-sm font-bold ${row.color1}`}>{row.val1}</p>
                </div>
                <div className="px-6 py-4 text-center">
                  <p className={`text-sm font-bold ${row.color2}`}>{row.val2}</p>
                </div>
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-3">
              <div className="px-6 py-5 border-r border-gray-100 flex items-center">
                <p className="text-sm font-semibold text-gray-600">Apply Now</p>
              </div>
              <div className="px-6 py-5 text-center border-r border-gray-100">
                <a
                  href="/contact"
                  className="inline-block py-2.5 px-6 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#1B3F8B' }}
                >
                  Apply for {loan1.name}
                </a>
              </div>
              <div className="px-6 py-5 text-center">
                <a
                  href="/contact"
                  className="inline-block py-2.5 px-6 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#F97316' }}
                >
                  Apply for {loan2.name}
                </a>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              Better value
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              Higher cost / lower limit
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span>
              Equal / neutral
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
