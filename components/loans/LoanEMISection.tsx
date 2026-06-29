'use client'

import { useState } from 'react'
import { calculateEMI, formatCurrency } from '@/lib/utils'
import Link from 'next/link'

interface LoanEMISectionProps {
  defaultAmount: number
  defaultRate: number
  defaultTenure: number
}

export default function LoanEMISection({
  defaultAmount,
  defaultRate,
  defaultTenure,
}: LoanEMISectionProps) {
  const [amount, setAmount] = useState(defaultAmount)
  const [rate, setRate] = useState(defaultRate)
  const [tenure, setTenure] = useState(defaultTenure)

  const emi = calculateEMI(amount, rate, tenure)
  const totalPayment = emi * tenure
  const totalInterest = totalPayment - amount

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h2>
          <p className="text-lg text-gray-600">
            Estimate your monthly EMI with our easy-to-use calculator
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sliders */}
            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                  <span className="text-blue-600 font-bold text-lg">{formatCurrency(amount)}</span>
                </div>
                <input
                  type="range"
                  min={defaultAmount * 0.1}
                  max={defaultAmount * 5 > 50000000 ? 50000000 : defaultAmount * 5}
                  step={50000}
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-gray-200 cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{formatCurrency(defaultAmount * 0.1)}</span>
                  <span>{formatCurrency(defaultAmount * 5 > 50000000 ? 50000000 : defaultAmount * 5)}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">Rate of Interest (p.a.)</label>
                  <span className="text-blue-600 font-bold text-lg">{rate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={24}
                  step={0.1}
                  value={rate}
                  onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-gray-200 cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>6%</span>
                  <span>24%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">Tenure (Months)</label>
                  <span className="text-blue-600 font-bold text-lg">{tenure} months</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={360}
                  step={6}
                  value={tenure}
                  onChange={e => setTenure(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-gray-200 cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>12 mo</span>
                  <span>360 mo</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center space-y-4">
              <div
                className="rounded-xl p-6 text-center text-white"
                style={{ backgroundColor: '#1B3F8B' }}
              >
                <p className="text-blue-200 text-sm mb-1">Monthly EMI</p>
                <p className="text-4xl font-bold">{formatCurrency(Math.round(emi))}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                  <p className="text-xs text-gray-500 mb-1">Total Interest</p>
                  <p className="text-xl font-bold text-orange-500">{formatCurrency(Math.round(totalInterest))}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
                  <p className="text-xs text-gray-500 mb-1">Total Payment</p>
                  <p className="text-xl font-bold text-gray-900">{formatCurrency(Math.round(totalPayment))}</p>
                </div>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/emi-calculator"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  View Full EMI Calculator with Amortization →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
