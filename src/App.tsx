// src/App.tsx
import IntroSection from './sections/IntroSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <main>
        <IntroSection />
        {/* Placeholder for future sections – will appear after scrolling past the pin */}
        <div className="h-screen bg-slate-900 flex items-center justify-center text-3xl">
          (Future content sections go here…)
        </div>
      </main>
    </div>
  );
}

export default App;