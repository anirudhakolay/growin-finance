import Image from 'next/image';

const banks = [
  { slug: 'IndusInd',    name: 'IndusInd Bank' },
  { slug: 'yesbank',     name: 'Yes Bank' },
  { slug: 'icicibank',   name: 'ICICI Bank' },
  { slug: 'hdfcbank',    name: 'HDFC Bank' },
  { slug: 'federalbank', name: 'Federal Bank' },
  { slug: 'Deutsche',    name: 'Deutsche Bank' },
  { slug: 'rblbank',     name: 'RBL Bank' },
  { slug: 'iifl',        name: 'IIFL Finance' },
  { slug: 'kotak',       name: 'Kotak Mahindra Bank' },
];

export default function BankLogosCarousel() {
  // Duplicate list for seamless loop — track is 2× wide, animates by exactly 50%
  const doubled = [...banks, ...banks];

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <style>{`
        @keyframes bankScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bank-track {
          display: flex;
          flex-wrap: nowrap;
          /* 2000ms faster than 24s -> 22s */
          animation: bankScroll 17s linear infinite;
        }
        .bank-track:hover {
          animation-play-state: paused;
        }
        .bank-item {
          flex-shrink: 0;
          width: 90px;
          height: 50px;
          margin-left: 8px;
          margin-right: 8px;
        }
        @media (min-width: 640px) {
          .bank-item {
            width: 140px;
            height: 60px;
            margin-left: 12px;
            margin-right: 12px;
          }
        }
        @media (min-width: 768px) {
          .bank-item {
            width: 180px;
            height: 80px;
            margin-left: 16px;
            margin-right: 16px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-gray-700 text-sm sm:text-lg font-semibold">
          <span style={{ color: '#1B3F8B' }} className="font-bold">&lsquo;Partnered</span>{' '}
          with the <strong>best.</strong> To <strong>serve</strong> you the{' '}
          <strong style={{ color: '#1B3F8B' }}>best&rsquo;.</strong>
        </p>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div className="bank-track">
          {doubled.map((bank, i) => (
            <div
              key={`${bank.slug}-${i}`}
              className="bank-item"
            >
              <Image
                src={`/banks/${bank.slug}.jpg`}
                alt={bank.name}
                width={180}
                height={80}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                title={bank.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
