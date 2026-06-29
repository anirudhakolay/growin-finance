'use client'

import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Branch } from '@/lib/data/branches'

interface BranchCardProps {
  branch: Branch
}

export default function BranchCard({ branch }: BranchCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{branch.name}</h3>
        </div>
        {branch.isMain && (
          <span className="shrink-0 text-xs font-bold text-white px-3 py-1 rounded-full ml-3" style={{ backgroundColor: '#F97316' }}>
            Head Office
          </span>
        )}
      </div>

      <div className="space-y-4 flex-1">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin size={16} style={{ color: '#1B3F8B' }} />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{branch.address}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
            <Phone size={16} style={{ color: '#1B3F8B' }} />
          </div>
          <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-blue-600 text-sm font-medium hover:underline">
            {branch.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
            <Mail size={16} style={{ color: '#1B3F8B' }} />
          </div>
          <a href={`mailto:${branch.email}`} className="text-blue-600 text-sm font-medium hover:underline break-all">
            {branch.email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
            <Clock size={16} style={{ color: '#1B3F8B' }} />
          </div>
          <p className="text-gray-600 text-sm">{branch.hours}</p>
        </div>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 text-white"
        style={{ backgroundColor: '#1B3F8B' }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#163272')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1B3F8B')}
      >
        <ExternalLink size={15} />
        Get Directions
      </a>
    </div>
  )
}
