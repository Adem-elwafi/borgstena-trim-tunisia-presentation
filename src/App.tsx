import { type ComponentType, useState } from 'react';
import gsap from 'gsap';
import './App.css';
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
  { Component: CompanySection, index: 1 },
  { Component: ContextSection, index: 2 },
  { Component: NetworkSection, index: 3 },
  { Component: DhcpVlanSection, index: 4 },
  { Component: ServiceSection, index: 5 },
  { Component: SupportSection, index: 6 },
  { Component: WorkstationsSection, index: 7 },
  { Component: BackupPeripheralSection, index: 8 },
  { Component: SkillsSection, index: 9 },
  { Component: DifficultiesSection, index: 10 },
  { Component: ConclusionSection, index: 11 },
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = SLIDE_COMPONENTS.length;

  // Navigate to next slide
  const goToNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  // Navigate to previous slide
  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  // Calculate transform value for slide movement
  const slideTransform = `translateX(-${currentSlideIndex * 100}vw)`;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-50">
      {/* Main slides container */}
      <div 
        className="flex flex-row h-full"
        style={{ 
          width: `${totalSlides * 100}vw`,
          transform: slideTransform
        }}
      >
        {SLIDE_COMPONENTS.map(({ Component, index }) => (
          <div 
            key={index}
            className="w-screen h-screen shrink-0 overflow-y-auto"
          >
            <Component 
              isActive={currentSlideIndex === index}
              slideIndex={index}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-200">
        {/* Previous button */}
        <button
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
          className={`px-4 py-2 rounded-md ${
            currentSlideIndex === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Précédent
        </button>

        {/* Slide counter */}
        <div className="text-sm font-medium text-gray-700 min-w-15 text-center">
          {currentSlideIndex + 1} / {totalSlides}
        </div>

        {/* Next button */}
        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`px-4 py-2 rounded-md ${
            currentSlideIndex === totalSlides - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default App;