'use client';

import React, { useState, useEffect } from 'react';
import { CAR_DATA } from '@/data/carData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onExploreClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.06)]'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-4 border-b border-zinc-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Top (LEFT): G.GOKUL KRISHNAN */}
          <a
            href="#machine"
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
            aria-label="Creator: G.Gokul Krishnan"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#D9531E] shrink-0 shadow-[0_0_8px_rgba(217,83,30,0.4)]" />
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold tracking-wider text-xs sm:text-sm text-zinc-950 uppercase whitespace-nowrap">
                {CAR_DATA.creator.name}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase whitespace-nowrap">
                RB22 // 2026 F1 SHOWCASE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 shrink-0" aria-label="Main Navigation">
            {CAR_DATA.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[11px] uppercase tracking-[0.22em] font-semibold text-zinc-600 hover:text-zinc-950 transition-colors relative py-1 whitespace-nowrap group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D9531E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Top (RIGHT): GREYVENZA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={CAR_DATA.creator.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-[#D9531E]/10 border border-zinc-200/90 hover:border-[#D9531E] text-zinc-900 transition-all duration-300 flex items-center gap-1.5 group focus:outline-none shadow-sm"
              aria-label="Studio: GREYVENZA"
            >
              <span className="font-orbitron font-black text-xs sm:text-sm tracking-[0.25em] text-zinc-950 group-hover:text-[#D9531E] transition-colors whitespace-nowrap">
                {CAR_DATA.creator.brand}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#D9531E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-200 text-zinc-800 hover:text-zinc-950 lg:hidden focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <span className="text-[10px] font-mono tracking-widest text-[#D9531E] uppercase font-bold">
              CREATOR // {CAR_DATA.creator.name}
            </span>
            <span className="font-orbitron font-bold text-xs tracking-wider text-zinc-950">
              {CAR_DATA.creator.brand}
            </span>
          </div>
          {CAR_DATA.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block text-sm font-semibold tracking-widest text-zinc-700 hover:text-[#D9531E] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
