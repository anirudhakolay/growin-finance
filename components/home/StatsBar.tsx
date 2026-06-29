'use client';

import { useEffect, useState } from 'react';
import { Users, IndianRupee, Award, Building2, type LucideIcon } from 'lucide-react';

interface Stat {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  Icon: LucideIcon;
}

const stats: Stat[] = [
  { target: 2000, prefix: '', suffix: '+', label: 'Happy Customers', Icon: Users },
  { target: 300, prefix: '₹', suffix: ' Cr+', label: 'Loans Disbursed', Icon: IndianRupee },
  { target: 8, prefix: '', suffix: '+', label: 'Years Of Excellence', Icon: Award },
  { target: 15, prefix: '', suffix: '+', label: 'Bank and NBFCs', Icon: Building2 },
];

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    const intervalTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
}

export default function StatsBar() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: '#1B3F8B', opacity: 0.92 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <stat.Icon size={22} className="text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                {stat.prefix}
                <AnimatedCounter target={stat.target} />
                {stat.suffix}
              </div>
              <div className="text-blue-200 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
