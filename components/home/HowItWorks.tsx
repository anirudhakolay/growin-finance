import React from 'react';
import { FileText, ScanSearch, Banknote, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    Icon: FileText,
    title: 'Apply Online',
    desc: 'Fill our simple form with your basic details in under 2 minutes',
  },
  {
    number: '02',
    Icon: ScanSearch,
    title: 'Document Verification',
    desc: 'Our experts verify your documents quickly — we come to you',
  },
  {
    number: '03',
    Icon: Banknote,
    title: 'Loan Disbursal',
    desc: 'Get funds directly in your bank account within 48 hours',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white" style={{ opacity: 0.94 }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3" style={{ color: '#1B3F8B' }}>
            How It Works
          </h2>
          <p className="text-gray-500 text-lg">Get your loan approved in three simple steps</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 lg:gap-6 mb-14">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 bg-white rounded-2xl shadow-lg border border-blue-50 p-8 text-center hover:shadow-xl transition-shadow duration-200 flex flex-col items-center w-full">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md shrink-0"
                  style={{ backgroundColor: '#1B3F8B' }}
                >
                  <step.Icon size={28} className="text-white" />
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: '#F97316' }}
                >
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center shrink-0">
                  <ArrowRight size={28} style={{ color: '#F97316' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact" variant="primary" size="lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
