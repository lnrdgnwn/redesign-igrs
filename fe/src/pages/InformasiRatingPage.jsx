import React, { useState, useEffect } from 'react';
import { fetchRatings, fetchContentClassifications } from '../services/api';

const colorMap = {
  3:  { colorClass: 'bg-rating-3',  shadowClass: 'shadow-[0_0_15px_rgba(67,168,50,0.4)]' },
  7:  { colorClass: 'bg-rating-7',  shadowClass: 'shadow-[0_0_15px_rgba(132,204,22,0.4)]' },
  13: { colorClass: 'bg-rating-13', shadowClass: 'shadow-[0_0_15px_rgba(255,180,0,0.4)]' },
  15: { colorClass: 'bg-rating-15', shadowClass: 'shadow-[0_0_15px_rgba(255,100,0,0.4)]' },
  18: { colorClass: 'bg-rating-18', shadowClass: 'shadow-[0_0_15px_rgba(233,43,37,0.4)]' },
};




const SkeletonCard = () => (
  <div className="bg-white border border-border rounded-[24px] p-8 shadow-sm animate-pulse">
    <div className="flex items-center mb-6">
      <div className="w-[64px] h-[64px] rounded-full bg-gray-200" />
    </div>
    <div className="w-32 h-6 bg-gray-200 rounded mb-4" />
    <div className="w-full h-4 bg-gray-200 rounded mb-2" />
    <div className="w-3/4 h-4 bg-gray-200 rounded" />
  </div>
);

const InformasiRatingPage = () => {
  const [ratings, setRatings] = useState([]);
  const [classifications, setClassifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchRatings(), fetchContentClassifications()])
      .then(([ratingsData, classificationsData]) => {
        setRatings(ratingsData);
        setClassifications(classificationsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full flex-1 flex flex-col items-center pb-24 bg-white">
      <div className="max-w-[1280px] w-full px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-[48px] leading-[64px] tracking-[-0.96px] font-bold text-primary mb-6">
          Informasi Rating IGRS
        </h1>
        <p className="text-text-body font-medium max-w-[700px] mx-auto text-lg leading-relaxed">
          Memahami klasifikasi umur dan konten untuk pengalaman bermain yang lebih aman dan nyaman.
        </p>
      </div>

      <div className="w-full max-w-[1280px] px-6 mb-16">
        <div className="w-full h-px bg-primary-light/30 blur-[1px]"></div>
      </div>

      <div className="max-w-[1280px] w-full px-6 mb-16">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.32px] font-bold text-primary mb-10 text-center md:text-left">
          Kategori Kelompok Usia
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-6">
            Gagal memuat data. Pastikan server backend sedang berjalan.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? [...Array(5)].map((_, i) => <SkeletonCard key={i} />)
            : ratings.map((rating) => {
                const colors = colorMap[rating.age] || { colorClass: 'bg-gray-500', shadowClass: '' };
                return (
                  <div
                    key={rating.id}
                    className="bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group"
                  >
                    <div className="mb-6 flex items-center">
                      <div
                        className={`w-[64px] h-[64px] ${colors.colorClass} ${colors.shadowClass} rounded-full flex justify-center items-center`}
                      >
                        <span className="font-bold text-[24px] leading-[32px] text-white">
                          {rating.title}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[24px] leading-[32px] tracking-[-0.24px] font-bold text-primary mb-4 relative z-10">
                      {rating.summary}
                    </h3>
                    <p className="text-text-body font-medium leading-relaxed relative z-10 text-[16px]">
                      {rating.description}
                    </p>
                    
                    <div className={`absolute inset-0 ${colors.colorClass} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`}></div>
                  </div>
                );
              })}
        </div>
      </div>

      <div className="w-full max-w-[1280px] px-6 mb-16">
        <div className="w-full h-px bg-primary-light/30 blur-[1px]"></div>
      </div>

      <div className="max-w-[1280px] w-full px-6">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.32px] font-bold text-primary mb-10 text-center md:text-left">
          Kriteria Konten Interaktif
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? [...Array(6)].map((_, i) => (
                <div key={i} className="bg-white border border-border rounded-[24px] p-8 flex items-start gap-5 animate-pulse">
                  <div className="w-[48px] h-[48px] shrink-0 bg-gray-200 rounded-full" />
                  <div className="flex-1">
                    <div className="w-24 h-5 bg-gray-200 rounded mb-3" />
                    <div className="w-full h-4 bg-gray-200 rounded mb-2" />
                    <div className="w-3/4 h-4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))
            : classifications.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-border rounded-[24px] p-8 flex items-start gap-5 hover:border-primary-light/50 transition-colors"
                  >
                    <div className="w-[48px] h-[48px] shrink-0 bg-[#F0F7FF] rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src={item.content_icon} 
                        alt={item.title}
                        className="w-7 h-7 object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <h4 className="text-[20px] leading-[28px] tracking-[-0.2px] font-bold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-text-body font-medium leading-relaxed text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default InformasiRatingPage;
