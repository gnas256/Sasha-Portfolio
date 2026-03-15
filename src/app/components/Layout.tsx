import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ParticleBackground } from './ParticleBackground';
import { useTheme } from './ThemeContext';

export function Layout() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${isDark ? 'bg-[#07060e] text-white' : 'bg-[#f8f7ff] text-[#07060e]'}`}>
      {/* Interactive particle universe background - both modes */}
      <ParticleBackground />
      
      {/* Static gradient accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {isDark ? (
          <>
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgba(152,16,250,0.04)] rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[rgba(0,184,219,0.03)] rounded-full blur-[150px]" />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[rgba(152,16,250,0.03)] rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[rgba(0,184,219,0.02)] rounded-full blur-[150px]" />
          </>
        )}
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        <Outlet />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}