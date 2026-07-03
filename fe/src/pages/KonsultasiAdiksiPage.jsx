import React from 'react';

const KonsultasiAdiksiPage = () => {
  return (
    <section className="w-full flex-1 flex flex-col items-center">
      
      <div className="w-full bg-primary relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-20 lg:py-32 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#335CAA] px-4 py-2 rounded-full mb-6">
              <span className="material-symbols-outlined text-[#A5C8FF] text-xl">support_agent</span>
              <span className="text-[#A5C8FF] font-bold text-sm tracking-wide uppercase">Layanan Bantuan</span>
            </div>
            <h1 className="text-4xl md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
              Dukungan untuk <br className="hidden lg:block" /> Kesehatan Digital Anda
            </h1>
            <p className="text-[#AFC6FF] font-medium text-lg lg:text-[20px] leading-relaxed max-w-[600px] mx-auto md:mx-0 mb-10">
              Bermain game seharusnya menyenangkan. Jika Anda merasa kehilangan kendali,
              kami di sini untuk membantu. Dapatkan informasi, evaluasi diri, dan terhubung
              dengan profesional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button className="bg-accent-red hover:bg-[#A30008] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
                <span className="material-symbols-outlined">phone_in_talk</span>
                Bicara dengan Ahli Sekarang
              </button>
              <button className="bg-[#335CAA] hover:bg-[#4068BE] text-white font-bold py-4 px-8 rounded-xl transition-colors w-full sm:w-auto justify-center">
                Mulai Tes Mandiri
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-end relative h-[400px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-light/40 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="w-[380px] h-[380px] bg-white/5 border border-white/10 backdrop-blur-md rounded-[40px] relative z-10 flex items-center justify-center rotate-3 shadow-2xl">
              <span className="material-symbols-outlined text-white/20 text-[180px]">psychology</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] w-full px-6 py-24">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.32px] font-bold text-primary mb-12 md:text-left">
          Sumber Daya & Edukasi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow group lg:col-span-1">
            <div className="w-[56px] h-[56px] bg-[#F0F7FF] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-light text-3xl">article</span>
            </div>
            <h3 className="text-[24px] font-bold text-primary mb-4">Artikel & Panduan</h3>
            <p className="text-text-body font-medium leading-relaxed mb-8 flex-1">
              Pahami tanda-tanda kecanduan game dan cara mengelola waktu bermain yang sehat.
            </p>
            <a href="#" className="flex items-center gap-2 text-primary-light font-bold hover:gap-3 transition-all">
              Baca Selengkapnya
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow group lg:col-span-2 relative overflow-hidden">
            <div className="flex-1 flex flex-col relative z-10">
              <div className="w-[56px] h-[56px] bg-[#FFF0F1] rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-accent-red text-3xl">assignment</span>
              </div>
              <h3 className="text-[24px] font-bold text-primary mb-4">Evaluasi Mandiri</h3>
              <p className="text-text-body font-medium leading-relaxed mb-8 max-w-md">
                Ikuti kuesioner singkat yang dirancang oleh profesional untuk menilai kebiasaan bermain game Anda dan mendapatkan rekomendasi yang dipersonalisasi.
              </p>
              <div className="mt-auto">
                <button className="bg-primary-light hover:bg-primary text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors inline-flex">
                  Mulai Evaluasi
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow group lg:col-span-1">
            <div className="w-[56px] h-[56px] bg-[#EAF2FF] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#335CAA] text-3xl">family_restroom</span>
            </div>
            <h3 className="text-[24px] font-bold text-primary mb-4">Panduan Orang Tua</h3>
            <p className="text-text-body font-medium leading-relaxed mb-8 flex-1">
              Tips mendampingi anak bermain game dan mengatur fitur kontrol orang tua (parental control).
            </p>
            <a href="#" className="flex items-center gap-2 text-primary-light font-bold hover:gap-3 transition-all">
              Lihat Panduan
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow group lg:col-span-1">
            <div className="w-[56px] h-[56px] bg-[#E0EFFF] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-light text-3xl">groups</span>
            </div>
            <h3 className="text-[24px] font-bold text-primary mb-4">Grup Dukungan</h3>
            <p className="text-text-body font-medium leading-relaxed mb-8 flex-1">
              Bergabung dengan komunitas berbagi pengalaman untuk mendukung pemulihan dan keseimbangan bermain.
            </p>
            <a href="#" className="flex items-center gap-2 text-primary-light font-bold hover:gap-3 transition-all">
              Temukan Grup
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="bg-[#FFDAD6] border border-[#FFDAD6] rounded-[24px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow group lg:col-span-1">
            <div className="w-[56px] h-[56px] bg-[#BA1A1A] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-3xl">emergency</span>
            </div>
            <h3 className="text-[24px] font-bold text-[#191C1E] mb-4">Layanan Darurat</h3>
            <p className="text-text-body font-medium leading-relaxed mb-8 flex-1">
              Jika Anda merasa krisis atau membutuhkan bantuan segera, hubungi hotline krisis nasional.
            </p>
            <div className="pt-6 border-t border-[#BA1A1A]/20 mt-auto">
              <h4 className="text-[28px] font-bold text-[#BA1A1A] mb-1">119</h4>
              <p className="text-[14px] font-medium text-text-body">Layanan 24 Jam Bebas Pulsa</p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#F7F9FB] border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-[36px] leading-[44px] tracking-[-0.36px] font-bold text-primary mb-6">
              Bicara dengan Ahli
            </h2>
            <p className="text-text-body font-medium text-lg leading-relaxed mb-10">
              Jangan ragu untuk mencari bantuan profesional. Konselor dan psikolog kami yang tersertifikasi siap mendengarkan dan membantu Anda menyusun rencana pemulihan yang tepat dalam kerahasiaan penuh.
            </p>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F0F7FF] flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-light text-xl">verified_user</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-primary mb-1">Tenaga Profesional Berlisensi</h4>
                  <p className="text-text-body font-medium text-[15px]">Psikolog klinis dengan pengalaman dalam kecanduan perilaku.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F0F7FF] flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-light text-xl">lock</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-primary mb-1">Kerahasiaan Terjamin</h4>
                  <p className="text-text-body font-medium text-[15px]">Data dan sesi konsultasi Anda dilindungi secara ketat.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F0F7FF] flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary-light text-xl">schedule</span>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-primary mb-1">Konsultasi Fleksibel</h4>
                  <p className="text-text-body font-medium text-[15px]">Tersedia via chat, panggilan suara, atau panggilan video.</p>
                </div>
              </div>
            </div>

            <button className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
              Jadwalkan Konsultasi
            </button>
          </div>

          <div className="bg-white border border-border rounded-[32px] p-8 md:p-12 shadow-xl shadow-primary/5 relative overflow-hidden">
            <h3 className="text-[28px] font-bold text-primary mb-8 relative z-10">Hubungi Kami Langsung</h3>
            
            <div className="flex flex-col gap-5 relative z-10">
              <div className="bg-[#F7F9FB] border border-border/50 rounded-2xl p-5 flex items-center gap-5">
                <div className="w-[52px] h-[52px] bg-[#EAF2FF] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary-light text-2xl">call</span>
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-text-body mb-1">Hotline IGRS</h5>
                  <p className="text-primary font-bold text-[18px]">0800-1-GAMING <span className="text-text-body font-medium text-[14px] ml-1">(Bebas Pulsa)</span></p>
                </div>
              </div>

              <div className="bg-[#F7F9FB] border border-border/50 rounded-2xl p-5 flex items-center gap-5">
                <div className="w-[52px] h-[52px] bg-[#EAF2FF] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary-light text-2xl">mail</span>
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-text-body mb-1">Email Dukungan</h5>
                  <p className="text-primary font-bold text-[18px]">bantuan@igrs.id</p>
                </div>
              </div>

              <div className="bg-[#F7F9FB] border border-border/50 rounded-2xl p-5 flex items-center gap-5">
                <div className="w-[52px] h-[52px] bg-[#FFF0F1] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent-red text-2xl">forum</span>
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-text-body mb-1">Live Chat</h5>
                  <p className="text-primary font-bold text-[16px]">Tersedia Senin - Jumat, 09:00 - 17:00</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#EAF2FF] rounded-full blur-[80px] pointer-events-none"></div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default KonsultasiAdiksiPage;
