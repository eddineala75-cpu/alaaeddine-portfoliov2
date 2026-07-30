import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import SamplesSection from './components/SamplesSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070F1F] text-[#0B1F3A] dark:text-[#F4F5F7] transition-colors duration-500 font-sans selection:bg-[#B4922E] selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <SamplesSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
