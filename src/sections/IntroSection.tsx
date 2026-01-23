// src/sections/IntroSection.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger only once (best in a component or in main.tsx)
gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create a timeline for the text animations
    const tl = gsap.timeline({ paused: true });

    // First line (title) appears with fade + slight lift
    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out' }
    );

    // Other lines appear sequentially with overlap
    linesRef.current.forEach((line, index) => {
      if (line) {
        tl.fromTo(
          line,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' },
          `-=${0.8 + index * 0.12}` // progressive stagger with overlap
        );
      }
    });

    // Pin the section and link scroll position → timeline progress
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=120%',          // pin for ~1.2 viewport heights of scrolling
      pin: true,
      pinSpacing: true,
      scrub: 1.5,             // smooth, slightly delayed feel – academic pace
      animation: tl,
      // markers: true,       // uncomment only for debugging
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Subtle background image – industrial/IT theme, very low opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2340"
          alt="Abstract server room / network infrastructure"
          className="h-full w-full object-cover opacity-15 blur-sm scale-105"
          draggable={false}
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-slate-950/65" />
      </div>

      {/* Main content – centered vertically & horizontally */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl space-y-10 md:space-y-14 text-center font-light tracking-wide">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight"
          >
            Stage d’initiation
          </h1>

          <div className="space-y-6 md:space-y-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300">
            <p ref={(el) => { linesRef.current[0] = el; }}>
              Dual Borgstena Trim Tunisia
            </p>
            <p ref={(el) => { linesRef.current[1] = el; }}>
              Département informatique
            </p>
            <p
              ref={(el) => { linesRef.current[2] = el; }}
              className="pt-6 md:pt-10 text-2xl md:text-4xl lg:text-5xl font-normal text-white"
            >
              Adem Elwafi – TI – ISET Bizerte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}