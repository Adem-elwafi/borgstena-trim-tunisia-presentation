import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

export default function ContextSection({ isActive, slideIndex }: SlideProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(
        contentRef.current?.querySelectorAll('[data-animate]') ?? []
      );

      if (!targets.length) return;

      // Reset state when the slide becomes inactive
      if (!isActive) {
        gsap.set(targets, { opacity: 0, y: 30 });
        return;
      }

      // Animate content when the slide becomes active
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
          Contexte du stage
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Étudiant – 1ère année TI
              </h3>
              <p className="text-slate-400 text-lg">
                Formation en techniques de l'informatique
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Stage d'initiation
              </h3>
              <p className="text-slate-400 text-lg">
                Première immersion en entreprise
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Découverte du milieu professionnel
              </h3>
              <p className="text-slate-400 text-lg">
                Observer et participer aux activités du service IT
              </p>
            </div>
            
            <div data-animate className="p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Objectif
              </h3>
              <p className="text-slate-400 text-lg">
                Acquérir des compétences pratiques et comprendre le fonctionnement d'un département informatique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}