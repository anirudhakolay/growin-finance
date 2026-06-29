'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

const CARDS_DESKTOP = 3;

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + CARDS_DESKTOP < testimonials.length;

  const visibleDesktop = testimonials.slice(currentIndex, currentIndex + CARDS_DESKTOP);
  const visibleMobile = testimonials.slice(currentIndex, currentIndex + 1);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3" style={{ color: '#1B3F8B' }}>
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg">Real stories from real customers across Mumbai</p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {visibleDesktop.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <div className="md:hidden">
          {visibleMobile.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => canPrev && setCurrentIndex((i) => i - 1)}
            disabled={!canPrev}
            className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors duration-200 ${
              canPrev
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-gray-400 font-medium">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={() => canNext && setCurrentIndex((i) => i + 1)}
            disabled={!canNext}
            className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors duration-200 ${
              canNext
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  id: string | number;
  name: string;
  city: string;
  loanType: string;
  rating: number;
  text: string;
  initials: string;
}

const avatarColors = ['bg-blue-600', 'bg-purple-600', 'bg-green-600', 'bg-orange-500', 'bg-pink-500'];

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  const colorClass = avatarColors[(t.name.charCodeAt(0) || 0) % avatarColors.length];

  return (
    <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <Quote size={28} className="text-blue-100 mb-3" />
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${colorClass}`}>
          {t.initials}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{t.name}</p>
          <p className="text-xs text-gray-400">{t.city} · {t.loanType}</p>
        </div>
      </div>
    </div>
  );
}
