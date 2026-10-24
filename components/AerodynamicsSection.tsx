'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAR_DATA } from '@/data/carData';
import { ChevronRight, Wind, Layers } from 'lucide-react';

export const AerodynamicsSection: React.FC = () => {
  const { headline, description, components } = CAR_DATA.aerodynamics;
  const [activeTab, setActiveTab] = useState(0);

  const activeComponent = components[activeTab];

  return (
    <section id="aerodynamics" className="relative bg-white py-20 sm:py-32 border-t border-zinc-200/80 light-tech-grid overflow-hidden card-deck-perspective">
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
            03 // ACTIVE AERODYNAMICS
          </span>
          <h2 className="font-orbitron text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-3 sm:mb-4">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-rajdhani font-medium leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
          {/* Tabs Column: 5-Card Stack Entrance */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3.5">
            {components.map((comp, idx) => {
              const isSelected = activeTab === idx;
              return (
                <motion.button
                  key={comp.title}
                  onClick={() => setActiveTab(idx)}
                  initial={{
                    opacity: 0,
                    x: -45,
                    y: 20,
                    rotate: -2 + idx * 0.8,
                    scale: 0.94,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{
                    x: 6,
                    y: -3,
                    scale: 1.02,
                    boxShadow: isSelected
                      ? '0 16px 36px -8px rgba(217, 83, 30, 0.22)'
                      : '0 12px 28px -6px rgba(0, 0, 0, 0.08)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 22,
                    delay: idx * 0.07,
                  }}
                  className={`shuffle-card w-full text-left p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-50/90 border-[#D9531E] shadow-[0_8px_25px_rgba(217,83,30,0.14)]'
                      : 'bg-white border-zinc-200/90 hover:border-zinc-300'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold shrink-0 transition-colors ${
                        isSelected ? 'text-[#D9531E]' : 'text-zinc-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-orbitron text-xs sm:text-sm font-bold tracking-wide truncate transition-colors ${
                        isSelected ? 'text-zinc-950 font-black' : 'text-zinc-700'
                      }`}
                    >
                      {comp.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9531E] animate-pulse" />
                    )}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'text-[#D9531E] translate-x-1' : 'text-zinc-400'
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Details Animated 3D Card Shuffle Swap Box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent.title}
                initial={{
                  opacity: 0,
                  x: 50,
                  y: 25,
                  rotate: 3.5,
                  scale: 0.93,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -45,
                  y: -20,
                  rotate: -3,
                  scale: 0.93,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: '0 28px 56px -12px rgba(217, 83, 30, 0.16), 0 12px 24px -6px rgba(38, 11, 60, 0.08)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 270,
                  damping: 22,
                }}
                className="shuffle-card p-6 sm:p-9 md:p-11 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.06)] cursor-pointer"
              >
                <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-zinc-100">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D9531E] uppercase font-bold">
                        {activeComponent.classification}
                      </span>
                      <span className="text-zinc-300">//</span>
                      <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#260B3C] uppercase font-bold">
                        CARD DECK SYSTEM
                      </span>
                    </div>
                    <h3 className="font-orbitron text-lg sm:text-2xl lg:text-3xl font-black text-zinc-950 truncate">
                      {activeComponent.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#D9531E] shadow-sm shrink-0 ml-3"
                  >
                    <Wind className="w-5 h-5 sm:w-7 sm:h-7" />
                  </motion.div>
                </div>

                <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-orbitron font-bold text-zinc-900">
                    <Layers className="w-4 h-4 text-[#D9531E] shrink-0" />
                    <span>{activeComponent.focus}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-rajdhani font-medium leading-relaxed">
                    {activeComponent.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-zinc-100">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold block mb-2.5">
                    TECHNICAL TELEMETRY VALUES:
                  </span>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {activeComponent.specs.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 sm:px-4 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-[11px] sm:text-xs font-mono font-bold text-zinc-800 shadow-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AerodynamicsSection;
