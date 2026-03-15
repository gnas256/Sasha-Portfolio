import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sashaminh/', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@sashanguyen.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 pb-8 pt-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <div className={`h-px mb-8 ${isDark ? 'bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent' : 'bg-gradient-to-r from-transparent via-[rgba(7,6,14,0.08)] to-transparent'}`} />

        {/* Single row: name — socials — copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[15px] font-medium bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] bg-clip-text text-transparent">
            Sasha Nguyen
          </span>

          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark ? 'text-[rgba(255,255,255,0.4)] hover:text-white' : 'text-[rgba(7,6,14,0.35)] hover:text-[#07060e]'}`}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <span className={`text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.25)]' : 'text-[rgba(7,6,14,0.3)]'}`}>
            &copy; {currentYear}
          </span>
        </div>
      </div>
    </footer>
  );
}
