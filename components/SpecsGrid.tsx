'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';

export const SpecsGrid: React.FC = () => {
  const { technicalSpecifications, drivers } = CAR_DATA;

  return (
    <section id="specifications" className="relative bg-[#F8F9FC] py-20 sm:py-32 border-t border-zinc-200/80 overflow-hidden card-deck-perspective">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full Slide Text Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -25 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D9531E] uppercase font-bold block mb-2 sm:mb-3">
              02 // TECHNICAL MATRIX
            </span>
            <h2 className="font-orbitron text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              SPECIFICATION ARCHITECTURE
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono font-semibold">
            <div className="flex items-center gap-1.5 text-zinc-800">
              <span className="w-2 h-2 rounded-full bg-zinc-900" />
              <span>CHASSIS</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#D9531E]">
              <span className="w-2 h-2 rounded-full bg-[#D9531E]" />
              <span>2026 REGULATION</span>
            </div>
          </div>
        </motion.div>

        {/* Drivers Card Shuffle Pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {drivers.map((driver, idx) => (
            <motion.div
              key={driver.name}
              initial={{
                opacity: 0,
                x: idx === 0 ? -60 : 60,
                y: 35,
                rotate: idx === 0 ? -3.5 : 3.5,
                scale: 0.92,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: idx === 0 ? -1 : 1,
                boxShadow: '0 24px 48px -12px rgba(217, 83, 30, 0.18), 0 10px 20px -5px rgba(38, 11, 60, 0.08)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20, delay: idx * 0.12 }}
              className="shuffle-card p-5 sm:p-7 rounded-2xl bg-white flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <motion.div
                  whileHover={{ rotate: idx === 0 ? -10 : 10, scale: 1.1 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center font-orbitron font-black text-xl sm:text-2xl text-[#D9531E] shadow-sm shrink-0"
                >
                  #{driver.number}
                </motion.div>
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold block mb-0.5 truncate">
                    {driver.role}
                  </span>
                  <h3 className="font-orbitron text-lg sm:text-2xl font-bold text-zinc-950 truncate">
                    {driver.name}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-zinc-400 tracking-wider shrink-0 ml-2">
                {driver.country.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Specifications 9-Card Shuffle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {technicalSpecifications.map((spec, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={spec.label}
                initial={{
                  opacity: 0,
                  y: 45,
                  x: isEven ? -25 : 25,
                  rotate: isEven ? -2 : 2,
                  scale: 0.93,
                }}
                whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{
                  y: -7,
                  scale: 1.025,
                  rotate: isEven ? -0.8 : 0.8,
                  boxShadow: '0 20px 40px -10px rgba(217, 83, 30, 0.14), 0 8px 16px -4px rgba(38, 11, 60, 0.06)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 22,
                  delay: (index % 3) * 0.08,
                }}
                className="shuffle-card p-5 sm:p-6 rounded-2xl bg-white cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-zinc-400 uppercase truncate">
                    {spec.label}
                  </span>
                  {spec.isRegulatory ? (
                    <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-[#D9531E]/10 text-[#D9531E] border border-[#D9531E]/20 uppercase shrink-0 ml-2">
                      REGULATION
                    </span>
                  ) : (
                    <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-zinc-100 text-zinc-700 border border-zinc-200 uppercase shrink-0 ml-2">
                      VERIFIED
                    </span>
                  )}
                </div>

                <div className="font-orbitron text-base sm:text-xl font-bold text-zinc-950 group-hover:text-[#D9531E] transition-colors">
                  {spec.value}
                </div>

                {spec.detail && (
                  <p className="mt-1.5 text-xs text-zinc-500 font-rajdhani font-medium leading-normal">
                    {spec.detail}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecsGrid;
