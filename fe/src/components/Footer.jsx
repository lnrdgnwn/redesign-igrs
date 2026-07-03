import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Informasi Rating', href: '/informasi-rating' },
  { label: 'Konsultasi Adiksi', href: '/konsultasi-adiksi' },
  { label: 'Hubungi Kami', href: '/hubungi-kami' },
  { label: 'Kebijakan Privasi', href: '/#kebijakan-privasi' },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-primary border-t border-white/15 shadow-[0_-8px_30px_rgba(12,64,141,0.15)]"
    >
      <div className="max-w-[1280px] mx-auto py-16 px-6">
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          <div className="max-w-[395px]">
            <div className="font-bold text-[32px] leading-10 tracking-[-0.32px] text-white mb-3">
              IGRS
            </div>
            <p className="font-medium text-xs leading-4 text-text-footer/80">
              Sistem klasifikasi umur resmi untuk industri permainan interaktif di Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-normal text-base leading-6 text-text-footer/80 opacity-90 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="text-right">
              <Link
                to="/#syarat-ketentuan"
                className="font-normal text-base leading-6 text-text-footer/80 opacity-90 transition-colors duration-200 hover:text-white"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-10 text-center">
          <p className="font-medium text-xs leading-4 text-text-footer/60">
            © 2026 Indonesia Game Rating System (IGRS). Kementerian Komunikasi dan Digital Republik Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
