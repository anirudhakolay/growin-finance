'use client';

import { useState } from 'react';

interface CareerFormState {
  fullName: string;
  email: string;
  position: string;
  resumeLink: string;
  message: string;
}

const initialForm: CareerFormState = {
  fullName: '',
  email: '',
  position: '',
  resumeLink: '',
  message: '',
};

export default function CareersPage() {
  const [form, setForm] = useState<CareerFormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const text = `Hi, I am applying for a position at Growin Finserv:
Name: ${form.fullName}
Email: ${form.email}
Position: ${form.position || 'N/A'}
Resume Link: ${form.resumeLink}
Message: ${form.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918766507422?text=${encodedText}`, '_blank');
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2a5cbf 100%)' }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the finest team in town and help us make financing accessible to everyone.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">WE ARE HIRING!</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Are you ready to accelerate your career in finance? We are looking for passionate, driven individuals to join our rapidly growing team. If you have the skills, dedication, and desire to make a real impact in the lending space, we would love to hear from you.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Current Openings:</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>Marketing Executives</li>
                <li>Telemarketing Executives</li>
                <li>Backend Executives</li>
              </ul>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                  <p className="text-green-700">
                    Thank you for your interest in joining Growin Finserv. Our HR team will review your profile and get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-6 text-sm text-blue-600 underline hover:text-blue-800"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="fullName">
                      Your name: <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                      Your email: <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="position">
                      Select position: <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={form.position}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="Marketing Executive">Marketing Executive</option>
                      <option value="Telemarketing Executive">Telemarketing Executive</option>
                      <option value="Backend Executive">Backend Executive</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Resume Link */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="resumeLink">
                      Paste resume Drive link: <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="resumeLink"
                      name="resumeLink"
                      type="url"
                      required
                      value={form.resumeLink}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
                      Your message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{ backgroundColor: '#000066' }}
                    className="hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full transition-colors text-base"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
