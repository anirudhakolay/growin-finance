'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Result {
  type: 'success' | 'warning' | 'info';
  msg: string;
}

const resultStyles: Record<Result['type'], { bg: string; border: string; text: string }> = {
  success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
  info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
};

export default function EligibilityChecker() {
  const [income, setIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const incomeNum = parseFloat(income);
    const loanNum = parseFloat(loanAmount);

    if (incomeNum < 15000) {
      setResult({
        type: 'warning',
        msg: 'Based on your profile, a higher income may be needed. Please contact us.',
      });
    } else if (loanNum <= incomeNum * 60) {
      setResult({
        type: 'success',
        msg: 'Great news! You are likely eligible. Our team will contact you.',
      });
    } else {
      setResult({
        type: 'info',
        msg: 'You may be eligible for a lower loan amount. Contact us for a personalized assessment.',
      });
    }
  }

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Check Your Loan Eligibility
          </h2>
          <p className="text-gray-500 text-lg">
            Get an instant eligibility assessment in seconds
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Income (₹)
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="Enter monthly income"
                  required
                  min={0}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount Required (₹)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter loan amount"
                  required
                  min={0}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employment Type
                </label>
                <select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                  <option>Business Owner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Your age"
                  required
                  min={18}
                  max={70}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Check My Eligibility
            </button>
          </form>

          {result && (
            <div
              className={`mt-6 p-4 rounded-xl border ${resultStyles[result.type].bg} ${resultStyles[result.type].border}`}
            >
              <p className={`font-medium ${resultStyles[result.type].text}`}>{result.msg}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
