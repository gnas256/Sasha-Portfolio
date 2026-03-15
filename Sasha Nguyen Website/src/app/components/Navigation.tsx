import { Link, useLocation } from 'react-router';
import imgImage from "../../assets/15bc453d9f2282c06c78b2da534b1a9d528b0d3a.png";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`rounded-3xl px-6 py-3.5 transition-all duration-500 ${
            isScrolled
              ? isDark
                ? 'backdrop-blur-2xl bg-[rgba(7,6,14,0.55)] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)] saturate-[1.8]'
                : 'backdrop-blur-2xl bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.6)] shadow-[0_8px_32px_rgba(152,16,250,0.06),0_2px_8px_rgba(0,0,0,0.04)] saturate-[1.6]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <div className="relative flex items-center justify-between">
            {/* Logo/Name */}
            <Link to="/" className="flex items-center gap-3 group min-w-0 shrink-0">
              {/* Desktop: avatar + name */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={imgImage} 
                  alt="Sasha Nguyen" 
                  className={`w-10 h-10 rounded-full object-cover relative z-10 ${isDark ? 'border border-white/30' : 'border border-[rgba(7,6,14,0.15)]'}`}
                />
              </div>
              <div className="hidden md:block">
                <span className={`text-base font-medium bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#C27AFF] via-[#00d3f3] to-[#C27AFF]' : 'bg-gradient-to-r from-[#7a0dd4] via-[#0088a8] to-[#7a0dd4]'}`}>
                  Sasha Nguyen
                </span>
              </div>
              {/* Mobile: text logo only */}
              <span className={`md:hidden text-[15px] font-medium bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#C27AFF] via-[#00d3f3] to-[#C27AFF]' : 'bg-gradient-to-r from-[#7a0dd4] via-[#0088a8] to-[#7a0dd4]'}`}>
                Sasha Nguyen
              </span>
            </Link>

            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 text-[15px] font-normal ${ 
                    location.pathname === item.path
                      ? 'text-white'
                      : isDark
                        ? 'text-[rgba(255,255,255,0.6)] hover:text-white'
                        : 'text-[rgba(7,6,14,0.5)] hover:text-[#07060e]'
                  }`}
                >
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9810fa] to-[#00b8db] rounded-full opacity-80" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 ${isDark ? 'hover:bg-white/10 text-[rgba(255,255,255,0.6)] hover:text-white' : 'hover:bg-[rgba(7,6,14,0.06)] text-[rgba(7,6,14,0.5)] hover:text-[#07060e]'}`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <a
                href="https://www.linkedin.com/in/sashaminh/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2 rounded-full overflow-hidden group ml-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9810fa] to-[#00b8db] transition-transform group-hover:scale-105" />
                <span className="relative z-10 text-white text-[15px] font-normal">Work with me</span>
              </a>
            </div>

            {/* Mobile: Theme toggle + Menu */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-[rgba(7,6,14,0.06)]'}`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-[rgba(7,6,14,0.06)]'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 pt-4 space-y-2 ${isDark ? 'border-t border-white/10' : 'border-t border-[rgba(7,6,14,0.08)]'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-all text-[15px] font-normal ${ 
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-[#9810fa] to-[#00b8db] text-white'
                      : isDark
                        ? 'text-[rgba(255,255,255,0.6)] hover:bg-white/10'
                        : 'text-[rgba(7,6,14,0.6)] hover:bg-[rgba(7,6,14,0.04)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/sashaminh/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-lg bg-gradient-to-r from-[#9810fa] to-[#00b8db] text-white text-center text-[15px] font-normal"
              >
                Work with me
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}