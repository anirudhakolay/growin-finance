'use client'

import { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { calculateEMI, calculateAmortization, formatCurrency } from '@/lib/utils'

const COLORS = ['#1B3F8B', '#F97316']

export default function EMICalculatorFull() {
  const [amount, setAmount] = useState(2500000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(240)

  const [amountInput, setAmountInput] = useState('2500000')
  const [rateInput, setRateInput] = useState('8.5')
  const [tenureInput, setTenureInput] = useState('240')

  const emi = useMemo(() => calculateEMI(amount, rate, tenure), [amount, rate, tenure])
  const totalPayment = useMemo(() => emi * tenure, [emi, tenure])
  const totalInterest = useMemo(() => totalPayment - amount, [totalPayment, amount])
  const amortization = useMemo(() => calculateAmortization(amount, rate, tenure), [amount, rate, tenure])

  const pieData = [
    { name: 'Principal', value: Math.round(amount) },
    { name: 'Interest', value: Math.round(totalInterest) },
  ]

  const handleAmountChange = (val: number) => {
    setAmount(val)
    setAmountInput(String(val))
  }
  const handleRateChange = (val: number) => {
    setRate(val)
    setRateInput(String(val))
  }
  const handleTenureChange = (val: number) => {
    setTenure(val)
    setTenureInput(String(val))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Sliders Panel */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Loan Details</h3>

          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                <input
                  type="number"
                  value={amountInput}
                  onChange={e => {
                    setAmountInput(e.target.value)
                    const v = Number(e.target.value)
                    if (v >= 100000 && v <= 50000000) setAmount(v)
                  }}
                  className="w-36 text-right px-3 py-1.5 border border-gray-300 rounded-lg text-blue-600 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="range"
                min={100000}
                max={50000000}
                step={50000}
                value={amount}
                onChange={e => handleAmountChange(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-200 cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹1,00,000</span>
                <span>₹5,00,00,000</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">Rate of Interest (% p.a.)</label>
                <input
                  type="number"
                  value={rateInput}
                  step={0.1}
                  onChange={e => {
                    setRateInput(e.target.value)
                    const v = Number(e.target.value)
                    if (v >= 6 && v <= 24) setRate(v)
                  }}
                  className="w-24 text-right px-3 py-1.5 border border-gray-300 rounded-lg text-blue-600 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="range"
                min={6}
                max={24}
                step={0.1}
                value={rate}
                onChange={e => handleRateChange(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-200 cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>6%</span>
                <span>24%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">Tenure (Months)</label>
                <input
                  type="number"
                  value={tenureInput}
                  step={6}
                  onChange={e => {
                    setTenureInput(e.target.value)
                    const v = Number(e.target.value)
                    if (v >= 12 && v <= 360) setTenure(v)
                  }}
                  className="w-24 text-right px-3 py-1.5 border border-gray-300 rounded-lg text-blue-600 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="range"
                min={12}
                max={360}
                step={6}
                value={tenure}
                onChange={e => handleTenureChange(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gray-200 cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>12 mo</span>
                <span>360 mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-5">
          {/* EMI Result */}
          <div
            className="rounded-2xl p-8 text-center text-white shadow-md"
            style={{ backgroundColor: '#1B3F8B' }}
          >
            <p className="text-blue-200 text-sm mb-1 uppercase tracking-wider">Monthly EMI</p>
            <p className="text-5xl font-bold mb-2">{formatCurrency(Math.round(emi))}</p>
            <p className="text-blue-200 text-sm">per month for {tenure} months</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
              <p className="text-xs text-gray-500 mb-1">Principal</p>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(amount)}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
              <p className="text-xs text-gray-500 mb-1">Total Interest</p>
              <p className="text-lg font-bold text-orange-500">{formatCurrency(Math.round(totalInterest))}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
              <p className="text-xs text-gray-500 mb-1">Total Amount</p>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(Math.round(totalPayment))}</p>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Payment Breakdown</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Amortization Table */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Year-by-Year Amortization</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-6 py-4 text-gray-600 font-semibold">Year</th>
                <th className="text-right px-6 py-4 text-gray-600 font-semibold">Principal Paid</th>
                <th className="text-right px-6 py-4 text-gray-600 font-semibold">Interest Paid</th>
                <th className="text-right px-6 py-4 text-gray-600 font-semibold">Balance</th>
              </tr>
            </thead>
            <tbody>
              {amortization.map((row, index) => (
                <tr
                  key={row.year}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-3 font-medium text-gray-900">Year {row.year}</td>
                  <td className="px-6 py-3 text-right text-blue-600 font-medium">
                    {formatCurrency(Math.round(row.totalPrincipal))}
                  </td>
                  <td className="px-6 py-3 text-right text-orange-500 font-medium">
                    {formatCurrency(Math.round(row.totalInterest))}
                  </td>
                  <td className="px-6 py-3 text-right text-gray-700 font-medium">
                    {formatCurrency(Math.round(row.balance))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
