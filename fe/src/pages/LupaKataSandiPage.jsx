import React from 'react';
import { Link } from 'react-router-dom';

const LupaKataSandiPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#D9E2FF] relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#D4E3FF] rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#EAF0FF] rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full relative z-10">
        
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-[40px] font-black tracking-[-1.2px] text-primary mb-1">
            IGRS
          </h1>
          <p className="text-[#434751] font-bold text-[13px] tracking-[2px]">
            INDONESIA GAME RATING SYSTEM
          </p>
        </div>

        <div className="w-full max-w-[460px] bg-white rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden relative">
          
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-light to-[#89A2FF]"></div>
          
          <div className="p-10 text-center flex flex-col items-center">
            <div className="w-[64px] h-[64px] bg-[#ECEEF0] rounded-full flex items-center justify-center mb-6 shadow-inner border border-white">
              <span className="material-symbols-outlined text-primary-light text-[32px]">lock_reset</span>
            </div>
            
            <h2 className="text-[28px] font-bold text-[#191C1E] mb-3">
              Lupa Kata Sandi?
            </h2>
            <p className="text-text-body font-medium text-[15px] leading-relaxed max-w-[320px]">
              Masukkan email yang terdaftar. Kami akan mengirimkan instruksi untuk memulihkan akun Anda.
            </p>
          </div>

          <form className="px-10 pb-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[#191C1E]">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#737782]">mail</span>
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  className="w-full bg-[#F7F9FB] border border-[#E0E3E5] rounded-xl pl-12 pr-4 py-3.5 outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 transition-all font-medium text-text-dark placeholder:font-normal placeholder:text-[#C3C6D3]"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#0C408D] hover:bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#0C408D]/20 mt-2">
              Kirim Instruksi Pemulihan
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>

            <div className="border-t border-[#E0E3E5] pt-6 mt-2 text-center">
              <Link to="/masuk" className="inline-flex items-center gap-2 text-primary-light font-bold hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Kembali ke Masuk
              </Link>
            </div>

          </form>

        </div>
      </div>

      <footer className="w-full py-8 text-center flex justify-center gap-6 relative z-10">
        <a href="#" className="text-[14px] font-bold text-[#434751] hover:text-primary-light transition-colors">
          Bantuan
        </a>
        <span className="w-1 h-1 rounded-full bg-[#C3C6D3] my-auto"></span>
        <a href="#" className="text-[14px] font-bold text-[#434751] hover:text-primary-light transition-colors">
          Kebijakan Privasi
        </a>
      </footer>
    </main>
  );
};

export default LupaKataSandiPage;
