import React, { useState, useEffect } from 'react';
import { fetchRatings } from '../services/api';

const colorMap = {
  3:  { bgClass: 'bg-[#43A832]', shadowClass: 'shadow-[0_0_15px_rgba(67,168,50,0.4)]' },
  7:  { bgClass: 'bg-[#84CC16]', shadowClass: 'shadow-[0_0_15px_rgba(132,204,22,0.4)]' },
  13: { bgClass: 'bg-[#FFB400]', shadowClass: 'shadow-[0_0_15px_rgba(255,180,0,0.4)]' },
  15: { bgClass: 'bg-[#FF6400]', shadowClass: 'shadow-[0_0_15px_rgba(255,100,0,0.4)]' },
  18: { bgClass: 'bg-[#E92B25]', shadowClass: 'shadow-[0_0_15px_rgba(233,43,37,0.4)]' },
};

const RatingSection = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRatings()
      .then((data) => {
        setRatings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat data rating:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="rating-section" className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-16 px-6">
          <h2 className="text-center font-bold text-[clamp(20px,3vw,24px)] leading-8 tracking-[-0.24px] text-text-dark mb-3">
            Kategori Rating IGRS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-bg-light border border-border rounded-xl p-6 flex flex-col items-center animate-pulse"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-3" />
                <div className="w-20 h-4 bg-gray-200 rounded mb-1" />
                <div className="w-28 h-3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="rating-section" className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-16 px-6 text-center">
          <h2 className="font-bold text-[clamp(20px,3vw,24px)] leading-8 tracking-[-0.24px] text-text-dark mb-3">
            Kategori Rating IGRS
          </h2>
          <p className="text-red-500 text-sm">
            Gagal memuat data rating. Pastikan server backend sedang berjalan.
          </p>
        </div>
      </section>
    );
  }

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
          {ratings.map((rating) => {
            const colors = colorMap[rating.age] || { bgClass: 'bg-gray-500', shadowClass: '' };
            return (
              <div
                key={rating.id}
                className="relative bg-bg-light border border-border rounded-xl p-6 flex flex-col items-center overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
              >
                <div 
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-3 ${colors.bgClass} ${colors.shadowClass}`}
                >
                  <span className="font-bold text-2xl leading-8 text-white">{rating.title}</span>
                </div>
                <h3 className="relative z-10 text-center font-bold text-sm leading-5 tracking-[0.28px] text-text-dark mb-1">
                  {rating.summary}
                </h3>
                <p className="relative z-10 text-center font-medium text-xs leading-4 text-text-body">
                  {rating.games?.length || 0} gim terdaftar
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
