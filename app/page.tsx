'use client';

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { RB22ScrollCanvas } from '@/components/RB22ScrollCanvas';
import { SequenceActionsBar } from '@/components/SequenceActionsBar';
import { EngineeringOverview } from '@/components/EngineeringOverview';
import { SpecsGrid } from '@/components/SpecsGrid';
import { AerodynamicsSection } from '@/components/AerodynamicsSection';
import { PowertrainSection } from '@/components/PowertrainSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const sequenceContainerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sequenceContainerRef,
    offset: ['start start', 'end end'],
  });

  const handleExploreClick = () => {
    if (sequenceContainerRef.current) {
      const start = sequenceContainerRef.current.offsetTop;
      const totalDist = sequenceContainerRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: start + totalDist * 0.34,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-zinc-950 selection:bg-[#D9531E] selection:text-white">
      {/* Top Navbar: G.GOKUL KRISHNAN on Left & GREYVENZA on Right */}
      <Navbar onExploreClick={handleExploreClick} />

      {/* =========================================================================
          600vh SCROLL SEQUENCE: PURE VISUAL SHOWCASE (ZERO WORDS)
          Enclosed in a Studio Stage Pod with Automatic Mobile Adaptation
         ========================================================================= */}
      <section
        id="machine"
        ref={sequenceContainerRef}
        className="relative h-[600vh] w-full bg-white"
        aria-label="Oracle Red Bull Racing RB22 360-degree Visual Showcase"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white flex items-center justify-center p-2 sm:p-6 lg:p-8">
          <div className="w-full h-full max-w-7xl rounded-xl sm:rounded-3xl bg-[#07040B] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] border border-zinc-200/80 overflow-hidden relative flex items-center justify-center">
            {/* High-DPI Rotating Canvas — Zero words or text overlays */}
            <RB22ScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={256}
              imageFolderPath="/images/rb22-sequence"
              className="z-10"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          BELOW SCROLLING: FOLLOW ON INSTAGRAM & OPPOSITE DOWNLOAD DRIVE FILE
          Animated Theme Block Boxes with Automatic Mobile Responsiveness
         ========================================================================= */}
      <SequenceActionsBar />

      {/* Structured Sections with Responsive Animated Theme Block Boxes */}
      <EngineeringOverview />

      <SpecsGrid />

      <AerodynamicsSection />

      <PowertrainSection />

      <FinalCTA />

      <Footer />
    </main>
  );
}
