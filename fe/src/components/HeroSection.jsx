import React, { useState, useEffect } from 'react';
import { fetchRatings } from '../services/api';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState([
    { value: '—', label: 'Gim Terdaftar' },
    { value: '—', label: 'Publisher' },
    { value: '—', label: 'Kategori Rating' },
  ]);

  useEffect(() => {
    fetchRatings()
      .then((data) => {
        const allGames = data.flatMap((r) => r.games || []);
        const totalGames = allGames.length;
        const uniquePublishers = new Set(allGames.map((g) => g.publisher)).size;
        const totalRatings = data.length;

        setStats([
          { value: `${totalGames}+`, label: 'Gim Terdaftar' },
          { value: `${uniquePublishers}+`, label: 'Publisher' },
          { value: `${totalRatings}`, label: 'Kategori Rating' },
        ]);
      })
      .catch((err) => {
        console.error('Gagal memuat statistik:', err);
      });
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-primary">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,rgba(30,119,209,0.3)_0%,transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,#002A66_100%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto pt-20 px-6 pb-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center mb-10 bg-white/10 border border-white/30 rounded-full py-1 px-3 gap-1 backdrop-blur-md">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4.5H5.5V6.5H4V4.5H2V3H4V1H5.5V3H7.5V4.5ZM14.5 5.75C14.5 6.44 13.94 7 13.25 7C12.56 7 12 6.44 12 5.75C12 5.06 12.56 4.5 13.25 4.5C13.94 4.5 14.5 5.06 14.5 5.75ZM17 3.25C17 3.94 16.44 4.5 15.75 4.5C15.06 4.5 14.5 3.94 14.5 3.25C14.5 2.56 15.06 2 15.75 2C16.44 2 17 2.56 17 3.25ZM18.48 0H1.52C0.68 0 0 0.68 0 1.52V6.34C0 10.58 3.42 14 7.66 14C9.34 14 10.92 13.4 12.16 12.32L12.34 12.16C13.5 11.14 15 10.58 16.54 10.52L17.14 10.5C18.72 10.4 20 9.08 20 7.48V1.52C20 0.68 19.32 0 18.48 0Z" fill="#FFB4AA"/>
          </svg>
          <span className="font-bold text-sm leading-5 tracking-[0.28px] text-white">
            Indonesia Game Rating System
          </span>
        </div>

        <h1 className="mb-8 font-extrabold text-[clamp(28px,5vw,48px)] leading-[1.17] tracking-[-0.96px] text-white">
          Temukan Gim yang Tepat
          <br />
          <span className="text-text-hero-sub">untuk Usia Anda</span>
        </h1>

        <p className="mb-12 font-normal text-[clamp(14px,2vw,18px)] leading-7 text-text-hero-sub max-w-[672px]">
          Sistem klasifikasi resmi pemerintah Indonesia untuk memastikan pengalaman
          bermain gim yang aman, nyaman, dan sesuai umur.
        </p>

        <div className="w-full max-w-[672px] mb-12 relative">
          <div className="flex items-center relative bg-bg-light border border-border rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] py-[13px] pr-6 pl-16">
            <svg
              className="absolute left-6 top-1/2 -translate-y-1/2"
              width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#737782"/>
            </svg>

            <input
              type="text"
              placeholder="Cari nama gim, publisher, atau rating..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none bg-transparent border-none font-normal text-base leading-[22px] text-text-dark"
            />

            <button
              className="shrink-0 ml-4 bg-accent-dark text-white font-normal text-base leading-6 rounded-lg px-10 py-3 border-none cursor-pointer transition-[filter] duration-200 hover:brightness-110"
            >
              Cari Gim
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-bg-light/10 border border-white/30 rounded-lg p-3 backdrop-blur-md min-w-[111px]"
            >
              <div className="font-bold text-[clamp(24px,3vw,32px)] leading-10 tracking-[-0.32px] text-white tabular-nums">
                {stat.value}
              </div>
              <div className="font-medium text-xs leading-4 text-text-hero-sub">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
