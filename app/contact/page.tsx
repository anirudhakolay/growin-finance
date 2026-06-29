'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  fullName: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const text = `Hi, I have a query from the contact form:
Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Subject: ${form.subject || 'N/A'}
Message: ${form.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919769603074?text=${encodedText}`, '_blank');
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2a5cbf 100%)' }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out for a free consultation, loan enquiry, or any questions — our team responds within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B3F8B' }}>
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700">
                    We&apos;ll call you back within 2 hours during business hours (Mon–Sat, 9:00 AM – 6:00 PM).
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-6 text-sm text-blue-600 underline hover:text-blue-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your 10-digit mobile number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="Home Loan Enquiry">Home Loan Enquiry</option>
                      <option value="LAP Enquiry">LAP Enquiry</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Car Loan">Car Loan</option>
                      <option value="EMI Query">EMI Query</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your loan requirement or query..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-base mt-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B3F8B' }}>
                Contact Details
              </h2>
              <div className="flex flex-col flex-1 gap-5">
                {/* Address */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Our Office</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      7th Floor, No 716, Highway Commerce Center,<br />
                      I B Patel Road, Mumbai Suburban,<br />
                      Maharashtra 400063
                    </p>
                  </div>
                </div>

                {/* Gopal */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Gopal Pandey</p>
                    <a
                      href="tel:9769603074"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      9769603074
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Co-Founder &amp; CEO</p>
                  </div>
                </div>

                {/* Shivdhar */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Shivdhar Tiwari</p>
                    <a
                      href="tel:8766507422"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      8766507422
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Co-Founder &amp; Director</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl mt-0.5">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Email</p>
                    <a
                      href="mailto:info@growinfinserv.com"
                      className="text-blue-600 hover:text-blue-800 break-all"
                    >
                      info@growinfinserv.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-2xl mt-0.5">🕒</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Business Hours</p>
                    <p className="text-gray-600">Mon–Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-gray-500 mt-0.5">Closed on Sundays &amp; public holidays</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918766507422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl transition-colors w-full text-base mt-auto"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Highway+Commerce+Center,+IB+Patel+Road,+Mumbai&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Growin Finserv Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#1B3F8B' }}>
            Quick Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-bold text-gray-900 mb-2">How do I apply for a Home Loan?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about eligibility, documents, and the step-by-step process for securing a home loan.
              </p>
              <Link
                href="/home-loan"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">What loan types do you offer?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore our full range — home loans, personal loans, business loans, car loans, and LAP.
              </p>
              <Link
                href="/loans"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                View All Loans →
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🧮</div>
              <h3 className="font-bold text-gray-900 mb-2">How much will my EMI be?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use our free EMI calculator to estimate your monthly payments based on loan amount and tenure.
              </p>
              <Link
                href="/emi-calculator"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Calculate EMI →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
