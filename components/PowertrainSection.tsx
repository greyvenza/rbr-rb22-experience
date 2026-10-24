'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';
import { Zap, Gauge, BatteryCharging, Flame } from 'lucide-react';

export const PowertrainSection: React.FC = () => {
  const { headline, subtext, features } = CAR_DATA.powertrain;

  const featureIcons = [
    <Zap key="zap" className="w-5 h-5 text-[#D9531E]" />,
    <Flame key="flame" className="w-5 h-5 text-[#260B3C]" />,
    <Gauge key="gauge" className="w-5 h-5 text-[#D9531E]" />,
    <BatteryCharging key="battery" className="w-5 h-5 text-[#260B3C]" />,
  ];

  // 4-Card deck deal shuffle configs
  const shuffleDeckConfigs = [
    { initial: { opacity: 0, x: -55, y: 45, rotate: -4.5, scale: 0.9 }, hoverRotate: -1.5 },
    { initial: { opacity: 0, x: -20, y: 55, rotate: -1.5, scale: 0.92 }, hoverRotate: -0.5 },
    { initial: { opacity: 0, x: 20, y: 55, rotate: 1.5, scale: 0.92 }, hoverRotate: 0.5 },
    { initial: { opacity: 0, x: 55, y: 45, rotate: 4.5, scale: 0.9 }, hoverRotate: 1.5 },
  ];

  return (
    <section id="powertrain" className="relative bg-[#F8F9FC] py-20 sm:py-32 border-t border-zinc-200/80 overflow-hidden card-deck-perspective">
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
            04 // PROPULSION MATRIX
          </span>

          <h2 className="font-orbitron text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-3 sm:mb-4">
            {headline}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-rajdhani font-medium leading-relaxed">
            {subtext}
          </p>
        </motion.div>

        {/* 50:50 Parity Split Master Card Shuffle */}
        <motion.div
          initial={{ opacity: 0, y: 55, scale: 0.93 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-70px' }}
          whileHover={{
            y: -6,
            scale: 1.015,
            boxShadow: '0 25px 50px -12px rgba(217, 83, 30, 0.16), 0 12px 24px -6px rgba(38, 11, 60, 0.08)',
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="shuffle-card mb-8 sm:mb-12 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.05)] space-y-5 sm:space-y-6 cursor-pointer"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9531E] animate-pulse" />
              <span className="font-orbitron font-extrabold text-xs sm:text-sm md:text-base tracking-wider text-zinc-950">
                2026 HYBRID ARCHITECTURE // 50:50 POWER SPLIT
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#D9531E] tracking-wider">
              350 kW MGU-K ELECTRIC INTEGRATION
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap justify-between gap-1 text-[11px] sm:text-xs font-mono font-bold">
              <span className="text-zinc-900">1.6L V6 TURBO ICE (~50%)</span>
              <span className="text-[#D9531E]">350 kW ELECTRIC MGU-K (~50%)</span>
            </div>
            <div className="h-4 sm:h-5 w-full flex rounded-full overflow-hidden bg-zinc-100 border border-zinc-200 p-0.5 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '52%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-[#260B3C] rounded-l-full"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '48%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
                className="h-full bg-[#D9531E] rounded-r-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-[10px] sm:text-[11px] font-mono text-zinc-500 font-medium gap-1">
              <span>Drop-in 100% Sustainable Fuel Blend</span>
              <span>Zero-lag Kinetic Energy Recovery Boost</span>
            </div>
          </div>
        </motion.div>

        {/* 4 Feature Animated Card Shuffle Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feat, index) => {
            const config = shuffleDeckConfigs[index];
            return (
              <motion.div
                key={feat.title}
                initial={config.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{
                  y: -9,
                  scale: 1.03,
                  rotate: config.hoverRotate,
                  boxShadow: '0 24px 48px -10px rgba(217, 83, 30, 0.18), 0 10px 20px -5px rgba(38, 11, 60, 0.08)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className="shuffle-card p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.12 }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shadow-sm"
                    >
                      {featureIcons[index]}
                    </motion.div>
                    <span className="text-[10px] font-mono font-bold text-[#D9531E] tracking-wider">
                      0{index + 1} // SUBSYSTEM
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-1.5 sm:mb-2">
                    <span className="font-orbitron text-2xl sm:text-4xl font-black text-zinc-950">
                      {feat.metric}
                    </span>
                    <span className="font-orbitron text-xs sm:text-sm font-bold text-[#D9531E]">
                      {feat.unit}
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
                    {feat.subtext}
                  </div>

                  <h3 className="font-orbitron text-sm sm:text-base font-bold text-zinc-950 mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-zinc-600 font-rajdhani font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-5 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>TELEMETRY ACTIVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9531E]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PowertrainSection;
