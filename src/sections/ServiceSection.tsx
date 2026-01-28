import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GlassPanel from '../components/GlassPanel';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

export default function ServiceSection({ isActive, slideIndex }: SlideProps) {
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
          Service de stage
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Service informatique
              </h3>
              <p className="text-slate-400 text-lg">
                Gestion et maintenance des systèmes d'information
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Réseau et infrastructure
              </h3>
              <p className="text-slate-400 text-lg">
                Architecture réseau et serveurs
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Support utilisateurs
              </h3>
              <p className="text-slate-400 text-lg">
                Assistance technique quotidienne
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
