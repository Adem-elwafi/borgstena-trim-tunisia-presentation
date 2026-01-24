import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
      className="min-h-screen flex items-center justify-center bg-gray-50 py-24"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto px-8">
        <h2 data-animate className="text-5xl font-bold text-gray-900 mb-12">
          Service de stage
        </h2>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div data-animate className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Service informatique
              </h3>
              <p className="text-gray-600 text-lg">
                Gestion et maintenance des systèmes d'information
              </p>
            </div>
            
            <div data-animate className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Réseau et infrastructure
              </h3>
              <p className="text-gray-600 text-lg">
                Architecture réseau et serveurs
              </p>
            </div>
            
            <div data-animate className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Support utilisateurs
              </h3>
              <p className="text-gray-600 text-lg">
                Assistance technique quotidienne
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
