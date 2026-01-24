import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

export default function IntroSection({ isActive, slideIndex }: SlideProps) {
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
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-24"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto px-8 text-center">
        <h1 data-animate className="text-7xl font-bold mb-8">
          Stage d'initiation
        </h1>
        
        <div className="space-y-6 text-2xl text-gray-300">
          <p data-animate className="text-4xl font-semibold text-white">
            Dual Borgstena Trim Tunisia
          </p>
          
          <p data-animate className="text-xl">
            Département informatique
          </p>
          
          <div data-animate className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-2xl">
              Adem Elwafi – DSI – ISET Bizerte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}