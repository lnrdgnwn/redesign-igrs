import React from 'react';

const ratings = [
  {
    age: '3+',
    title: 'Semua Umur',
    description: 'Aman dimainkan oleh segala usia, termasuk anak-anak di bawah 3 tahun. Tidak mengandung kekerasan atau konten menakutkan.',
    colorClass: 'bg-rating-3',
    shadowClass: 'shadow-[0_0_15px_rgba(67,168,50,0.4)]',
  },
  {
    age: '7+',
    title: 'Anak-anak',
    description: 'Mengandung sedikit elemen menakutkan atau kekerasan ringan (kartun). Tidak ada kata-kata kasar.',
    colorClass: 'bg-rating-7',
    shadowClass: 'shadow-[0_0_15px_rgba(132,204,22,0.4)]',
  },
  {
    age: '13+',
    title: 'Remaja',
    description: 'Bisa terdapat kekerasan fantasi, sedikit bahasa kasar, atau simulasi perjudian ringan.',
    colorClass: 'bg-rating-13',
    shadowClass: 'shadow-[0_0_15px_rgba(255,180,0,0.4)]',
  },
  {
    age: '15+',
    title: 'Dewasa Muda',
    description: 'Menampilkan kekerasan yang lebih realistis, penggunaan obat-obatan terlarang dalam konteks cerita, dan bahasa kasar tingkat sedang.',
    colorClass: 'bg-rating-15',
    shadowClass: 'shadow-[0_0_15px_rgba(255,100,0,0.4)]',
  },
  {
    age: '18+',
    title: 'Dewasa',
    description: 'Hanya untuk orang dewasa. Berpotensi mengandung kekerasan brutal, konten seksual eksplisit, penggunaan obat-obatan terlarang secara detail, atau bahasa kasar ekstrem. Tidak sesuai untuk anak-anak atau remaja.',
    colorClass: 'bg-rating-18',
    shadowClass: 'shadow-[0_0_15px_rgba(233,43,37,0.4)]',
  },
];

const criteria = [
  {
    title: 'Kekerasan',
    description: 'Tingkat representasi agresi fisik atau konflik.',
    icon: 'warning',
  },
  {
    title: 'Bahasa Kasar',
    description: 'Kehadiran kata-kata tidak senonoh atau umpatan.',
    icon: 'explicit',
  },
  {
    title: 'Perjudian',
    description: 'Simulasi atau elemen taruhan dengan mata uang in-game.',
    icon: 'casino',
  },
  {
    title: 'Zat Terlarang',
    description: 'Referensi atau penggunaan alkohol, tembakau, dan obat-obatan.',
    icon: 'medication',
  },
  {
    title: 'Konten Menakutkan',
    description: 'Elemen horor atau jumpscare yang dapat memicu ketakutan berlebih.',
    icon: 'mood_bad',
  },
  {
    title: 'Konten Seksual',
    description: 'Nuditas atau tema seksual yang disajikan dalam permainan.',
    icon: '18_up_rating',
  },
];

const InformasiRatingPage = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings.map((rating) => (
            <div
              key={rating.age}
              className="bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="mb-6 flex items-center">
                <div
                  className={`w-[64px] h-[64px] ${rating.colorClass} ${rating.shadowClass} rounded-full flex justify-center items-center`}
                >
                  <span className="font-bold text-[24px] leading-[32px] text-white">
                    {rating.age}
                  </span>
                </div>
              </div>
              <h3 className="text-[24px] leading-[32px] tracking-[-0.24px] font-bold text-primary mb-4 relative z-10">
                {rating.title}
              </h3>
              <p className="text-text-body font-medium leading-relaxed relative z-10 text-[16px]">
                {rating.description}
              </p>
              
              <div className={`absolute inset-0 ${rating.colorClass} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`}></div>
            </div>
          ))}
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
          {criteria.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-border rounded-[24px] p-8 flex items-start gap-5 hover:border-primary-light/50 transition-colors"
            >
              <div className="w-[48px] h-[48px] shrink-0 bg-[#F0F7FF] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-light text-2xl">
                  {item.icon}
                </span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformasiRatingPage;
