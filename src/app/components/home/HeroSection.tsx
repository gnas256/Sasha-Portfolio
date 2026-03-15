import { ArrowRight, Award, Users, Package } from 'lucide-react';
import { Link } from 'react-router';
import imgInnerScreen from "figma:asset/8299b55164ce0ba78b81349df97552077285eb8a.png";
import { HeroWorldMap } from './HeroWorldMap';
import { DemoWaveRings } from './DemoWaveRings';
import { useTheme } from '../ThemeContext';

export function HeroSection() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-8 pt-12 md:pt-16">
      {/* Interactive particle world map background — extra padding so waves aren't clipped */}
      <div className="absolute -inset-y-32 inset-x-0 pointer-events-none overflow-visible">
        <HeroWorldMap isDark={isDark} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-8 space-y-5">
          {/* Stats cards - moved to top with glassmorphism */}
          {/* Mobile: compact inline pills on one row | Desktop: card style */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6">
            {/* Mobile: single-line pill strip */}
            <div className={`flex md:hidden items-center gap-0 rounded-full backdrop-blur-xl border overflow-hidden ${
              isDark
                ? 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'
                : 'bg-white/70 border-[rgba(120,60,200,0.12)]'
            }`}>
              {[
                { icon: Award, value: '10+ Yrs' },
                { icon: Users, value: '4 Startups' },
                { icon: Package, value: '25+ Products' },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.value} className="flex items-center">
                    {idx > 0 && (
                      <div className={`w-px h-4 ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(7,6,14,0.1)]'}`} />
                    )}
                    <div className="flex items-center gap-1.5 px-3 py-2">
                      <Icon size={12} className={isDark ? 'text-[#C27AFF]' : 'text-[#9810fa]'} />
                      <span className={`text-[11px] tracking-[-0.2px] ${isDark ? 'text-[rgba(255,255,255,0.7)]' : 'text-[#1a0a3e]/80'}`}>{stat.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop: original card style */}
            {[
              { icon: Award, value: '10+ Years', label: 'Experience' },
              { icon: Users, value: '4 Startups', label: 'Founded' },
              { icon: Package, value: '25+ Products', label: 'Shipped' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-xl border transition-all ${
                    isDark
                      ? 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(152,16,250,0.06)]'
                      : 'bg-white/70 border-[rgba(120,60,200,0.12)]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    isDark
                      ? 'bg-gradient-to-br from-[rgba(173,70,255,0.2)] to-[rgba(0,184,219,0.2)]'
                      : 'bg-gradient-to-br from-[rgba(152,16,250,0.12)] to-[rgba(0,184,219,0.12)]'
                  }`}>
                    <Icon size={20} className={isDark ? 'text-[#C27AFF]' : 'text-[#9810fa]'} />
                  </div>
                  <div className="text-left">
                    <div className={`text-[15px] font-normal tracking-[-0.375px] leading-[1.4] ${isDark ? 'text-white' : 'text-[#1a0a3e]'}`}>{stat.value}</div>
                    <div className={`text-[12px] font-normal leading-[1.4] ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.45)]'}`}>{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Headline */}
          <h1 className="text-[26px] md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-[-1px] md:tracking-[-1.5px] mb-4">
            <span className={`block ${isDark ? 'text-white' : 'text-[#0d0525]'}`}>
              AI-driven product founder.
            </span>
            <span className={`block ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(13,5,37,0.55)]'}`}>
              Customer-focused innovator.
            </span>
            <span className={`block bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#9810fa] via-[#C27AFF] to-[#00d3f3]' : 'bg-gradient-to-r from-[#6a00c7] via-[#8b0ce8] to-[#007a96]'}`}>
              Award-winning strategic designer.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-[15px] md:text-[20px] max-w-2xl mx-auto leading-[24px] md:leading-[32.5px] font-normal ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(13,5,37,0.6)]'}`}>
            <span className={isDark ? 'text-[rgba(255,255,255,0.7)]' : 'text-[#0d0525] font-medium'}>10 years. 4 startups. 25+ products.</span>{' '}
            I enjoy building remarkable digital products and services to bring business closer to human reach.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2.5 md:gap-3 justify-center items-center pt-4">
            <Link
              to="/portfolio"
              className="group relative px-4 py-2.5 md:px-6 md:py-3 rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9810fa] to-[#00b8db]" />
              <div className="relative z-10 flex items-center gap-1.5 md:gap-2 text-white text-[13px] md:text-[15px] font-normal">
                Explore My Work
                <ArrowRight size={14} className="md:hidden group-hover:translate-x-1 transition-transform" />
                <ArrowRight size={16} className="hidden md:block group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link
              to="/resume"
              className={`group px-4 py-2.5 md:px-6 md:py-3 rounded-full backdrop-blur-xl transition-all ${
                isDark
                  ? 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.08)]'
                  : 'bg-[rgba(13,5,37,0.08)] border border-[rgba(13,5,37,0.22)] hover:bg-[rgba(13,5,37,0.14)]'
              }`}
            >
              <div className={`flex items-center gap-1.5 md:gap-2 text-[13px] md:text-[15px] font-normal ${isDark ? 'text-[rgba(255,255,255,0.7)]' : 'text-[#0d0525]'}`}>
                View Resume
                <ArrowRight size={14} className="md:hidden group-hover:translate-x-1 transition-transform" />
                <ArrowRight size={16} className="hidden md:block group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Hero Image/Showcase — Glass solid rectangle ground */}
        <div className="relative max-w-5xl mx-auto mt-16 md:mt-20">
          {/* Wave rings around demo card */}
          <div className="absolute -inset-10 overflow-visible pointer-events-none">
            <DemoWaveRings isDark={isDark} />
          </div>
          {/* Glassmorphism ground/base */}
          <div className={`relative backdrop-blur-2xl rounded-3xl p-1.5 overflow-hidden ${
            isDark
              ? 'bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
              : 'bg-white/50 border border-[rgba(200,200,220,0.5)] shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          }`}>
            {/* Subtle inner gradient shimmer */}
            

            {/* Inner content area */}
            <div className={`relative rounded-[18px] overflow-hidden ${
              isDark
                ? 'bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.06)]'
                : 'bg-white/80 border border-[rgba(200,200,220,0.3)]'
            }`}>
              <div className={`relative aspect-[16/10] p-6 md:p-8 ${
                isDark
                  ? 'bg-gradient-to-br from-gray-900/80 to-black/80'
                  : 'bg-gradient-to-br from-[#f5f3ff] to-white'
              }`}>
                <div className={`relative w-full h-full rounded-xl overflow-hidden ${
                  isDark
                    ? 'shadow-2xl border border-[rgba(255,255,255,0.1)]'
                    : 'shadow-lg border border-[rgba(200,200,220,0.3)]'
                }`}>
                  <img
                    src={imgInnerScreen}
                    alt="Portfolio showcase - Data visualization dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                </div>

                {/* Live Demo badge */}
                <div className={`absolute top-4 right-4 md:top-6 md:right-6 backdrop-blur-xl rounded-lg px-3 py-2 ${
                  isDark
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-white/80 border border-[rgba(200,200,220,0.4)] shadow-sm'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className={`text-xs ${isDark ? 'text-white/80' : 'text-[#1a0a3e]/80'}`}>Live Demo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass bottom bar — ground effect */}
            
          </div>
        </div>
      </div>
    </section>
  );
}