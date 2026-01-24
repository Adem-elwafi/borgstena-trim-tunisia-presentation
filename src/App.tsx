import IntroSection from './sections/IntroSection';
import ContextSection from './sections/ContextSection';
import CompanySection from './sections/CompanySection';
import ServiceSection from './sections/ServiceSection';
import NetworkSection from './sections/NetworkSection';
import WorkstationsSection from './sections/WorkstationsSection';
import DhcpVlanSection from './sections/DhcpVlanSection';
import SupportSection from './sections/SupportSection';
import BackupPeripheralSection from './sections/BackupPeripheralSection';
import SkillsSection from './sections/SkillsSection';
import DifficultiesSection from './sections/DifficultiesSection';
import ConclusionSection from './sections/ConclusionSection';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <IntroSection />
        <ContextSection />
        <CompanySection />
        <ServiceSection />
        <NetworkSection />
        <WorkstationsSection />
        <DhcpVlanSection />
        <SupportSection />
        <BackupPeripheralSection />
        <SkillsSection />
        <DifficultiesSection />
        <ConclusionSection />
      </main>
    </div>
  );
}

export default App;