import { type ComponentType, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import FixedBackground from './components/FixedBackground';
import IntroSection from './sections/IntroSection';
import CompanySection from './sections/CompanySection';
import ContextSection from './sections/ContextSection';
import NetworkSection from './sections/NetworkSection';
import DhcpVlanSection from './sections/DhcpVlanSection';
import ServiceSection from './sections/ServiceSection';
import SupportSection from './sections/SupportSection';
import WorkstationsSection from './sections/WorkstationsSection';
import BackupPeripheralSection from './sections/BackupPeripheralSection';
import SkillsSection from './sections/SkillsSection';
import DifficultiesSection from './sections/DifficultiesSection';
import ConclusionSection from './sections/ConclusionSection';

type SlideProps = {
  isActive: boolean;
  slideIndex: number;
};

gsap.defaults({ duration: 0.6, ease: 'power2.out' });

// Array of all slide components with their indices
const SLIDE_COMPONENTS: Array<{ Component: ComponentType<SlideProps>; index: number }> = [
  { Component: IntroSection, index: 0 },
  { Component: ContextSection, index: 1 },
  { Component: CompanySection, index: 2 },
  { Component: ServiceSection, index: 3 },
  { Component: NetworkSection, index: 4 },
  { Component: WorkstationsSection, index: 5 },
  { Component: DhcpVlanSection, index: 6 },
  { Component: SupportSection, index: 7 },
  { Component: BackupPeripheralSection, index: 8 },
  { Component: SkillsSection, index: 9 },
  { Component: DifficultiesSection, index: 10 },
  { Component: ConclusionSection, index: 11 },
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // Ref to the slides container DOM element (we animate this with GSAP)
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Tracks whether a slide transition is in progress to prevent overlap
  const [isAnimating, setIsAnimating] = useState(false);

  // Index that we are animating towards; used to activate slide content only after animation completes
  const pendingIndex = useRef<number | null>(null);
  const totalSlides = SLIDE_COMPONENTS.length;

  // Navigate to next slide
  const goToNextSlide = () => {
    if (isAnimating) return; // one click = one animation
    const next = currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : currentSlideIndex;
    if (next === currentSlideIndex) return;

    // Start transition of the horizontal container only. Content activation happens after animation completes.
    setIsAnimating(true);
    pendingIndex.current = next;

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        // animate horizontal position in pixels (window.innerWidth per slide)
        x: -next * window.innerWidth,
        duration: 0.5,
        ease: 'power2.inOut',
        overwrite: 'auto',
        onComplete: () => {
          // Activate the new slide's content only after the container finished moving
          setCurrentSlideIndex(next);
          pendingIndex.current = null;
          setIsAnimating(false);
        }
      });
    }
  };

  // Navigate to previous slide
  const goToPrevSlide = () => {
    if (isAnimating) return; // guard
    const prev = currentSlideIndex > 0 ? currentSlideIndex - 1 : currentSlideIndex;
    if (prev === currentSlideIndex) return;

    setIsAnimating(true);
    pendingIndex.current = prev;

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: -prev * window.innerWidth,
        duration: 0.5,
        ease: 'power2.inOut',
        overwrite: 'auto',
        onComplete: () => {
          setCurrentSlideIndex(prev);
          pendingIndex.current = null;
          setIsAnimating(false);
        }
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    // Keyboard navigation should trigger the same guarded transitions
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex, totalSlides, isAnimating]);

  // Ensure container initial position and keep it synced if the window is resized.
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      // place container at correct x based on the active slide
      gsap.set(el, { x: -currentSlideIndex * window.innerWidth });
    }

    const handleResize = () => {
      if (containerRef.current) {
        // snap container to correct pixel position on resize
        gsap.set(containerRef.current, { x: - (pendingIndex.current ?? currentSlideIndex) * window.innerWidth });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlideIndex]);

  // Note: visual movement is handled by animating `containerRef` with GSAP.
  // We no longer set inline `transform` here.

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fixed background layer - NEVER moves or animates */}
      <FixedBackground />

      {/* Slide viewport - animated content layer above the background */}
      <div className="relative z-10 h-screen w-screen overflow-hidden">
        {/* Main slides container - animates horizontally */}
        <div 
          ref={containerRef}
          className="flex flex-row h-full"
          style={{ width: `${totalSlides * 100}vw` }}
        >
          {SLIDE_COMPONENTS.map(({ Component, index }) => (
            <div 
              key={index}
              className="w-screen h-screen shrink-0 overflow-y-auto"
            >
              <Component 
                // only mark a slide active after the container finished moving to it
                isActive={currentSlideIndex === index}
                slideIndex={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-200">
        {/* Previous button */}
        <button
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0 || isAnimating}
          className={`px-4 py-2 rounded-md ${
            currentSlideIndex === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Précédent <span className="text-xs ml-1">(← )</span>
        </button>

        {/* Slide counter */}
        <div className="text-sm font-medium text-gray-700 min-w-15 text-center">
          {currentSlideIndex + 1} / {totalSlides}
        </div>

        {/* Next button */}
        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1 || isAnimating}
          className={`px-4 py-2 rounded-md ${
            currentSlideIndex === totalSlides - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Suivant <span className="text-xs ml-1">(→ )</span>
        </button>
      </div>
    </div>
  );
}

export default App;