import { FileText } from 'lucide-react';

interface DocChecklistProps {
  documents: {
    category: string
    items: string[]
  }[]
}

export default function DocChecklist({ documents }: DocChecklistProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Documents Required</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep these documents handy for a smooth and fast loan processing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                {doc.category}
              </h3>
              <ul className="space-y-2.5">
                {doc.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FileText size={16} className="shrink-0 mt-0.5 text-blue-500" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          * Additional documents may be required based on individual cases and loan amount.
        </p>
      </div>
    </section>
  )
}
