import React from 'react';
import { Link } from 'react-router-dom';

const MasukPage = () => {
  return (
    <main className="w-full min-h-screen bg-white relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D6E3FF] rounded-full blur-[100px] opacity-60 pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#D1E4FF] rounded-full blur-[80px] opacity-50 pointer-events-none -z-10"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full relative z-10">
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-text-body font-bold hover:text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
          Kembali ke Beranda
        </Link>

        <div className="w-full max-w-[480px] bg-white border border-border/50 rounded-2xl shadow-xl shadow-primary/5 overflow-hidden">
          
          <div className="p-10 pb-6 text-center flex flex-col items-center border-b border-border/40 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#004080]"></div>
            
            <div className="w-[56px] h-[56px] bg-[#004080] rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[#83AEF5] text-3xl">sports_esports</span>
            </div>
            
            <h1 className="text-[28px] font-bold text-[#191C1E] mb-2 tracking-tight">Selamat Datang</h1>
            <p className="text-[#424750] font-medium text-[15px] leading-relaxed max-w-[300px]">
              Masuk untuk mengelola penilaian dan sertifikasi game Anda.
            </p>
          </div>

          <form className="p-10 pt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[#191C1E]">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#737781]">mail</span>
                <input 
                  type="email" 
                  placeholder="nama@perusahaan.com" 
                  className="w-full bg-white border border-border rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-[#0061A4] focus:ring-1 focus:ring-[#0061A4] transition-all font-medium text-text-dark placeholder:font-normal placeholder:text-[#737781]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-[14px] font-bold text-[#191C1E]">Kata Sandi</label>
                <Link to="/lupa-kata-sandi" className="text-[14px] font-bold text-[#0061A4] hover:underline">
                  Lupa kata sandi?
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#737781]">lock</span>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-white border border-border rounded-xl pl-12 pr-12 py-3.5 outline-none focus:border-[#0061A4] focus:ring-1 focus:ring-[#0061A4] transition-all font-medium text-text-dark placeholder:font-normal placeholder:text-[#737781] tracking-widest"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737781] hover:text-text-dark transition-colors">
                  <span className="material-symbols-outlined">visibility_off</span>
                </button>
              </div>
            </div>

            <div className="bg-[#F2F4F6] border border-border/50 rounded-xl p-4 flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <div className="w-[28px] h-[28px] bg-white border-2 border-[#C3C6D3] rounded flex items-center justify-center cursor-pointer hover:border-[#0061A4] transition-colors"></div>
                <span className="text-[14px] font-medium text-[#424750]">Saya bukan robot</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-[#0061A4] text-2xl">cached</span>
                <span className="text-[10px] text-[#424750] font-medium mt-1">reCAPTCHA</span>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#002A58] hover:bg-[#001D3D] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 shadow-sm">
              Masuk
              <span className="material-symbols-outlined text-[20px]">login</span>
            </button>

            <div className="text-center mt-2">
              <span className="text-[14px] font-medium text-[#424750]">Belum terdaftar sebagai Developer? </span>
              <a href="#" className="text-[14px] font-bold text-[#0061A4] hover:underline">
                Daftar Sekarang
              </a>
            </div>
          </form>

        </div>
      </div>

      <footer className="w-full py-6 text-center border-t border-border/30 relative z-10 bg-white/80 backdrop-blur-sm">
        <p className="text-[14px] font-medium text-[#424750]">
          © 2026 Indonesia Game Rating System. Kementerian Komunikasi dan Digital.
        </p>
      </footer>
    </main>
  );
};

export default MasukPage;
