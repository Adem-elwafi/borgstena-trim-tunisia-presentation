import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

export default function ConclusionSection({ isActive, slideIndex }: SlideProps) {
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
      <div ref={contentRef} className="max-w-5xl mx-auto px-8 text-center">
        <h2 data-animate className="text-5xl font-bold text-gray-900 mb-12">
          Conclusion
        </h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="space-y-6 text-2xl text-gray-700">
            <p data-animate className="flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span>
              <span>Stage enrichissant</span>
            </p>
            <p data-animate className="flex items-center justify-center gap-3">
              <span className="text-4xl">🎯</span>
              <span>Première expérience professionnelle</span>
            </p>
            <p data-animate className="flex items-center justify-center gap-3">
              <span className="text-4xl">🚀</span>
              <span>Impact positif sur l'avenir</span>
            </p>
          </div>
          
          <div data-animate className="mt-16 pt-16 border-t border-gray-300">
            <p className="text-xl text-gray-600">
              Merci pour votre attention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
