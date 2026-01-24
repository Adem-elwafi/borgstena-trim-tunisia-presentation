import { useState } from 'react';
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

// Array of all slide components in order
const SLIDES = [
  IntroSection,
  CompanySection,
  ContextSection,
  NetworkSection,
  DhcpVlanSection,
  ServiceSection,
  SupportSection,
  WorkstationsSection,
  BackupPeripheralSection,
  SkillsSection,
  DifficultiesSection,
  ConclusionSection,
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = SLIDES.length;

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
        {SLIDES.map((SlideComponent, index) => (
          <div 
            key={index}
            className="w-screen h-screen flex-shrink-0 overflow-y-auto"
          >
            <SlideComponent />
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
        <div className="text-sm font-medium text-gray-700 min-w-[60px] text-center">
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