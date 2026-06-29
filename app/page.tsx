import HeroSection from '@/components/home/HeroSection';
import BankLogosCarousel from '@/components/home/BankLogosCarousel';
import StatsBar from '@/components/home/StatsBar';
import LoanTypesGrid from '@/components/home/LoanTypesGrid';
import HowItWorks from '@/components/home/HowItWorks';
import MiniEMICalculator from '@/components/home/MiniEMICalculator';
import EligibilityChecker from '@/components/home/EligibilityChecker';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BankLogosCarousel />
      <StatsBar />
      <LoanTypesGrid />
      <HowItWorks />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Calculate Your EMI
          </h2>
          <MiniEMICalculator />
        </div>
      </section>
      <EligibilityChecker />
      <TestimonialsCarousel />
      <CTABanner />
    </>
  );
}
