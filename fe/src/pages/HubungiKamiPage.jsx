import React from 'react';

const HubungiKamiPage = () => {
  return (
    <section className="w-full flex-1 flex flex-col items-center relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#AFC6FF]/30 rounded-[100%] blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-[1280px] w-full px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-primary mb-6">
          Hubungi Kami
        </h1>
        <p className="text-text-body font-medium max-w-[700px] mx-auto text-lg leading-relaxed">
          Punya pertanyaan mengenai sistem rating game atau butuh bantuan teknis? Tim kami siap membantu Anda memberikan pengalaman gaming yang lebih baik dan aman.
        </p>
      </div>

      <div className="max-w-[1280px] w-full px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 bg-white border border-border rounded-[32px] p-8 md:p-12 shadow-xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-light to-primary"></div>
            
            <div className="flex items-center gap-4 mb-10 mt-2">
              <div className="w-[48px] h-[48px] bg-[#F0F7FF] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-light text-2xl">mail</span>
              </div>
              <h2 className="text-[28px] font-bold text-primary">Kirim Pesan</h2>
            </div>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[15px] font-bold text-text-dark">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda" 
                    className="w-full bg-[#F7F9FB] border border-border/50 rounded-xl px-5 py-4 outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all font-medium text-text-dark placeholder:font-normal placeholder:text-[#6B7280]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[15px] font-bold text-text-dark">Alamat Email</label>
                  <input 
                    type="email" 
                    placeholder="contoh@email.com" 
                    className="w-full bg-[#F7F9FB] border border-border/50 rounded-xl px-5 py-4 outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all font-medium text-text-dark placeholder:font-normal placeholder:text-[#6B7280]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-text-dark">Kategori Topik</label>
                <div className="relative">
                  <select className="w-full bg-[#F7F9FB] border border-border/50 rounded-xl px-5 py-4 outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all font-medium text-text-dark appearance-none cursor-pointer">
                    <option value="" disabled selected hidden>Pilih topik bahasan</option>
                    <option value="pertanyaan">Pertanyaan Umum</option>
                    <option value="bantuan_teknis">Bantuan Teknis</option>
                    <option value="pengembang">Dukungan Pengembang (Developer)</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#737782] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[15px] font-bold text-text-dark">Pesan Anda</label>
                <textarea 
                  placeholder="Tuliskan detail pertanyaan atau kendala Anda di sini..." 
                  rows="5"
                  className="w-full bg-[#F7F9FB] border border-border/50 rounded-xl px-5 py-4 outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all font-medium text-text-dark placeholder:font-normal placeholder:text-[#6B7280] resize-y"
                ></textarea>
              </div>

              <div className="mt-4 flex">
                <button type="submit" className="bg-primary hover:bg-accent text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors w-full md:w-auto">
                  Kirim Pesan Sekarang
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            
            <div className="bg-primary rounded-[32px] p-8 md:p-10 shadow-lg relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary-light/30 rounded-[100%] blur-[60px] pointer-events-none -mr-10 -mt-10"></div>
              
              <h3 className="text-[20px] font-bold text-[#A5C8FF] mb-8 relative z-10">Informasi Kontak</h3>
              
              <ul className="flex flex-col gap-8 relative z-10 list-none">
                <li className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="material-symbols-outlined text-white text-[20px]">location_on</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold">Alamat Kantor</span>
                    <span className="text-white/80 font-medium text-[15px] leading-relaxed">
                      Kementerian Komunikasi dan Digital, Jl. Medan Merdeka Barat No. 9, Jakarta Pusat 10110
                    </span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="material-symbols-outlined text-white text-[20px]">mail</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold">Email Utama</span>
                    <a href="mailto:support@igrs.id" className="text-white/80 font-medium text-[15px] hover:text-white transition-colors">
                      support@igrs.id
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="material-symbols-outlined text-white text-[20px]">call</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold">Hotline Bebas Pulsa</span>
                    <span className="text-white/80 font-medium text-[15px]">
                      0800-1-GAMING
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#F7F9FB] border border-border/40 rounded-[32px] p-8 relative overflow-hidden flex flex-col justify-end min-h-[220px] group cursor-pointer">
              <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,95,174,0.1)_0%,transparent_70%)]"></div>
              <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] text-primary-light/10 z-0">map</span>
              
              <div className="relative z-10 w-full">
                <button className="bg-white/80 hover:bg-white backdrop-blur-md text-primary font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all w-full shadow-sm border border-white">
                  Buka di Maps
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HubungiKamiPage;
