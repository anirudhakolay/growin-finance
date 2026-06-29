import { Phone, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTABanner() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark navy overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1B3F8B', opacity: 0.88 }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          <Zap size={14} className="inline-block mr-1" /> Fast Approvals · Best Rates · Expert Guidance
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Get Your Loan?
        </h2>
        <p className="text-blue-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join 2000+ Happy Customers across Mumbai. Apply now and get approval in just 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/contact" variant="secondary" size="lg">
            Apply Now
          </Button>
          <a
            href="tel:9769603074"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full font-semibold transition-colors duration-200 inline-block text-lg"
          >
            <Phone size={18} className="inline-block mr-2" /> Call Us Now
          </a>
        </div>
        <p className="text-blue-300 text-sm mt-6">
          Free consultation · No hidden charges · Doorstep service available
        </p>
      </div>
    </section>
  );
}
