'use client';

import React from 'react';
import { CAR_DATA } from '@/data/carData';
import { ArrowUpRight, Instagram, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const { copyright, disclaimer, links } = CAR_DATA.footer;

  return (
    <footer className="relative bg-white border-t border-zinc-200 py-10 sm:py-14 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-zinc-100">
          {/* Identity & Creator */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D9531E] shrink-0" />
              <span className="font-orbitron font-extrabold text-sm tracking-wider text-zinc-950 whitespace-nowrap">
                {CAR_DATA.creator.name}
              </span>
              <span className="text-zinc-300">//</span>
              <span className="font-orbitron font-bold text-sm tracking-widest text-[#D9531E] whitespace-nowrap">
                {CAR_DATA.creator.brand}
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
              ORACLE RED BULL RACING RB22 // 2026 DIGITAL EXPERIENCE
            </span>
          </div>

          {/* Social and Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={CAR_DATA.creator.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-700 hover:text-[#D9531E] transition-colors font-semibold py-1"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D9531E]" />
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>

            <a
              href={CAR_DATA.creator.driveDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-700 hover:text-[#D9531E] transition-colors font-semibold py-1"
            >
              <Download className="w-3.5 h-3.5 text-[#D9531E]" />
              <span>DRIVE FILE</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors whitespace-nowrap py-1"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-zinc-400 gap-3 sm:gap-4">
          <span>{copyright}</span>
          <span className="text-[10px] max-w-md text-zinc-400 leading-normal">
            {disclaimer}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
