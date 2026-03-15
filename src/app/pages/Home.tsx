import { HeroSection } from '../components/home/HeroSection';
import { LogoSection } from '../components/home/LogoSection';
import { AboutSection } from '../components/home/AboutSection';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { ProcessSection } from '../components/home/ProcessSection';
import { ContactSection } from '../components/home/ContactSection';

export function Home() {
  return (
    <div className="pt-24">
      <HeroSection />
      <LogoSection />
      <AboutSection />
      <FeaturedWork />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
