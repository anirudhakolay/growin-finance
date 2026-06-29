'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calculateEMI } from '@/lib/utils';

function formatINR(value: number): string {
  return '₹' + Math.round(value).toLocaleString('en-IN');
}

export default function MiniEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(120);

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="space-y-8">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Loan Amount</label>
              <span className="text-sm font-bold text-blue-600">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={10000000}
              step={50000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹1L</span>
              <span>₹1Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Rate of Interest</label>
              <span className="text-sm font-bold text-blue-600">{interestRate.toFixed(1)}% p.a.</span>
            </div>
            <input
              type="range"
              min={7}
              max={24}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>7%</span>
              <span>24%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Loan Tenure</label>
              <span className="text-sm font-bold text-blue-600">
                {tenure} months ({Math.round(tenure / 12)} yrs)
              </span>
            </div>
            <input
              type="range"
              min={12}
              max={360}
              step={6}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 yr</span>
              <span>30 yrs</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center">
          <div
            className="rounded-xl p-6 text-white text-center mb-4"
            style={{ backgroundColor: '#1B3F8B' }}
          >
            <p className="text-blue-200 text-sm mb-1">Monthly EMI</p>
            <p className="text-3xl font-bold">{formatINR(emi)}</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <span className="text-sm text-gray-600">Principal Amount</span>
              <span className="font-semibold text-gray-900">{formatINR(loanAmount)}</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <span className="text-sm text-gray-600">Total Interest</span>
              <span className="font-semibold text-orange-500">{formatINR(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <span className="text-sm text-gray-600">Total Payment</span>
              <span className="font-semibold text-gray-900">{formatINR(totalPayment)}</span>
            </div>
          </div>

          <Link
            href="/emi-calculator"
            className="mt-5 text-center text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            See Full Breakdown →
          </Link>
        </div>
      </div>
    </div>
  );
}
