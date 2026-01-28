import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GlassPanelProps {
  children?: React.ReactNode;
}

/**
 * GlassPanel
 * 
 * Reusable glass container wrapper for all slide content.
 * Provides consistent visual styling across all sections:
 * - Semi-transparent background
 * - Soft backdrop blur
 * - Rounded corners
 * - Subtle white border
 * 
 * Includes a subtle infinite micro-animation (opacity breathing)
 * that creates a gentle, breathing effect without distracting.
 */
export default function GlassPanel({ children }: GlassPanelProps) {
  const glassRef = useRef<HTMLDivElement | null>(null);

  // Glass breathing animation (infinite, independent of slide navigation)
  useEffect(() => {
    if (!glassRef.current) return;

    const glassCtx = gsap.context(() => {
      gsap.to(glassRef.current, {
        opacity: 0.9,
        duration: 8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, glassRef);

    return () => glassCtx.revert();
  }, []);

  return (
    <>
      <div
        ref={glassRef}
        className="absolute inset-4 rounded-xl border border-white/5 backdrop-blur-sm bg-white/2 opacity-85"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
