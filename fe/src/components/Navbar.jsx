import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Informasi Rating', href: '/informasi-rating' },
    { label: 'Konsultasi Adiksi', href: '/konsultasi-adiksi' },
    { label: 'Hubungi Kami', href: '/hubungi-kami' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav
            id="navbar"
            className="w-full sticky top-0 z-50 bg-[#F7F9FB]/70 border-b border-primary-light shadow-[0_4px_20px_rgba(12,64,141,0.12)] backdrop-blur-md"
        >
            <div className="flex items-center justify-between max-w-[1280px] h-[80px] px-6 mx-auto">
                <Link
                    to="/"
                    className="font-black text-2xl leading-8 tracking-[-1.2px] text-primary select-none"
                >
                    IGRS
                </Link>

                {isDesktop && (
                    <ul className="flex items-center gap-6 list-none">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className={`text-base leading-6 block transition-colors duration-200 ${
                                            isActive
                                                ? 'font-bold text-primary-light pb-1 border-b-2 border-accent-red'
                                                : 'font-medium text-text-body hover:text-primary-light'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}

                {isDesktop && (
                    <div className="flex items-center gap-3">
                        <button
                            id="btn-lang-toggle"
                            className="font-bold text-sm leading-5 tracking-[0.28px] text-text-body bg-transparent border-none p-0 cursor-pointer transition-colors duration-200 hover:text-primary-light"
                        >
                            ID/EN
                        </button>

                        <Link 
                            to="/masuk"
                            className="font-bold text-sm leading-5 tracking-[0.28px] text-white bg-accent border-none border-t border-white/30 rounded-lg px-6 py-3 cursor-pointer transition-[filter] duration-200 hover:brightness-110 inline-block text-center"
                        >
                            Masuk
                        </Link>
                    </div>
                )}

                {!isDesktop && (
                    <button
                        className="flex flex-col justify-center items-center gap-[6px] bg-transparent border-none p-2 cursor-pointer"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
                                mobileOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${
                                mobileOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
                                mobileOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </button>
                )}
            </div>

            {!isDesktop && (
                <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#F7F9FB]/95 ${
                        mobileOpen ? 'max-h-[400px] border-t border-primary-light/20' : 'max-h-0 border-none'
                    }`}
                >
                    <div className="py-4 px-6">
                        <ul className="flex flex-col gap-3 list-none">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`text-base leading-6 block py-2 pl-3 border-l-[3px] ${
                                                isActive
                                                    ? 'font-bold text-primary-light border-accent-red'
                                                    : 'font-medium text-text-body border-transparent hover:text-primary-light'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex items-center gap-3 mt-4 pl-3">
                            <button className="font-bold text-sm text-text-body bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary-light">
                                ID/EN
                            </button>
                            <Link to="/masuk" className="font-bold text-sm text-white bg-accent border-none border-t border-white/30 rounded-lg px-6 py-3 cursor-pointer transition-[filter] duration-200 hover:brightness-110 text-center block">
                                Masuk
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;