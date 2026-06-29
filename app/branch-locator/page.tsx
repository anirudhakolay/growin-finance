import { Metadata } from 'next'
import { branches } from '@/lib/data/branches'
import BranchCard from '@/components/tools/BranchCard'

export const metadata: Metadata = {
  title: 'Branch Locator | Growin Finance',
  description:
    'Find Growin Finance branches near you. Visit us at our offices for personalized loan assistance.',
}

const mainBranch = branches.find(b => b.isMain)

export default function BranchLocatorPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2563EB 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Branch Locator</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Visit us at any of our branches for personalized loan assistance and expert financial guidance.
          </p>
        </div>
      </section>

      {/* Map Section */}
      {mainBranch && mainBranch.mapEmbedUrl && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {mainBranch.name}
              </h2>
              <p className="text-gray-600">{mainBranch.address}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={mainBranch.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${mainBranch.name} Location`}
              />
            </div>
          </div>
        </section>
      )}

      {/* Branch Cards */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Branches</h2>
            <p className="text-lg text-gray-600">
              We have {branches.length} location{branches.length !== 1 ? 's' : ''} to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map(branch => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: '#1B3F8B' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-blue-200 text-lg">
              Can't visit us? Reach out through any of these channels and we'll come to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <a href="tel:9769603074" className="text-blue-200 hover:text-white block">
                9769603074
              </a>
              <a href="tel:8766507422" className="text-blue-200 hover:text-white block">
                8766507422
              </a>
            </div>
            <div>
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              {mainBranch && (
                <a
                  href={`mailto:${mainBranch.email}`}
                  className="text-blue-200 hover:text-white"
                >
                  {mainBranch.email}
                </a>
              )}
            </div>
            <div>
              <div className="text-3xl mb-3">🕒</div>
              <h3 className="font-bold text-lg mb-1">Working Hours</h3>
              {mainBranch && (
                <p className="text-blue-200">{mainBranch.hours}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
