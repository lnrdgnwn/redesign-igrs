import React from 'react';

const ratings = [
  { 
    age: '3+', 
    title: 'Semua Umur', 
    description: 'Aman dimainkan anak balita.', 
    bgClass: 'bg-[#43A832]', 
    shadowClass: 'shadow-[0_0_15px_rgba(67,168,50,0.4)]' 
  },
  { 
    age: '7+', 
    title: 'Anak-anak', 
    description: 'Konten ringan tanpa kekerasan.', 
    bgClass: 'bg-[#84CC16]', 
    shadowClass: 'shadow-[0_0_15px_rgba(132,204,22,0.4)]' 
  },
  { 
    age: '13+', 
    title: 'Remaja', 
    description: 'Mengandung kekerasan fantasi ringan.', 
    bgClass: 'bg-[#FFB400]', 
    shadowClass: 'shadow-[0_0_15px_rgba(255,180,0,0.4)]' 
  },
  { 
    age: '15+', 
    title: 'Dewasa Muda', 
    description: 'Kekerasan realistis, tema rumit.', 
    bgClass: 'bg-[#FF6400]', 
    shadowClass: 'shadow-[0_0_15px_rgba(255,100,0,0.4)]' 
  },
  { 
    age: '18+', 
    title: 'Dewasa', 
    description: 'Konten khusus dewasa, tidak untuk anak.', 
    bgClass: 'bg-[#E92B25]', 
    shadowClass: 'shadow-[0_0_15px_rgba(233,43,37,0.4)]' 
  },
];

const RatingSection = () => {
  return (
    <section id="rating-section" className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto py-16 px-6">
        <h2 className="text-center font-bold text-[clamp(20px,3vw,24px)] leading-8 tracking-[-0.24px] text-text-dark mb-3">
          Kategori Rating IGRS
        </h2>

        <p className="font-normal text-[clamp(13px,1.5vw,16px)] leading-6 text-text-body max-w-[560px] mx-auto mb-10 text-center">
          Kenali klasifikasi umur untuk memilih gim yang tepat. Setiap warna mewakili kelompok usia dengan pedoman konten khusus.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ratings.map((rating) => (
            <div
              key={rating.age}
              className="relative bg-bg-light border border-border rounded-xl p-6 flex flex-col items-center overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
            >
              <div 
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-3 ${rating.bgClass} ${rating.shadowClass}`}
              >
                <span className="font-bold text-2xl leading-8 text-white">{rating.age}</span>
              </div>
              <h3 className="relative z-10 text-center font-bold text-sm leading-5 tracking-[0.28px] text-text-dark mb-1">
                {rating.title}
              </h3>
              <p className="relative z-10 text-center font-medium text-xs leading-4 text-text-body">
                {rating.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
