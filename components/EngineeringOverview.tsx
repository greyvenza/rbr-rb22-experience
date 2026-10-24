'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';
import { Wind, Cpu, Gauge, ChevronRight } from 'lucide-react';

export const EngineeringOverview: React.FC = () => {
  const { headline, subheading, themes } = CAR_DATA.engineeringOverview;

  const icons = [
    <Wind key="wind" className="w-5 h-5 text-[#D9531E]" />,
    <Cpu key="cpu" className="w-5 h-5 text-[#260B3C]" />,
    <Gauge key="gauge" className="w-5 h-5 text-[#D9531E]" />,
  ];

  // 3-Card deck shuffle entrance configurations
  const shuffleDeckConfigs = [
    { initial: { opacity: 0, x: -60, y: 50, rotate: -5, scale: 0.9 }, hoverRotate: -1.5 },
    { initial: { opacity: 0, y: 65, rotate: 0, scale: 0.88 }, hoverRotate: 0 },
    { initial: { opacity: 0, x: 60, y: 50, rotate: 5, scale: 0.9 }, hoverRotate: 1.5 },
  ];

  return (
    <section id="overview" className="relative bg-white py-20 sm:py-32 border-t border-zinc-200/80 light-tech-grid overflow-hidden card-deck-perspective">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full Slide Text Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D9531E] uppercase font-bold block mb-2 sm:mb-3">
            01 // ENGINEERING PHILOSOPHY
          </span>

          <h2 className="font-orbitron text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-3 sm:mb-4">
            {headline}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-rajdhani font-medium leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* 3 Animated Card Shuffle Block Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {themes.map((theme, index) => {
            const config = shuffleDeckConfigs[index];
            return (
              <motion.div
                key={theme.code}
                initial={config.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: '-70px' }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  rotate: config.hoverRotate,
                  boxShadow: '0 25px 50px -12px rgba(217, 83, 30, 0.16), 0 12px 24px -6px rgba(38, 11, 60, 0.08)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.12,
                }}
                className="shuffle-card p-6 sm:p-8 rounded-2xl bg-white flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shadow-sm"
                    >
                      {icons[index]}
                    </motion.div>
                    <span className="font-mono text-xs font-bold text-[#D9531E] tracking-widest uppercase">
                      {theme.code}
                    </span>
                  </div>

                  <h3 className="font-orbitron text-lg sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3 group-hover:text-[#D9531E] transition-colors">
                    {theme.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-rajdhani mb-5 sm:mb-6">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 border-t border-zinc-100 space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold block mb-1.5 sm:mb-2">
                    DEVELOPMENT DIRECTIVES:
                  </span>
                  {theme.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-700 font-rajdhani font-medium">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D9531E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringOverview;
