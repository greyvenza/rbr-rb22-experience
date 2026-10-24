'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';
import { Instagram, Download, ArrowUpRight, Sparkles } from 'lucide-react';

export const SequenceActionsBar: React.FC = () => {
  return (
    <section className="relative z-20 bg-white border-y border-zinc-200/80 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 light-tech-grid overflow-hidden card-deck-perspective">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6">
        {/* Left Card: Follow on Instagram - Card Shuffle Slide from Left */}
        <motion.a
          href={CAR_DATA.creator.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -70, y: 35, rotate: -4, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{
            y: -8,
            scale: 1.02,
            rotate: -1,
            boxShadow: '0 24px 48px -12px rgba(217, 83, 30, 0.2), 0 12px 24px -6px rgba(38, 11, 60, 0.08)',
          }}
          whileTap={{ scale: 0.98, y: -2 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          className="shuffle-card flex-1 p-5 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 flex items-center justify-between group focus:outline-none cursor-pointer"
          aria-label="Follow Greyvenza on Instagram"
        >
          <div className="flex items-center gap-4 min-w-0">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:text-white group-hover:bg-[#D9531E] group-hover:border-[#D9531E] transition-all duration-300 shadow-sm shrink-0"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-mono tracking-widest text-[#D9531E] uppercase font-bold truncate">
                  OFFICIAL STUDIO SOCIAL
                </span>
                <Sparkles className="w-3 h-3 text-[#D9531E] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <span className="font-orbitron font-extrabold text-base sm:text-xl text-zinc-950 group-hover:text-[#D9531E] transition-colors leading-snug truncate">
                FOLLOW ON INSTAGRAM
              </span>
              <span className="text-xs text-zinc-500 font-mono truncate">
                @greyvenza // Visual Engineering
              </span>
            </div>
          </div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:bg-[#260B3C] group-hover:border-[#260B3C] transition-all duration-300 shrink-0 ml-3 shadow-sm">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </motion.a>

        {/* Right Card: Download Drive File - Card Shuffle Slide from Right */}
        <motion.a
          href={CAR_DATA.creator.driveDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 70, y: 35, rotate: 4, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{
            y: -8,
            scale: 1.02,
            rotate: 1,
            boxShadow: '0 24px 48px -12px rgba(38, 11, 60, 0.2), 0 12px 24px -6px rgba(217, 83, 30, 0.08)',
          }}
          whileTap={{ scale: 0.98, y: -2 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          className="shuffle-card flex-1 p-5 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 flex items-center justify-between group focus:outline-none cursor-pointer"
          aria-label="Download Drive File"
        >
          <div className="flex items-center gap-4 min-w-0">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:text-white group-hover:bg-[#260B3C] group-hover:border-[#260B3C] transition-all duration-300 shadow-sm shrink-0"
            >
              <Download className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-mono tracking-widest text-[#D9531E] uppercase font-bold truncate">
                  MEDIA & TELEMETRY ARCHIVE
                </span>
                <Sparkles className="w-3 h-3 text-[#D9531E] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <span className="font-orbitron font-extrabold text-base sm:text-xl text-zinc-950 group-hover:text-[#D9531E] transition-colors leading-snug truncate">
                DOWNLOAD DRIVE FILE
              </span>
              <span className="text-xs text-zinc-500 font-mono truncate">
                RB22 4K Media & Data Package
              </span>
            </div>
          </div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:bg-[#D9531E] group-hover:border-[#D9531E] transition-all duration-300 shrink-0 ml-3 shadow-sm">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default SequenceActionsBar;
