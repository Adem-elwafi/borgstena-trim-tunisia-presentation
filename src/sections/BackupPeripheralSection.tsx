import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GlassPanel from '../components/GlassPanel';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

export default function BackupPeripheralSection({ isActive, slideIndex }: SlideProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(
        contentRef.current?.querySelectorAll('[data-animate]') ?? []
      );

      if (!targets.length) return;

      if (!isActive) {
        gsap.set(targets, { opacity: 0, y: 30 });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 30 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, contentRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <section
      data-active={isActive}
      data-slide={slideIndex}
      className="relative isolate min-h-screen flex items-center justify-center py-24 overflow-hidden"
    >
      {/* Glass panel container */}
      <GlassPanel />
      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-8">
        <h2 data-animate className="text-5xl font-bold text-sky-300 mb-12">
          Périphériques & sauvegarde
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-animate className="h-80 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80" 
              alt="Server backup"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4 text-xl text-slate-300">
              <p data-animate className="flex items-center gap-3">
                <span className="text-3xl">🖨️</span>
                <span>Scanners industriels (Velocity)</span>
              </p>
              <p data-animate className="flex items-center gap-3">
                <span className="text-3xl">💾</span>
                <span>Veeam Backup & Replication</span>
              </p>
              <p data-animate className="flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                <span>Protection des données</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
