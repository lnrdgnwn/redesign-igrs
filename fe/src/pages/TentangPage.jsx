import React from 'react';

const TentangPage = () => {
  return (
    <section className="w-full flex-1 flex flex-col items-center pb-24">
      <div className="max-w-[1280px] w-full px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-[48px] leading-[64px] tracking-[-0.96px] font-bold text-primary mb-6">
          Membangun Ekosistem Game yang Sehat
        </h1>
        <p className="text-text-body font-medium max-w-[854px] mx-auto text-lg leading-relaxed">
          Indonesia Game Rating System (IGRS) diinisiasi oleh Kementerian Komunikasi dan Digital
          untuk memandu masyarakat dalam memilih permainan interaktif yang sesuai dengan nilai-nilai budaya dan usia, serta mendorong industri kreatif lokal.
        </p>
      </div>

      <div className="max-w-[1280px] w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white border border-border rounded-[24px] p-8 md:p-[48px] shadow-sm flex flex-col relative overflow-hidden group transition-shadow">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-[56px] h-[56px] bg-[#F0F7FF] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-light text-3xl">visibility</span>
            </div>
            <h2 className="text-[32px] leading-[40px] tracking-[-0.32px] font-bold text-primary-light">Visi Kami</h2>
          </div>
          <p className="text-text-dark font-medium leading-relaxed relative z-10 text-[20px] max-w-[500px]">
            Menjadi sistem klasifikasi game terdepan yang menjaga nilai luhur bangsa sekaligus mempercepat pertumbuhan industri game nasional di kancah global.
          </p>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0F7FF] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
        </div>

        <div className="bg-white border border-border rounded-[24px] p-8 md:p-[48px] shadow-sm flex flex-col relative overflow-hidden group transition-shadow">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-[56px] h-[56px] bg-[#FFF0F1] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-accent-red text-3xl">rocket_launch</span>
            </div>
            <h2 className="text-[32px] leading-[40px] tracking-[-0.32px] font-bold text-accent-red">Misi Kami</h2>
          </div>
          <ul className="flex flex-col gap-6 relative z-10">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <p className="text-text-dark font-medium leading-relaxed text-[18px]">
                Menyediakan panduan rating yang jelas dan mudah dipahami bagi masyarakat.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <p className="text-text-dark font-medium leading-relaxed text-[18px]">
                Melindungi anak-anak dari konten game yang tidak sesuai dengan usianya.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-light mt-1">check_circle</span>
              <p className="text-text-dark font-medium leading-relaxed text-[18px]">
                Mendukung pengembang game lokal melalui klasifikasi yang berstandar internasional.
              </p>
            </li>
          </ul>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF0F1] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
        </div>
      </div>

      <div className="max-w-[1280px] w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5 bg-white border border-border rounded-[24px] flex flex-col shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 pb-8 flex-1">
            <h3 className="text-[28px] leading-[36px] tracking-[-0.28px] font-bold text-primary mb-4">Inisiatif Resmi</h3>
            <p className="text-text-body font-medium leading-relaxed text-[18px]">
              IGRS sepenuhnya dioperasikan dan diawasi oleh Kementerian Komunikasi dan Digital, menjamin objektivitas dan kepatuhan hukum dalam setiap klasifikasi game yang diterbitkan di wilayah Indonesia.
            </p>
          </div>
          <div className="bg-[#ECEEEF] p-8 md:px-10 flex items-center gap-5 mt-auto border-t border-border">
            <div className="w-[48px] h-[48px] shrink-0 bg-white shadow-sm rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-accent-red">shield</span>
            </div>
            <p className="text-text-dark font-semibold leading-snug text-[16px]">
              Didukung oleh hukum dan regulasi yang berlaku di Indonesia.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 bg-primary rounded-[24px] p-8 md:p-[48px] shadow-lg relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
          
          <h3 className="text-[28px] leading-[36px] tracking-[-0.28px] font-bold text-white mb-6 relative z-10">Latar Belakang</h3>
          <p className="text-white/90 font-medium leading-relaxed mb-12 relative z-10 text-[18px] max-w-[600px]">
            Seiring dengan pesatnya perkembangan industri game dan kemudahan akses digital, tantangan perlindungan konsumen, terutama anak-anak, menjadi semakin nyata. IGRS hadir sebagai respon strategis pemerintah untuk mengkategorikan konten secara tepat, berdasarkan elemen kekerasan, bahasa, serta unsur lain yang sensitif secara budaya.
          </p>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            <div className="bg-[#335CAA] border border-[#335CAA]/50 backdrop-blur-md rounded-xl p-5 min-w-[180px]">
              <div className="text-white text-[32px] font-bold mb-1">2024</div>
              <div className="text-text-hero-sub text-[12px] font-bold tracking-[1.2px] uppercase">Tahun Pembaharuan</div>
            </div>
            <div className="bg-[#335CAA] border border-[#335CAA]/50 backdrop-blur-md rounded-xl p-5 min-w-[180px]">
              <div className="text-white text-[32px] font-bold mb-1">5+</div>
              <div className="text-text-hero-sub text-[12px] font-bold tracking-[1.2px] uppercase">Kategori Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangPage;
