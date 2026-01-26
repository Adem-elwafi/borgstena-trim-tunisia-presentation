import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

export default function SupportSection({ isActive, slideIndex }: SlideProps) {
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
      className="min-h-screen flex items-center justify-center bg-slate-950 py-24"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto px-8">
        <h2 data-animate className="text-5xl font-bold text-sky-300 mb-12">
          Support technique
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Microsoft HelpDesk
              </h3>
              <p className="text-slate-400 text-lg">
                Plateforme centralisée de gestion
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Tickets
              </h3>
              <p className="text-slate-400 text-lg">
                Suivi des demandes utilisateurs
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Niveaux de support
              </h3>
              <p className="text-slate-400 text-lg">
                Escalade et priorisation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
