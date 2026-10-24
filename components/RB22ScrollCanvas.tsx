'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MotionValue } from 'framer-motion';

export interface RB22ScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames?: number;
  imageFolderPath?: string;
  filenameResolver?: (index: number, folderPath: string) => string[];
  className?: string;
}

export const RB22ScrollCanvas: React.FC<RB22ScrollCanvasProps> = ({
  scrollYProgress,
  totalFrames = 256,
  imageFolderPath = '/images/rb22-sequence',
  filenameResolver,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Array<HTMLImageElement | null>>([]);
  const loadedCountRef = useRef(0);
  const lastRenderedIndexRef = useRef<number>(-1);
  const animationFrameIdRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  const [isLoading, setIsLoading] = useState(true);

  const getCandidateUrls = useCallback(
    (index: number): string[] => {
      if (filenameResolver) {
        return filenameResolver(index, imageFolderPath);
      }
      const num = index + 1;
      const paddedNum = String(num).padStart(3, '0');
      return [
        `${imageFolderPath}/${num}.jpg`,
        `${imageFolderPath}/ezgif-frame-${paddedNum}.jpg`,
        `${imageFolderPath}/frame_${paddedNum}.jpg`,
      ];
    },
    [filenameResolver, imageFolderPath]
  );

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
      const logicalWidth = canvas.clientWidth || window.innerWidth;
      const logicalHeight = canvas.clientHeight || window.innerHeight;

      const expectedPhysicalW = Math.floor(logicalWidth * dpr);
      const expectedPhysicalH = Math.floor(logicalHeight * dpr);
      if (canvas.width !== expectedPhysicalW || canvas.height !== expectedPhysicalH) {
        canvas.width = expectedPhysicalW;
        canvas.height = expectedPhysicalH;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Studio backing fill
      ctx.fillStyle = '#07040B';
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);

      // Studio atmospheric lighting
      const gradient = ctx.createRadialGradient(
        logicalWidth / 2,
        logicalHeight * 0.52,
        logicalWidth * 0.04,
        logicalWidth / 2,
        logicalHeight * 0.52,
        logicalWidth * 0.58
      );
      gradient.addColorStop(0, 'rgba(43, 12, 66, 0.45)');
      gradient.addColorStop(0.3, 'rgba(217, 83, 30, 0.08)');
      gradient.addColorStop(0.7, 'rgba(29, 6, 46, 0.18)');
      gradient.addColorStop(1, 'rgba(7, 4, 11, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);

      let img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) {
        let found = false;
        for (let offset = 1; offset < totalFrames; offset++) {
          const prev = index - offset;
          if (prev >= 0 && imagesRef.current[prev]?.complete && (imagesRef.current[prev]?.naturalWidth ?? 0) > 0) {
            img = imagesRef.current[prev];
            found = true;
            break;
          }
          const next = index + offset;
          if (next < totalFrames && imagesRef.current[next]?.complete && (imagesRef.current[next]?.naturalWidth ?? 0) > 0) {
            img = imagesRef.current[next];
            found = true;
            break;
          }
        }
        if (!found) return;
      }

      if (img && img.naturalWidth > 0 && img.naturalHeight > 0) {
        const hRatio = logicalWidth / img.naturalWidth;
        const vRatio = logicalHeight / img.naturalHeight;
        const ratio = Math.min(hRatio, vRatio) * 0.96;

        const renderW = img.naturalWidth * ratio;
        const renderH = img.naturalHeight * ratio;
        const renderX = (logicalWidth - renderW) / 2;
        const renderY = (logicalHeight - renderH) / 2;

        ctx.drawImage(img, renderX, renderY, renderW, renderH);
        lastRenderedIndexRef.current = index;
      }
    },
    [totalFrames]
  );

  useEffect(() => {
    isMountedRef.current = true;
    imagesRef.current = new Array(totalFrames).fill(null);
    loadedCountRef.current = 0;

    let isCancelled = false;

    const loadSingleImage = (index: number): Promise<boolean> => {
      return new Promise((resolve) => {
        const candidateUrls = getCandidateUrls(index);
        let candidateIndex = 0;

        const tryNextUrl = () => {
          if (candidateIndex >= candidateUrls.length) {
            resolve(false);
            return;
          }

          const url = candidateUrls[candidateIndex];
          candidateIndex++;

          const img = new Image();
          img.src = url;

          img.onload = () => {
            if (isCancelled || !isMountedRef.current) return;
            imagesRef.current[index] = img;
            loadedCountRef.current += 1;

            if (index === 0 || (lastRenderedIndexRef.current === -1 && loadedCountRef.current === 1)) {
              drawFrame(0);
            }

            if (loadedCountRef.current >= Math.min(18, totalFrames)) {
              setIsLoading(false);
            }

            resolve(true);
          };

          img.onerror = () => {
            tryNextUrl();
          };
        };

        tryNextUrl();
      });
    };

    const startPreloading = async () => {
      const initialIndices = Array.from({ length: Math.min(15, totalFrames) }, (_, i) => i);
      await Promise.all(initialIndices.map(loadSingleImage));

      if (isCancelled) return;

      const remainingIndices: number[] = [];
      for (let i = 15; i < totalFrames; i++) {
        remainingIndices.push(i);
      }

      const chunkSize = 12;
      for (let i = 0; i < remainingIndices.length; i += chunkSize) {
        if (isCancelled) break;
        const chunk = remainingIndices.slice(i, i + chunkSize);
        await Promise.all(chunk.map(loadSingleImage));
      }

      if (!isCancelled && isMountedRef.current) {
        setIsLoading(false);
      }
    };

    startPreloading();

    return () => {
      isCancelled = true;
      isMountedRef.current = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [totalFrames, getCandidateUrls, drawFrame]);

  useEffect(() => {
    const handleScrollProgress = (latest: number) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const targetIndex = Math.min(
        totalFrames - 1,
        Math.floor(clamped * (totalFrames - 1))
      );

      if (targetIndex !== lastRenderedIndexRef.current) {
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
        animationFrameIdRef.current = requestAnimationFrame(() => {
          drawFrame(targetIndex);
        });
      }
    };

    handleScrollProgress(scrollYProgress.get());

    const unsubscribe = scrollYProgress.on('change', handleScrollProgress);
    return () => {
      unsubscribe();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [scrollYProgress, totalFrames, drawFrame]);

  useEffect(() => {
    const handleResize = () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      animationFrameIdRef.current = requestAnimationFrame(() => {
        const currentIndex = Math.max(0, lastRenderedIndexRef.current);
        drawFrame(currentIndex);
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-[#07040B] select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />

      {/* Pure visual loading ring */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#07040B]/85 backdrop-blur-md z-30 flex items-center justify-center transition-opacity duration-500">
          <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#D9531E] animate-spin" />
        </div>
      )}
    </div>
  );
};

export default RB22ScrollCanvas;
