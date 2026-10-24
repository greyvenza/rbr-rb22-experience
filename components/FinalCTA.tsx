'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';
import { ArrowUp, Instagram, Download, ArrowUpRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { headline, subtext, primaryCTA, secondaryCTA, officialUrl } = CAR_DATA.finalCTA;

  const scrollToMachine = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="final-cta" className="relative bg-white py-20 sm:py-32 border-t border-zinc-200/80 overflow-hidden light-tech-grid card-deck-perspective">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full Slide Master Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.94, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="shuffle-card p-6 sm:p-12 md:p-16 rounded-3xl bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-center cursor-default"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D9531E] uppercase font-bold block mb-3 whitespace-nowrap"
          >
            ORACLE RED BULL RACING // 2026 DIGITAL EXPERIENCE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30, x: -15 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-orbitron text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-4"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto font-rajdhani font-medium mb-8 sm:mb-10 leading-relaxed px-2"
          >
            {subtext}
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <motion.button
              onClick={scrollToMachine}
              whileHover={{
                y: -4,
                scale: 1.03,
                boxShadow: '0 16px 36px -6px rgba(217, 83, 30, 0.45)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-[#D9531E] hover:bg-[#A73809] text-white font-orbitron text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(217,83,30,0.35)] whitespace-nowrap focus:outline-none cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-white" />
              <span>{primaryCTA}</span>
            </motion.button>

            <motion.a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.03,
                boxShadow: '0 16px 36px -6px rgba(38, 11, 60, 0.15)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-zinc-900 font-orbitron text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-sm cursor-pointer"
            >
              <span>{secondaryCTA}</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Quick Actions 2-Card Shuffle Deal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 pt-8 border-t border-zinc-100 text-xs font-mono">
            {/* Instagram Card */}
            <motion.a
              href={CAR_DATA.creator.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40, y: 25, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.025,
                rotate: -1,
                boxShadow: '0 20px 40px -10px rgba(217, 83, 30, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.25 }}
              className="shuffle-card p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 text-zinc-800 hover:text-[#D9531E] transition-colors flex items-center justify-between shadow-sm group cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#D9531E] group-hover:bg-[#D9531E] group-hover:text-white transition-colors shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[9px] font-mono text-[#D9531E] font-bold uppercase truncate">
                    OFFICIAL CREATOR
                  </div>
                  <span className="font-orbitron font-bold text-xs sm:text-sm text-zinc-950 truncate block">
                    @greyvenza
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#D9531E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
            </motion.a>

            {/* Download Drive File Card */}
            <motion.a
              href={CAR_DATA.creator.driveDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40, y: 25, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.025,
                rotate: 1,
                boxShadow: '0 20px 40px -10px rgba(38, 11, 60, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.3 }}
              className="shuffle-card p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 text-zinc-800 hover:text-[#D9531E] transition-colors flex items-center justify-between shadow-sm group cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#D9531E] group-hover:bg-[#260B3C] group-hover:text-white transition-colors shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[9px] font-mono text-[#D9531E] font-bold uppercase truncate">
                    DOWNLOAD PACKAGE
                  </div>
                  <span className="font-orbitron font-bold text-xs sm:text-sm text-zinc-950 truncate block">
                    DRIVE ARCHIVE
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#D9531E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
