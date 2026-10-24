'use client';

import React from 'react';
import { MotionValue } from 'framer-motion';

interface RB22ExperienceProps {
  scrollYProgress?: MotionValue<number>;
  onExploreClick?: () => void;
}

export const RB22Experience: React.FC<RB22ExperienceProps> = () => {
  // Entire scrolling viewport is kept 100% clean with zero text or word overlays
  return null;
};

export default RB22Experience;
